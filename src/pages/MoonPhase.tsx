import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { Moon } from "lucide-react";

const phases = [
  { name: "New Moon", emoji: "🌑", desc: "Time for new beginnings and setting intentions." },
  { name: "Waxing Crescent", emoji: "🌒", desc: "Momentum builds. Take the first steps toward your goals." },
  { name: "First Quarter", emoji: "🌓", desc: "Challenges arise. Push through obstacles with determination." },
  { name: "Waxing Gibbous", emoji: "🌔", desc: "Refine your plans. Adjust and prepare for fruition." },
  { name: "Full Moon", emoji: "🌕", desc: "Peak energy. Celebrate achievements and release what no longer serves you." },
  { name: "Waning Gibbous", emoji: "🌖", desc: "Gratitude and sharing. Reflect on lessons learned." },
  { name: "Last Quarter", emoji: "🌗", desc: "Let go. Forgive and release old patterns." },
  { name: "Waning Crescent", emoji: "🌘", desc: "Rest and rejuvenate. Prepare for the next cycle." },
];

const MoonPhase = () => (
  <div className="relative min-h-screen cosmic-gradient">
    <StarField />
    <Navbar />
    <main className="relative z-10 pt-24 pb-8 px-4 max-w-5xl mx-auto">
      <h1 className="font-display text-3xl text-gradient-gold mb-2">Moon Phases</h1>
      <p className="text-muted-foreground mb-8">Track the lunar cycle</p>

      <div className="glass-card p-8 text-center mb-8">
        <Moon className="w-16 h-16 text-accent mx-auto mb-4" style={{ animation: "float 4s ease-in-out infinite" }} />
        <h2 className="font-display text-2xl text-foreground mb-1">Current Phase: Waxing Gibbous</h2>
        <p className="text-muted-foreground">Illumination: 78% · Next Full Moon in 4 days</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {phases.map((p) => (
          <div key={p.name} className="glass-card-hover p-4 text-center">
            <div className="text-4xl mb-2">{p.emoji}</div>
            <h3 className="font-display text-xs text-foreground mb-1">{p.name}</h3>
            <p className="text-xs text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default MoonPhase;
