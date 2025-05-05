
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Lock, Unlock } from "lucide-react";

export interface StudyMaterial {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  type: string;
  size: string;
  isPremium: boolean;
  downloadCount: number;
  date: string;
}

interface MaterialCardProps {
  material: StudyMaterial;
  onDownload: (id: number, isPremium: boolean) => void;
}

const MaterialCard = ({ material, onDownload }: MaterialCardProps) => {
  return (
    <Card key={material.id} className="overflow-hidden">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={material.thumbnail} 
          alt={material.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge 
          className={`absolute top-3 right-3 ${
            material.isPremium ? "bg-yellow-500" : "bg-green-500"
          }`}
        >
          {material.isPremium ? "Premium" : "Free"}
        </Badge>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="line-clamp-1">{material.title}</CardTitle>
            <CardDescription className="text-sm text-gray-500">
              {material.date} • {material.type} • {material.size}
            </CardDescription>
          </div>
          {material.isPremium ? 
            <Lock size={18} className="text-yellow-500" /> : 
            <Unlock size={18} className="text-green-500" />
          }
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 line-clamp-2">{material.description}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="text-sm text-gray-500">
          <span className="font-medium">{material.downloadCount}</span> downloads
        </div>
        <Button 
          onClick={() => onDownload(material.id, material.isPremium)}
          variant="outline" 
          className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
        >
          <Download size={16} className="mr-2" />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MaterialCard;
