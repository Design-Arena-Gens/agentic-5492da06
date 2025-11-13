export type Persona = {
  id: string;
  name: string;
  trait: "Openness" | "Conscientiousness" | "Extraversion" | "Neuroticism";
  role: string;
  color: string;
  avatarEmoji: string;
  strengths: string[];
  concerns: string[];
  initialReaction: string;
  verdict: "Positive" | "Neutral" | "Critical";
  signal: number;
};

export const personas: Persona[] = [
  {
    id: "openness",
    name: "Nova Vega",
    trait: "Openness",
    role: "Futurist Designer",
    color: "#8A5CF6",
    avatarEmoji: "🧠",
    strengths: [
      "Craves revolutionary ideas",
      "Highlights cultural resonance",
      "Translates tech into stories"
    ],
    concerns: [
      "Wants deeper narrative on sustainability impact",
      "Questions long-term vision alignment"
    ],
    initialReaction:
      "This concept feels fresh, but I need a visionary hook to latch onto.",
    verdict: "Positive",
    signal: 82
  },
  {
    id: "conscientiousness",
    name: "Miles Park",
    trait: "Conscientiousness",
    role: "Operations Strategist",
    color: "#3FB6A8",
    avatarEmoji: "📊",
    strengths: [
      "Spots process risk instantly",
      "Quantifies messaging claims",
      "Protects brand compliance"
    ],
    concerns: [
      "Asks for lifecycle data on bio-fuel sourcing",
      "Wants assurance on regulatory readiness"
    ],
    initialReaction:
      "Bold promise. Show me the roadmap that makes this operationally real.",
    verdict: "Neutral",
    signal: 64
  },
  {
    id: "extraversion",
    name: "Lena Sparks",
    trait: "Extraversion",
    role: "Gen Z Community Host",
    color: "#FF7B6D",
    avatarEmoji: "🎉",
    strengths: [
      "Reads crowd energy at a glance",
      "Amplifies what feels shareable",
      "Translates feedback into hype loops"
    ],
    concerns: [
      "Needs more playful call-to-action",
      "Requests social proof to build momentum"
    ],
    initialReaction:
      "The vibe is almost there! Give me something outrageous to scream about.",
    verdict: "Positive",
    signal: 90
  },
  {
    id: "neuroticism",
    name: "Kai Rowan",
    trait: "Neuroticism",
    role: "Risk Analyst",
    color: "#FFB547",
    avatarEmoji: "⚠️",
    strengths: [
      "Stress-tests brand promises",
      "Flag potential backlash triggers",
      "Keeps crisis plan on standby"
    ],
    concerns: [
      "Worries about safety perception gaps",
      "Needs mitigation messaging ready to deploy"
    ],
    initialReaction:
      "Imagine the headline if this fails. We need calm, reassuring language now.",
    verdict: "Critical",
    signal: 48
  }
];
