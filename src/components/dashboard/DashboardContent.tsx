
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServicesTab from './ServicesTab';
import ApplicationsTab from './ApplicationsTab';
import ProfileEditForm from './ProfileEditForm';
import ProblemsSection from './sections/ProblemsSection';
import MockTestsSection from './sections/MockTestsSection';
import MockAssessmentSection from './sections/MockAssessmentSection';
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
  TrendingUp,
  Zap,
  BookOpen,
  Activity,
  Timer
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
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

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
      action: () => setSelectedSection("problems")
    },
    {
      id: "mock-tests",
      title: "Mock Tests",
      description: "Take practice tests to assess your skills",
      icon: FileText,
      color: "from-purple-500 to-purple-600",
      count: achievements.mockTestsCompleted,
      action: () => setSelectedSection("mock-tests")
    },
    {
      id: "mock-assessment",
      title: "Mock Assessment",
      description: "Comprehensive skill evaluation",
      icon: Target,
      color: "from-orange-500 to-orange-600",
      count: 3,
      action: () => setSelectedSection("mock-assessment")
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
    <div className="space-y-8 mb-10">
      {/* Enhanced Level and Experience */}
      <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
        <CardContent className="p-8 relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl border border-primary/20">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Level {achievements.level} Elite Coder
                </h3>
                <p className="text-muted-foreground text-lg">
                  {achievements.nextLevelExp - achievements.experience} XP to next level
                </p>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className="text-xl px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5">
                {achievements.experience}/{achievements.nextLevelExp} XP
              </Badge>
              <div className="mt-2 text-sm text-muted-foreground">
                {Math.round((achievements.experience / achievements.nextLevelExp) * 100)}% Complete
              </div>
            </div>
          </div>
          <Progress 
            value={(achievements.experience / achievements.nextLevelExp) * 100} 
            className="h-4 bg-gradient-to-r from-primary/10 to-primary/5"
          />
        </CardContent>
      </Card>

      {/* Enhanced Achievement Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="group bg-gradient-to-br from-blue-50 via-blue-50/50 to-white border-blue-200/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6 text-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-700 mb-1">{achievements.problemsSolved}</div>
            <div className="text-sm text-blue-600 font-medium">Problems Solved</div>
            <div className="mt-2 text-xs text-blue-500">
              +{Math.round(achievements.problemsSolved * 0.1)} this week
            </div>
          </CardContent>
        </Card>

        <Card className="group bg-gradient-to-br from-green-50 via-green-50/50 to-white border-green-200/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6 text-center">
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-700 mb-1">{achievements.mockTestsCompleted}</div>
            <div className="text-sm text-green-600 font-medium">Mock Tests</div>
            <div className="mt-2 text-xs text-green-500">
              Avg Score: 87%
            </div>
          </CardContent>
        </Card>

        <Card className="group bg-gradient-to-br from-orange-50 via-orange-50/50 to-white border-orange-200/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6 text-center">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-orange-700 mb-1">{achievements.jobApplications}</div>
            <div className="text-sm text-orange-600 font-medium">Applications</div>
            <div className="mt-2 text-xs text-orange-500">
              {Math.round(achievements.jobApplications * 0.3)} interviews
            </div>
          </CardContent>
        </Card>

        <Card className="group bg-gradient-to-br from-red-50 via-red-50/50 to-white border-red-200/50 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6 text-center">
            <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Flame className="w-8 h-8 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-700 mb-1">{achievements.currentStreak}</div>
            <div className="text-sm text-red-600 font-medium">Day Streak</div>
            <div className="mt-2 text-xs text-red-500">
              Best: 14 days
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Milestones Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Achievements */}
        <Card className="bg-gradient-to-br from-yellow-50/50 via-white to-yellow-50/30 border-yellow-200/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-2 rounded-lg">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {milestones.filter(m => m.completed).map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-green-50/50 border border-green-200/50 rounded-lg"
                  >
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <IconComponent className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-green-700">{milestone.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="bg-gradient-to-br from-purple-50/50 via-white to-purple-50/30 border-purple-200/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              Activity Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-blue-50/50 border border-blue-200/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Study Time</span>
                </div>
                <span className="text-blue-700 font-bold">24 hrs</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-green-50/50 border border-green-200/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Efficiency</span>
                </div>
                <span className="text-green-700 font-bold">92%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-orange-50/50 border border-orange-200/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Timer className="w-5 h-5 text-orange-600" />
                  <span className="font-medium">Avg. Speed</span>
                </div>
                <span className="text-orange-700 font-bold">18 min</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderMainDashboard = () => (
    <div className="space-y-8">
      {renderAchievementTracker()}
      
      {/* Enhanced Main Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mainSections.map((section) => {
          const IconComponent = section.icon;
          return (
            <Card 
              key={section.id}
              className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-white via-white to-gray-50/30 overflow-hidden relative"
              onClick={section.action}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <CardContent className="p-8 relative">
                <div className={`bg-gradient-to-br ${section.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>
                  <Badge 
                    variant="secondary" 
                    className="ml-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-primary/20 group-hover:scale-110 transition-transform"
                  >
                    {section.count}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {section.description}
                </p>
                
                <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  <span className="group-hover:text-primary/80">Explore Details</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </div>
                
                {/* Progress indicator */}
                <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${section.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
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

  // Handle section views
  if (selectedSection) {
    switch (selectedSection) {
      case "problems":
        return <ProblemsSection onBack={() => setSelectedSection(null)} />;
      case "mock-tests":
        return <MockTestsSection onBack={() => setSelectedSection(null)} />;
      case "mock-assessment":
        return <MockAssessmentSection onBack={() => setSelectedSection(null)} />;
      default:
        setSelectedSection(null);
        break;
    }
  }

  switch (activeTab) {
    case "overview":
      return (
        <div className="space-y-8">
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
        <div className="space-y-8">
          {renderMainDashboard()}
        </div>
      );
  }
};

export default DashboardContent;
