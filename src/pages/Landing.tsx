import { Link } from "react-router-dom";
import StarField from "@/components/StarField";
import { Sparkles, Moon, Star, Heart, ChevronRight } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI Horoscope Generator", desc: "Get personalized daily, weekly, and monthly horoscope readings powered by advanced AI.", link: "/daily" },
  { icon: Star, title: "Birth Chart Visualization", desc: "Explore your unique Kundli with detailed planetary positions and house placements.", link: "/kundli" },
  { icon: Heart, title: "Compatibility Prediction", desc: "Discover your cosmic compatibility with any zodiac sign through AI analysis.", link: "/compatibility" },
  { icon: Moon, title: "Moon Phase Tracker", desc: "Track lunar cycles and understand how moon phases influence your energy.", link: "/moon-phase" },
];

const Landing = () => (
  <div className="relative min-h-screen cosmic-gradient overflow-hidden">
    <StarField />
    <div className="relative z-10">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">AI-Powered Astrology</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient-gold">Cosmo</span>
            <span className="text-gradient-purple">Sphere</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Unlock the mysteries of the cosmos. AI-driven horoscopes, birth charts, and celestial insights personalized just for you.
          </p>

          {/* Zodiac Wheel */}
          <div className="relative w-48 h-48 mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s", animation: "float 6s ease-in-out infinite" }}>
            <div className="absolute inset-0 rounded-full border-2 border-accent/30" />
            <div className="absolute inset-3 rounded-full border border-highlight/20" />
            <div className="absolute inset-6 rounded-full border border-primary/40" />
            {["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"].map((s, i) => {
              const angle = (i * 30 - 90) * (Math.PI / 180);
              const r = 85;
              return (
                <span
                  key={i}
                  className="absolute text-lg"
                  style={{
                    left: `calc(50% + ${Math.cos(angle) * r}px - 10px)`,
                    top: `calc(50% + ${Math.sin(angle) * r}px - 10px)`,
                    color: i % 3 === 0 ? "hsl(51,100%,50%)" : i % 3 === 1 ? "hsl(330,100%,71%)" : "hsl(275,100%,60%)",
                  }}
                >
                  {s}
                </span>
              );
            })}
            <div className="absolute inset-0 flex items-center justify-center">
              <Moon className="w-8 h-8 text-accent" />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/login" className="glow-button text-foreground">
              Login
            </Link>
            <Link to="/signup" className="glow-button-accent">
              Sign Up
            </Link>
            <Link to="/dashboard" className="glow-button-highlight">
              Try Bypass Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="font-display text-3xl sm:text-4xl text-center mb-12 text-gradient-gold">
          Cosmic Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Link
              key={i}
              to={f.link}
              className="glass-card-hover p-6 group"
            >
              <f.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-display text-base text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
              <span className="inline-flex items-center text-xs text-accent group-hover:gap-2 transition-all">
                Explore <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Landing;
