
import { User, FileText, Calendar, Settings, LogOut, Crown, Bell, TrendingUp, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";

interface DashboardSidebarProps {
  user: any;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  logout: () => void;
}

const DashboardSidebar = ({ user, activeTab, setActiveTab, logout }: DashboardSidebarProps) => {
  const { isPremium } = useAuth();

  const getDaysLeft = () => {
    if (!user?.premiumExpiryDate) return 0;
    const expiryDate = new Date(user.premiumExpiryDate);
    const now = new Date();
    const diffTime = expiryDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  // Mock data for user level and notifications
  const userLevel = 3;
  const userRank = "Advanced Coder";
  const notificationCount = 3;
  const levelProgress = 75; // 75% to next level

  const menuItems = [
    { id: "overview", label: "Dashboard", icon: TrendingUp },
    { id: "applications", label: "Applications", icon: FileText },
    { id: "services", label: "My Services", icon: Calendar },
    { id: "profile", label: "Profile", icon: Settings },
  ];

  return (
    <div className="space-y-6">
      {/* User Profile Card */}
      <Card className="dashboard-card border-2 border-primary/10 hover:border-primary/20">
        <CardContent className="p-8">
          {/* Notification Bell */}
          <div className="flex justify-end mb-6">
            <div className="relative">
              <Button variant="outline" size="sm" className="relative border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
                <Bell className="w-4 h-4" />
                {notificationCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs bg-gradient-to-r from-red-500 to-red-600 border-0 animate-pulse">
                    {notificationCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
          
          {/* User Info */}
          <div className="text-center mb-8">
            <div className="relative mx-auto mb-4 w-fit">
              <Avatar className="h-24 w-24 border-4 border-primary/30 shadow-lg">
                <AvatarImage src={user?.profilePicture} alt={user?.name} />
                <AvatarFallback className="text-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold border-4 border-card shadow-lg">
                {userLevel}
              </div>
            </div>
            
            <h3 className="font-bold text-2xl mb-1 text-foreground">{user?.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">{user?.email}</p>
            
            {/* User Rank and Level */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-xl p-4 mb-6 border border-primary/20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Star className="w-5 h-5 text-amber-500" />
                <span className="font-bold text-lg text-foreground">{userRank}</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-muted-foreground">Level {userLevel}</span>
                  <span className="text-muted-foreground">Level {userLevel + 1}</span>
                </div>
                <div className="h-3 bg-secondary/50 rounded-full overflow-hidden">
                  <div 
                    className="progress-bar h-full transition-all duration-1000"
                    style={{ width: `${levelProgress}%` }}
                  ></div>
                </div>
                <div className="text-center text-xs text-primary font-medium">
                  {levelProgress}% Complete
                </div>
              </div>
            </div>
            
            {/* Premium Status */}
            {isPremium() ? (
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-3">
                <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white flex items-center gap-1 mb-2">
                  <Crown size={14} />
                  Premium Member
                </Badge>
                <p className="text-xs text-yellow-700">
                  {getDaysLeft()} days remaining
                </p>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-3">
                <Badge variant="outline" className="text-muted-foreground mb-2">
                  Free Member
                </Badge>
                <p className="text-xs text-muted-foreground mb-3">
                  Unlock premium features
                </p>
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white"
                  onClick={() => setActiveTab("upgrade")}
                >
                  Upgrade Now
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Navigation Menu */}
      <Card className="dashboard-card border-2 border-border/50">
        <CardContent className="p-6">
          <nav className="space-y-3">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 group relative overflow-hidden ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-xl shadow-primary/30 border border-primary/20"
                      : "text-muted-foreground hover:bg-primary/5 hover:text-primary hover:shadow-md border border-transparent hover:border-primary/10"
                  }`}
                >
                  <IconComponent size={20} className="group-hover:scale-110 transition-all duration-300 relative z-10" />
                  <span className="font-semibold relative z-10">{item.label}</span>
                  {activeTab === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20"></div>
                  )}
                </button>
              );
            })}
            
            <div className="border-t border-border/50 pt-4 mt-6">
              <button
                onClick={logout}
                className="w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left text-muted-foreground hover:bg-destructive/5 hover:text-destructive transition-all duration-300 group border border-transparent hover:border-destructive/20 hover:shadow-md"
              >
                <LogOut size={20} className="group-hover:scale-110 transition-all duration-300" />
                <span className="font-semibold">Logout</span>
              </button>
            </div>
          </nav>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSidebar;
