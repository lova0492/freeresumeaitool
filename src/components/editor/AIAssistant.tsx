import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import type { Resume, WorkExperience } from '../../backend';

interface AIAssistantProps {
  resume: Resume;
  onUpdateSummary: (summary: string) => void;
  onUpdateWorkExperience: (experience: WorkExperience[]) => void;
}

export default function AIAssistant({ resume, onUpdateSummary, onUpdateWorkExperience }: AIAssistantProps) {
  const [summaryPrompt, setSummaryPrompt] = useState('');
  const [bulletPrompt, setBulletPrompt] = useState('');
  const [generatedSummary, setGeneratedSummary] = useState('');
  const [generatedBullets, setGeneratedBullets] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const generateSummary = async () => {
    if (!summaryPrompt.trim()) {
      toast.error('Please provide some information about your background');
      return;
    }

    setIsGenerating(true);
    try {
      // Simulate AI generation (in production, this would call an AI API)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const summary = `Results-driven professional with expertise in ${summaryPrompt}. Proven track record of delivering high-quality solutions and driving business growth. Passionate about leveraging technology to solve complex problems and create meaningful impact.`;
      
      setGeneratedSummary(summary);
      toast.success('Summary generated successfully!');
    } catch (error) {
      toast.error('Failed to generate summary');
    } finally {
      setIsGenerating(false);
    }
  };

  const generateBullets = async () => {
    if (!bulletPrompt.trim()) {
      toast.error('Please describe your role or achievement');
      return;
    }

    setIsGenerating(true);
    try {
      // Simulate AI generation
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const bullets = [
        `Led ${bulletPrompt} initiative, resulting in 30% improvement in team efficiency`,
        `Collaborated with cross-functional teams to implement ${bulletPrompt} solutions`,
        `Developed and maintained ${bulletPrompt} systems, serving 10,000+ users`,
        `Optimized ${bulletPrompt} processes, reducing operational costs by 25%`,
      ];
      
      setGeneratedBullets(bullets);
      toast.success('Bullet points generated successfully!');
    } catch (error) {
      toast.error('Failed to generate bullet points');
    } finally {
      setIsGenerating(false);
    }
  };

  const applySummary = () => {
    onUpdateSummary(generatedSummary);
    toast.success('Summary applied to resume');
  };

  const copyToClipboard = async (text: string, type: 'summary' | 'bullet') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'summary') {
        setCopiedSummary(true);
        setTimeout(() => setCopiedSummary(false), 2000);
      }
      toast.success('Copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-4">
        <img src="/assets/generated/ai-assistant-icon-transparent.dim_64x64.png" alt="AI" className="h-10 w-10" />
        <div>
          <h3 className="font-semibold">AI Writing Assistant</h3>
          <p className="text-sm text-muted-foreground">
            Get AI-powered suggestions to enhance your resume content
          </p>
        </div>
      </div>

      <Tabs defaultValue="summary">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="summary">Professional Summary</TabsTrigger>
          <TabsTrigger value="bullets">Bullet Points</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Generate Professional Summary</CardTitle>
              <CardDescription>
                Describe your background, skills, and career goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={summaryPrompt}
                onChange={(e) => setSummaryPrompt(e.target.value)}
                placeholder="e.g., software development, 5 years experience, full-stack engineer, passionate about AI"
                rows={4}
              />
              <Button onClick={generateSummary} disabled={isGenerating} className="w-full">
                {isGenerating ? (
                  'Generating...'
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Summary
                  </>
                )}
              </Button>
              {generatedSummary && (
                <div className="space-y-3 rounded-lg border border-border bg-muted/50 p-4">
                  <p className="text-sm">{generatedSummary}</p>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={applySummary}>
                      Apply to Resume
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(generatedSummary, 'summary')}
                    >
                      {copiedSummary ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bullets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Generate Bullet Points</CardTitle>
              <CardDescription>
                Describe your role, responsibilities, or achievements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={bulletPrompt}
                onChange={(e) => setBulletPrompt(e.target.value)}
                placeholder="e.g., project management, team leadership, software architecture"
                rows={4}
              />
              <Button onClick={generateBullets} disabled={isGenerating} className="w-full">
                {isGenerating ? (
                  'Generating...'
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Bullet Points
                  </>
                )}
              </Button>
              {generatedBullets.length > 0 && (
                <div className="space-y-2 rounded-lg border border-border bg-muted/50 p-4">
                  <ul className="space-y-2 text-sm">
                    {generatedBullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(generatedBullets.join('\n'), 'bullet')}
                    className="mt-3"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy All
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
