import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Trophy, Target, Zap, BookOpen } from "lucide-react";

interface GameStatsProps {
  totalPoints: number;
  streak: number;
  lessonsCompleted: number;
  achievements: number;
  level: number;
  className?: string;
}

export const GameStats: React.FC<GameStatsProps> = ({
  totalPoints,
  streak,
  lessonsCompleted,
  achievements,
  level,
  className
}) => {
  const stats = [
    {
      icon: <Trophy className="w-5 h-5" />,
      label: "Points",
      value: totalPoints.toLocaleString(),
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      label: "Streak",
      value: `${streak} days`,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      label: "Lessons",
      value: lessonsCompleted,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: <Target className="w-5 h-5" />,
      label: "Badges",
      value: achievements,
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">Your Progress</h2>
        <Badge className="bg-gradient-primary text-primary-foreground px-3 py-1">
          Level {level}
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={cn(
              "p-2 rounded-lg",
              stat.bgColor
            )}>
              <div className={stat.color}>
                {stat.icon}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="font-bold text-foreground">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};