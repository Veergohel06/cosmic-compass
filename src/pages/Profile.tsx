import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { User } from "lucide-react";

const Profile = () => {
  const [form, setForm] = useState({
    name: "Cosmic Traveler",
    email: "cosmic@cosmosphere.ai",
    dob: "1995-08-15",
    tob: "06:30",
    pob: "Mumbai, India",
    sign: "Leo",
  });

  const update = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

  return (
    <div className="relative min-h-screen cosmic-gradient">
      <StarField />
      <Navbar />
      <main className="relative z-10 pt-24 pb-8 px-4 max-w-2xl mx-auto">
        <h1 className="font-display text-3xl text-gradient-gold mb-2">Profile</h1>
        <p className="text-muted-foreground mb-8">Your cosmic identity</p>

        <div className="glass-card p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
              <User className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h2 className="font-display text-lg text-foreground">{form.name}</h2>
              <p className="text-sm text-accent">{form.sign} ♌</p>
            </div>
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
                <input
                  type={f.type}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => update(f.key, e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-glass-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            ))}
          </div>

          <button className="w-full glow-button text-foreground mt-6">Update Profile</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
