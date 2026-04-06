import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StarField from "@/components/StarField";
import AnimatedPage, { fadeInUp, staggerContainer } from "@/components/AnimatedPage";
import { motion } from "framer-motion";
import { Sparkles, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const Signup = () => {
  const [form, setForm] = useState({ name: "", dob: "", tob: "", pob: "", email: "", password: "" });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const update = (key: string, val: string) => setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.dob) {
      toast.error("Please fill in all required fields");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Account created successfully! Welcome to CosmoSphere ✨");
      setTimeout(() => navigate("/dashboard"), 800);
    }, 1500);
  };

  const fields = [
    { key: "name", label: "Full Name *", type: "text", placeholder: "John Doe" },
    { key: "dob", label: "Date of Birth *", type: "date", placeholder: "" },
    { key: "tob", label: "Time of Birth", type: "time", placeholder: "" },
    { key: "pob", label: "Place of Birth", type: "text", placeholder: "New York, USA" },
    { key: "email", label: "Email *", type: "email", placeholder: "your@email.com" },
  ];

  return (
    <AnimatedPage className="relative min-h-screen cosmic-gradient flex items-center justify-center px-4 py-20">
      <StarField />
      <motion.div className="relative z-10 w-full max-w-md" variants={staggerContainer} initial="initial" animate="animate">
        <motion.div variants={fadeInUp} className="glass-card p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="font-display text-xl text-gradient-gold">CosmoSphere</span>
          </div>
          <h2 className="font-display text-2xl text-center text-foreground mb-2">Create Account</h2>
          <p className="text-center text-muted-foreground text-sm mb-6">Begin your celestial journey today</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((f) => (
              <div key={f.key}>
                <label className="block text-sm text-muted-foreground mb-1">{f.label}</label>
                <input type={f.type} value={form[f.key as keyof typeof form]} onChange={(e) => update(f.key, e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder={f.placeholder} />
              </div>
            ))}
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Password *</label>
              <div className="relative">
                <input type={showPw ? "text" : "password"} value={form.password} onChange={(e) => update("password", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all pr-12"
                  placeholder="••••••••" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full glow-button text-foreground disabled:opacity-50">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                  Creating account...
                </span>
              ) : "Sign Up"}
            </button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-accent hover:underline">Login</Link>
          </p>
        </motion.div>
      </motion.div>
    </AnimatedPage>
  );
};

export default Signup;
