import { useRef, useEffect, memo, useState } from "react";
import type { CardProps } from "@types";
import styles from "./Card.module.css";
import { raritySettings } from "@data";

type Props = {
  data: CardProps;
  useMouseEffect?: boolean;
  enableVFX?: boolean;
  enableDarkerEffect?: boolean;
  darkIntensity?: number;
};

export const Card = memo(
  ({
    data,
    useMouseEffect = true,
    enableVFX = true,
    enableDarkerEffect = false,
    darkIntensity = 0,
  }: Props) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const rectRef = useRef<DOMRect | null>(null);

    const [isActive, setIsActive] = useState(false);

    const mousePosition = useRef({
      x: 0,
      y: 0,
    });

    const frame = useRef<number | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!useMouseEffect) return;

      const el = cardRef.current;
      const rect = rectRef.current;

      if (!el || !rect) return;

      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      if (frame.current !== null) {
        return;
      }

      frame.current = requestAnimationFrame(() => {
        frame.current = null;

        const { x, y } = mousePosition.current;

        const rotateX = (y / rect.height - 0.5) * -32;
        const rotateY = (x / rect.width - 0.5) * 32;

        el.style.setProperty("--rotate-x", `${rotateX}deg`);
        el.style.setProperty("--rotate-y", `${rotateY}deg`);
        el.style.setProperty("--scale", `1.1`);

        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
        el.style.setProperty(
          "--foil-rotate",
          `${rotateY * 4 - rotateX * 2}deg`,
        );
      });
    };

    const handleMouseEnter = () => {
      const el = cardRef.current;

      if (!el) return;

      setIsActive(true);

      rectRef.current = el.getBoundingClientRect();
    };

    const handleMouseLeave = () => {
      const el = cardRef.current;

      if (!el) return;

      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
        frame.current = null;
      }

      setIsActive(false);

      el.style.setProperty("--rotate-x", "0deg");
      el.style.setProperty("--rotate-y", "0deg");
      el.style.setProperty("--scale", "1");
      el.style.setProperty("--mx", `0px`);
      el.style.setProperty("--my", `0px`);
      el.style.setProperty("--foil-rotate", `0deg`);
    };

    useEffect(() => {
      return () => {
        if (frame.current !== null) {
          cancelAnimationFrame(frame.current);
        }
      };
    }, []);

    const mask = data.foilMask;

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
        className={`${styles.card} ${isActive ? styles.active : ""} ${enableDarkerEffect ? `${styles.darker}` : ""}`}
        data-rarity={data.rarity}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={
          {
            "--dark-intensity": darkIntensity,
            "--aura-color": raritySettings[data.rarity].color,
            "--dust-opacity": data.dustOpacity != null ? data.dustOpacity : 1,
          } as React.CSSProperties
        }
      >
        {enableVFX && (
          <>
            <div className={styles.dust}></div>
            <div className={styles.lightNoise} />

            {data.rarity !== "common" && (
              <>
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
                {data.rarity !== "rare" && (
                  <div className={styles.foil} style={{ ...maskStyle }} />
                )}
                {/* {data.rarity !== "legendary" && ( */}
                  <div
                    className={styles.metallicFoil}
                    style={{ ...maskStyle }}
                  />
                {/* )} */}
              </>
            )}
          </>
        )}
        <div className={styles.noise} />
        {/* {data.rarity === "common" && <div className={styles.specular} />} */}
        <div className={styles.specular} />

        {/* <div className={styles.glow} /> */}

        <div className={styles.imageWrapper}>
          <img
            src={data.image}
            className={styles.image}
            height={380}
            width={260}
            loading="lazy"
            decoding="async"
            alt=""
          />
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
        ></div>
      </div>
    );
  },
);
