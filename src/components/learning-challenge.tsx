import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, Star } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface LearningChallengeProps {
  title: string;
  subject: string;
  difficulty: "Easy" | "Medium" | "Hard";
  points: number;
  questions: Question[];
  onComplete?: (score: number) => void;
  className?: string;
}

export const LearningChallenge: React.FC<LearningChallengeProps> = ({
  title,
  subject,
  difficulty,
  points,
  questions,
  onComplete,
  className
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
      toast.success("Correct! Well done!", {
        duration: 2000,
      });
    } else {
      toast.error("Not quite right. Keep learning!", {
        duration: 2000,
      });
    }

    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Challenge completed
        const finalScore = isCorrect ? score + 1 : score;
        onComplete?.(finalScore);
        toast.success(`Challenge completed! Score: ${finalScore}/${questions.length}`, {
          duration: 3000,
        });
      }
    }, 2000);
  };

  const difficultyColors = {
    Easy: "bg-success text-success-foreground",
    Medium: "bg-warning text-warning-foreground", 
    Hard: "bg-destructive text-destructive-foreground"
  };

  const currentQ = questions[currentQuestion];
  const isCompleted = currentQuestion >= questions.length;

  if (isCompleted) {
    return (
      <Card className={cn("p-6 text-center", className)}>
        <div className="mb-4">
          <Star className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
          <h3 className="text-xl font-bold text-foreground">Challenge Completed!</h3>
          <p className="text-muted-foreground">
            You scored {score} out of {questions.length}
          </p>
        </div>
        <Badge className="bg-gradient-primary text-primary-foreground">
          +{Math.round((score / questions.length) * points)} points earned
        </Badge>
      </Card>
    );
  }

  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subject}</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={difficultyColors[difficulty]}>
            {difficulty}
          </Badge>
          <Badge variant="outline">
            {points} pts
          </Badge>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>Score: {score}/{currentQuestion}</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium text-foreground mb-4">
          {currentQ.question}
        </h4>
        
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={cn(
                "w-full p-4 text-left rounded-lg border-2 transition-all duration-200",
                "hover:border-primary/50 hover:bg-primary/5",
                selectedAnswer === index && !showResult && "border-primary bg-primary/10",
                showResult && selectedAnswer === index && (
                  index === currentQ.correctAnswer 
                    ? "border-success bg-success/10" 
                    : "border-destructive bg-destructive/10"
                ),
                showResult && index === currentQ.correctAnswer && selectedAnswer !== index && 
                  "border-success bg-success/10"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-foreground">{option}</span>
                {showResult && (
                  <>
                    {index === currentQ.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    )}
                    {selectedAnswer === index && index !== currentQ.correctAnswer && (
                      <XCircle className="w-5 h-5 text-destructive" />
                    )}
                  </>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {showResult && (
        <div className="mb-4 p-4 rounded-lg bg-muted/50">
          <p className="text-sm text-muted-foreground">
            <strong>Explanation:</strong> {currentQ.explanation}
          </p>
        </div>
      )}

      <Button 
        onClick={handleNextQuestion}
        disabled={selectedAnswer === null}
        className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
      >
        {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Challenge"}
      </Button>
    </Card>
  );
};