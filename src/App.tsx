import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Daily from "./pages/Daily";
import Weekly from "./pages/Weekly";
import Monthly from "./pages/Monthly";
import Zodiac from "./pages/Zodiac";
import Kundli from "./pages/Kundli";
import Compatibility from "./pages/Compatibility";
import MoonPhase from "./pages/MoonPhase";
import Planets from "./pages/Planets";
import Remedies from "./pages/Remedies";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/monthly" element={<Monthly />} />
          <Route path="/zodiac" element={<Zodiac />} />
          <Route path="/kundli" element={<Kundli />} />
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/moon-phase" element={<MoonPhase />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/remedies" element={<Remedies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
