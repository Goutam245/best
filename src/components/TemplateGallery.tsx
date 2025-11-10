import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Code } from "lucide-react";
import { templates } from "@/data/templates";

interface TemplateGalleryProps {
  onSelectTemplate: (id: string) => void;
  selectedTemplate: string | null;
  searchQuery: string;
  activeCategory: string;
}

export const TemplateGallery = ({ 
  onSelectTemplate, 
  selectedTemplate,
  searchQuery,
  activeCategory 
}: TemplateGalleryProps) => {
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || template.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTemplates.map((template) => (
        <Card 
          key={template.id}
          className={`group hover:shadow-lg transition-all duration-300 cursor-pointer ${
            selectedTemplate === template.id ? "ring-2 ring-primary" : ""
          }`}
          onClick={() => onSelectTemplate(template.id)}
        >
          <CardHeader>
            <div className="flex items-start justify-between mb-2">
              <Badge variant={selectedTemplate === template.id ? "default" : "secondary"}>
                {template.category}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {template.archetype}
              </Badge>
            </div>
            <CardTitle className="text-lg">{template.name}</CardTitle>
            <CardDescription className="text-sm">{template.description}</CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Preview</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-1">
              {template.useCases.map((useCase, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {useCase}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex gap-2">
            <Button 
              variant="default" 
              size="sm" 
              className="flex-1 gap-2"
              onClick={(e) => {
                e.stopPropagation();
                onSelectTemplate(template.id);
              }}
            >
              <Eye className="w-4 h-4" />
              Preview
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={(e) => {
                e.stopPropagation();
                // Handle download
              }}
            >
              <Download className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                // Handle view code
              }}
            >
              <Code className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
