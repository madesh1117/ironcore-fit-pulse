import GlassCard from "@/components/GlassCard";
import { Phone, Mail, MapPin, Users, Snowflake, Award, Dumbbell } from "lucide-react";
import { toast } from "sonner";

const features = [
  { icon: Users, title: "Unisex Gym", desc: "Welcoming space for all genders" },
  { icon: Dumbbell, title: "Multipurpose Facility", desc: "Strength, cardio, CrossFit & more" },
  { icon: Snowflake, title: "AC & Non-AC Areas", desc: "Choose your preferred workout zone" },
  { icon: Award, title: "Certified Trainers", desc: "Expert guidance for your fitness journey" },
];

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all";

  return (
    <div className="page-container section-padding max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider animate-slide-up">
          About & <span className="neon-text-red">Contact</span>
        </h1>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((f) => (
          <GlassCard key={f.title} className="text-center">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <f.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold uppercase tracking-wider mb-1">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <GlassCard hover={false}>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider mb-6">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Your Name" className={inputClass} required />
            <input type="email" placeholder="Your Email" className={inputClass} required />
            <input type="tel" placeholder="Phone Number" className={inputClass} />
            <textarea placeholder="Your Message" rows={4} className={inputClass} required />
            <button type="submit" className="gradient-btn w-full text-center">Send Message</button>
          </form>
        </GlassCard>

        {/* Info + Map */}
        <div className="space-y-6">
          <GlassCard hover={false}>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider mb-4">Visit Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">IronCore Fitness Center</p>
                  <p className="text-muted-foreground text-sm">123 MG Road, Near Brigade Gateway, Bangalore 560001</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@ironcorefitness.in</span>
              </div>
            </div>
          </GlassCard>

          {/* Map Placeholder */}
          <GlassCard hover={false} className="!p-0 overflow-hidden">
            <div className="aspect-video bg-secondary flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-2 animate-float" />
                <p className="font-heading text-lg uppercase tracking-wider text-muted-foreground">Google Maps</p>
                <p className="text-sm text-muted-foreground">MG Road, Bangalore</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
