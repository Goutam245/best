import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, Search, Mail, Filter } from "lucide-react";
import { TemplateGallery } from "@/components/TemplateGallery";
import { TemplatePreview } from "@/components/TemplatePreview";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Template Studio</h1>
                <p className="text-sm text-muted-foreground">Professional email templates</p>
              </div>
            </div>
            <Button variant="default" className="gap-2">
              <Download className="w-4 h-4" />
              Export All
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {["all", "promotional", "transactional", "engagement", "newsletter", "reminder"].map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Templates</CardDescription>
              <CardTitle className="text-3xl">12</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Categories</CardDescription>
              <CardTitle className="text-3xl">7</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Use Cases</CardDescription>
              <CardTitle className="text-3xl">15</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Responsive</CardDescription>
              <CardTitle className="text-3xl">100%</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Template Gallery */}
        <Tabs defaultValue="gallery" className="space-y-6">
          <TabsList>
            <TabsTrigger value="gallery">Gallery View</TabsTrigger>
            <TabsTrigger value="preview">Preview Mode</TabsTrigger>
          </TabsList>

          <TabsContent value="gallery">
            <TemplateGallery 
              onSelectTemplate={setSelectedTemplate}
              selectedTemplate={selectedTemplate}
              searchQuery={searchQuery}
              activeCategory={activeCategory}
            />
          </TabsContent>

          <TabsContent value="preview">
            <TemplatePreview selectedTemplate={selectedTemplate} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
