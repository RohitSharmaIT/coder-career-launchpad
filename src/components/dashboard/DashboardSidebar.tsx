
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
    <div className="space-y-4">
      {/* User Profile Card */}
      <Card className="bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <CardContent className="p-6">
          {/* Notification Bell */}
          <div className="flex justify-end mb-4">
            <div className="relative">
              <Button variant="outline" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                {notificationCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs bg-red-500">
                    {notificationCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
          
          {/* User Info */}
          <div className="text-center mb-6">
            <div className="relative mx-auto mb-3 w-fit">
              <Avatar className="h-20 w-20 border-4 border-primary/20">
                <AvatarImage src={user?.profilePicture} alt={user?.name} />
                <AvatarFallback className="text-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {userLevel}
              </div>
            </div>
            
            <h3 className="font-bold text-xl mb-1">{user?.name}</h3>
            <p className="text-muted-foreground text-sm mb-2">{user?.email}</p>
            
            {/* User Rank and Level */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-semibold text-sm">{userRank}</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Level {userLevel}</span>
                  <span>Level {userLevel + 1}</span>
                </div>
                <Progress value={levelProgress} className="h-2" />
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
      <Card>
        <CardContent className="p-4">

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  <IconComponent size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
            
            <div className="border-t pt-2 mt-4">
              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-muted-foreground hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
              >
                <LogOut size={18} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </nav>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSidebar;
