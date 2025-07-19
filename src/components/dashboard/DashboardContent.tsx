
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServicesTab from './ServicesTab';
import ApplicationsTab from './ApplicationsTab';
import ProfileEditForm from './ProfileEditForm';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Crown, 
  ArrowRight, 
  Calendar, 
  Code, 
  FileText, 
  Trophy, 
  Target,
  Briefcase,
  Star,
  CheckCircle,
  Flame,
  Award,
  TrendingUp
} from "lucide-react";

interface DashboardContentProps {
  activeTab: string;
  upcomingServices: any[];
  pastServices: any[];
  jobApplications: any[];
  setActiveTab: (tab: string) => void;
}

const DashboardContent = ({ 
  activeTab, 
  upcomingServices, 
  pastServices, 
  jobApplications,
  setActiveTab 
}: DashboardContentProps) => {
  const navigate = useNavigate();

  // Mock data for achievements and progress
  const achievements = {
    problemsSolved: 45,
    mockTestsCompleted: 8,
    jobApplications: 12,
    currentStreak: 7,
    totalProblems: 100,
    level: 3,
    experience: 750,
    nextLevelExp: 1000
  };

  const milestones = [
    { title: "First 10 Problems", completed: true, icon: Code },
    { title: "Complete Mock Test", completed: true, icon: FileText },
    { title: "Apply to First Job", completed: true, icon: Briefcase },
    { title: "7-Day Streak", completed: true, icon: Flame },
    { title: "Level 3 Achieved", completed: false, icon: Star }
  ];

  const mainSections = [
    {
      id: "services",
      title: "My Services",
      description: "Manage your booked consultations and services",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
      count: upcomingServices.length + pastServices.length,
      action: () => setActiveTab("services")
    },
    {
      id: "problems",
      title: "Problems (DSA)",
      description: "Practice coding problems and algorithms",
      icon: Code,
      color: "from-green-500 to-green-600",
      count: achievements.problemsSolved,
      action: () => navigate("/study-material")
    },
    {
      id: "mock-tests",
      title: "Mock Tests",
      description: "Take practice tests to assess your skills",
      icon: FileText,
      color: "from-purple-500 to-purple-600",
      count: achievements.mockTestsCompleted,
      action: () => navigate("/mock-tests")
    },
    {
      id: "mock-assessment",
      title: "Mock Assessment",
      description: "Comprehensive skill evaluation",
      icon: Target,
      color: "from-orange-500 to-orange-600",
      count: 3,
      action: () => navigate("/assessments")
    },
    {
      id: "job-applications",
      title: "Job Applications",
      description: "Track your job application progress",
      icon: Briefcase,
      color: "from-red-500 to-red-600",
      count: jobApplications.length,
      action: () => setActiveTab("applications")
    }
  ];

  const renderAchievementTracker = () => (
    <div className="space-y-6 mb-8">
      {/* Level and Experience */}
      <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-3 rounded-full">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Level {achievements.level} Coder</h3>
                <p className="text-muted-foreground">Keep coding to reach the next level!</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {achievements.experience}/{achievements.nextLevelExp} XP
            </Badge>
          </div>
          <Progress 
            value={(achievements.experience / achievements.nextLevelExp) * 100} 
            className="h-3"
          />
        </CardContent>
      </Card>

      {/* Achievement Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-2">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-700">{achievements.problemsSolved}</div>
            <div className="text-sm text-blue-600">Problems Solved</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-2">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-700">{achievements.mockTestsCompleted}</div>
            <div className="text-sm text-green-600">Mock Tests</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
          <CardContent className="p-4 text-center">
            <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-2">
              <Briefcase className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-orange-700">{achievements.jobApplications}</div>
            <div className="text-sm text-orange-600">Applications</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100/50 border-red-200">
          <CardContent className="p-4 text-center">
            <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-2">
              <Flame className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-red-700">{achievements.currentStreak}</div>
            <div className="text-sm text-red-600">Day Streak</div>
          </CardContent>
        </Card>
      </div>

      {/* Milestones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <Badge
                  key={index}
                  variant={milestone.completed ? "default" : "outline"}
                  className={`flex items-center gap-1 px-3 py-1 ${
                    milestone.completed 
                      ? "bg-green-100 text-green-700 border-green-200" 
                      : "text-muted-foreground"
                  }`}
                >
                  {milestone.completed && <CheckCircle className="w-3 h-3" />}
                  <IconComponent className="w-3 h-3" />
                  {milestone.title}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderMainDashboard = () => (
    <div className="space-y-8">
      {renderAchievementTracker()}
      
      {/* Main Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mainSections.map((section) => {
          const IconComponent = section.icon;
          return (
            <Card 
              key={section.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-l-4 border-l-transparent hover:border-l-primary"
              onClick={section.action}
            >
              <CardContent className="p-6">
                <div className={`bg-gradient-to-r ${section.color} p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <Badge variant="secondary" className="ml-2">
                    {section.count}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {section.description}
                </p>
                
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  const renderUpgradeTab = () => (
    <Card>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Crown className="w-16 h-16 text-yellow-500" />
        </div>
        <CardTitle className="text-2xl">Upgrade to Premium</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <p className="text-gray-600 text-lg">
          Unlock exclusive study materials and downloads with Premium membership
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span>Access all premium content</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span>Unlimited downloads</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span>Valid for 1 month</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span>One-time payment ₹199</span>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={() => navigate('/upgrade-premium')}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg px-8 py-6"
          size="lg"
        >
          Upgrade Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </CardContent>
    </Card>
  );

  switch (activeTab) {
    case "overview":
      return (
        <div className="space-y-6">
          {renderMainDashboard()}
        </div>
      );
    case "applications":
      return (
        <div>
          <ApplicationsTab jobApplications={jobApplications} />
        </div>
      );
    case "services":
      return (
        <div>
          <ServicesTab 
            upcomingServices={upcomingServices}
            pastServices={pastServices}
          />
        </div>
      );
    case "profile":
      return (
        <div>
          <ProfileEditForm onCancel={() => setActiveTab("overview")} />
        </div>
      );
    case "upgrade":
      return (
        <div>
          {renderUpgradeTab()}
        </div>
      );
    default:
      return (
        <div className="space-y-6">
          {renderMainDashboard()}
        </div>
      );
  }
};

export default DashboardContent;
