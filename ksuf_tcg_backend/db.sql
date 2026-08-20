-- UUID генерация
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =========================
-- USERS
-- =========================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(32) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- =========================
-- USER BALANCES
-- =========================
CREATE TABLE user_balances (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    coins INT NOT NULL DEFAULT 0,
    gems INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- =========================
-- RARITIES
-- =========================
CREATE TABLE card_rarities (
    id SERIAL PRIMARY KEY,
    code VARCHAR(32) UNIQUE NOT NULL,
    name VARCHAR(32) NOT NULL,
    drop_chance NUMERIC(5,2) NOT NULL CHECK (drop_chance >= 0 AND drop_chance <= 100),
    color VARCHAR(16)
);

-- =========================
-- CARDS (шаблон карты)
-- =========================
CREATE TABLE cards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(64) UNIQUE NOT NULL,
    name VARCHAR(128) NOT NULL,
    description TEXT,
    image TEXT,

    hp INT NOT NULL CHECK (hp >= 0),
    attack INT NOT NULL CHECK (attack >= 0),

    rarity_id INT NOT NULL REFERENCES card_rarities(id),

    foil_mask TEXT,
    texture TEXT,
    dust_opacity INT DEFAULT 0 CHECK (dust_opacity >= 0 AND dust_opacity <= 100)
);

-- =========================
-- ABILITIES
-- =========================
CREATE TABLE abilities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(64) UNIQUE NOT NULL,
    title VARCHAR(128) NOT NULL,
    icon TEXT,
    description TEXT
);

-- =========================
-- CARD_ABILITIES (M:N)
-- =========================
CREATE TABLE card_abilities (
    card_id UUID REFERENCES cards(id) ON DELETE CASCADE,
    ability_id UUID REFERENCES abilities(id) ON DELETE CASCADE,
    position INT DEFAULT 0,

    PRIMARY KEY (card_id, ability_id)
);

CREATE TABLE user_cards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES cards(id),

    obtained_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_user_cards_user ON user_cards(user_id);
CREATE INDEX idx_user_cards_card ON user_cards(card_id);

CREATE TABLE decks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    name VARCHAR(64) NOT NULL,
    is_active BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_decks_user ON decks(user_id);

CREATE TABLE deck_cards (
    deck_id UUID REFERENCES decks(id) ON DELETE CASCADE,
    user_card_id UUID REFERENCES user_cards(id) ON DELETE CASCADE,

    position INT NOT NULL,

    PRIMARY KEY (deck_id, user_card_id)
);

CREATE INDEX idx_deck_cards_deck ON deck_cards(deck_id);

CREATE TABLE store_cards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    card_id UUID NOT NULL REFERENCES cards(id),

    price_coins INT NOT NULL CHECK (price_coins >= 0),
    stock INT DEFAULT 0 CHECK (stock >= 0),

    is_active BOOLEAN DEFAULT TRUE
);

CREATE INDEX idx_store_cards_card ON store_cards(card_id);

CREATE TYPE marketplace_status AS ENUM (
    'ACTIVE',
    'SOLD',
    'CANCELLED'
);

CREATE TABLE marketplace (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    seller_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    buyer_id UUID REFERENCES users(id),

    user_card_id UUID NOT NULL REFERENCES user_cards(id),

    price_coins INT NOT NULL CHECK (price_coins > 0),

    status marketplace_status DEFAULT 'ACTIVE',

    created_at TIMESTAMP DEFAULT NOW(),
    closed_at TIMESTAMP
);

CREATE INDEX idx_marketplace_seller ON marketplace(seller_id);
CREATE INDEX idx_marketplace_status ON marketplace(status);

CREATE TYPE trade_status AS ENUM (
    'PENDING',
    'ACCEPTED',
    'DECLINED',
    'CANCELLED'
);

CREATE TABLE trades (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    sender_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    receiver_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    status trade_status DEFAULT 'PENDING',

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE INDEX idx_trades_sender ON trades(sender_id);
CREATE INDEX idx_trades_receiver ON trades(receiver_id);

CREATE TABLE trade_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    trade_id UUID NOT NULL REFERENCES trades(id) ON DELETE CASCADE,

    user_card_id UUID NOT NULL REFERENCES user_cards(id),

    offered_by UUID NOT NULL REFERENCES users(id)
);

