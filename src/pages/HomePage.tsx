import { Link } from "react-router-dom";
import { Dumbbell, Flame, Zap, UserCheck, ChevronDown } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const services = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build muscle with state-of-the-art equipment and expert guidance." },
  { icon: Flame, title: "Cardio", desc: "Burn calories with treadmills, cycles, and high-intensity training." },
  { icon: Zap, title: "CrossFit", desc: "Push your limits with functional fitness and competitive workouts." },
  { icon: UserCheck, title: "Personal Training", desc: "One-on-one sessions with certified trainers for maximum results." },
];

const HomePage = () => {
  return (
    <div className="page-container">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-gym.jpg')" }}
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-wider animate-slide-up">
            Iron<span className="neon-text-red">Core</span> Fitness
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mt-6 font-body animate-slide-up-delay-1">
            Transform Your Body. Transform Your Life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-slide-up-delay-2">
            <Link to="/memberships" className="gradient-btn text-center">
              Join Now
            </Link>
            <Link to="/memberships" className="gradient-btn-outline text-center">
              View Memberships
            </Link>
          </div>
        </div>

        <button
          onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Services */}
      <section id="services" className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">
            What We <span className="neon-text-red">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Premium facilities for every fitness goal. AC & Non-AC areas available.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <GlassCard key={service.title} className={`text-center animate-slide-up-delay-${Math.min(i, 3)}`}>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold uppercase tracking-wider mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">{service.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gym-training.jpg')" }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">
            Ready to Start Your <span className="neon-text-red">Journey</span>?
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Join our unisex multipurpose gym with certified trainers and world-class equipment.
          </p>
          <Link to="/memberships" className="gradient-btn inline-block mt-8">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
