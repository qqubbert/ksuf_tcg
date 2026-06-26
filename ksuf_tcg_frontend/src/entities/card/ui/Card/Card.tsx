import { useRef, useState } from "react";
import type { CardProps } from "../../model/types";
import styles from "./Card.module.css";

type Props = {
  data: CardProps;
};

export const Card = ({ data }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const mask = data.foilMask;

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -18;
    const rotateY = (x / rect.width - 0.5) * 18;

    el.style.transform = `
    perspective(900px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.03)
  `;

    if (!isHovered) return;

    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;

    el.style.transform = `
    perspective(900px)
    rotateX(0deg)
    rotateY(0deg)
    scale(1)
  `;

    el.style.setProperty("--mx", `-50%`);
    el.style.setProperty("--my", `-50%`);
  };

  return (
    <div
      ref={cardRef}
      className={styles.card}
      data-rarity={data.rarity}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <svg className={styles.mask} width="0" height="0">
        <defs>
          <mask id={`card-mask-${data.id}`}>
            <rect width="100%" height="100%" fill="white" />
            <circle cx="50%" cy="20%" r="40%" fill="black" />
          </mask>
        </defs>
      </svg> */}

      <div className={styles.lightNoise} />
      <div
        className={styles.foil}
        style={
          mask
            ? ({
                WebkitMaskImage: `url(${mask})`,
                maskImage: `url(${mask})`,
                WebkitMaskSize: "cover",
                maskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              } as React.CSSProperties)
            : undefined
        }
      />
      <div className={styles.noise} />
      <div className={styles.specular} />

      <div className={styles.glow} />

      <div className={styles.imageWrapper}>
        <img src={data.image} className={styles.image} />
      </div>

      <div className={styles.header}>
        <div className={styles.name}>{data.name}</div>

        <div className={styles.stats}>
          {data.attack !== undefined && (
            <span className={styles.atk}>ATK {data.attack}</span>
          )}
          {data.hp !== undefined && (
            <span className={styles.hp}>HP {data.hp}</span>
          )}
        </div>
      </div>

      <div className={styles.bottomInfo}>
        <div className={styles.description}>{data.description}</div>

        <div className={styles.abilities}>
          {data.abilities?.map((a) => (
            <div key={a.id} className={styles.ability}>
              <span className={styles.icon}>{a.icon}</span>
              <span>{a.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className={styles.light}
        style={{
          background: `radial-gradient(
            circle at var(--mx) var(--my),
            rgba(255,255,255,calc(0.05 * var(--intensity))),
            transparent 50%
          )`,
          WebkitMaskImage: `url(${mask})`,
          maskImage: `url(${mask})`,
          WebkitMaskSize: "cover",
          maskSize: "cover",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    </div>
  );
};
