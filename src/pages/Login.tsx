import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StarField from "@/components/StarField";
import AnimatedPage, { fadeInUp, staggerContainer } from "@/components/AnimatedPage";
import { motion } from "framer-motion";
import { Sparkles, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Welcome back! Redirecting to dashboard...");
      setTimeout(() => navigate("/dashboard"), 800);
    }, 1200);
  };

  const handleBypass = () => {
    toast.info("Bypassing login... Entering guest mode");
    setTimeout(() => navigate("/dashboard"), 600);
  };

  return (
    <AnimatedPage className="relative min-h-screen cosmic-gradient flex items-center justify-center px-4">
      <StarField />
      <motion.div className="relative z-10 w-full max-w-md" variants={staggerContainer} initial="initial" animate="animate">
        <motion.div variants={fadeInUp} className="glass-card p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="font-display text-xl text-gradient-gold">CosmoSphere</span>
          </div>
          <h2 className="font-display text-2xl text-center text-foreground mb-2">Welcome Back</h2>
          <p className="text-center text-muted-foreground text-sm mb-6">Sign in to continue your cosmic journey</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Password</label>
              <div className="relative">
                <input type={showPw ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all pr-12"
                  placeholder="••••••••" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                <input type="checkbox" className="rounded border-glass-border bg-muted/50" />
                Remember me
              </label>
              <button type="button" onClick={() => toast.info("Password reset link sent!")} className="text-accent hover:underline">
                Forgot password?
              </button>
            </div>
            <button type="submit" disabled={loading} className="w-full glow-button text-foreground disabled:opacity-50">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : "Login"}
            </button>
            <button type="button" onClick={handleBypass} className="w-full glow-button-highlight">
              Bypass Login →
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-accent hover:underline">Sign Up</Link>
          </p>
        </motion.div>
      </motion.div>
    </AnimatedPage>
  );
};

export default Login;
