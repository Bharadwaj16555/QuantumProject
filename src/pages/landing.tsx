import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Star, 
  Trophy,
  Zap,
  Calculator,
  Atom,
  Cpu,
  Hammer,
  Users,
  Globe,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Interactive Mathematics",
      description: "Solve problems with step-by-step guidance and visual aids"
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Science Experiments",
      description: "Virtual labs and simulations for hands-on learning"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Technology Skills",
      description: "Programming, coding, and digital literacy courses"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Engineering Design",
      description: "Problem-solving and design thinking challenges"
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, label: "Active Learners", value: "50K+" },
    { icon: <Trophy className="w-6 h-6" />, label: "Achievements Earned", value: "100K+" },
    { icon: <Star className="w-6 h-6" />, label: "Average Rating", value: "4.9" },
    { icon: <Globe className="w-6 h-6" />, label: "Countries", value: "25+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Lightbulb className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Quantum</h1>
                <p className="text-xs text-muted-foreground">STEM Learning Platform</p>
              </div>
            </div>
            
            <Button 
              onClick={onGetStarted}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="bg-cover bg-center h-96 md:h-[500px] flex items-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-2xl">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm">
                🚀 Next-Generation STEM Education
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Learn STEM Through<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Gamification
                </span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-lg">
                Interactive challenges, real-time progress tracking, and achievements that make learning Science, Technology, Engineering, and Mathematics engaging and fun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={onGetStarted}
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Learning Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-gradient-primary text-primary-foreground">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Why Choose Quantum?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Everything You Need to Excel in STEM
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with proven educational methods to create an immersive learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-game transition-all duration-300 group">
                <div className="p-3 rounded-lg bg-gradient-primary/10 text-primary w-fit mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your STEM Learning?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already experiencing the future of education. Start your journey today!
          </p>
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="bg-white text-primary hover:bg-white/90 shadow-lg"
          >
            <Zap className="w-5 h-5 mr-2" />
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Lightbulb className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Quantum</h3>
                <p className="text-xs text-muted-foreground">STEM Learning Platform</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Quantum. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;