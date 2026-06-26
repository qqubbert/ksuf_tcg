import type { CardProps } from "@entities/card";

export const characterCards: CardProps[] = [
  {
    id: "jotaro",
    name: "Jotaro Kujo",
    description:
      "Stoic Stand user with overwhelming physical strength and precision.",
    image: "/cards/jotaro.jpg",
    hp: 9,
    attack: 8,
    abilities: [
      { id: "ora", icon: "👊", title: "ORA ORA Rush" },
      { id: "stop", icon: "⏱️", title: "Time Stop" },
    ],
    rarity: "legendary",
    isOwned: true,
    foilMask: "/cards/jotaro_m.png",
  },

  {
    id: "frieren",
    name: "Frieren",
    description: "Ancient mage who studies the nature of magic and time.",
    image: "/cards/frieren.jpg",
    hp: 6,
    attack: 7,
    abilities: [
      { id: "magic", icon: "✨", title: "Ancient Spellcasting" },
      { id: "analysis", icon: "📚", title: "Mana Analysis" },
    ],
    rarity: "epic",
    isOwned: true,
  },

  {
    id: "denji",
    name: "Denji",
    description: "Chainsaw Devil hybrid with chaotic combat style.",
    image: "/cards/denji.webp",
    hp: 8,
    attack: 9,
    abilities: [
      { id: "chainsaw", icon: "🪚", title: "Chainsaw Slash" },
      { id: "devil", icon: "😈", title: "Devil Trigger" },
    ],
    rarity: "legendary",
    isOwned: true,
    foilMask: "/cards/denji_m.png",
  },

  {
    id: "mikasa",
    name: "Mikasa Ackerman",
    description: "Elite soldier with extreme agility and combat instincts.",
    image: "/cards/mikasa.jpg",
    hp: 7,
    attack: 8,
    abilities: [
      { id: "blade", icon: "⚔️", title: "Blade Dance" },
      { id: "titan", icon: "🧠", title: "Ackerman Instinct" },
    ],
    rarity: "epic",
    isOwned: true,
  },

  {
    id: "makima",
    name: "Makima",
    description:
      "Mysterious control devil manipulating humans and devils alike.",
    image: "/cards/makima.jpg",
    hp: 10,
    attack: 7,
    abilities: [
      { id: "control", icon: "🧷", title: "Control Manipulation" },
      { id: "fear", icon: "😶", title: "Fear Contract" },
    ],
    rarity: "legendary",
    isOwned: true,
    foilMask: "/cards/makima_m.png",
  },

  {
    id: "naruto",
    name: "Naruto Uzumaki",
    description: "Ninja with boundless energy and Nine-Tails power.",
    image: "/cards/naruto.jpg",
    hp: 8,
    attack: 8,
    abilities: [
      { id: "rasengan", icon: "🌀", title: "Rasengan" },
      { id: "kurama", icon: "🦊", title: "Nine-Tails Mode" },
    ],
    rarity: "legendary",
    isOwned: true,
  },

  {
    id: "tyler",
    name: "Tyler Durden",
    description: "Anarchic symbol of rebellion and psychological collapse.",
    image: "/cards/tyler.jpg",
    hp: 6,
    attack: 9,
    abilities: [
      { id: "chaos", icon: "💥", title: "Chaos Theory" },
      { id: "fightclub", icon: "🥊", title: "Fight Club Doctrine" },
    ],
    rarity: "rare",
    isOwned: true,
  },

  {
    id: "walter",
    name: "Walter White",
    description: "Chemistry teacher turned strategic drug empire architect.",
    image: "/cards/walter.jpg",
    hp: 7,
    attack: 8,
    abilities: [
      { id: "chem", icon: "⚗️", title: "Chemistry Mastery" },
      { id: "heisenberg", icon: "🎩", title: "Heisenberg Mode" },
    ],
    rarity: "epic",
    isOwned: true,
  },

  {
    id: "saul",
    name: "Saul Goodman",
    description: "Manipulative lawyer exploiting loopholes in law.",
    image: "/cards/saul.webp",
    hp: 5,
    attack: 6,
    abilities: [
      { id: "law", icon: "⚖️", title: "Legal Manipulation" },
      { id: "deal", icon: "📞", title: "Backroom Deals" },
    ],
    rarity: "rare",
    isOwned: true,
    foilMask: "/cards/saul_m.png",
  },

  {
    id: "mike",
    name: "Mike Ehrmantraut",
    description: "Professional fixer with military-level discipline.",
    image: "/cards/mike.jpeg",
    hp: 9,
    attack: 7,
    abilities: [
      { id: "stealth", icon: "🕶️", title: "Silent Execution" },
      { id: "tactics", icon: "🎯", title: "Tactical Planning" },
    ],
    rarity: "epic",
    isOwned: true,
  },

  {
    id: "berlin",
    name: "Berlin",
    description: "Charismatic and ruthless strategist from a heist crew.",
    image: "/cards/berlin.jpg",
    hp: 7,
    attack: 8,
    abilities: [
      { id: "lead", icon: "🎭", title: "Charismatic Leadership" },
      { id: "heist", icon: "💰", title: "Heist Execution" },
    ],
    rarity: "epic",
    isOwned: true,
  },
  {
    id: "power",
    name: "Power",
    description:
      "Blood Devil with chaotic behavior and unpredictable combat style.",
    image: "/cards/power.png",
    hp: 7,
    attack: 9,
    abilities: [
      { id: "blood", icon: "🩸", title: "Blood Manipulation" },
      { id: "berserk", icon: "😈", title: "Berserk Rampage" },
    ],
    rarity: "epic",
    isOwned: true,
  },
  {
    id: "midoriya",
    name: "Izuku Midoriya",
    description: "Hero-in-training with analytical mind and inherited power.",
    image: "/cards/midoriya.jpg",
    hp: 7,
    attack: 8,
    abilities: [
      { id: "oneforall", icon: "💥", title: "One For All" },
      { id: "analysis", icon: "📊", title: "Combat Analysis" },
    ],
    rarity: "legendary",
    isOwned: true,
  },
  {
    id: "asuka",
    name: "Asuka Langley",
    description:
      "Elite EVA pilot with high confidence and aggressive combat style.",
    image: "/cards/asuka.jpg",
    hp: 7,
    attack: 8,
    abilities: [
      { id: "eva", icon: "🤖", title: "EVA Combat Sync" },
      { id: "rage", icon: "🔥", title: "Prideful Assault" },
    ],
    rarity: "rare",
    isOwned: true,
  },
  {
    id: "rei",
    name: "Rei Ayanami",
    description:
      "Mysterious EVA pilot with calm emotional profile and high synchronization.",
    image: "/cards/rei.png",
    hp: 6,
    attack: 7,
    abilities: [
      { id: "sync", icon: "🧬", title: "High Sync Ratio" },
      { id: "shield", icon: "🛡️", title: "A.T. Field Defense" },
    ],
    rarity: "rare",
    isOwned: true,
  },
  {
    id: "eren",
    name: "Eren Yeager",
    description: "Titan shifter driven by destruction and freedom.",
    image: "/cards/eren.jpg",
    hp: 9,
    attack: 10,
    abilities: [
      { id: "titan", icon: "🧱", title: "Titan Transformation" },
      { id: "rage", icon: "⚡", title: "Rumbling Fury" },
    ],
    rarity: "legendary",
    isOwned: true,
    // foilMask: "/cards/eren_m.png",
  },
  {
    id: "pomni",
    name: "Pomni",
    description:
      "Lost digital performer trapped inside a surreal virtual circus.",
    image: "/cards/pomni.webp",
    hp: 5,
    attack: 6,
    abilities: [
      { id: "glitch", icon: "🧩", title: "Reality Glitch" },
      { id: "panic", icon: "😵", title: "Desperation Burst" },
    ],
    rarity: "rare",
    isOwned: true,
  },

  {
    id: "caine",
    name: "caine",
    description:
      "Enigmatic ringmaster controlling the rules of a digital circus.",
    image: "/cards/caine.webp",
    hp: 8,
    attack: 7,
    abilities: [
      { id: "control", icon: "🎪", title: "Circus Control" },
      { id: "illusion", icon: "🪄", title: "Reality Manipulation" },
    ],
    rarity: "legendary",
    isOwned: true,
    // foilMask: "/cards/caine_m.png",
  },
  {
    id: "senku",
    name: "Senku Ishigami",
    description:
      "Scientific genius rebuilding civilization through pure logic and chemistry.",
    image: "/cards/senku.jpg",
    hp: 6,
    attack: 7,
    abilities: [
      { id: "science", icon: "🧪", title: "Scientific Breakthrough" },
      { id: "analysis", icon: "📐", title: "Hyper Analysis" },
    ],
    rarity: "epic",
    isOwned: true,
  },

  {
    id: "dio",
    name: "DIO",
    description:
      "Vampiric Stand user with overwhelming ambition and time manipulation.",
    image: "/cards/dio.jpg",
    hp: 9,
    attack: 10,
    abilities: [
      { id: "stand", icon: "⏱️", title: "The World" },
      { id: "vampire", icon: "🩸", title: "Vampiric Regeneration" },
    ],
    rarity: "legendary",
    isOwned: true,
    // foilMask: "/cards/dio_m.png",
  },

  {
    id: "rebecca",
    name: "Rebecca",
    description:
      "Cyberpunk mercenary optimized for mobility, precision, and high-risk combat.",
    image: "/cards/rebecca.png",
    hp: 7,
    attack: 9,
    abilities: [
      { id: "cyber", icon: "🔫", title: "Cyber Enhancements" },
      { id: "rush", icon: "⚡", title: "High-Speed Assault" },
    ],
    rarity: "epic",
    isOwned: true,
  },
  {
    id: "l",
    name: "L",
    description:
      "Master detective relying on deduction and psychological manipulation.",
    image: "/cards/l.jpg",
    hp: 5,
    attack: 6,
    abilities: [
      { id: "deduction", icon: "🧠", title: "Perfect Deduction" },
      { id: "trap", icon: "🔍", title: "Psychological Trap" },
    ],
    rarity: "rare",
    isOwned: true,
  },

  {
    id: "tanjiro",
    name: "Tanjiro Kamado",
    description:
      "Demon Slayer with heightened senses and adaptive combat style.",
    image: "/cards/tanjiro.jpg",
    hp: 7,
    attack: 8,
    abilities: [
      { id: "water", icon: "🌊", title: "Water Breathing" },
      { id: "sense", icon: "👃", title: "Enhanced Senses" },
    ],
    rarity: "epic",
    isOwned: true,
  },

  {
    id: "guts",
    name: "Guts",
    description:
      "Berserker warrior surviving impossible odds through sheer willpower.",
    image: "/cards/guts.jpg",
    hp: 9,
    attack: 10,
    abilities: [
      { id: "berserk", icon: "🩸", title: "Berserker Armor" },
      { id: "dragonslayer", icon: "⚔️", title: "Dragon Slayer Strike" },
    ],
    rarity: "legendary",
    isOwned: true,
    // foilMask: "/cards/guts_m.png",
  },

  {
    id: "homelander",
    name: "Homelander",
    description:
      "Unstable superhuman with overwhelming power and psychological dominance.",
    image: "/cards/homelander.jpg",
    hp: 10,
    attack: 10,
    abilities: [
      { id: "laser", icon: "👁️", title: "Heat Vision" },
      { id: "fear", icon: "😨", title: "Psychological Domination" },
    ],
    rarity: "legendary",
    isOwned: true,
    // foilMask: "/cards/homelander_m.png",
  },

  {
    id: "demogorgon",
    name: "Demogorgon",
    description:
      "Interdimensional predator hunting by instinct and overwhelming strength.",
    image: "/cards/demogorgon.webp",
    hp: 8,
    attack: 9,
    abilities: [
      { id: "portal", icon: "🌀", title: "Dimensional Leap" },
      { id: "hunt", icon: "🦷", title: "Predatory Assault" },
    ],
    rarity: "epic",
    isOwned: true,
  },

  {
    id: "kratos",
    name: "Kratos",
    description:
      "God of War driven by vengeance, wielding divine power and brutal force.",
    image: "/cards/kratos.avif",
    hp: 10,
    attack: 10,
    abilities: [
      { id: "rage", icon: "🔥", title: "Spartan Rage" },
      { id: "blades", icon: "⚔️", title: "Blades of Chaos" },
    ],
    rarity: "legendary",
    isOwned: true,
    // foilMask: "/cards/kratos_m.png",
  },

  {
    id: "spiderman",
    name: "Spider-Man",
    description:
      "Agile hero with enhanced reflexes, intelligence, and spider-sense.",
    image: "/cards/spiderman.jpg",
    hp: 7,
    attack: 8,
    abilities: [
      { id: "web", icon: "🕸️", title: "Web Swing & Trap" },
      { id: "sense", icon: "⚡", title: "Spider-Sense" },
    ],
    rarity: "epic",
    isOwned: true,
  },

  {
    id: "deadpool",
    name: "Deadpool",
    description:
      "Unpredictable mercenary with regeneration and chaotic combat style.",
    image: "/cards/deadpool.jpg",
    hp: 8,
    attack: 9,
    abilities: [
      { id: "regen", icon: "💉", title: "Regeneration" },
      { id: "chaos", icon: "🎯", title: "Fourth Wall Break" },
    ],
    rarity: "legendary",
    isOwned: true,
  },

  {
    id: "batman",
    name: "Batman",
    description:
      "Peak human strategist using preparation, gadgets, and psychological warfare.",
    image: "/cards/batman.jpg",
    hp: 8,
    attack: 8,
    abilities: [
      { id: "prep", icon: "🧠", title: "Preparation Mastery" },
      { id: "gadget", icon: "🦇", title: "Gadget Arsenal" },
    ],
    rarity: "legendary",
    isOwned: true,
  },
  {
    id: "jerrySmith",
    name: "Jerry Smith",
    description:
      "Insecure and average individual often caught in chaotic situations.",
    image: "/cards/jerrySmith.webp",
    hp: 4,
    attack: 3,
    abilities: [
      { id: "panic", icon: "😰", title: "Panic Response" },
      { id: "luck", icon: "🍀", title: "Random Survival" },
    ],
    rarity: "common",
    isOwned: true,
  },
  {
    id: "stormtrooper",
    name: "Stormtrooper",
    description: "Imperial soldier with poor accuracy but basic training.",
    image: "/cards/stormtrooper.webp",
    hp: 5,
    attack: 4,
    abilities: [
      { id: "blaster", icon: "🔫", title: "Blaster Shot" },
      { id: "miss", icon: "💨", title: "Accidental Miss" },
    ],
    rarity: "common",
    isOwned: true,
  },
  {
    id: "kawaiiPotato",
    name: "Kawaii Potato",
    description: "Amazing incredible powerful insomniac unbelievable Mathew Potato from KSUF",
    image: "/cards/kawaii_potato.jpg",
    hp: 10,
    attack: 8,
    abilities: [
      { id: "playGD", icon: "🔥", title: "Play Geomery Dash" },
    ],
    rarity: "legendary",
    isOwned: true,
  },
  {
    id: "glist",
    name: "Glist",
    description: "Amazing incredible powerful insomniac unbelievable Danya Glist from KSUF",
    image: "/cards/glist.jpg",
    hp: 8,
    attack: 10,
    abilities: [
      { id: "scythe", icon: "⚔️", title: "Scythe attack" },
    ],
    rarity: "legendary",
    isOwned: true,
  },
  {
    id: "ovsyankuh",
    name: "Ovsyankuh",
    description: "Amazing incredible powerful insomniac unbelievable Vasya Ovsyankuh from KSUF",
    image: "/cards/ovsyankuh.jpg",
    hp: 8,
    attack: 9,
    abilities: [
      { id: "drawPorn", icon: "🔞", title: "Draw p*rn" },
    ],
    rarity: "legendary",
    isOwned: true,
  },
  {
    id: "mipoh",
    name: "Mipoh",
    description: "Who add him?",
    image: "/cards/mipoh.jpg",
    hp: 2,
    attack: 1,
    abilities: [
      { id: "importunity", icon: "😰", title: "Annoy anyone" },
    ],
    rarity: "common",
    isOwned: true,
  },
];