CREATE INDEX idx_trade_items_trade ON trade_items(trade_id);

CREATE TYPE session_status AS ENUM (
    'WAITING',
    'ACTIVE',
    'FINISHED'
);

CREATE TABLE game_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    status session_status DEFAULT 'WAITING',

    winner_id UUID REFERENCES users(id),

    created_at TIMESTAMP DEFAULT NOW(),
    started_at TIMESTAMP,
    ended_at TIMESTAMP
);

CREATE TABLE session_players (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    session_id UUID NOT NULL REFERENCES game_sessions(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id),

    deck_id UUID NOT NULL REFERENCES decks(id),

    hp INT NOT NULL DEFAULT 20,
    mana INT NOT NULL DEFAULT 0,

    turn_order INT NOT NULL,
    is_ready BOOLEAN DEFAULT FALSE,

    UNIQUE(session_id, user_id)
);

CREATE INDEX idx_session_players_session ON session_players(session_id);

CREATE TABLE session_hand (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    session_player_id UUID NOT NULL REFERENCES session_players(id) ON DELETE CASCADE,
    user_card_id UUID NOT NULL REFERENCES user_cards(id),

    position INT DEFAULT 0
);

CREATE INDEX idx_session_hand_player ON session_hand(session_player_id);

CREATE TABLE session_board (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    session_player_id UUID NOT NULL REFERENCES session_players(id) ON DELETE CASCADE,
    user_card_id UUID NOT NULL REFERENCES user_cards(id),

    hp INT NOT NULL,
    attack INT NOT NULL,

    position INT DEFAULT 0,

    is_active BOOLEAN DEFAULT TRUE
);

CREATE INDEX idx_session_board_player ON session_board(session_player_id);

CREATE TABLE session_discard (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    session_player_id UUID NOT NULL REFERENCES session_players(id) ON DELETE CASCADE,
    user_card_id UUID NOT NULL REFERENCES user_cards(id)
);

CREATE INDEX idx_session_discard_player ON session_discard(session_player_id);

CREATE TYPE transaction_type AS ENUM (
    'BUY_CARD',
    'SELL_CARD',
    'TRADE',
    'MATCH_REWARD',
    'QUEST_REWARD',
    'ADMIN_ADJUSTMENT'
);

CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    type transaction_type NOT NULL,

    amount INT NOT NULL,

    currency VARCHAR(16) NOT NULL DEFAULT 'coins',

    related_id UUID,

    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_transactions_user ON transactions(user_id);

CREATE TABLE purchases (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    store_card_id UUID NOT NULL REFERENCES store_cards(id),

    price INT NOT NULL,
    currency VARCHAR(16) DEFAULT 'coins',

    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_purchases_user ON purchases(user_id);

CREATE VIEW v_user_cards_full AS
SELECT
    uc.id AS user_card_id,
    uc.user_id,
    c.id AS card_id,
    c.code,
    c.name,
    c.description,
    c.image,
    c.hp,
    c.attack,
    c.foil_mask,
    c.dust_opacity,
    uc.obtained_at,
    r.name AS rarity
FROM user_cards uc
JOIN cards c ON c.id = uc.card_id
JOIN card_rarities r ON r.id = c.rarity_id;

CREATE VIEW v_active_deck AS
SELECT
    d.id AS deck_id,
    d.user_id,
    dc.position,
    uc.id AS user_card_id,
    c.name,
    c.hp,
    c.attack
FROM decks d
JOIN deck_cards dc ON dc.deck_id = d.id
JOIN user_cards uc ON uc.id = dc.user_card_id
JOIN cards c ON c.id = uc.card_id
WHERE d.is_active = TRUE;

CREATE VIEW v_marketplace_active AS
SELECT
    m.id,
    m.price_coins,
    m.created_at,
    u.username AS seller,
    c.name AS card_name,
    c.image
FROM marketplace m
JOIN users u ON u.id = m.seller_id
JOIN user_cards uc ON uc.id = m.user_card_id
JOIN cards c ON c.id = uc.card_id
WHERE m.status = 'ACTIVE';

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_user_cards_user_card ON user_cards(user_id, card_id);
CREATE INDEX idx_decks_active ON decks(user_id, is_active);
CREATE INDEX idx_marketplace_price ON marketplace(price_coins);
CREATE INDEX idx_sessions_status ON game_sessions(status);