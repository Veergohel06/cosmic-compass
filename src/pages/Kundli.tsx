import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import AnimatedPage, { fadeInUp, staggerContainer } from "@/components/AnimatedPage";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Download, RefreshCw } from "lucide-react";

const planets = [
  { name: "Sun", symbol: "☉", house: "1st", sign: "Leo", degree: "15°23'", color: "text-yellow-400" },
  { name: "Moon", symbol: "☽", house: "4th", sign: "Cancer", degree: "8°47'", color: "text-blue-300" },
  { name: "Mercury", symbol: "☿", house: "3rd", sign: "Gemini", degree: "22°11'", color: "text-green-400" },
  { name: "Venus", symbol: "♀", house: "7th", sign: "Libra", degree: "5°33'", color: "text-pink-400" },
  { name: "Mars", symbol: "♂", house: "10th", sign: "Aries", degree: "18°56'", color: "text-red-400" },
  { name: "Jupiter", symbol: "♃", house: "9th", sign: "Sagittarius", degree: "12°09'", color: "text-orange-400" },
  { name: "Saturn", symbol: "♄", house: "11th", sign: "Capricorn", degree: "27°44'", color: "text-blue-400" },
  { name: "Rahu", symbol: "☊", house: "5th", sign: "Leo", degree: "3°21'", color: "text-purple-400" },
  { name: "Ketu", symbol: "☋", house: "11th", sign: "Aquarius", degree: "3°21'", color: "text-indigo-400" },
];

const Kundli = () => {
  const [dob, setDob] = useState("1995-08-15");
  const [tob, setTob] = useState("06:30");
  const [pob, setPob] = useState("Mumbai, India");
  const [generated, setGenerated] = useState(true);

  const handleGenerate = () => {
    if (!dob || !tob || !pob) { toast.error("Please fill all fields"); return; }
    setGenerated(false);
    toast.info("Calculating planetary positions...");
    setTimeout(() => { setGenerated(true); toast.success("Birth chart generated! ✨"); }, 1500);
  };

  return (
    <AnimatedPage className="relative min-h-screen cosmic-gradient">
      <StarField />
      <Navbar />
      <main className="relative z-10 pt-24 pb-8 px-4 max-w-6xl mx-auto">
        <motion.div variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={fadeInUp}>
            <h1 className="font-display text-3xl text-gradient-gold mb-2">Kundli / Birth Chart</h1>
            <p className="text-muted-foreground mb-8">Your celestial blueprint based on your birth details</p>
          </motion.div>

          {/* Input Form */}
          <motion.div variants={fadeInUp} className="glass-card p-6 mb-8">
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-1">Date of Birth</label>
                <input type="date" value={dob} onChange={(e) => setDob(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-1">Time of Birth</label>
                <input type="time" value={tob} onChange={(e) => setTob(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-1">Place of Birth</label>
                <input type="text" value={pob} onChange={(e) => setPob(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="City, Country" />
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={handleGenerate} className="glow-button text-foreground"><RefreshCw className="w-4 h-4 inline mr-2" />Generate Chart</button>
              <button onClick={() => toast.success("Chart downloaded as PDF!")} className="glow-button-accent"><Download className="w-4 h-4 inline mr-2" />Download</button>
            </div>
          </motion.div>

          {generated && (
            <div className="flex flex-col lg:flex-row gap-8">
              <motion.div variants={fadeInUp} className="flex-shrink-0 flex items-center justify-center">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                  <div className="absolute inset-0 rounded-full border-2 border-accent/30" style={{ animation: "pulse-glow 4s infinite" }} />
                  <div className="absolute inset-6 rounded-full border border-highlight/20" />
                  <div className="absolute inset-12 rounded-full border border-primary/30" />
                  <div className="absolute inset-[4.5rem] rounded-full border border-accent/10" />
                  {planets.map((p, i) => {
                    const angle = (i * 40 - 90) * (Math.PI / 180);
                    const r = 120;
                    return (
                      <motion.div key={p.name} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className="absolute flex flex-col items-center cursor-pointer group"
                        onClick={() => toast.info(`${p.name} in ${p.sign} at ${p.degree} (${p.house} House)`)}
                        style={{ left: `calc(50% + ${Math.cos(angle) * r}px - 16px)`, top: `calc(50% + ${Math.sin(angle) * r}px - 16px)` }}>
                        <span className={`text-2xl ${p.color} group-hover:scale-125 transition-transform`}>{p.symbol}</span>
                        <span className="text-[10px] text-muted-foreground">{p.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex-1 glass-card p-6">
                <h3 className="font-display text-lg text-foreground mb-4">Planetary Positions</h3>
                <div className="space-y-1">
                  {planets.map((p) => (
                    <div key={p.name} className="flex items-center justify-between py-2.5 border-b border-glass-border last:border-0 hover:bg-muted/20 px-2 rounded transition-colors cursor-pointer"
                      onClick={() => toast.info(`${p.name}: ${p.sign} ${p.degree} in ${p.house} House`)}>
                      <div className="flex items-center gap-3">
                        <span className={`text-xl ${p.color}`}>{p.symbol}</span>
                        <span className="text-sm text-foreground">{p.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{p.sign} · {p.degree}</p>
                        <p className="text-xs text-accent">{p.house} House</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </main>
      <Footer />
    </AnimatedPage>
  );
};

export default Kundli;
