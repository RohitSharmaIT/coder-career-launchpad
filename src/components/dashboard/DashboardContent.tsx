
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
    <div className="space-y-10 mb-12">
      {/* Enhanced Level and Experience */}
      <Card className="dashboard-card overflow-hidden relative border-2 border-primary/10 hover:border-primary/30">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/8 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
        <CardContent className="p-10 relative">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div className="flex items-center gap-6">
              <div className="bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 p-5 rounded-3xl border-2 border-primary/20 shadow-lg">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-tight">
                  Level {achievements.level} Elite Coder
                </h3>
                <p className="text-muted-foreground text-lg mt-1">
                  {achievements.nextLevelExp - achievements.experience} XP to next level
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">+125 XP this week</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="milestone-badge text-xl px-6 py-3 mb-3">
                {achievements.experience}/{achievements.nextLevelExp} XP
              </div>
              <div className="text-sm text-muted-foreground">
                {Math.round((achievements.experience / achievements.nextLevelExp) * 100)}% Complete
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Level Progress</span>
              <span>{Math.round((achievements.experience / achievements.nextLevelExp) * 100)}%</span>
            </div>
            <div className="h-4 bg-secondary/30 rounded-full overflow-hidden">
              <div 
                className="progress-bar h-full transition-all duration-1000 ease-out"
                style={{ width: `${(achievements.experience / achievements.nextLevelExp) * 100}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Achievement Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="achievement-card group hover:shadow-xl hover:shadow-primary/10 border-primary/10 hover:border-primary/20">
          <CardContent className="p-6 text-center">
            <div className="bg-gradient-to-br from-primary/15 to-primary/10 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-primary/20">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{achievements.problemsSolved}</div>
            <div className="text-sm text-primary font-semibold">Problems Solved</div>
            <div className="mt-2 text-xs text-muted-foreground">
              +{Math.round(achievements.problemsSolved * 0.1)} this week
            </div>
            <div className="mt-3 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="progress-bar h-full w-3/4"></div>
            </div>
          </CardContent>
        </Card>

        <Card className="achievement-card group hover:shadow-xl hover:shadow-emerald-500/10 border-emerald-200/30 hover:border-emerald-300/50">
          <CardContent className="p-6 text-center">
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-emerald-300/30">
              <FileText className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{achievements.mockTestsCompleted}</div>
            <div className="text-sm text-emerald-600 font-semibold">Mock Tests</div>
            <div className="mt-2 text-xs text-muted-foreground">
              Avg Score: 87%
            </div>
            <div className="mt-3 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full w-5/6 rounded-full"></div>
            </div>
          </CardContent>
        </Card>

        <Card className="achievement-card group hover:shadow-xl hover:shadow-amber-500/10 border-amber-200/30 hover:border-amber-300/50">
          <CardContent className="p-6 text-center">
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-amber-300/30">
              <Briefcase className="w-8 h-8 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{achievements.jobApplications}</div>
            <div className="text-sm text-amber-600 font-semibold">Applications</div>
            <div className="mt-2 text-xs text-muted-foreground">
              {Math.round(achievements.jobApplications * 0.3)} interviews
            </div>
            <div className="mt-3 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-full w-2/3 rounded-full"></div>
            </div>
          </CardContent>
        </Card>

        <Card className="achievement-card group hover:shadow-xl hover:shadow-rose-500/10 border-rose-200/30 hover:border-rose-300/50">
          <CardContent className="p-6 text-center">
            <div className="bg-gradient-to-br from-rose-100 to-rose-200 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-rose-300/30">
              <Flame className="w-8 h-8 text-rose-600" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{achievements.currentStreak}</div>
            <div className="text-sm text-rose-600 font-semibold">Day Streak</div>
            <div className="mt-2 text-xs text-muted-foreground">
              Best: 14 days
            </div>
            <div className="mt-3 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-rose-500 to-rose-600 h-full w-1/2 rounded-full"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Milestones Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Achievements */}
        <Card className="dashboard-card border-2 border-amber-200/30 hover:border-amber-300/50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-3 rounded-xl border border-amber-300/30">
                <Trophy className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Recent Achievements</h3>
                <p className="text-sm text-muted-foreground mt-1">Milestones you've completed</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {milestones.filter(m => m.completed).map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50/50 to-emerald-50/30 border border-emerald-200/30 rounded-xl hover:shadow-md transition-all duration-300 group"
                >
                  <div className="bg-emerald-100 p-2.5 rounded-full border border-emerald-200/50 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex items-center gap-3 flex-1">
                    <IconComponent className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-emerald-700">{milestone.title}</span>
                  </div>
                  <div className="milestone-badge text-xs">
                    Completed
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Activity Summary */}
        <Card className="dashboard-card border-2 border-purple-200/30 hover:border-purple-300/50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-xl border border-purple-300/30">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Activity Summary</h3>
                <p className="text-sm text-muted-foreground mt-1">Your performance metrics</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50/50 to-blue-50/30 border border-blue-200/30 rounded-xl hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-2.5 rounded-full border border-blue-200/50 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-semibold text-foreground">Study Time</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-700">24</div>
                <div className="text-xs text-blue-600">hours</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50/50 to-emerald-50/30 border border-emerald-200/30 rounded-xl hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-2.5 rounded-full border border-emerald-200/50 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="font-semibold text-foreground">Efficiency</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-emerald-700">92</div>
                <div className="text-xs text-emerald-600">percent</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50/50 to-amber-50/30 border border-amber-200/30 rounded-xl hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 p-2.5 rounded-full border border-amber-200/50 group-hover:scale-110 transition-transform">
                  <Timer className="w-5 h-5 text-amber-600" />
                </div>
                <span className="font-semibold text-foreground">Avg. Speed</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-amber-700">18</div>
                <div className="text-xs text-amber-600">minutes</div>
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
              className="dashboard-card group cursor-pointer border-2 border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 overflow-hidden relative"
              onClick={section.action}
            >
              {/* Enhanced background decorations */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/8 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/15 to-transparent rounded-full translate-y-8 -translate-x-8 group-hover:scale-110 transition-transform duration-500"></div>
              
              <CardContent className="p-8 relative">
                <div className={`bg-gradient-to-br ${section.color} p-5 rounded-3xl w-fit mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-white/20`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>
                  <div className="milestone-badge group-hover:scale-110 transition-transform">
                    {section.count}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {section.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    <span className="group-hover:text-primary">Explore Details</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  
                  {/* Activity indicator */}
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary group-hover:animate-pulse transition-all duration-300"></div>
                    <div className="w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary group-hover:animate-pulse transition-all duration-300 delay-100"></div>
                    <div className="w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary group-hover:animate-pulse transition-all duration-300 delay-200"></div>
                  </div>
                </div>
                
                {/* Enhanced progress indicator */}
                <div className="mt-6 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${section.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
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
