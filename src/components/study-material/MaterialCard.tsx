
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Lock, Unlock, Calendar, User, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export interface StudyMaterial {
  id: number;
  title: string;
  tagline?: string;
  description: string;
  content?: string;
  thumbnail: string;
  category: string;
  type: string;
  size: string;
  isPremium: boolean;
  downloadCount: number;
  date: string;
  author?: string;
  tags?: string[];
}

interface MaterialCardProps {
  material: StudyMaterial;
  onDownload: (id: number, isPremium: boolean) => void;
  onSpecialCardClick?: (material: StudyMaterial) => void;
  onPremiumClick?: (material: StudyMaterial) => void;
}

const MaterialCard = ({ material, onDownload, onSpecialCardClick, onPremiumClick }: MaterialCardProps) => {
  const { isAuthenticated, isPremium } = useAuth();
  const isPremiumUser = isPremium();

  // Better placeholder images for study materials
  const getImageForCategory = (category: string) => {
    const categoryImages = {
      'Programming': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      'Data Structures': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'Algorithms': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
      'System Design': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
      'Interview Prep': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      'Career': 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
      default: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    };
    return categoryImages[category] || categoryImages.default;
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (material.isPremium && (!isAuthenticated || !isPremiumUser)) {
      e.preventDefault();
      onPremiumClick?.(material);
      return;
    }
  };

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-2xl transform hover:-translate-y-2">
      <Link 
        to={`/study-material/${material.id}`} 
        className="block"
        onClick={handleCardClick}
      >
        {/* Enhanced Image Section */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={getImageForCategory(material.category)}
            alt={material.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          {/* Premium/Free Badge */}
          <Badge 
            className={`absolute top-4 right-4 px-3 py-1 font-semibold text-sm ${
              material.isPremium 
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900 shadow-lg" 
                : "bg-gradient-to-r from-green-400 to-green-600 text-green-900 shadow-lg"
            }`}
          >
            {material.isPremium ? (
              <><Lock size={14} className="mr-1" />Premium</>
            ) : (
              <><Unlock size={14} className="mr-1" />Free</>
            )}
          </Badge>

          {/* Category Badge */}
          <Badge 
            variant="secondary"
            className="absolute top-4 left-4 bg-white/90 text-gray-700 font-medium"
          >
            {material.category}
          </Badge>
        </div>
        
        {/* Enhanced Content Section */}
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-brand-red transition-colors duration-300">
            {material.title}
          </CardTitle>
          
          {material.tagline && (
            <p className="text-sm text-blue-600 font-medium italic">
              {material.tagline}
            </p>
          )}
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {material.date}
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              {material.author || 'Admin'}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0 pb-4">
          <p className="text-gray-600 line-clamp-3 leading-relaxed">
            {material.description}
          </p>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-brand-red">{material.downloadCount}</span> downloads
            </div>
            <div className="text-sm text-gray-500">
              {material.type} • {material.size}
            </div>
          </div>
        </CardContent>
      </Link>
      
      {/* Enhanced Footer */}
      <CardFooter className="pt-0 pb-6 px-6">
        <div className="flex gap-3 w-full">
          <Button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onDownload(material.id, material.isPremium);
            }}
            className="flex-1 bg-brand-red hover:bg-red-600 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            <Download size={16} className="mr-2" />
            Download
          </Button>
          
          <Button 
            variant="outline"
            className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // View action
            }}
          >
            <Eye size={16} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MaterialCard;
