import { PersonaCard } from "@/components/PersonaCard";
import { personas } from "@/components/personas";
import styles from "./page.module.css";

const postContent = {
  headline: "Meet the Bio-Fuel Scooter",
  message:
    "We built the Bio-Fuel Scooter for city rebels who want clean speed without compromise. Refuel in 90 seconds at any partner kiosk, glide for 40 miles, and track every emission saved in real time.",
  callToAction: "Beta spots open now for founding riders."
};

const pulseLog = [
  {
    id: "calibration",
    label: "Calibration Sync",
    detail: "Baseline values aligned to Mobility Persona Grid v4.1."
  },
  {
    id: "upload",
    label: "Content Upload",
    detail: "Promo Post `BioFuel_SprintLaunch_v2` distributed to synthetic cohort."
  },
  {
    id: "response",
    label: "Response Spike",
    detail: "87 contextual reactions generated in 4.2s."
  },
  {
    id: "risk",
    label: "Risk Monitor",
    detail: "Two sentiment volatility alerts flagged by Kai."
  }
];

export default function Page() {
  return (
    <main className={styles.launchpad}>
      <div className="noise-overlay" aria-hidden />
      <section className={styles.briefing}>
        <div className={styles.titleBlock}>
          <span className={styles.tag}>The Launchpad</span>
          <h1>Predict the Social Buzz</h1>
          <p>
            Drop your message into our synthetic control room and watch an AI-powered focus group
            react in real time. Align your content, neutralize risk, and launch with confidence.
          </p>
        </div>
        <div className={styles.post}>
          <header>
            <span>Scenario Upload</span>
            <strong>{postContent.headline}</strong>
          </header>
          <p>{postContent.message}</p>
          <div className={styles.cta}>{postContent.callToAction}</div>
          <footer>
            <span>Simulated Audience Size</span>
            <strong>1,024 Persona Nodes</strong>
          </footer>
        </div>
        <aside className={styles.log}>
          <h3>Mission Pulse</h3>
          <ul>
            {pulseLog.map((item) => (
              <li key={item.id}>
                <span>{item.label}</span>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className={styles.personaGrid}>
        {personas.map((persona, index) => (
          <PersonaCard key={persona.id} persona={persona} active={index === 0} />
        ))}
      </section>

      <section className={styles.timeline}>
        <div>
          <h3>Signal Trajectory</h3>
          <div className={styles.chart}>
            <div className={styles.chartGrid}>
              {Array.from({ length: 6 }).map((_, idx) => (
                <span key={idx} />
              ))}
            </div>
            <svg viewBox="0 0 320 140" role="img" aria-label="Signal trajectories for personas">
              <polyline
                className={styles.lineOpenness}
                points="0,80 60,60 120,55 180,40 240,38 300,35"
              />
              <polyline
                className={styles.lineConscientiousness}
                points="0,90 60,92 120,88 180,78 240,76 300,72"
              />
              <polyline
                className={styles.lineExtraversion}
                points="0,70 60,65 120,52 180,46 240,40 300,32"
              />
              <polyline
                className={styles.lineNeuroticism}
                points="0,95 60,98 120,102 180,104 240,108 300,110"
              />
            </svg>
          </div>
        </div>
        <div className={styles.strategyPanel}>
          <h3>Optimization Blueprint</h3>
          <ul>
            <li>
              <span>Storylayer Update</span>
              <p>Anchor Nova&apos;s vision hook with a cinematic launch teaser.</p>
            </li>
            <li>
              <span>Proof Stack</span>
              <p>Feed Miles a 3-step compliance rundown with lifecycle metrics.</p>
            </li>
            <li>
              <span>Momentum Burst</span>
              <p>Launch Lena&apos;s TikTok challenge prompt with real rider clips.</p>
            </li>
            <li>
              <span>Safety Shield</span>
              <p>Equip Kai with a status ticker that auto-publishes incident responses.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
