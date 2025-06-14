
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Lock, Calendar, User, BarChart3, ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useStudyMaterialDownload } from "@/hooks/useStudyMaterialDownload";
import { useNavigate } from "react-router-dom";

interface StudyMaterial {
  id: number;
  title: string;
  tagline?: string;
  description: string;
  content?: string;
  category: string;
  type: string;
  size: string;
  isPremium: boolean;
  downloadCount: number;
  tags?: string[];
  author?: string;
  date: string;
}

interface StudyMaterialDetailsContentProps {
  material: StudyMaterial;
}

const StudyMaterialDetailsContent = ({ material }: StudyMaterialDetailsContentProps) => {
  const { user } = useAuth();
  const { handleDownload } = useStudyMaterialDownload();
  const navigate = useNavigate();
  const isPremiumUser = user?.premium || false;
  const [showFullContent, setShowFullContent] = useState(false);

  const handleViewContent = () => {
    if (material.isPremium && !isPremiumUser) {
      alert("This is premium content. Please upgrade to access full content.");
      return;
    }
    setShowFullContent(true);
    console.log("Viewing content for:", material.title);
  };

  const handleBackToPreview = () => {
    setShowFullContent(false);
  };

  const handleDownloadClick = () => {
    handleDownload(material.id, material.isPremium);
  };

  const handleUpgradeClick = () => {
    navigate('/upgrade-simple');
  };

  const renderContentPreview = (content: string, isPreview: boolean = false) => {
    if (isPreview && material.isPremium && !isPremiumUser) {
      const textContent = content.replace(/<[^>]*>/g, '');
      const truncatedText = textContent.substring(0, 200) + '...';
      return (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">{truncatedText}</p>
          <div className="bg-gradient-to-t from-white to-transparent p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3">
              <Lock className="text-amber-600" size={20} />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Upgrade to premium to access full content
            </p>
            <Button 
              size="sm" 
              className="bg-brand-red hover:bg-red-600"
              onClick={handleUpgradeClick}
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      );
    }
    
    return (
      <div 
        className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  // If showing full content, render the full content view
  if (showFullContent) {
    return (
      <div className="bg-white">
        <div className="space-y-6">
          {/* Back button */}
          <Button
            onClick={handleBackToPreview}
            variant="outline"
            className="mb-4"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Preview
          </Button>

          {/* Title */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {material.title}
            </h1>
          </div>

          {/* Tagline */}
          {material.tagline && (
            <div>
              <p className="text-lg text-blue-600 font-medium">
                {material.tagline}
              </p>
            </div>
          )}

          {/* Full Content */}
          <div className="bg-white p-6 rounded-lg border">
            <div className="text-gray-700">
              {material.content ? (
                renderContentPreview(material.content, false)
              ) : (
                <p className="text-gray-600 leading-relaxed">{material.description}</p>
              )}
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleDownloadClick}
              className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 text-base font-medium"
            >
              <Download size={18} className="mr-2" />
              Download Material
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Regular preview view
  return (
    <div className="bg-white">
      <div className="space-y-6">
        {/* 1. Title */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {material.title}
          </h1>
        </div>

        {/* 2. Tagline */}
        {material.tagline && (
          <div>
            <p className="text-lg text-blue-600 font-medium">
              {material.tagline}
            </p>
          </div>
        )}

        {/* 3. Content Preview */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Preview</h3>
          <div className="text-gray-700">
            {material.content ? (
              renderContentPreview(material.content, true)
            ) : (
              <p className="text-gray-600 leading-relaxed">{material.description}</p>
            )}
          </div>
        </div>

        {/* 4. View Full Content & Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleViewContent}
            className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 text-base font-medium flex-1 sm:flex-none"
            disabled={material.isPremium && !isPremiumUser}
          >
            <Eye size={18} className="mr-2" />
            View Full Content
          </Button>
          
          <Button
            onClick={handleDownloadClick}
            variant="outline"
            className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-8 py-3 text-base font-medium flex-1 sm:flex-none"
          >
            <Download size={18} className="mr-2" />
            Download Material
          </Button>
        </div>

        {/* 5. Category, Interview Type, and Download Count */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Badge className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Category</p>
                <p className="text-base font-semibold text-gray-900">{material.category}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Eye className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Type</p>
                <p className="text-base font-semibold text-gray-900">{material.type}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Downloads</p>
                <p className="text-base font-semibold text-gray-900">{material.downloadCount.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Material Info */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Material Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {material.author && (
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Author</p>
                  <p className="text-base text-gray-900">{material.author}</p>
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">Date Posted</p>
                <p className="text-base text-gray-900">{material.date}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Download className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">File Size</p>
                <p className="text-base text-gray-900">{material.size}</p>
              </div>
            </div>

            {material.isPremium && (
              <div className="flex items-center space-x-3">
                <Lock className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Access Level</p>
                  <p className="text-base text-amber-600 font-medium">Premium Content</p>
                </div>
              </div>
            )}

            {/* Tags in Material Info */}
            {material.tags && material.tags.length > 0 && (
              <div className="col-span-1 sm:col-span-2">
                <p className="text-sm font-medium text-gray-500 mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {material.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer transition-colors"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialDetailsContent;
