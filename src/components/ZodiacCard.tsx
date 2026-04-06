interface ZodiacInfo {
  name: string;
  symbol: string;
  element: string;
  dates: string;
  traits: string;
  strengths: string;
  weaknesses: string;
}

interface Props {
  zodiac: ZodiacInfo;
  onClick: () => void;
}

const elementColors: Record<string, string> = {
  Fire: "from-red-500/20 to-orange-500/20 border-red-500/30",
  Earth: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  Air: "from-sky-500/20 to-cyan-500/20 border-sky-500/30",
  Water: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
};

const ZodiacCard = ({ zodiac, onClick }: Props) => (
  <button
    onClick={onClick}
    className={`glass-card-hover p-6 text-left w-full bg-gradient-to-br ${elementColors[zodiac.element] || ""}`}
  >
    <div className="text-5xl mb-3">{zodiac.symbol}</div>
    <h3 className="font-display text-lg text-foreground mb-1">{zodiac.name}</h3>
    <p className="text-xs text-muted-foreground mb-2">{zodiac.dates}</p>
    <p className="text-sm text-muted-foreground">{zodiac.traits}</p>
    <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-muted/50 text-accent">
      {zodiac.element}
    </span>
  </button>
);

export default ZodiacCard;
