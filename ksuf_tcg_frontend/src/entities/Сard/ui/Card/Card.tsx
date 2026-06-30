import { useRef, useState } from "react";
import type { CardProps } from "../../../../shared/types/CardTypes/types";
import styles from "./Card.module.css";
import { rarityStyle } from "@shared/data";

type Props = {
  data: CardProps;
  useMouseEffect?: boolean;
};

export const Card = ({ data, useMouseEffect = true }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const mask = data.foilMask;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!useMouseEffect) return;

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

    const foilRotate = rotateY * 4 - rotateX * 2;

    el.style.setProperty("--foil-rotate", `${foilRotate}deg`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;

    setIsHovered(false);

    if (!useMouseEffect) return;

    el.style.transform = `
    perspective(900px)
    rotateX(0deg)
    rotateY(0deg)
    scale(1)
  `;

    // НЕ ставим -50% сразу
    // даём “затухание”
  };

  const maskStyle = mask
    ? {
        WebkitMaskImage: `url(${mask})`,
        maskImage: `url(${mask})`,
        WebkitMaskSize: "cover",
        maskSize: "cover",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }
    : undefined;

  return (
    <div
      ref={cardRef}
      className={styles.card}
      data-rarity={data.rarity}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        {
          "--aura-color": rarityStyle[data.rarity].color,
          "--dust-opacity": data.dustOpacity != null ? data.dustOpacity : 1,
        } as React.CSSProperties
      }
    >
      <div className={styles.dust}></div>
      <div className={styles.lightNoise} />

      {data.texture && (
        <>
          <div
            className={styles.texture}
            style={
              {
                backgroundImage: `url(${data.texture})`,
                ...maskStyle,
              } as React.CSSProperties
            }
          ></div>
          <div className={styles.textureLight} style={maskStyle} />
        </>
      )}
      <div className={styles.metallicFoil} style={{ ...maskStyle }} />
      <div className={styles.foil} style={{ ...maskStyle }} />
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
          ...maskStyle,
        }}
      />
    </div>
  );
};
