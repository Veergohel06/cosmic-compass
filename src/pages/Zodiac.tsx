import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import ZodiacCard from "@/components/ZodiacCard";
import zodiacData from "@/data/zodiac.json";

const Zodiac = () => {
  const [selected, setSelected] = useState<typeof zodiacData[0] | null>(null);

  return (
    <div className="relative min-h-screen cosmic-gradient">
      <StarField />
      <Navbar />
      <main className="relative z-10 pt-24 pb-8 px-4 max-w-7xl mx-auto">
        <h1 className="font-display text-3xl text-gradient-gold mb-2">Zodiac Signs</h1>
        <p className="text-muted-foreground mb-8">Explore all 12 zodiac signs</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {zodiacData.map((z) => (
            <ZodiacCard key={z.name} zodiac={z} onClick={() => setSelected(z)} />
          ))}
        </div>
      </main>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div className="glass-card p-8 max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-4">
              <span className="text-6xl">{selected.symbol}</span>
              <h2 className="font-display text-2xl text-gradient-gold mt-2">{selected.name}</h2>
              <p className="text-sm text-muted-foreground">{selected.dates}</p>
            </div>
            <div className="space-y-3 text-sm">
              <div><span className="text-accent font-semibold">Element:</span> <span className="text-muted-foreground">{selected.element}</span></div>
              <div><span className="text-accent font-semibold">Traits:</span> <span className="text-muted-foreground">{selected.traits}</span></div>
              <div><span className="text-green-400 font-semibold">Strengths:</span> <span className="text-muted-foreground">{selected.strengths}</span></div>
              <div><span className="text-highlight font-semibold">Weaknesses:</span> <span className="text-muted-foreground">{selected.weaknesses}</span></div>
            </div>
            <button onClick={() => setSelected(null)} className="w-full glow-button text-foreground mt-6">Close</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Zodiac;
