import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { Gem, Palette, Hash, BookOpen } from "lucide-react";

const remedies = [
  {
    icon: Hash, title: "Lucky Numbers", items: ["3", "7", "9", "12", "21"],
    color: "text-accent",
  },
  {
    icon: Palette, title: "Lucky Colors", items: ["Gold", "Royal Purple", "Deep Blue", "Silver", "Crimson"],
    color: "text-highlight",
  },
  {
    icon: Gem, title: "Gemstones", items: ["Ruby – Confidence & Vitality", "Emerald – Prosperity & Healing", "Sapphire – Wisdom & Focus", "Pearl – Calm & Intuition", "Diamond – Strength & Clarity"],
    color: "text-blue-400",
  },
  {
    icon: BookOpen, title: "Mantras", items: ["Om Namah Shivaya – Inner peace", "Om Gan Ganapataye Namaha – Remove obstacles", "Om Shanti Shanti Shanti – Universal peace", "Gayatri Mantra – Wisdom & enlightenment"],
    color: "text-green-400",
  },
];

const Remedies = () => (
  <div className="relative min-h-screen cosmic-gradient">
    <StarField />
    <Navbar />
    <main className="relative z-10 pt-24 pb-8 px-4 max-w-5xl mx-auto">
      <h1 className="font-display text-3xl text-gradient-gold mb-2">Remedies</h1>
      <p className="text-muted-foreground mb-8">Cosmic guidance for balance and harmony</p>

      <div className="grid sm:grid-cols-2 gap-6">
        {remedies.map((r) => (
          <div key={r.title} className="glass-card-hover p-6">
            <div className="flex items-center gap-3 mb-4">
              <r.icon className={`w-6 h-6 ${r.color}`} />
              <h3 className="font-display text-base text-foreground">{r.title}</h3>
            </div>
            <ul className="space-y-2">
              {r.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full bg-current ${r.color}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Remedies;
