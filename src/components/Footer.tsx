import { Link } from "react-router-dom";
import { Dumbbell, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-glass-border bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-7 w-7 text-primary" />
              <span className="font-heading text-xl font-bold tracking-wider text-foreground">
                IRON<span className="neon-text-red">CORE</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transform your body, transform your life. Premium unisex fitness center with AC & Non-AC facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              {["Memberships", "Workouts", "BMI & Calories", "Supplements", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4 uppercase tracking-wider">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@ironcorefitness.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>MG Road, Bangalore 560001</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4 uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
            <p className="text-muted-foreground text-xs mt-4">
              Open: Mon-Sat 5AM - 10PM<br />
              Sunday: 6AM - 12PM
            </p>
          </div>
        </div>

        <div className="border-t border-glass-border mt-10 pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            © 2026 IronCore Fitness. All rights reserved. | Unisex Multipurpose Gym
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
