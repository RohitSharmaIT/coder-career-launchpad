
import { User, FileText, Calendar, Settings, LogOut, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

  const menuItems = [
    { id: "overview", label: "Overview", icon: User },
    { id: "applications", label: "Applications", icon: FileText },
    { id: "services", label: "My Services", icon: Calendar },
    { id: "profile", label: "Profile", icon: Settings },
  ];

  return (
    <div className="md:col-span-1">
      <Card>
        <CardContent className="p-6">
          {/* User Info */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
              <User size={24} className="text-gray-600" />
            </div>
            <h3 className="font-semibold text-lg">{user?.name}</h3>
            <p className="text-gray-600 text-sm">{user?.email}</p>
            
            {/* Premium Status */}
            {isPremium() ? (
              <div className="mt-3">
                <Badge className="bg-yellow-500 text-white flex items-center gap-1">
                  <Crown size={14} />
                  🌟 Premium Member
                </Badge>
                <p className="text-xs text-gray-600 mt-1">
                  {getDaysLeft()} days left
                </p>
              </div>
            ) : (
              <div className="mt-3">
                <Badge variant="outline" className="text-gray-600">
                  Free Member
                </Badge>
                <p className="text-xs text-gray-600 mt-1">
                  Upgrade to Premium to unlock full access
                </p>
                <Button 
                  size="sm" 
                  className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white"
                  onClick={() => setActiveTab("upgrade")}
                >
                  Upgrade Now
                </Button>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? "bg-brand-red text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <IconComponent size={20} />
                  {item.label}
                </button>
              );
            })}
            
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <LogOut size={20} />
              Logout
            </button>
          </nav>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSidebar;
