import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

interface AchievementBadgeProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  type?: "gold" | "silver" | "bronze" | "default";
  earned?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  title,
  description,
  icon,
  type = "default",
  earned = false,
  className,
  style
}) => {
  const typeStyles = {
    gold: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white border-yellow-500",
    silver: "bg-gradient-to-r from-gray-300 to-gray-500 text-white border-gray-400",
    bronze: "bg-gradient-to-r from-amber-600 to-amber-800 text-white border-amber-700",
    default: "bg-gradient-primary text-primary-foreground border-primary"
  };

  return (
    <div 
      className={cn(
        "relative p-4 rounded-lg border-2 transition-all duration-300",
        earned 
          ? cn("shadow-glow animate-bounce-in", typeStyles[type])
          : "bg-muted/50 border-border text-muted-foreground opacity-60",
        "hover:scale-105 cursor-pointer",
        className
      )}
      style={style}
    >
      {icon && (
        <div className="flex justify-center mb-2">
          <div className={cn(
            "p-2 rounded-full",
            earned ? "bg-white/20" : "bg-muted"
          )}>
            {icon}
          </div>
        </div>
      )}
      <h3 className="font-semibold text-center text-sm mb-1">{title}</h3>
      {description && (
        <p className="text-xs text-center opacity-80">{description}</p>
      )}
      {earned && (
        <div className="absolute -top-2 -right-2">
          <Badge className="bg-success text-success-foreground text-xs px-2 py-1">
            ✓
          </Badge>
        </div>
      )}
    </div>
  );
};