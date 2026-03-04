import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { Check, Snowflake, Fan } from "lucide-react";

const plans = [
  {
    name: "Basic Plan",
    tag: "Non-AC",
    price: 999,
    ac: false,
    features: ["Access to gym equipment", "Morning & Evening access", "Locker room access", "Free WiFi"],
  },
  {
    name: "Standard Plan",
    tag: "AC",
    price: 1499,
    ac: true,
    popular: true,
    features: ["AC workout area", "Cardio + Weights", "Locker facility", "Free parking", "Steam room access"],
  },
  {
    name: "Premium Plan",
    tag: "AC + Trainer",
    price: 2499,
    ac: true,
    features: ["Personal Trainer", "Custom Diet Plan", "All facility access", "Priority booking", "Supplement discounts", "Body composition analysis"],
  },
];

const timings = ["5 AM – 10 AM", "10 AM – 3 PM", "4 PM – 9 PM"];

const MembershipPage = () => {
  const [acFilter, setAcFilter] = useState<"all" | "ac" | "nonac">("all");
  const [selectedTiming, setSelectedTiming] = useState(timings[0]);

  const filtered = plans.filter((p) => {
    if (acFilter === "ac") return p.ac;
    if (acFilter === "nonac") return !p.ac;
    return true;
  });

  return (
    <div className="page-container section-padding max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider animate-slide-up">
          Membership <span className="neon-text-red">Plans</span>
        </h1>
        <p className="text-muted-foreground mt-4 animate-slide-up-delay-1">Choose the plan that fits your goals</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up-delay-2">
        <div className="flex gap-2">
          {([["all", "All"], ["ac", "AC"], ["nonac", "Non-AC"]] as const).map(([val, label]) => (
            <button
              key={val}
              onClick={() => setAcFilter(val)}
              className={`px-5 py-2 rounded-lg font-heading text-sm uppercase tracking-wider transition-all duration-300 ${
                acFilter === val ? "gradient-btn" : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {val === "ac" && <Snowflake className="inline h-4 w-4 mr-1" />}
              {val === "nonac" && <Fan className="inline h-4 w-4 mr-1" />}
              {label}
            </button>
          ))}
        </div>

        <select
          value={selectedTiming}
          onChange={(e) => setSelectedTiming(e.target.value)}
          className="px-4 py-2 rounded-lg bg-secondary border border-glass-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {timings.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {filtered.map((plan) => (
          <GlassCard
            key={plan.name}
            className={`relative flex flex-col ${plan.popular ? "border-primary/40 shadow-neon-red" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-heading uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-heading uppercase tracking-wider mb-3">
                {plan.tag}
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wider">{plan.name}</h3>
              <div className="mt-3">
                <span className="text-4xl font-heading font-bold neon-text-red">₹{plan.price}</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
            </div>

            <ul className="space-y-3 flex-1 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <p className="text-xs text-muted-foreground text-center mb-4">
              Selected timing: {selectedTiming}
            </p>

            <button className="gradient-btn w-full text-center">Join Now</button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default MembershipPage;
