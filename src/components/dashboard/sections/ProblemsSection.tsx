import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Code, 
  CheckCircle, 
  Clock, 
  Star,
  Trophy,
  Target,
  Zap
} from "lucide-react";

interface ProblemsSectionProps {
  onBack: () => void;
}

const ProblemsSection = ({ onBack }: ProblemsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for solved problems
  const solvedProblems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array",
      timeSpent: "15 min",
      solvedDate: "2024-07-18",
      accuracy: 95,
      attempts: 1
    },
    {
      id: 2,
      title: "Binary Tree Inorder",
      difficulty: "Medium",
      category: "Tree",
      timeSpent: "32 min",
      solvedDate: "2024-07-17",
      accuracy: 88,
      attempts: 2
    },
    {
      id: 3,
      title: "Merge Sort",
      difficulty: "Medium",
      category: "Sorting",
      timeSpent: "28 min",
      solvedDate: "2024-07-16",
      accuracy: 92,
      attempts: 1
    },
    {
      id: 4,
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "Stack",
      timeSpent: "12 min",
      solvedDate: "2024-07-15",
      accuracy: 100,
      attempts: 1
    },
    {
      id: 5,
      title: "Longest Substring",
      difficulty: "Hard",
      category: "String",
      timeSpent: "45 min",
      solvedDate: "2024-07-14",
      accuracy: 85,
      attempts: 3
    }
  ];

  const categories = ['all', 'Array', 'Tree', 'Sorting', 'Stack', 'String'];
  
  const filteredProblems = selectedCategory === 'all' 
    ? solvedProblems 
    : solvedProblems.filter(p => p.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const stats = {
    total: solvedProblems.length,
    easy: solvedProblems.filter(p => p.difficulty === 'Easy').length,
    medium: solvedProblems.filter(p => p.difficulty === 'Medium').length,
    hard: solvedProblems.filter(p => p.difficulty === 'Hard').length,
    avgAccuracy: Math.round(solvedProblems.reduce((acc, p) => acc + p.accuracy, 0) / solvedProblems.length)
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
          <h2 className="text-2xl font-bold">DSA Problems</h2>
          <p className="text-muted-foreground">Track your coding practice progress</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-2">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-700">{stats.total}</div>
            <div className="text-sm text-blue-600">Total Solved</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-700">{stats.easy}</div>
            <div className="text-sm text-green-600">Easy</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-yellow-200">
          <CardContent className="p-4 text-center">
            <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-2">
              <Zap className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-yellow-700">{stats.medium}</div>
            <div className="text-sm text-yellow-600">Medium</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100/50 border-red-200">
          <CardContent className="p-4 text-center">
            <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-2">
              <Trophy className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-red-700">{stats.hard}</div>
            <div className="text-sm text-red-600">Hard</div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Filter by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Problems List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            Solved Problems ({filteredProblems.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredProblems.map((problem) => (
              <div
                key={problem.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{problem.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={getDifficultyColor(problem.difficulty)}>
                        {problem.difficulty}
                      </Badge>
                      <Badge variant="outline">{problem.category}</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="text-right space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {problem.timeSpent}
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">{problem.accuracy}%</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {problem.attempts} attempt{problem.attempts > 1 ? 's' : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProblemsSection;