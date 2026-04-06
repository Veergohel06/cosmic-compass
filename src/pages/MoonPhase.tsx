import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import AnimatedPage, { fadeInUp, staggerContainer } from "@/components/AnimatedPage";
import { motion } from "framer-motion";
import { Moon, Bell } from "lucide-react";
import { toast } from "sonner";

const phases = [
  { name: "New Moon", emoji: "🌑", desc: "Time for new beginnings and setting intentions.", energy: "Low", ritual: "Journaling & manifestation" },
  { name: "Waxing Crescent", emoji: "🌒", desc: "Momentum builds. Take the first steps toward your goals.", energy: "Rising", ritual: "Action planning" },
  { name: "First Quarter", emoji: "🌓", desc: "Challenges arise. Push through obstacles with determination.", energy: "Moderate", ritual: "Problem-solving meditation" },
  { name: "Waxing Gibbous", emoji: "🌔", desc: "Refine your plans. Adjust and prepare for fruition.", energy: "High", ritual: "Review & refine goals" },
  { name: "Full Moon", emoji: "🌕", desc: "Peak energy. Celebrate achievements and release what no longer serves you.", energy: "Peak", ritual: "Gratitude ceremony" },
  { name: "Waning Gibbous", emoji: "🌖", desc: "Gratitude and sharing. Reflect on lessons learned.", energy: "Declining", ritual: "Sharing wisdom" },
  { name: "Last Quarter", emoji: "🌗", desc: "Let go. Forgive and release old patterns.", energy: "Low", ritual: "Letting-go ritual" },
  { name: "Waning Crescent", emoji: "🌘", desc: "Rest and rejuvenate. Prepare for the next cycle.", energy: "Rest", ritual: "Deep rest & reflection" },
];

const currentPhaseIdx = 3; // Waxing Gibbous

const MoonPhase = () => {
  const [selectedPhase, setSelectedPhase] = useState(currentPhaseIdx);

  return (
    <AnimatedPage className="relative min-h-screen cosmic-gradient">
      <StarField />
      <Navbar />
      <main className="relative z-10 pt-24 pb-8 px-4 max-w-5xl mx-auto">
        <motion.div variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={fadeInUp}>
            <h1 className="font-display text-3xl text-gradient-gold mb-2">Moon Phases</h1>
            <p className="text-muted-foreground mb-8">Track the lunar cycle and align your energy</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card p-8 text-center mb-8">
            <div style={{ animation: "float 4s ease-in-out infinite" }}>
              <span className="text-8xl block mb-4">{phases[selectedPhase].emoji}</span>
            </div>
            <h2 className="font-display text-2xl text-foreground mb-1">
              {selectedPhase === currentPhaseIdx ? "Current Phase: " : ""}{phases[selectedPhase].name}
            </h2>
            <p className="text-muted-foreground mb-2">{phases[selectedPhase].desc}</p>
            <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
              <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">Energy: {phases[selectedPhase].energy}</span>
              <span className="text-xs px-3 py-1 rounded-full bg-highlight/10 text-highlight border border-highlight/20">Ritual: {phases[selectedPhase].ritual}</span>
            </div>
            {selectedPhase === currentPhaseIdx && (
              <p className="text-muted-foreground text-sm mt-3">Illumination: 78% · Next Full Moon in 4 days</p>
            )}
            <button onClick={() => toast.success("You'll be notified for the next Full Moon 🌕")} className="glow-button text-foreground mt-4 text-sm">
              <Bell className="w-4 h-4 inline mr-2" />Notify me for Full Moon
            </button>
          </motion.div>

          {/* Phase cycle visualization */}
          <motion.div variants={fadeInUp} className="glass-card p-6 mb-8">
            <h3 className="font-display text-sm text-foreground mb-4 text-center">Lunar Cycle</h3>
            <div className="flex items-center justify-center gap-1 sm:gap-3 flex-wrap">
              {phases.map((p, i) => (
                <button key={p.name} onClick={() => setSelectedPhase(i)}
                  className={`flex flex-col items-center p-2 sm:p-3 rounded-xl transition-all ${i === selectedPhase ? "bg-primary/30 ring-1 ring-accent/40 scale-110" : i === currentPhaseIdx ? "bg-accent/10" : "hover:bg-muted/30"}`}>
                  <span className={`text-2xl sm:text-3xl mb-1 transition-transform ${i === selectedPhase ? "scale-110" : ""}`}>{p.emoji}</span>
                  <span className="text-[9px] sm:text-[10px] text-muted-foreground whitespace-nowrap">{p.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {phases.map((p, i) => (
              <motion.div key={p.name} variants={fadeInUp}
                className={`glass-card-hover p-4 text-center cursor-pointer ${i === currentPhaseIdx ? "ring-1 ring-accent/30" : ""}`}
                onClick={() => setSelectedPhase(i)}>
                <div className="text-4xl mb-2">{p.emoji}</div>
                <h3 className="font-display text-xs text-foreground mb-1">{p.name}</h3>
                <p className="text-[10px] text-muted-foreground">{p.desc}</p>
                {i === currentPhaseIdx && <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent">Current</span>}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </AnimatedPage>
  );
};

export default MoonPhase;
