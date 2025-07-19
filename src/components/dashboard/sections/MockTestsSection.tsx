import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  FileText, 
  CheckCircle, 
  Clock, 
  Star,
  Trophy,
  Target,
  Calendar,
  TrendingUp
} from "lucide-react";

interface MockTestsSectionProps {
  onBack: () => void;
}

const MockTestsSection = ({ onBack }: MockTestsSectionProps) => {
  const [activeTab, setActiveTab] = useState('completed');

  // Mock data for mock tests
  const completedTests = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      category: "Technical",
      score: 85,
      totalQuestions: 50,
      correctAnswers: 42,
      duration: "90 min",
      completedDate: "2024-07-18",
      rank: "85th percentile"
    },
    {
      id: 2,
      title: "React.js Assessment",
      category: "Framework",
      score: 92,
      totalQuestions: 40,
      correctAnswers: 37,
      duration: "75 min",
      completedDate: "2024-07-15",
      rank: "92nd percentile"
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      category: "DSA",
      score: 78,
      totalQuestions: 30,
      correctAnswers: 23,
      duration: "120 min",
      completedDate: "2024-07-12",
      rank: "78th percentile"
    },
    {
      id: 4,
      title: "System Design Basics",
      category: "System Design",
      score: 88,
      totalQuestions: 25,
      correctAnswers: 22,
      duration: "60 min",
      completedDate: "2024-07-10",
      rank: "88th percentile"
    }
  ];

  const upcomingTests = [
    {
      id: 5,
      title: "Node.js Backend Development",
      category: "Backend",
      questions: 45,
      duration: "100 min",
      scheduledDate: "2024-07-25",
      difficulty: "Intermediate"
    },
    {
      id: 6,
      title: "Database Design & SQL",
      category: "Database",
      questions: 35,
      duration: "80 min",
      scheduledDate: "2024-07-28",
      difficulty: "Advanced"
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 75) return 'text-blue-600 bg-blue-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const stats = {
    totalCompleted: completedTests.length,
    averageScore: Math.round(completedTests.reduce((acc, test) => acc + test.score, 0) / completedTests.length),
    bestScore: Math.max(...completedTests.map(test => test.score)),
    totalQuestions: completedTests.reduce((acc, test) => acc + test.totalQuestions, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div>
          <h2 className="text-2xl font-bold">Mock Tests</h2>
          <p className="text-muted-foreground">Track your test performance and progress</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-2">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-700">{stats.totalCompleted}</div>
            <div className="text-sm text-blue-600">Tests Completed</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-700">{stats.averageScore}%</div>
            <div className="text-sm text-green-600">Average Score</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-yellow-200">
          <CardContent className="p-4 text-center">
            <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-2">
              <Trophy className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-yellow-700">{stats.bestScore}%</div>
            <div className="text-sm text-yellow-600">Best Score</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
          <CardContent className="p-4 text-center">
            <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-2">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-700">{stats.totalQuestions}</div>
            <div className="text-sm text-purple-600">Questions Solved</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Card>
        <CardHeader>
          <div className="flex gap-2">
            <Button
              variant={activeTab === 'completed' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('completed')}
            >
              Completed Tests
            </Button>
            <Button
              variant={activeTab === 'upcoming' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Tests
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {activeTab === 'completed' ? (
            <div className="space-y-4">
              {completedTests.map((test) => (
                <div
                  key={test.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{test.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{test.category}</Badge>
                        <Badge className={getScoreColor(test.score)}>
                          {test.score}%
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {test.correctAnswers}/{test.totalQuestions} correct • {test.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right space-y-1">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">{test.rank}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {test.completedDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {upcomingTests.map((test) => (
                <div
                  key={test.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{test.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{test.category}</Badge>
                        <Badge className={getDifficultyColor(test.difficulty)}>
                          {test.difficulty}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {test.questions} questions • {test.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right space-y-2">
                    <div className="text-sm font-medium">
                      {test.scheduledDate}
                    </div>
                    <Button size="sm">
                      Start Test
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MockTestsSection;