import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  TrendingUp, 
  BookOpen, 
  Award,
  BarChart3,
  Calendar,
  Download
} from "lucide-react";

interface StudentProgress {
  id: string;
  name: string;
  grade: number;
  totalPoints: number;
  lessonsCompleted: number;
  streak: number;
  subjects: {
    math: number;
    science: number;
    technology: number;
    engineering: number;
  };
}

const TeacherDashboard = () => {
  const classStats = {
    totalStudents: 28,
    activeStudents: 24,
    averageEngagement: 78,
    lessonsCompleted: 156,
    totalPoints: 18450
  };

  const recentActivity = [
    { student: "Maria Santos", action: "Completed Math Module 3", time: "2 hours ago", points: 85 },
    { student: "Alex Kumar", action: "Earned Science Explorer badge", time: "4 hours ago", points: 50 },
    { student: "Carlos Lopez", action: "Finished Engineering Challenge", time: "1 day ago", points: 120 },
    { student: "Priya Patel", action: "Started Technology Course", time: "1 day ago", points: 0 }
  ];

  const topPerformers: StudentProgress[] = [
    {
      id: "1",
      name: "Maria Santos",
      grade: 9,
      totalPoints: 1250,
      lessonsCompleted: 23,
      streak: 12,
      subjects: { math: 95, science: 78, technology: 45, engineering: 67 }
    },
    {
      id: "2", 
      name: "Alex Kumar",
      grade: 8,
      totalPoints: 1180,
      lessonsCompleted: 21,
      streak: 8,
      subjects: { math: 88, science: 92, technology: 56, engineering: 73 }
    },
    {
      id: "3",
      name: "Carlos Lopez", 
      grade: 10,
      totalPoints: 1090,
      lessonsCompleted: 19,
      streak: 15,
      subjects: { math: 76, science: 82, technology: 78, engineering: 89 }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Teacher Dashboard</h1>
              <p className="text-muted-foreground">Grade 6-12 STEM Analytics</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </Button>
              <Button className="bg-gradient-primary text-primary-foreground gap-2">
                <Calendar className="w-4 h-4" />
                Schedule Class
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold text-foreground">{classStats.totalStudents}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Today</p>
                <p className="text-2xl font-bold text-foreground">{classStats.activeStudents}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100">
                <BarChart3 className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Engagement</p>
                <p className="text-2xl font-bold text-foreground">{classStats.averageEngagement}%</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-100">
                <BookOpen className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Lessons</p>
                <p className="text-2xl font-bold text-foreground">{classStats.lessonsCompleted}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-100">
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Points</p>
                <p className="text-2xl font-bold text-foreground">{classStats.totalPoints.toLocaleString()}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Top Performers */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-6">Top Performers</h3>
              <div className="space-y-4">
                {topPerformers.map((student, index) => (
                  <div key={student.id} className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-gradient-primary text-primary-foreground">
                          #{index + 1}
                        </Badge>
                        <div>
                          <h4 className="font-semibold text-foreground">{student.name}</h4>
                          <p className="text-sm text-muted-foreground">Grade {student.grade}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-foreground">{student.totalPoints} pts</p>
                        <p className="text-sm text-muted-foreground">{student.streak} day streak</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Math</p>
                        <Progress value={student.subjects.math} className="h-2" />
                        <p className="text-xs text-foreground mt-1">{student.subjects.math}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Science</p>
                        <Progress value={student.subjects.science} className="h-2" />
                        <p className="text-xs text-foreground mt-1">{student.subjects.science}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Tech</p>
                        <Progress value={student.subjects.technology} className="h-2" />
                        <p className="text-xs text-foreground mt-1">{student.subjects.technology}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Engineering</p>
                        <Progress value={student.subjects.engineering} className="h-2" />
                        <p className="text-xs text-foreground mt-1">{student.subjects.engineering}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
                    <div className="p-1 rounded-full bg-primary/20">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground text-sm">{activity.student}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                        {activity.points > 0 && (
                          <Badge variant="outline" className="text-xs">
                            +{activity.points} pts
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;