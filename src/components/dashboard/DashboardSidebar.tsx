
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
    <div className="space-y-4 sm:space-y-6">
      {/* Mobile-Optimized User Profile Card */}
      <Card className="dashboard-card border border-primary/10 hover:border-primary/20">
        <CardContent className="mobile-card-padding">
          {/* Mobile-Friendly Notification Bell */}
          <div className="flex justify-end mb-4 sm:mb-6">
            <div className="relative">
              <Button variant="outline" size="sm" className="relative border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 h-8 w-8 sm:h-9 sm:w-9 p-0">
                <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
                {notificationCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 h-4 w-4 sm:h-5 sm:w-5 p-0 text-xs bg-gradient-to-r from-red-500 to-red-600 border-0 animate-pulse">
                    {notificationCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
          
          {/* Mobile-Responsive User Info */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="relative mx-auto mb-3 sm:mb-4 w-fit">
              <Avatar className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 border-2 sm:border-4 border-primary/30 shadow-lg">
                <AvatarImage src={user?.profilePicture} alt={user?.name} />
                <AvatarFallback className="text-lg sm:text-xl lg:text-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex items-center justify-center text-xs sm:text-sm font-bold border-2 sm:border-4 border-card shadow-lg">
                {userLevel}
              </div>
            </div>
            
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-1 text-foreground line-clamp-1">{user?.name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-1">{user?.email}</p>
            
            {/* Mobile-Optimized User Rank and Level */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-primary/20">
              <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                <span className="font-bold text-sm sm:text-base lg:text-lg text-foreground">{userRank}</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-medium">
                  <span className="text-muted-foreground">Level {userLevel}</span>
                  <span className="text-muted-foreground">Level {userLevel + 1}</span>
                </div>
                <div className="h-2 sm:h-3 bg-secondary/50 rounded-full overflow-hidden">
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
            
            {/* Mobile-Responsive Premium Status */}
            {isPremium() ? (
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-3">
                <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white flex items-center gap-1 mb-2 text-xs">
                  <Crown size={12} />
                  Premium Member
                </Badge>
                <p className="text-xs text-yellow-700">
                  {getDaysLeft()} days remaining
                </p>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-3">
                <Badge variant="outline" className="text-muted-foreground mb-2 text-xs">
                  Free Member
                </Badge>
                <p className="text-xs text-muted-foreground mb-3">
                  Unlock premium features
                </p>
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white text-xs sm:text-sm h-8 sm:h-9"
                  onClick={() => setActiveTab("upgrade")}
                >
                  Upgrade Now
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Mobile-Optimized Navigation Menu */}
      <Card className="dashboard-card border border-border/30">
        <CardContent className="p-3 sm:p-4 lg:p-6">
          <nav className="space-y-1 sm:space-y-2 lg:space-y-3">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 sm:gap-4 px-3 sm:px-4 lg:px-5 py-3 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl text-left transition-all duration-300 group relative overflow-hidden text-sm sm:text-base ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg sm:shadow-xl shadow-primary/20 sm:shadow-primary/30 border border-primary/20"
                      : "text-muted-foreground hover:bg-primary/5 hover:text-primary hover:shadow-md border border-transparent hover:border-primary/10"
                  }`}
                >
                  <IconComponent size={16} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-all duration-300 relative z-10 flex-shrink-0" />
                  <span className="font-medium sm:font-semibold relative z-10">{item.label}</span>
                  {activeTab === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20"></div>
                  )}
                </button>
              );
            })}
            
            <div className="border-t border-border/50 pt-3 sm:pt-4 mt-4 sm:mt-6">
              <button
                onClick={logout}
                className="w-full flex items-center gap-3 sm:gap-4 px-3 sm:px-4 lg:px-5 py-3 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl text-left text-muted-foreground hover:bg-destructive/5 hover:text-destructive transition-all duration-300 group border border-transparent hover:border-destructive/20 hover:shadow-md text-sm sm:text-base"
              >
                <LogOut size={16} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-all duration-300 flex-shrink-0" />
                <span className="font-medium sm:font-semibold">Logout</span>
              </button>
            </div>
          </nav>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSidebar;
