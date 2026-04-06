import { Heart, Briefcase, Activity, Wallet } from "lucide-react";

const icons: Record<string, any> = {
  love: Heart,
  career: Briefcase,
  health: Activity,
  finance: Wallet,
};

const colors: Record<string, string> = {
  love: "text-highlight",
  career: "text-accent",
  health: "text-green-400",
  finance: "text-blue-400",
};

interface Props {
  category: string;
  text: string;
}

const HoroscopeCard = ({ category, text }: Props) => {
  const Icon = icons[category] || Heart;
  const color = colors[category] || "text-accent";

  return (
    <div className="glass-card-hover p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg bg-muted/50 ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-display text-sm uppercase tracking-wider text-foreground">
          {category}
        </h3>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
    </div>
  );
};

export default HoroscopeCard;
