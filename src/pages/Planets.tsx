import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import AnimatedPage, { fadeInUp, staggerContainer } from "@/components/AnimatedPage";
import { motion } from "framer-motion";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { toast } from "sonner";
import { RefreshCw } from "lucide-react";

const planetData = [
  { name: "Mercury", symbol: "☿", sign: "Gemini", degree: "15°23'", status: "Direct", desc: "Communication flows freely. Great for negotiations." },
  { name: "Venus", symbol: "♀", sign: "Taurus", degree: "8°47'", status: "Direct", desc: "Love and beauty are highlighted. Indulge your senses." },
  { name: "Mars", symbol: "♂", sign: "Aries", degree: "22°11'", status: "Direct", desc: "High energy and drive. Channel it productively." },
  { name: "Jupiter", symbol: "♃", sign: "Sagittarius", degree: "5°33'", status: "Retrograde", desc: "Inner growth and philosophical reflection period." },
  { name: "Saturn", symbol: "♄", sign: "Capricorn", degree: "18°56'", status: "Direct", desc: "Structure and discipline are rewarded now." },
  { name: "Uranus", symbol: "♅", sign: "Aquarius", degree: "12°09'", status: "Retrograde", desc: "Re-evaluate your need for freedom and change." },
  { name: "Neptune", symbol: "♆", sign: "Pisces", degree: "27°44'", status: "Direct", desc: "Intuition is heightened. Trust your inner voice." },
  { name: "Pluto", symbol: "♇", sign: "Scorpio", degree: "3°21'", status: "Retrograde", desc: "Deep transformation happening beneath the surface." },
];

const orbitData = planetData.map((p) => ({ name: p.name, value: 360 / planetData.length }));
const COLORS = ["#FFD700", "#FF69B4", "#FF4500", "#9B59B6", "#3498DB", "#1ABC9C", "#2ECC71", "#E74C3C"];

const Planets = () => (
  <AnimatedPage className="relative min-h-screen cosmic-gradient">
    <StarField />
    <Navbar />
    <main className="relative z-10 pt-24 pb-8 px-4 max-w-6xl mx-auto">
      <motion.div variants={staggerContainer} initial="initial" animate="animate">
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl text-gradient-gold mb-2">Planet Tracker</h1>
            <p className="text-muted-foreground">Current planetary positions and their influence</p>
          </div>
          <button onClick={() => toast.success("Positions refreshed!")} className="glow-button text-foreground text-sm mt-4 sm:mt-0">
            <RefreshCw className="w-4 h-4 inline mr-2" />Refresh
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div variants={fadeInUp} className="glass-card p-6">
            <h3 className="font-display text-lg text-foreground mb-4 text-center">Orbital View</h3>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie data={orbitData} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={130} paddingAngle={3}>
                  {orbitData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} fillOpacity={0.6} stroke={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "hsl(222,47%,10%)", border: "1px solid hsl(222,30%,22%)", borderRadius: 8, color: "#fff" }} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card p-6">
            <h3 className="font-display text-lg text-foreground mb-4">Positions & Influence</h3>
            <div className="space-y-1">
              {planetData.map((p, i) => (
                <div key={p.name}
                  className="flex items-center justify-between py-3 border-b border-glass-border last:border-0 hover:bg-muted/20 px-2 rounded transition-colors cursor-pointer"
                  onClick={() => toast.info(`${p.name}: ${p.desc}`)}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl" style={{ color: COLORS[i] }}>{p.symbol}</span>
                    <div>
                      <span className="text-sm text-foreground block">{p.name}</span>
                      <span className="text-[10px] text-muted-foreground">{p.desc.slice(0, 40)}...</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{p.sign} {p.degree}</p>
                    <p className={`text-xs ${p.status === "Retrograde" ? "text-highlight" : "text-green-400"}`}>{p.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
    <Footer />
  </AnimatedPage>
);

export default Planets;
