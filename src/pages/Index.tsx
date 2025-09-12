import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SubjectCard } from "@/components/subject-card";
import { GameStats } from "@/components/game-stats";
import { LearningChallenge } from "@/components/learning-challenge";
import { AchievementBadge } from "@/components/ui/achievement-badge";
import { 
  Calculator, 
  Atom, 
  Cpu, 
  Hammer,
  User,
  Bell,
  Menu,
  Trophy,
  Star,
  Lightbulb,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import { OfflineIndicator } from "@/components/offline-indicator";

const Index = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [showChallenge, setShowChallenge] = useState(false);

  // Sample data for the gamified learning platform
  const subjects = [
    {
      id: "math",
      title: "Mathematics",
      description: "Algebra, Geometry, Statistics, and more interactive math challenges",
      icon: <Calculator className="w-6 h-6" />,
      progress: 78,
      totalLessons: 45,
      completedLessons: 35,
      color: "primary" as const
    },
    {
      id: "science", 
      title: "Science",
      description: "Physics, Chemistry, Biology experiments and simulations",
      icon: <Atom className="w-6 h-6" />,
      progress: 65,
      totalLessons: 38,
      completedLessons: 25,
      color: "secondary" as const
    },
    {
      id: "technology",
      title: "Technology",
      description: "Programming, Digital literacy, and Computer fundamentals",
      icon: <Cpu className="w-6 h-6" />,
      progress: 42,
      totalLessons: 32,
      completedLessons: 13,
      color: "accent" as const
    },
    {
      id: "engineering",
      title: "Engineering",
      description: "Design thinking, Problem solving, and Engineering principles",
      icon: <Hammer className="w-6 h-6" />,
      progress: 56,
      totalLessons: 28,
      completedLessons: 16,
      color: "success" as const
    }
  ];

  const achievements = [
    {
      title: "Math Master",
      description: "Complete 50 math problems",
      icon: <Calculator className="w-4 h-4" />,
      type: "gold" as const,
      earned: true
    },
    {
      title: "Science Explorer",
      description: "Finish 10 experiments", 
      icon: <Atom className="w-4 h-4" />,
      type: "silver" as const,
      earned: true
    },
    {
      title: "Code Warrior",
      description: "Write your first program",
      icon: <Cpu className="w-4 h-4" />,
      type: "bronze" as const,
      earned: false
    },
    {
      title: "Problem Solver",
      description: "Solve 25 engineering challenges",
      icon: <Hammer className="w-4 h-4" />,
      type: "default" as const,
      earned: false
    }
  ];

  const sampleQuestions = [
    {
      id: "1",
      question: "What is the result of 2x + 5 = 11?",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      correctAnswer: 1,
      explanation: "To solve 2x + 5 = 11, subtract 5 from both sides: 2x = 6, then divide by 2: x = 3"
    },
    {
      id: "2", 
      question: "Which of these is a prime number?",
      options: ["15", "21", "17", "25"],
      correctAnswer: 2,
      explanation: "17 is a prime number because it can only be divided by 1 and itself without a remainder."
    }
  ];

  const handleSubjectClick = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setShowChallenge(true);
  };

  const handleChallengeComplete = (score: number) => {
    setShowChallenge(false);
    setSelectedSubject(null);
  };

  if (showChallenge && selectedSubject) {
    const subject = subjects.find(s => s.id === selectedSubject);
    return (
      <div className="min-h-screen bg-gradient-background">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="outline" 
            onClick={() => setShowChallenge(false)}
            className="mb-6"
          >
            ← Back to Dashboard
          </Button>
          
          <LearningChallenge
            title="Quick Math Challenge"
            subject={subject?.title || ""}
            difficulty="Medium"
            points={50}
            questions={sampleQuestions}
            onComplete={handleChallengeComplete}
            className="max-w-2xl mx-auto"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Lightbulb className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">EduGame STEM</h1>
                <p className="text-sm text-muted-foreground">Learn • Play • Grow</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <OfflineIndicator />
              <Button 
                variant="outline"
                onClick={() => window.open('/teacher', '_blank')}
                className="hidden md:flex"
              >
                Teacher View
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Hero Section */}
        <div className="relative mb-12 overflow-hidden rounded-2xl">
          <div 
            className="bg-cover bg-center h-64 md:h-80 flex items-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
            <div className="relative z-10 px-8 py-6">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Welcome back, Alex! 🎉
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Ready for Today's<br />STEM Adventure?
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-md">
                Continue your learning journey with interactive challenges and unlock new achievements!
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
                onClick={() => handleSubjectClick("math")}
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* STEM Subjects */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">STEM Subjects</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {subjects.map((subject) => (
                  <SubjectCard
                    key={subject.id}
                    {...subject}
                    onClick={() => handleSubjectClick(subject.id)}
                    className="animate-fade-in"
                  />
                ))}
              </div>
            </section>

            {/* Recent Achievements */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">Achievements</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <AchievementBadge
                    key={index}
                    {...achievement}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Game Stats */}
            <GameStats
              totalPoints={2450}
              streak={7}
              lessonsCompleted={89}
              achievements={12}
              level={8}
              className="animate-fade-in"
            />

            {/* Quick Challenge */}
            <Card className="p-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-accent">
                  <Zap className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-foreground">Daily Challenge</h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">
                Complete today's math challenge and earn 50 bonus points!
              </p>
              
              <Button 
                className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90"
                onClick={() => handleSubjectClick("math")}
              >
                Take Challenge
              </Button>
            </Card>

            {/* Progress Overview */}
            <Card className="p-6 animate-fade-in">
              <h3 className="font-bold text-foreground mb-4">Weekly Goal</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Lessons completed</span>
                  <span className="font-medium text-foreground">12/15</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-gradient-secondary h-3 rounded-full transition-all duration-500"
                    style={{ width: "80%" }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  3 more lessons to complete your weekly goal! 🎯
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;