import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import AnimatedPage, { fadeInUp, staggerContainer } from "@/components/AnimatedPage";
import { motion } from "framer-motion";
import { Sun, Calendar, CalendarDays, Heart, Star, User, Moon, Compass, Gem, Globe } from "lucide-react";
import { toast } from "sonner";

const cards = [
  { icon: Sun, title: "Daily Horoscope", desc: "Today's cosmic guidance", link: "/daily", color: "text-accent" },
  { icon: Calendar, title: "Weekly Horoscope", desc: "This week's outlook", link: "/weekly", color: "text-highlight" },
  { icon: CalendarDays, title: "Monthly Horoscope", desc: "Monthly predictions", link: "/monthly", color: "text-blue-400" },
  { icon: Heart, title: "Compatibility", desc: "Check your match", link: "/compatibility", color: "text-highlight" },
  { icon: Star, title: "Kundli / Birth Chart", desc: "Your celestial map", link: "/kundli", color: "text-accent" },
  { icon: Moon, title: "Moon Phases", desc: "Lunar cycle tracker", link: "/moon-phase", color: "text-blue-400" },
  { icon: Globe, title: "Planet Tracker", desc: "Planetary positions", link: "/planets", color: "text-green-400" },
  { icon: Gem, title: "Remedies", desc: "Lucky guidance", link: "/remedies", color: "text-highlight" },
  { icon: User, title: "Profile", desc: "Your cosmic identity", link: "/profile", color: "text-accent" },
];

const todayPreviews = [
  { cat: "Love", color: "text-highlight", icon: "💕", text: "Venus aligns with your sign today, bringing warmth and harmony. Open your heart to unexpected connections." },
  { cat: "Career", color: "text-accent", icon: "💼", text: "A surprise opportunity at work could change your trajectory. Trust your instincts and take the lead." },
  { cat: "Health", color: "text-green-400", icon: "🧘", text: "Your energy levels are high. Channel this vitality into physical activity for best results." },
  { cat: "Finance", color: "text-blue-400", icon: "💰", text: "Be mindful of impulse purchases. A budget review today can reveal hidden savings." },
];

const Dashboard = () => (
  <AnimatedPage className="relative min-h-screen cosmic-gradient">
    <StarField />
    <Navbar />
    <main className="relative z-10 pt-24 pb-8 px-4 max-w-7xl mx-auto">
      <motion.div variants={staggerContainer} initial="initial" animate="animate">
        {/* Welcome Card */}
        <motion.div variants={fadeInUp} className="glass-card p-6 mb-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative">
            <div className="text-7xl" style={{ animation: "float 4s ease-in-out infinite" }}>♌</div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-card" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <p className="text-muted-foreground text-sm">Welcome back, Cosmic Traveler</p>
            <h2 className="font-display text-2xl text-gradient-gold">Leo</h2>
            <p className="text-muted-foreground text-sm mt-1">Jul 23 - Aug 22 · Fire Element · Ruled by Sun</p>
            <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
              <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">🔥 Fire Sign</span>
              <span className="text-xs px-3 py-1 rounded-full bg-highlight/10 text-highlight border border-highlight/20">☀️ Sun Ruled</span>
              <span className="text-xs px-3 py-1 rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20">Fixed Quality</span>
            </div>
          </div>
          <button onClick={() => toast.success("Daily reading refreshed! ✨")} className="glow-button text-foreground text-sm">
            <Compass className="w-4 h-4 inline mr-2" />Refresh Reading
          </button>
        </motion.div>

        {/* Quick Nav */}
        <motion.h2 variants={fadeInUp} className="font-display text-xl text-foreground mb-4">Quick Navigation</motion.h2>
        <motion.div variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
          {cards.map((c) => (
            <motion.div key={c.link} variants={fadeInUp}>
              <Link to={c.link} className="glass-card-hover p-5 flex items-center gap-4 block">
                <c.icon className={`w-7 h-7 ${c.color} flex-shrink-0`} />
                <div>
                  <span className="font-display text-sm text-foreground block">{c.title}</span>
                  <span className="text-xs text-muted-foreground">{c.desc}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Today's Preview */}
        <motion.h2 variants={fadeInUp} className="font-display text-xl text-foreground mb-4">Today's Cosmic Preview</motion.h2>
        <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-4">
          {todayPreviews.map((p) => (
            <motion.div key={p.cat} variants={fadeInUp} className="glass-card-hover p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{p.icon}</span>
                <h3 className={`font-display text-sm ${p.color}`}>{p.cat}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
    <Footer />
  </AnimatedPage>
);

export default Dashboard;
