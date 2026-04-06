import { Link } from "react-router-dom";
import StarField from "@/components/StarField";
import AnimatedPage, { fadeInUp, staggerContainer } from "@/components/AnimatedPage";
import { motion } from "framer-motion";
import { Sparkles, Moon, Star, Heart, ChevronRight, Shield, Zap, Globe } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI Horoscope Generator", desc: "Get personalized daily, weekly, and monthly horoscope readings powered by advanced AI.", link: "/daily" },
  { icon: Star, title: "Birth Chart Visualization", desc: "Explore your unique Kundli with detailed planetary positions and house placements.", link: "/kundli" },
  { icon: Heart, title: "Compatibility Prediction", desc: "Discover your cosmic compatibility with any zodiac sign through AI analysis.", link: "/compatibility" },
  { icon: Moon, title: "Moon Phase Tracker", desc: "Track lunar cycles and understand how moon phases influence your energy.", link: "/moon-phase" },
];

const stats = [
  { label: "Active Users", value: "2.4M+", icon: Globe },
  { label: "Predictions Made", value: "50M+", icon: Zap },
  { label: "Accuracy Rate", value: "94%", icon: Shield },
];

const testimonials = [
  { name: "Priya S.", text: "CosmoSphere's daily readings are uncannily accurate. It's become my morning ritual.", sign: "Pisces ♓" },
  { name: "James K.", text: "The compatibility feature helped me understand my relationship on a deeper level.", sign: "Leo ♌" },
  { name: "Aisha M.", text: "The Kundli visualization is stunning. Best astrology app I've ever used.", sign: "Scorpio ♏" },
];

const Landing = () => (
  <AnimatedPage className="relative min-h-screen cosmic-gradient overflow-hidden">
    <StarField />
    <div className="relative z-10">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div className="text-center max-w-4xl mx-auto" variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">AI-Powered Astrology Platform</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-gradient-gold">Cosmo</span>
            <span className="text-gradient-purple">Sphere</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Unlock the mysteries of the cosmos. AI-driven horoscopes, birth charts, and celestial insights personalized just for you.
          </motion.p>

          {/* Zodiac Wheel */}
          <motion.div variants={fadeInUp} className="relative w-48 h-48 mx-auto mb-10" style={{ animation: "float 6s ease-in-out infinite" }}>
            <div className="absolute inset-0 rounded-full border-2 border-accent/30" />
            <div className="absolute inset-3 rounded-full border border-highlight/20" />
            <div className="absolute inset-6 rounded-full border border-primary/40" />
            {["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"].map((s, i) => {
              const angle = (i * 30 - 90) * (Math.PI / 180);
              const r = 85;
              return (
                <span key={i} className="absolute text-lg" style={{
                  left: `calc(50% + ${Math.cos(angle) * r}px - 10px)`,
                  top: `calc(50% + ${Math.sin(angle) * r}px - 10px)`,
                  color: i % 3 === 0 ? "hsl(51,100%,50%)" : i % 3 === 1 ? "hsl(330,100%,71%)" : "hsl(275,100%,60%)",
                }}>{s}</span>
              );
            })}
            <div className="absolute inset-0 flex items-center justify-center">
              <Moon className="w-8 h-8 text-accent" />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/login" className="glow-button text-foreground">Login</Link>
            <Link to="/signup" className="glow-button-accent">Sign Up Free</Link>
            <Link to="/dashboard" className="glow-button-highlight">Try Bypass Login →</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <motion.div className="grid grid-cols-3 gap-4" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeInUp} className="glass-card p-5 text-center">
              <s.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-display text-2xl sm:text-3xl text-gradient-gold">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl sm:text-4xl text-center mb-4 text-gradient-gold">
          Cosmic Features
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Everything you need to navigate life through the wisdom of the stars
        </motion.p>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
          {features.map((f, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Link to={f.link} className="glass-card-hover p-6 group block h-full">
                <f.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display text-base text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
                <span className="inline-flex items-center text-xs text-accent group-hover:gap-2 transition-all">
                  Explore <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl text-center mb-12 text-gradient-gold">
          What Our Users Say
        </motion.h2>
        <motion.div className="grid sm:grid-cols-3 gap-6" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fadeInUp} className="glass-card p-6">
              <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground font-medium">{t.name}</span>
                <span className="text-xs text-accent">{t.sign}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-card p-10">
          <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-4">Ready to Explore Your Stars?</h2>
          <p className="text-muted-foreground mb-6">Join millions of users discovering their cosmic destiny</p>
          <Link to="/signup" className="glow-button-accent inline-block">Get Started Free</Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-glass-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="font-display text-sm text-gradient-gold">CosmoSphere</span>
          </div>
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} CosmoSphere. AI-Powered Astrology Platform.</p>
        </div>
      </footer>
    </div>
  </AnimatedPage>
);

export default Landing;
