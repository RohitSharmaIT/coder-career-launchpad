
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { BookOpen, Download, ChevronDown, ChevronRight } from "lucide-react";
import { StudyMaterial } from './MaterialCard';

interface DsaTopicsSectionProps {
  selectedSpecialMaterial: StudyMaterial | null;
  onDownload: (id: number, isPremium: boolean) => void;
  onDsaTopicHeaderClick: () => void;
}

const dsaTopics = [
  {
    id: 101,
    title: "Arrays and Strings",
    description: "Fundamental techniques for working with arrays and strings, including in-place operations and sliding window.",
    difficulty: "Beginner"
  },
  {
    id: 102,
    title: "Linked Lists",
    description: "Common operations and techniques for manipulating singly and doubly linked lists.",
    difficulty: "Beginner"
  },
  {
    id: 103,
    title: "Stacks and Queues",
    description: "Implementation and applications of stack and queue data structures.",
    difficulty: "Beginner"
  },
  {
    id: 104,
    title: "Trees and Graphs",
    description: "Traversal algorithms, binary search trees, and graph search algorithms.",
    difficulty: "Intermediate"
  },
  {
    id: 105,
    title: "Dynamic Programming",
    description: "Solving optimization problems with overlapping subproblems and optimal substructure.",
    difficulty: "Advanced"
  },
  {
    id: 106,
    title: "Greedy Algorithms",
    description: "Solutions that make locally optimal choices at each stage.",
    difficulty: "Intermediate"
  }
];

const DsaTopicsSection = ({ 
  selectedSpecialMaterial, 
  onDownload, 
  onDsaTopicHeaderClick 
}: DsaTopicsSectionProps) => {
  if (!selectedSpecialMaterial || selectedSpecialMaterial.id !== 1) {
    return null;
  }

  return (
    <div id="dsa-topics-section" className="mt-16 pt-8 border-t">
      <Card>
        <CardHeader className="bg-gray-50">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">
              {selectedSpecialMaterial.title} - Topics
            </CardTitle>
            <Button 
              variant="outline" 
              onClick={onDsaTopicHeaderClick}
              className="text-brand-red hover:bg-brand-red hover:text-white"
            >
              View All Topics
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {dsaTopics.slice(0, 3).map((topic) => (
              <Collapsible key={topic.id} className="border rounded-lg">
                <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left">
                  <div className="flex gap-3 items-center">
                    <BookOpen size={20} className="text-brand-red" />
                    <div>
                      <h3 className="font-medium">{topic.title}</h3>
                      <p className="text-sm text-gray-500">Difficulty: {topic.difficulty}</p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    <ChevronDown className="h-5 w-5 collapsible-closed:hidden" />
                    <ChevronRight className="h-5 w-5 collapsible-open:hidden" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 pt-0 border-t">
                    <p className="text-gray-700 mb-4">{topic.description}</p>
                    <div className="flex justify-end">
                      <Button 
                        onClick={() => onDownload(selectedSpecialMaterial.id, false)}
                        variant="outline" 
                        className="text-sm border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                      >
                        <Download size={16} className="mr-2" />
                        Download Topic
                      </Button>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button 
              onClick={onDsaTopicHeaderClick}
              variant="outline"
              className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
            >
              See All Topics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DsaTopicsSection;
