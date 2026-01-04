import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, Copy, Download, FileText } from 'lucide-react';
import { toast } from 'sonner';

export default function CoverLetterGenerator() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    experience: '',
    tone: 'professional',
    highlights: '',
  });
  const [generating, setGenerating] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');

  const handleGenerate = async () => {
    if (!formData.name || !formData.position || !formData.company) {
      toast.error('Please fill in all required fields');
      return;
    }

    setGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const letter = `Dear Hiring Manager,

I am writing to express my strong interest in the ${formData.position} position at ${formData.company}. With ${formData.experience || 'my relevant experience'} in the field, I am confident that I would be a valuable addition to your team.

${formData.highlights || 'Throughout my career, I have developed strong skills and expertise that align perfectly with the requirements of this role.'} I am particularly drawn to ${formData.company} because of your commitment to innovation and excellence in the industry.

I am excited about the opportunity to contribute to your team and would welcome the chance to discuss how my background, skills, and enthusiasm can benefit ${formData.company}. Thank you for considering my application.

Sincerely,
${formData.name}`;

      setCoverLetter(letter);
      setGenerating(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetter);
    toast.success('Cover letter copied to clipboard');
  };

  const handleDownload = () => {
    const blob = new Blob([coverLetter], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cover-letter-${formData.company}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Cover letter downloaded');
  };

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">AI Cover Letter Generator</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Generate personalized cover letters tailored to specific job applications in seconds
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Information</CardTitle>
              <CardDescription>Fill in the details to generate your cover letter</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Position *</Label>
                <Input
                  id="position"
                  placeholder="Software Engineer"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  placeholder="Tech Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input
                  id="experience"
                  placeholder="5 years"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tone">Tone</Label>
                <Select value={formData.tone} onValueChange={(value) => setFormData({ ...formData, tone: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="highlights">Key Highlights (Optional)</Label>
                <Textarea
                  id="highlights"
                  placeholder="Mention your key achievements, skills, or why you're interested in this role..."
                  value={formData.highlights}
                  onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>

              <Button
                size="lg"
                onClick={handleGenerate}
                disabled={generating}
                className="w-full"
              >
                {generating ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Cover Letter
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Generated Cover Letter</CardTitle>
                  <CardDescription>Your AI-generated cover letter</CardDescription>
                </div>
                {coverLetter && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={handleCopy}>
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleDownload}>
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {coverLetter ? (
                <div className="rounded-lg border border-border bg-muted/30 p-6">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                    {coverLetter}
                  </pre>
                </div>
              ) : (
                <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-border">
                  <div className="text-center text-muted-foreground">
                    <FileText className="mx-auto mb-4 h-12 w-12" />
                    <p>Your cover letter will appear here</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
