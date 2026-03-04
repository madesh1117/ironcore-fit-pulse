import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { ChevronDown, ChevronUp } from "lucide-react";

const workoutData = [
  {
    category: "Chest",
    emoji: "🏋️",
    exercises: [
      { name: "Bench Press", sets: 4, reps: "8-12" },
      { name: "Incline Dumbbell Press", sets: 3, reps: "10-12" },
      { name: "Cable Flyes", sets: 3, reps: "12-15" },
      { name: "Push-Ups", sets: 3, reps: "To Failure" },
    ],
  },
  {
    category: "Back",
    emoji: "💪",
    exercises: [
      { name: "Deadlifts", sets: 4, reps: "6-8" },
      { name: "Pull-Ups", sets: 3, reps: "8-12" },
      { name: "Barbell Rows", sets: 4, reps: "8-10" },
      { name: "Lat Pulldowns", sets: 3, reps: "10-12" },
    ],
  },
  {
    category: "Legs",
    emoji: "🦵",
    exercises: [
      { name: "Squats", sets: 4, reps: "8-12" },
      { name: "Leg Press", sets: 3, reps: "10-12" },
      { name: "Romanian Deadlifts", sets: 3, reps: "10-12" },
      { name: "Leg Curls", sets: 3, reps: "12-15" },
    ],
  },
  {
    category: "Shoulders",
    emoji: "🎯",
    exercises: [
      { name: "Overhead Press", sets: 4, reps: "8-10" },
      { name: "Lateral Raises", sets: 3, reps: "12-15" },
      { name: "Face Pulls", sets: 3, reps: "15-20" },
      { name: "Shrugs", sets: 3, reps: "12-15" },
    ],
  },
  {
    category: "Arms",
    emoji: "💪",
    exercises: [
      { name: "Barbell Curls", sets: 3, reps: "10-12" },
      { name: "Tricep Dips", sets: 3, reps: "10-12" },
      { name: "Hammer Curls", sets: 3, reps: "12" },
      { name: "Skull Crushers", sets: 3, reps: "10-12" },
    ],
  },
  {
    category: "Abs",
    emoji: "🔥",
    exercises: [
      { name: "Crunches", sets: 3, reps: "20" },
      { name: "Planks", sets: 3, reps: "60 sec" },
      { name: "Leg Raises", sets: 3, reps: "15" },
      { name: "Russian Twists", sets: 3, reps: "20" },
    ],
  },
  {
    category: "Cardio",
    emoji: "🏃",
    exercises: [
      { name: "Treadmill Run", sets: 1, reps: "30 min" },
      { name: "Jump Rope", sets: 3, reps: "5 min" },
      { name: "Cycling", sets: 1, reps: "20 min" },
      { name: "Burpees", sets: 3, reps: "15" },
    ],
  },
];

const WorkoutsPage = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <div className="page-container section-padding max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider animate-slide-up">
          Workout <span className="neon-text-red">Programs</span>
        </h1>
        <p className="text-muted-foreground mt-4 animate-slide-up-delay-1">Click a category to see exercises</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutData.map((workout) => (
          <GlassCard
            key={workout.category}
            className="cursor-pointer"
          >
            <div
              onClick={() => setOpenCategory(openCategory === workout.category ? null : workout.category)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{workout.emoji}</span>
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wider">{workout.category}</h3>
              </div>
              {openCategory === workout.category ? (
                <ChevronUp className="h-5 w-5 text-primary" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </div>

            {openCategory === workout.category && (
              <div className="mt-4 space-y-3 animate-slide-up">
                {workout.exercises.map((ex) => (
                  <div key={ex.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-sm font-medium text-foreground">{ex.name}</span>
                    <span className="text-xs text-primary font-heading">
                      {ex.sets} × {ex.reps}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default WorkoutsPage;
