import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { Calculator, Utensils } from "lucide-react";

const BMITrackerPage = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const [meals, setMeals] = useState({ morning: "", breakfast: "", lunch: "", dinner: "" });
  const [totalCalories, setTotalCalories] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w) return;
    const result = w / (h * h);
    setBmi(parseFloat(result.toFixed(1)));
    if (result < 18.5) setBmiCategory("Underweight");
    else if (result < 25) setBmiCategory("Normal");
    else if (result < 30) setBmiCategory("Overweight");
    else setBmiCategory("Obese");
  };

  const calculateCalories = () => {
    const total = Object.values(meals).reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
    setTotalCalories(total);
  };

  const calorieGoal = 2200;
  const caloriePercentage = totalCalories ? Math.min((totalCalories / calorieGoal) * 100, 100) : 0;

  const getBmiColor = () => {
    if (!bmiCategory) return "text-muted-foreground";
    if (bmiCategory === "Normal") return "neon-text-blue";
    if (bmiCategory === "Underweight") return "text-accent";
    return "neon-text-red";
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all";

  return (
    <div className="page-container section-padding max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider animate-slide-up">
          BMI & <span className="neon-text-red">Calories</span> Tracker
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* BMI Calculator */}
        <GlassCard hover={false}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">BMI Calculator</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-1 font-body">Height (cm)</label>
              <input type="number" placeholder="e.g. 175" value={height} onChange={(e) => setHeight(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1 font-body">Weight (kg)</label>
              <input type="number" placeholder="e.g. 70" value={weight} onChange={(e) => setWeight(e.target.value)} className={inputClass} />
            </div>
            <button onClick={calculateBMI} className="gradient-btn w-full text-center">
              Calculate BMI
            </button>
          </div>

          {bmi !== null && (
            <div className="mt-6 text-center p-6 rounded-xl bg-secondary/50 animate-slide-up">
              <p className="text-muted-foreground text-sm mb-1">Your BMI</p>
              <p className={`text-5xl font-heading font-bold ${getBmiColor()}`}>{bmi}</p>
              <p className={`text-lg font-heading uppercase tracking-wider mt-2 ${getBmiColor()}`}>{bmiCategory}</p>
            </div>
          )}
        </GlassCard>

        {/* Calories Tracker */}
        <GlassCard hover={false}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Utensils className="h-6 w-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">Calories Tracker</h2>
          </div>

          <div className="space-y-4">
            {(["morning", "breakfast", "lunch", "dinner"] as const).map((meal) => (
              <div key={meal}>
                <label className="block text-sm text-muted-foreground mb-1 font-body capitalize">{meal} (kcal)</label>
                <input
                  type="number"
                  placeholder="e.g. 300"
                  value={meals[meal]}
                  onChange={(e) => setMeals({ ...meals, [meal]: e.target.value })}
                  className={inputClass}
                />
              </div>
            ))}
            <button onClick={calculateCalories} className="gradient-btn-blue w-full text-center">
              Calculate Total
            </button>
          </div>

          {totalCalories !== null && (
            <div className="mt-6 animate-slide-up">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Daily Intake</span>
                <span className="text-sm font-heading text-foreground">{totalCalories} / {calorieGoal} kcal</span>
              </div>
              <div className="h-4 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-neon-blue transition-all duration-1000 ease-out"
                  style={{ width: `${caloriePercentage}%` }}
                />
              </div>
              <p className="text-center mt-3 text-lg font-heading">
                <span className="neon-text-blue">{totalCalories}</span>
                <span className="text-muted-foreground text-sm"> kcal total</span>
              </p>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
};

export default BMITrackerPage;
