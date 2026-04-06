import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { Sun, Calendar, CalendarDays, Heart, Star, User } from "lucide-react";

const cards = [
  { icon: Sun, title: "Daily Horoscope", link: "/daily", color: "text-accent" },
  { icon: Calendar, title: "Weekly Horoscope", link: "/weekly", color: "text-highlight" },
  { icon: CalendarDays, title: "Monthly Horoscope", link: "/monthly", color: "text-blue-400" },
  { icon: Heart, title: "Compatibility", link: "/compatibility", color: "text-highlight" },
  { icon: Star, title: "Kundli / Birth Chart", link: "/kundli", color: "text-accent" },
  { icon: User, title: "Profile", link: "/profile", color: "text-green-400" },
];

const Dashboard = () => (
  <div className="relative min-h-screen cosmic-gradient">
    <StarField />
    <Navbar />
    <main className="relative z-10 pt-24 pb-8 px-4 max-w-7xl mx-auto">
      <div className="glass-card p-6 mb-8 flex flex-col sm:flex-row items-center gap-4">
        <div className="text-6xl">♌</div>
        <div>
          <p className="text-muted-foreground text-sm">Your Zodiac Sign</p>
          <h2 className="font-display text-2xl text-gradient-gold">Leo</h2>
          <p className="text-muted-foreground text-sm mt-1">Jul 23 - Aug 22 · Fire Element · Ruled by Sun</p>
        </div>
      </div>

      <h2 className="font-display text-xl text-foreground mb-6">Quick Navigation</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {cards.map((c) => (
          <Link key={c.link} to={c.link} className="glass-card-hover p-6 flex items-center gap-4">
            <c.icon className={`w-8 h-8 ${c.color}`} />
            <span className="font-display text-sm text-foreground">{c.title}</span>
          </Link>
        ))}
      </div>

      <h2 className="font-display text-xl text-foreground mb-4">Today's Preview</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="glass-card p-5">
          <h3 className="font-display text-sm text-accent mb-2">Love</h3>
          <p className="text-muted-foreground text-sm">Venus shines on your romantic sector. Express your feelings openly today.</p>
        </div>
        <div className="glass-card p-5">
          <h3 className="font-display text-sm text-highlight mb-2">Career</h3>
          <p className="text-muted-foreground text-sm">A surprise opportunity at work could change your trajectory. Stay alert.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Dashboard;
