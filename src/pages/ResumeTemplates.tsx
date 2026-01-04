import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Eye, Download, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useGetAllResumeTemplates } from '@/hooks/useQueries';
import type { ResumeTemplate } from '../backend';

interface TemplateCard {
  id: string;
  name: string;
  experienceLevel: 'Entry' | 'Mid' | 'Senior';
  description: string;
  previewImage?: string;
}

// Map template names to uploaded preview images
const templateImageMap: Record<string, string> = {
  'Entry-Level Engineer': '/assets/https___page2images.b-cdn.net_ccimages_bf_74_jvIlU7iOStRPXLKn.png',
  'Entry-Level Marketing Resume': '/assets/https___page2images.b-cdn.net_ccimages_ec_f7_5BmjdS8ZWrUL3ulr.png',
  'IT Manager Resume': '/assets/https___page2images.b-cdn.net_ccimages_bb_d0_6pnbk1E7RrXADUIc (1).png',
  'Project Manager Resume': '/assets/https___page2images.b-cdn.net_ccimages_d8_43_T5HJVuhW1kPxDHu4.png',
  'Senior Design Resume': '/assets/https___page2images.b-cdn.net_ccimages_3b_d5_22Xg2uw6QP6lz2oL.png',
};

// Default templates as fallback
const defaultTemplates: TemplateCard[] = [
  {
    id: 'template-1',
    name: 'Entry-Level Engineer',
    experienceLevel: 'Entry',
    description: 'Perfect for fresh graduates and entry-level engineers. Clean, ATS-friendly format with focus on education, projects, and technical skills.',
    previewImage: templateImageMap['Entry-Level Engineer'],
  },
  {
    id: 'template-2',
    name: 'Entry-Level Marketing Resume',
    experienceLevel: 'Entry',
    description: 'Designed for entry-level marketing professionals. Emphasizes creativity, campaigns, and social media skills.',
    previewImage: templateImageMap['Entry-Level Marketing Resume'],
  },
  {
    id: 'template-3',
    name: 'IT Manager Resume',
    experienceLevel: 'Mid',
    description: 'Professional template for IT managers with 5-10 years of experience. Highlights technical leadership and project management.',
    previewImage: templateImageMap['IT Manager Resume'],
  },
  {
    id: 'template-4',
    name: 'Project Manager Resume',
    experienceLevel: 'Mid',
    description: 'Optimized for project managers. Showcases leadership, stakeholder management, and successful project delivery.',
    previewImage: templateImageMap['Project Manager Resume'],
  },
  {
    id: 'template-5',
    name: 'Senior Design Resume',
    experienceLevel: 'Senior',
    description: 'Executive-level template for senior design professionals. Highlights creative direction, team leadership, and portfolio achievements.',
    previewImage: templateImageMap['Senior Design Resume'],
  },
];

interface ResumeTemplatesProps {
  onNavigateToPreview?: (templateId: string) => void;
}

export default function ResumeTemplates({ onNavigateToPreview }: ResumeTemplatesProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateCard | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [templates, setTemplates] = useState<TemplateCard[]>(defaultTemplates);
  
  const { data: backendTemplates, isLoading } = useGetAllResumeTemplates();

  // Merge backend templates with default templates and uploaded images
  useEffect(() => {
    if (backendTemplates && backendTemplates.length > 0) {
      const mergedTemplates = backendTemplates.map((bt: ResumeTemplate) => {
        const defaultTemplate = defaultTemplates.find(dt => 
          dt.name === bt.templateName || dt.id === bt.id
        );
        
        // Determine preview image: use uploaded image if template name matches, otherwise use backend or default
        let previewImage = defaultTemplate?.previewImage;
        if (bt.templateName && templateImageMap[bt.templateName]) {
          previewImage = templateImageMap[bt.templateName];
        } else if (bt.previewImage) {
          previewImage = bt.previewImage;
        }
        
        return {
          id: bt.id,
          name: bt.templateName || defaultTemplate?.name || 'Resume Template',
          experienceLevel: (bt.experienceLevel as 'Entry' | 'Mid' | 'Senior') || 'Entry',
          description: bt.description || defaultTemplate?.description || 'Professional resume template',
          previewImage,
        };
      });
      setTemplates(mergedTemplates.length > 0 ? mergedTemplates : defaultTemplates);
    }
  }, [backendTemplates]);

  const handlePreview = (template: TemplateCard) => {
    setSelectedTemplate(template);
    setPreviewOpen(true);
  };

  const handleUseTemplate = (templateId: string) => {
    if (onNavigateToPreview) {
      onNavigateToPreview(templateId);
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Entry':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Mid':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Senior':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="border-b bg-muted/30">
        <div className="container px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume Templates</h1>
            <p className="text-lg text-muted-foreground">
              Choose from our collection of professionally designed, ATS-friendly resume templates. 
              Each template is fully editable and optimized to help you land your dream job.
            </p>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="container px-4 py-12">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
              <p className="text-muted-foreground">Loading templates...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="flex flex-col hover:shadow-lg transition-shadow">
                {/* Preview Image */}
                {template.previewImage ? (
                  <div className="relative w-full h-64 overflow-hidden rounded-t-lg bg-muted">
                    <img
                      src={template.previewImage}
                      alt={template.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="flex items-center justify-center h-full">
                              <div class="text-center text-muted-foreground">
                                <svg class="h-12 w-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <p class="text-sm">Template Preview</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-64 overflow-hidden rounded-t-lg bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <FileText className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Template Preview</p>
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <FileText className="h-8 w-8 text-primary" />
                    <Badge className={getLevelColor(template.experienceLevel)}>
                      {template.experienceLevel}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{template.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>ATS-Optimized Format</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Fully Editable Content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Clean Semantic HTML</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => handlePreview(template)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button
                    className="flex-1"
                    onClick={() => handleUseTemplate(template.id)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Use Template
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Preview Dialog */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedTemplate?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge className={getLevelColor(selectedTemplate?.experienceLevel || 'Entry')}>
                {selectedTemplate?.experienceLevel}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {selectedTemplate?.description}
            </p>
            
            {/* Show preview image in dialog */}
            {selectedTemplate?.previewImage ? (
              <div className="border rounded-lg overflow-hidden bg-muted">
                <img
                  src={selectedTemplate.previewImage}
                  alt={selectedTemplate.name}
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="p-6 text-center text-muted-foreground">
                          <p class="text-sm">Template preview will be displayed here. Click "Use Template" to start editing.</p>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            ) : (
              <div className="border rounded-lg p-6 bg-muted/30">
                <p className="text-sm text-center text-muted-foreground">
                  Template preview will be displayed here. Click "Use Template" to start editing.
                </p>
              </div>
            )}
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setPreviewOpen(false)}
              >
                Close
              </Button>
              <Button
                className="flex-1"
                onClick={() => {
                  if (selectedTemplate) {
                    handleUseTemplate(selectedTemplate.id);
                    setPreviewOpen(false);
                  }
                }}
              >
                Use This Template
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
