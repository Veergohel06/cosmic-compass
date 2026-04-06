import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import ZodiacCard from "@/components/ZodiacCard";
import AnimatedPage, { fadeInUp, staggerContainer } from "@/components/AnimatedPage";
import { motion, AnimatePresence } from "framer-motion";
import zodiacData from "@/data/zodiac.json";
import { X } from "lucide-react";

const Zodiac = () => {
  const [selected, setSelected] = useState<typeof zodiacData[0] | null>(null);
  const [filter, setFilter] = useState("All");

  const elements = ["All", "Fire", "Earth", "Air", "Water"];
  const filtered = filter === "All" ? zodiacData : zodiacData.filter((z) => z.element === filter);

  return (
    <AnimatedPage className="relative min-h-screen cosmic-gradient">
      <StarField />
      <Navbar />
      <main className="relative z-10 pt-24 pb-8 px-4 max-w-7xl mx-auto">
        <motion.div variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={fadeInUp}>
            <h1 className="font-display text-3xl text-gradient-gold mb-2">Zodiac Signs</h1>
            <p className="text-muted-foreground mb-6">Explore all 12 zodiac signs and their cosmic profiles</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-2 mb-8 flex-wrap">
            {elements.map((el) => (
              <button key={el} onClick={() => setFilter(el)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === el ? "bg-primary/40 text-accent border border-accent/30" : "bg-muted/30 text-muted-foreground border border-glass-border hover:border-primary/30"}`}>
                {el === "Fire" ? "🔥" : el === "Earth" ? "🌍" : el === "Air" ? "💨" : el === "Water" ? "💧" : "✨"} {el}
              </button>
            ))}
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((z) => (
              <motion.div key={z.name} variants={fadeInUp}>
                <ZodiacCard zodiac={z} onClick={() => setSelected(z)} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={() => setSelected(null)}>
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card p-8 max-w-lg w-full relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
              <div className="text-center mb-6">
                <span className="text-7xl block mb-2">{selected.symbol}</span>
                <h2 className="font-display text-2xl text-gradient-gold">{selected.name}</h2>
                <p className="text-sm text-muted-foreground">{selected.dates}</p>
              </div>
              <div className="space-y-4 text-sm">
                <div className="glass-card p-3"><span className="text-accent font-semibold">Element: </span><span className="text-muted-foreground">{selected.element}</span></div>
                <div className="glass-card p-3"><span className="text-accent font-semibold">Traits: </span><span className="text-muted-foreground">{selected.traits}</span></div>
                <div className="glass-card p-3"><span className="text-green-400 font-semibold">Strengths: </span><span className="text-muted-foreground">{selected.strengths}</span></div>
                <div className="glass-card p-3"><span className="text-highlight font-semibold">Weaknesses: </span><span className="text-muted-foreground">{selected.weaknesses}</span></div>
              </div>
              <button onClick={() => setSelected(null)} className="w-full glow-button text-foreground mt-6">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </AnimatedPage>
  );
};

export default Zodiac;
