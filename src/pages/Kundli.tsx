import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

const planets = [
  { name: "Sun", symbol: "☉", house: "1st", sign: "Leo" },
  { name: "Moon", symbol: "☽", house: "4th", sign: "Cancer" },
  { name: "Mercury", symbol: "☿", house: "3rd", sign: "Gemini" },
  { name: "Venus", symbol: "♀", house: "7th", sign: "Libra" },
  { name: "Mars", symbol: "♂", house: "10th", sign: "Aries" },
  { name: "Jupiter", symbol: "♃", house: "9th", sign: "Sagittarius" },
  { name: "Saturn", symbol: "♄", house: "11th", sign: "Capricorn" },
  { name: "Rahu", symbol: "☊", house: "5th", sign: "Leo" },
  { name: "Ketu", symbol: "☋", house: "11th", sign: "Aquarius" },
];

const Kundli = () => (
  <div className="relative min-h-screen cosmic-gradient">
    <StarField />
    <Navbar />
    <main className="relative z-10 pt-24 pb-8 px-4 max-w-5xl mx-auto">
      <h1 className="font-display text-3xl text-gradient-gold mb-2">Kundli / Birth Chart</h1>
      <p className="text-muted-foreground mb-8">Your celestial blueprint</p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Circular Kundli */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-full border-2 border-accent/30" />
            <div className="absolute inset-6 rounded-full border border-highlight/20" />
            <div className="absolute inset-12 rounded-full border border-primary/30" />
            <div className="absolute inset-[4.5rem] rounded-full border border-accent/10" />
            {planets.map((p, i) => {
              const angle = (i * 40 - 90) * (Math.PI / 180);
              const r = 120;
              return (
                <div
                  key={p.name}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `calc(50% + ${Math.cos(angle) * r}px - 16px)`,
                    top: `calc(50% + ${Math.sin(angle) * r}px - 16px)`,
                  }}
                >
                  <span className="text-2xl text-accent">{p.symbol}</span>
                  <span className="text-[10px] text-muted-foreground">{p.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Planet Table */}
        <div className="flex-1 glass-card p-6">
          <h3 className="font-display text-lg text-foreground mb-4">Planetary Positions</h3>
          <div className="space-y-2">
            {planets.map((p) => (
              <div key={p.name} className="flex items-center justify-between py-2 border-b border-glass-border last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-xl text-accent">{p.symbol}</span>
                  <span className="text-sm text-foreground">{p.name}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {p.sign} · {p.house} House
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

export default Kundli;
