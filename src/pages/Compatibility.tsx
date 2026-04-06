import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";

const Compatibility = () => {
  const [sign1, setSign1] = useState("Aries");
  const [sign2, setSign2] = useState("Leo");
  const [score, setScore] = useState<number | null>(null);

  const signs = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];

  const chartData = [
    { aspect: "Love", value: 85 },
    { aspect: "Trust", value: 72 },
    { aspect: "Communication", value: 90 },
    { aspect: "Values", value: 78 },
    { aspect: "Emotions", value: 88 },
    { aspect: "Activities", value: 65 },
  ];

  const calculate = () => setScore(Math.floor(Math.random() * 30) + 65);

  return (
    <div className="relative min-h-screen cosmic-gradient">
      <StarField />
      <Navbar />
      <main className="relative z-10 pt-24 pb-8 px-4 max-w-5xl mx-auto">
        <h1 className="font-display text-3xl text-gradient-gold mb-2">Compatibility</h1>
        <p className="text-muted-foreground mb-8">Discover your cosmic chemistry</p>

        <div className="glass-card p-6 mb-8">
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {[{ label: "Person 1", val: sign1, set: setSign1 }, { label: "Person 2", val: sign2, set: setSign2 }].map((p) => (
              <div key={p.label}>
                <label className="block text-sm text-muted-foreground mb-1">{p.label} Zodiac Sign</label>
                <select
                  value={p.val}
                  onChange={(e) => p.set(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {signs.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            ))}
          </div>
          <button onClick={calculate} className="glow-button text-foreground">
            Check Compatibility
          </button>
        </div>

        {score !== null && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 flex flex-col items-center justify-center">
              <p className="text-muted-foreground text-sm mb-2">Compatibility Score</p>
              <div className="text-6xl font-display text-gradient-gold">{score}%</div>
              <p className="text-muted-foreground text-sm mt-2">{sign1} × {sign2}</p>
            </div>
            <div className="glass-card p-6">
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={chartData}>
                  <PolarGrid stroke="hsl(222,30%,22%)" />
                  <PolarAngleAxis dataKey="aspect" tick={{ fill: "hsl(215,20%,60%)", fontSize: 12 }} />
                  <PolarRadiusAxis tick={false} domain={[0, 100]} />
                  <Radar dataKey="value" stroke="hsl(275,100%,55%)" fill="hsl(275,100%,45%)" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Compatibility;
