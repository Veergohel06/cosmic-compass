import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import AnimatedPage, { fadeInUp, staggerContainer } from "@/components/AnimatedPage";
import { motion } from "framer-motion";
import { Gem, Palette, Hash, BookOpen, Copy, RefreshCw } from "lucide-react";
import { toast } from "sonner";

const remedies = [
  {
    icon: Hash, title: "Lucky Numbers", items: ["3", "7", "9", "12", "21"],
    color: "text-accent", desc: "Numbers aligned with your cosmic energy",
  },
  {
    icon: Palette, title: "Lucky Colors", items: ["Gold", "Royal Purple", "Deep Blue", "Silver", "Crimson"],
    color: "text-highlight", desc: "Colors that enhance your aura",
  },
  {
    icon: Gem, title: "Gemstones", items: ["Ruby – Confidence & Vitality", "Emerald – Prosperity & Healing", "Sapphire – Wisdom & Focus", "Pearl – Calm & Intuition", "Diamond – Strength & Clarity"],
    color: "text-blue-400", desc: "Crystals that resonate with your energy",
  },
  {
    icon: BookOpen, title: "Mantras", items: ["Om Namah Shivaya – Inner peace", "Om Gan Ganapataye Namaha – Remove obstacles", "Om Shanti Shanti Shanti – Universal peace", "Gayatri Mantra – Wisdom & enlightenment"],
    color: "text-green-400", desc: "Sacred chants for spiritual alignment",
  },
];

const dailyTip = {
  title: "Today's Cosmic Tip",
  text: "Wear gold-toned accessories today to amplify your Sun energy. Avoid major decisions after 9 PM when Mars enters a challenging aspect.",
  lucky: "Lucky Time: 10 AM – 1 PM",
};

const Remedies = () => {
  const [selectedSign, setSelectedSign] = useState("Leo");

  return (
    <AnimatedPage className="relative min-h-screen cosmic-gradient">
      <StarField />
      <Navbar />
      <main className="relative z-10 pt-24 pb-8 px-4 max-w-5xl mx-auto">
        <motion.div variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={fadeInUp}>
            <h1 className="font-display text-3xl text-gradient-gold mb-2">Remedies</h1>
            <p className="text-muted-foreground mb-8">Cosmic guidance for balance and harmony</p>
          </motion.div>

          {/* Daily Tip */}
          <motion.div variants={fadeInUp} className="glass-card p-6 mb-8 border-l-4 border-accent">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-base text-accent mb-2">{dailyTip.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{dailyTip.text}</p>
                <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">{dailyTip.lucky}</span>
              </div>
              <button onClick={() => toast.success("New tip generated! ✨")} className="text-muted-foreground hover:text-foreground transition-colors p-2">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-6">
            {remedies.map((r) => (
              <motion.div key={r.title} variants={fadeInUp} className="glass-card-hover p-6">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <r.icon className={`w-6 h-6 ${r.color}`} />
                    <h3 className="font-display text-base text-foreground">{r.title}</h3>
                  </div>
                  <button onClick={() => {
                    navigator.clipboard.writeText(r.items.join(", "));
                    toast.success(`${r.title} copied to clipboard!`);
                  }} className="text-muted-foreground hover:text-foreground transition-colors p-1">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{r.desc}</p>
                <ul className="space-y-2">
                  {r.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer"
                      onClick={() => toast.info(item)}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-current ${r.color}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </AnimatedPage>
  );
};

export default Remedies;
