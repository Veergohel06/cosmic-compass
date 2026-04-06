import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StarField from "@/components/StarField";
import { Sparkles } from "lucide-react";

const Signup = () => {
  const [form, setForm] = useState({ name: "", dob: "", tob: "", pob: "", email: "", password: "" });
  const navigate = useNavigate();

  const update = (key: string, val: string) => setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const fields = [
    { key: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
    { key: "dob", label: "Date of Birth", type: "date", placeholder: "" },
    { key: "tob", label: "Time of Birth", type: "time", placeholder: "" },
    { key: "pob", label: "Place of Birth", type: "text", placeholder: "New York, USA" },
    { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
    { key: "password", label: "Password", type: "password", placeholder: "••••••••" },
  ];

  return (
    <div className="relative min-h-screen cosmic-gradient flex items-center justify-center px-4 py-20">
      <StarField />
      <div className="relative z-10 w-full max-w-md">
        <div className="glass-card p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="font-display text-xl text-gradient-gold">CosmoSphere</span>
          </div>
          <h2 className="font-display text-2xl text-center text-foreground mb-6">Create Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((f) => (
              <div key={f.key}>
                <label className="block text-sm text-muted-foreground mb-1">{f.label}</label>
                <input
                  type={f.type}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => update(f.key, e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder={f.placeholder}
                />
              </div>
            ))}
            <button type="submit" className="w-full glow-button text-foreground">
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-accent hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
