import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Target, 
  CheckCircle, 
  Clock, 
  Star,
  Trophy,
  Users,
  Calendar,
  TrendingUp,
  Eye,
  Award
} from "lucide-react";

interface MockAssessmentSectionProps {
  onBack: () => void;
}

const MockAssessmentSection = ({ onBack }: MockAssessmentSectionProps) => {
  const [activeTab, setActiveTab] = useState('completed');

  // Mock data for assessments
  const completedAssessments = [
    {
      id: 1,
      title: "Full Stack Developer Assessment",
      type: "Comprehensive",
      score: 87,
      maxScore: 100,
      rank: "Top 15%",
      completedDate: "2024-07-16",
      duration: "3 hours",
      sections: [
        { name: "Frontend", score: 92 },
        { name: "Backend", score: 85 },
        { name: "Database", score: 88 },
        { name: "System Design", score: 82 }
      ],
      feedback: "Excellent problem-solving skills. Strong in React and Node.js.",
      interviewer: "Senior Tech Lead"
    },
    {
      id: 2,
      title: "Software Engineer Mock Interview",
      type: "Live Interview",
      score: 78,
      maxScore: 100,
      rank: "Top 25%",
      completedDate: "2024-07-10",
      duration: "1.5 hours",
      sections: [
        { name: "Coding", score: 82 },
        { name: "System Design", score: 75 },
        { name: "Behavioral", score: 80 },
        { name: "Communication", score: 78 }
      ],
      feedback: "Good technical skills. Improve system design thinking.",
      interviewer: "Senior Engineer"
    },
    {
      id: 3,
      title: "Data Structures Deep Dive",
      type: "Technical",
      score: 94,
      maxScore: 100,
      rank: "Top 8%",
      completedDate: "2024-07-05",
      duration: "2 hours",
      sections: [
        { name: "Arrays & Strings", score: 96 },
        { name: "Trees & Graphs", score: 92 },
        { name: "Dynamic Programming", score: 94 },
        { name: "Complexity Analysis", score: 94 }
      ],
      feedback: "Outstanding algorithmic thinking and implementation.",
      interviewer: "Algorithm Expert"
    }
  ];

  const upcomingAssessments = [
    {
      id: 4,
      title: "Senior Developer Assessment",
      type: "Comprehensive",
      scheduledDate: "2024-07-30",
      duration: "4 hours",
      interviewer: "Tech Director",
      description: "Advanced technical assessment covering architecture, leadership, and system design.",
      difficulty: "Advanced"
    },
    {
      id: 5,
      title: "Frontend Specialist Review",
      type: "Specialized",
      scheduledDate: "2024-08-02",
      duration: "2 hours",
      interviewer: "Frontend Lead",
      description: "Deep dive into modern frontend technologies and best practices.",
      difficulty: "Intermediate"
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-blue-600 bg-blue-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Comprehensive': return 'bg-purple-100 text-purple-700';
      case 'Live Interview': return 'bg-blue-100 text-blue-700';
      case 'Technical': return 'bg-green-100 text-green-700';
      case 'Specialized': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
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
    totalCompleted: completedAssessments.length,
    averageScore: Math.round(completedAssessments.reduce((acc, assessment) => acc + assessment.score, 0) / completedAssessments.length),
    bestScore: Math.max(...completedAssessments.map(assessment => assessment.score)),
    averageRank: "Top 16%"
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
          <h2 className="text-2xl font-bold">Mock Assessments</h2>
          <p className="text-muted-foreground">Comprehensive skill evaluations and interviews</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
          <CardContent className="p-4 text-center">
            <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-2">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-700">{stats.totalCompleted}</div>
            <div className="text-sm text-purple-600">Assessments</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-700">{stats.averageScore}%</div>
            <div className="text-sm text-green-600">Avg Score</div>
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

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-2">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-700">{stats.averageRank}</div>
            <div className="text-sm text-blue-600">Avg Rank</div>
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
              Completed Assessments
            </Button>
            <Button
              variant={activeTab === 'upcoming' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Assessments
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {activeTab === 'completed' ? (
            <div className="space-y-6">
              {completedAssessments.map((assessment) => (
                <Card key={assessment.id} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-lg">{assessment.title}</h4>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className={getTypeColor(assessment.type)}>
                            {assessment.type}
                          </Badge>
                          <Badge className={getScoreColor(assessment.score)}>
                            {assessment.score}/{assessment.maxScore}
                          </Badge>
                          <Badge variant="outline" className="text-yellow-600">
                            <Trophy className="w-3 h-3 mr-1" />
                            {assessment.rank}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {assessment.duration}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {assessment.completedDate}
                        </div>
                      </div>
                    </div>

                    {/* Section Scores */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      {assessment.sections.map((section, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{section.name}</span>
                            <span className="font-medium">{section.score}%</span>
                          </div>
                          <Progress value={section.score} className="h-2" />
                        </div>
                      ))}
                    </div>

                    {/* Feedback */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium">{assessment.interviewer}</span>
                      </div>
                      <p className="text-sm text-gray-700">{assessment.feedback}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {upcomingAssessments.map((assessment) => (
                <div
                  key={assessment.id}
                  className="flex items-center justify-between p-6 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{assessment.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={getTypeColor(assessment.type)}>
                          {assessment.type}
                        </Badge>
                        <Badge className={getDifficultyColor(assessment.difficulty)}>
                          {assessment.difficulty}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {assessment.duration} • {assessment.interviewer}
                      </div>
                      <p className="text-sm text-gray-600 mt-1 max-w-md">
                        {assessment.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right space-y-2">
                    <div className="text-sm font-medium">
                      {assessment.scheduledDate}
                    </div>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        Details
                      </Button>
                      <Button size="sm">
                        Join Assessment
                      </Button>
                    </div>
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

export default MockAssessmentSection;