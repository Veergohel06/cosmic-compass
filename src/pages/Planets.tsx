import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const planetData = [
  { name: "Mercury", symbol: "☿", sign: "Gemini", degree: "15°23'", status: "Direct" },
  { name: "Venus", symbol: "♀", sign: "Taurus", degree: "8°47'", status: "Direct" },
  { name: "Mars", symbol: "♂", sign: "Aries", degree: "22°11'", status: "Direct" },
  { name: "Jupiter", symbol: "♃", sign: "Sagittarius", degree: "5°33'", status: "Retrograde" },
  { name: "Saturn", symbol: "♄", sign: "Capricorn", degree: "18°56'", status: "Direct" },
  { name: "Uranus", symbol: "♅", sign: "Aquarius", degree: "12°09'", status: "Retrograde" },
  { name: "Neptune", symbol: "♆", sign: "Pisces", degree: "27°44'", status: "Direct" },
  { name: "Pluto", symbol: "♇", sign: "Scorpio", degree: "3°21'", status: "Retrograde" },
];

const orbitData = planetData.map((p, i) => ({ name: p.name, value: 360 / planetData.length, deg: (i + 1) * 45 }));
const COLORS = ["#FFD700", "#FF69B4", "#FF4500", "#9B59B6", "#3498DB", "#1ABC9C", "#2ECC71", "#E74C3C"];

const Planets = () => (
  <div className="relative min-h-screen cosmic-gradient">
    <StarField />
    <Navbar />
    <main className="relative z-10 pt-24 pb-8 px-4 max-w-6xl mx-auto">
      <h1 className="font-display text-3xl text-gradient-gold mb-2">Planet Tracker</h1>
      <p className="text-muted-foreground mb-8">Current planetary positions</p>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass-card p-6">
          <h3 className="font-display text-lg text-foreground mb-4">Orbital View</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={orbitData} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={120} paddingAngle={2}>
                {orbitData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} fillOpacity={0.6} stroke={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(222,47%,10%)", border: "1px solid hsl(222,30%,22%)", borderRadius: 8, color: "#fff" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card p-6">
          <h3 className="font-display text-lg text-foreground mb-4">Positions</h3>
          <div className="space-y-2">
            {planetData.map((p, i) => (
              <div key={p.name} className="flex items-center justify-between py-2 border-b border-glass-border last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-xl" style={{ color: COLORS[i] }}>{p.symbol}</span>
                  <span className="text-sm text-foreground">{p.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{p.sign} {p.degree}</p>
                  <p className={`text-xs ${p.status === "Retrograde" ? "text-highlight" : "text-green-400"}`}>{p.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Planets;
