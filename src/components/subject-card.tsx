import React from "react";
import { Card } from "@/components/ui/card";
import { ProgressRing } from "@/components/ui/progress-ring";
import { cn } from "@/lib/utils";

interface SubjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  color?: "primary" | "secondary" | "accent" | "success";
  onClick?: () => void;
  className?: string;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  title,
  description,
  icon,
  progress,
  totalLessons,
  completedLessons,
  color = "primary",
  onClick,
  className
}) => {
  return (
    <Card 
      className={cn(
        "p-6 cursor-pointer transition-all duration-300 hover:shadow-game hover:-translate-y-1",
        "bg-card/80 backdrop-blur-sm border-border/50",
        "hover:border-primary/30 group",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "p-3 rounded-xl shadow-card transition-colors",
          color === "primary" && "bg-gradient-primary text-primary-foreground",
          color === "secondary" && "bg-gradient-secondary text-secondary-foreground", 
          color === "accent" && "bg-gradient-accent text-accent-foreground",
          color === "success" && "bg-success text-success-foreground"
        )}>
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{completedLessons}</span>
              /{totalLessons} lessons
            </div>
            
            <ProgressRing 
              progress={progress} 
              size={40} 
              strokeWidth={3}
              color={color}
              showPercentage={false}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-muted/30 rounded-full h-2 overflow-hidden">
        <div 
          className={cn(
            "h-full transition-all duration-500 rounded-full",
            color === "primary" && "bg-gradient-primary",
            color === "secondary" && "bg-gradient-secondary",
            color === "accent" && "bg-gradient-accent", 
            color === "success" && "bg-success"
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </Card>
  );
};