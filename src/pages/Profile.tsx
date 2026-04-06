import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import AnimatedPage, { fadeInUp, staggerContainer } from "@/components/AnimatedPage";
import { motion } from "framer-motion";
import { User, LogOut, Save, Camera } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { getZodiacSign, zodiacSymbols } from "@/utils/zodiacUtils";

const Profile = () => {
  const [form, setForm] = useState({
    name: "Cosmic Traveler",
    email: "cosmic@cosmosphere.ai",
    dob: "1995-08-15",
    tob: "06:30",
    pob: "Mumbai, India",
  });
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  const update = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

  const dobParts = form.dob.split("-");
  const sign = dobParts.length === 3 ? getZodiacSign(parseInt(dobParts[1]), parseInt(dobParts[2])) : "Leo";
  const symbol = zodiacSymbols[sign] || "♌";

  const handleSave = () => {
    if (!form.name || !form.email) { toast.error("Name and email are required"); return; }
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast.success("Profile updated successfully! ✨");
    }, 1200);
  };

  const handleLogout = () => {
    toast.info("Logging out...");
    setTimeout(() => navigate("/"), 600);
  };

  return (
    <AnimatedPage className="relative min-h-screen cosmic-gradient">
      <StarField />
      <Navbar />
      <main className="relative z-10 pt-24 pb-8 px-4 max-w-2xl mx-auto">
        <motion.div variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={fadeInUp}>
            <h1 className="font-display text-3xl text-gradient-gold mb-2">Profile</h1>
            <p className="text-muted-foreground mb-8">Your cosmic identity</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card p-8">
            {/* Avatar Section */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative group">
                <div className="w-20 h-20 rounded-full bg-primary/30 flex items-center justify-center border-2 border-accent/30">
                  <User className="w-10 h-10 text-accent" />
                </div>
                <button onClick={() => toast.info("Photo upload coming soon!")}
                  className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-3.5 h-3.5" />
                </button>
              </div>
              <div>
                <h2 className="font-display text-lg text-foreground">{form.name}</h2>
                <p className="text-sm text-accent">{sign} {symbol}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{form.email}</p>
              </div>
            </div>

            {/* Zodiac Badge */}
            <div className="glass-card p-4 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{symbol}</span>
                <div>
                  <p className="text-sm text-foreground font-medium">{sign}</p>
                  <p className="text-xs text-muted-foreground">Based on your date of birth</p>
                </div>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">Verified</span>
            </div>

            <div className="space-y-4">
              {[
                { key: "name", label: "Full Name", type: "text" },
                { key: "email", label: "Email", type: "email" },
                { key: "dob", label: "Date of Birth", type: "date" },
                { key: "tob", label: "Time of Birth", type: "time" },
                { key: "pob", label: "Place of Birth", type: "text" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-sm text-muted-foreground mb-1">{f.label}</label>
                  <input type={f.type} value={form[f.key as keyof typeof form]} onChange={(e) => update(f.key, e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={handleSave} disabled={saving} className="flex-1 glow-button text-foreground disabled:opacity-50">
                {saving ? (
                  <span className="flex items-center justify-center gap-2"><span className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />Saving...</span>
                ) : (<><Save className="w-4 h-4 inline mr-2" />Update Profile</>)}
              </button>
              <button onClick={handleLogout} className="px-4 py-3 rounded-lg bg-destructive/20 text-destructive border border-destructive/30 hover:bg-destructive/30 transition-colors">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </AnimatedPage>
  );
};

export default Profile;
