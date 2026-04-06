import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import HoroscopeCard from "@/components/HoroscopeCard";
import horoscopeData from "@/data/horoscope.json";

const Daily = () => (
  <div className="relative min-h-screen cosmic-gradient">
    <StarField />
    <Navbar />
    <main className="relative z-10 pt-24 pb-8 px-4 max-w-5xl mx-auto">
      <h1 className="font-display text-3xl text-gradient-gold mb-2">Daily Horoscope</h1>
      <p className="text-muted-foreground mb-8">Your cosmic guidance for today</p>
      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(horoscopeData.daily).map(([cat, text]) => (
          <HoroscopeCard key={cat} category={cat} text={text} />
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Daily;
