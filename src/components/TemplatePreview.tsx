import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Code, Smartphone, Monitor } from "lucide-react";
import { templates } from "@/data/templates";
import { EmailTemplateRenderer } from "@/components/EmailTemplateRenderer";

interface TemplatePreviewProps {
  selectedTemplate: string | null;
}

export const TemplatePreview = ({ selectedTemplate }: TemplatePreviewProps) => {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [placeholders, setPlaceholders] = useState({
    company_logo: "Your Logo",
    headline: "Welcome to Our Service",
    body_text: "Thank you for choosing us. We're excited to have you on board!",
    cta_link: "#",
    cta_label: "Get Started",
  });

  const template = templates.find(t => t.id === selectedTemplate);

  if (!selectedTemplate || !template) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-2">No template selected</p>
          <p className="text-sm text-muted-foreground">Select a template from the gallery to preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Controls Panel */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Customize Template</CardTitle>
          <CardDescription>Edit placeholders to see live preview</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="headline">Headline</Label>
            <Input
              id="headline"
              value={placeholders.headline}
              onChange={(e) => setPlaceholders({ ...placeholders, headline: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="body_text">Body Text</Label>
            <Input
              id="body_text"
              value={placeholders.body_text}
              onChange={(e) => setPlaceholders({ ...placeholders, body_text: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cta_label">CTA Label</Label>
            <Input
              id="cta_label"
              value={placeholders.cta_label}
              onChange={(e) => setPlaceholders({ ...placeholders, cta_label: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cta_link">CTA Link</Label>
            <Input
              id="cta_link"
              value={placeholders.cta_link}
              onChange={(e) => setPlaceholders({ ...placeholders, cta_link: e.target.value })}
            />
          </div>

          <div className="pt-4 space-y-2">
            <Button className="w-full gap-2">
              <Download className="w-4 h-4" />
              Download MJML
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Code className="w-4 h-4" />
              View HTML
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preview Panel */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{template.name}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "desktop" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("desktop")}
              >
                <Monitor className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "mobile" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("mobile")}
              >
                <Smartphone className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className={`mx-auto bg-white border border-border rounded-lg overflow-hidden ${
            viewMode === "mobile" ? "max-w-[375px]" : "max-w-full"
          }`}>
            <EmailTemplateRenderer 
              template={template}
              placeholders={placeholders}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
