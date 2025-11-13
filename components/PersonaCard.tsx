import clsx from "clsx";
import styles from "./PersonaCard.module.css";
import type { Persona } from "./personas";

type PersonaCardProps = {
  persona: Persona;
  active?: boolean;
};

export function PersonaCard({ persona, active = false }: PersonaCardProps) {
  return (
    <article
      className={clsx(styles.card, active && styles.active)}
      style={{ borderColor: persona.color, boxShadow: `0 0 24px ${persona.color}30` }}
    >
      <header className={styles.header}>
        <div className={styles.avatar} style={{ backgroundColor: `${persona.color}25` }}>
          <span>{persona.avatarEmoji}</span>
        </div>
        <div className={styles.identity}>
          <h3>{persona.name}</h3>
          <span>{persona.role}</span>
        </div>
        <div className={styles.trait} style={{ color: persona.color }}>
          {persona.trait}
        </div>
      </header>
      <section className={styles.body}>
        <p className={styles.reaction}>{persona.initialReaction}</p>
        <div className={styles.feedback}>
          <div>
            <h4>Amplifies</h4>
            <ul>
              {persona.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Pushback</h4>
            <ul>
              {persona.concerns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <span className={styles.verdict} data-type={persona.verdict.toLowerCase()}>
          {persona.verdict} Signal
        </span>
        <div className={styles.signalBar} style={{ borderColor: persona.color }}>
          <div
            className={styles.signalFill}
            style={{ width: `${persona.signal}%`, background: persona.color }}
          />
          <span>{persona.signal}</span>
        </div>
      </footer>
    </article>
  );
}
