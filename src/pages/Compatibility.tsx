import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import AnimatedPage, { fadeInUp, staggerContainer } from "@/components/AnimatedPage";
import { motion, AnimatePresence } from "framer-motion";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { toast } from "sonner";
import { Heart, Share2 } from "lucide-react";

const signs = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];

const getChartData = (s: number) => [
  { aspect: "Love", value: 50 + ((s * 7 + 13) % 50) },
  { aspect: "Trust", value: 40 + ((s * 11 + 7) % 55) },
  { aspect: "Communication", value: 45 + ((s * 3 + 23) % 50) },
  { aspect: "Values", value: 50 + ((s * 5 + 17) % 45) },
  { aspect: "Emotions", value: 55 + ((s * 9 + 3) % 40) },
  { aspect: "Activities", value: 35 + ((s * 13 + 11) % 55) },
];

const getAdvice = (score: number) => {
  if (score >= 85) return { text: "A celestial match! Your energies are deeply harmonious.", emoji: "💫" };
  if (score >= 70) return { text: "Strong compatibility with room for beautiful growth together.", emoji: "✨" };
  return { text: "Different energies that can complement each other with understanding.", emoji: "🌙" };
};

const Compatibility = () => {
  const [sign1, setSign1] = useState("Aries");
  const [sign2, setSign2] = useState("Leo");
  const [result, setResult] = useState<{ score: number; data: any[] } | null>(null);
  const [loading, setLoading] = useState(false);

  const calculate = () => {
    if (sign1 === sign2) { toast.error("Please select two different signs"); return; }
    setLoading(true);
    setResult(null);
    toast.info("Analyzing cosmic compatibility...");
    setTimeout(() => {
      const seed = signs.indexOf(sign1) * 12 + signs.indexOf(sign2);
      const score = 55 + (seed % 40);
      setResult({ score, data: getChartData(seed) });
      setLoading(false);
      toast.success(`Compatibility calculated: ${score}%`);
    }, 1800);
  };

  const advice = result ? getAdvice(result.score) : null;

  return (
    <AnimatedPage className="relative min-h-screen cosmic-gradient">
      <StarField />
      <Navbar />
      <main className="relative z-10 pt-24 pb-8 px-4 max-w-5xl mx-auto">
        <motion.div variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={fadeInUp}>
            <h1 className="font-display text-3xl text-gradient-gold mb-2">Compatibility</h1>
            <p className="text-muted-foreground mb-8">Discover your cosmic chemistry with any zodiac sign</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card p-6 mb-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {[{ label: "Your Sign", val: sign1, set: setSign1 }, { label: "Partner's Sign", val: sign2, set: setSign2 }].map((p) => (
                <div key={p.label}>
                  <label className="block text-sm text-muted-foreground mb-2">{p.label}</label>
                  <select value={p.val} onChange={(e) => p.set(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                    {signs.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={calculate} disabled={loading} className="glow-button text-foreground disabled:opacity-50">
                {loading ? (
                  <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />Analyzing...</span>
                ) : (<><Heart className="w-4 h-4 inline mr-2" />Check Compatibility</>)}
              </button>
              {result && (
                <button onClick={() => { navigator.clipboard.writeText(`${sign1} × ${sign2}: ${result.score}% compatible on CosmoSphere!`); toast.success("Result copied!"); }}
                  className="glow-button-accent"><Share2 className="w-4 h-4 inline mr-2" />Share</button>
              )}
            </div>
          </motion.div>

          <AnimatePresence>
            {result && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-8 flex flex-col items-center justify-center text-center">
                  <p className="text-4xl mb-3">{advice?.emoji}</p>
                  <p className="text-muted-foreground text-sm mb-2">Compatibility Score</p>
                  <div className="text-7xl font-display text-gradient-gold mb-2">{result.score}%</div>
                  <p className="text-foreground font-medium mb-1">{sign1} × {sign2}</p>
                  <p className="text-muted-foreground text-sm max-w-xs">{advice?.text}</p>
                </div>
                <div className="glass-card p-6">
                  <h3 className="font-display text-sm text-foreground mb-4 text-center">Aspect Breakdown</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={result.data}>
                      <PolarGrid stroke="hsl(222,30%,22%)" />
                      <PolarAngleAxis dataKey="aspect" tick={{ fill: "hsl(215,20%,60%)", fontSize: 12 }} />
                      <PolarRadiusAxis tick={false} domain={[0, 100]} />
                      <Radar dataKey="value" stroke="hsl(330,100%,71%)" fill="hsl(275,100%,45%)" fillOpacity={0.3} strokeWidth={2} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
      <Footer />
    </AnimatedPage>
  );
};

export default Compatibility;
