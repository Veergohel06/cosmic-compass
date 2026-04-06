import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import HoroscopeCard from "@/components/HoroscopeCard";
import AnimatedPage, { fadeInUp, staggerContainer } from "@/components/AnimatedPage";
import { motion } from "framer-motion";
import horoscopeData from "@/data/horoscope.json";
import zodiacData from "@/data/zodiac.json";
import { toast } from "sonner";
import { Share2, Bookmark } from "lucide-react";

const Weekly = () => {
  const [selectedSign, setSelectedSign] = useState("Leo");

  return (
    <AnimatedPage className="relative min-h-screen cosmic-gradient">
      <StarField />
      <Navbar />
      <main className="relative z-10 pt-24 pb-8 px-4 max-w-5xl mx-auto">
        <motion.div variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <h1 className="font-display text-3xl text-gradient-gold mb-2">Weekly Horoscope</h1>
              <p className="text-muted-foreground">Your celestial forecast for this week</p>
            </div>
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              <button onClick={() => toast.success("Saved to bookmarks!")} className="p-2 rounded-lg bg-muted/50 border border-glass-border text-muted-foreground hover:text-foreground transition-colors"><Bookmark className="w-4 h-4" /></button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href); toast.success("Link copied!"); }} className="p-2 rounded-lg bg-muted/50 border border-glass-border text-muted-foreground hover:text-foreground transition-colors"><Share2 className="w-4 h-4" /></button>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-8">
            <div className="flex flex-wrap gap-2">
              {zodiacData.map((z) => (
                <button key={z.name} onClick={() => { setSelectedSign(z.name); toast.info(`${z.name} ${z.symbol} selected`); }}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${selectedSign === z.name ? "bg-primary/40 text-accent border border-accent/30" : "bg-muted/30 text-muted-foreground border border-glass-border hover:border-primary/30"}`}>
                  {z.symbol} {z.name}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-6">
            {Object.entries(horoscopeData.weekly).map(([cat, text]) => (
              <motion.div key={cat} variants={fadeInUp}><HoroscopeCard category={cat} text={text} /></motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </AnimatedPage>
  );
};

export default Weekly;
