import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Sparkles, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function KeywordOptimizer() {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!jobDescription.trim() || !resumeText.trim()) return;
    
    setAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setResults({
        score: 78,
        matchedKeywords: ['JavaScript', 'React', 'TypeScript', 'Node.js', 'API', 'Agile'],
        missingKeywords: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Microservices'],
        suggestions: [
          'Add "Docker" and "Kubernetes" to your technical skills section',
          'Mention "CI/CD pipeline" experience in your work history',
          'Include "AWS" cloud platform experience',
          'Highlight "Microservices architecture" projects',
        ],
        industryKeywords: ['Full-stack', 'DevOps', 'Cloud', 'Scalability', 'Performance'],
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Target className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Resume Keyword Optimizer</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Analyze job descriptions and optimize your resume keywords for better ATS matching and higher interview rates
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Job Description</CardTitle>
              <CardDescription>Paste the job description you're applying for</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Paste the job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="min-h-[300px]"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Resume</CardTitle>
              <CardDescription>Paste your current resume text</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Paste your resume text here..."
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                className="min-h-[300px]"
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            onClick={handleAnalyze}
            disabled={!jobDescription.trim() || !resumeText.trim() || analyzing}
            className="min-w-[200px]"
          >
            {analyzing ? (
              <>
                <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Target className="mr-2 h-5 w-5" />
                Analyze Keywords
              </>
            )}
          </Button>
        </div>

        {results && (
          <div className="mt-12 space-y-6">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Optimization Score</CardTitle>
                  <div className="text-4xl font-bold text-primary">{results.score}%</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-4 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${results.score}%` }}
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Your resume matches {results.score}% of the key requirements. Follow the suggestions below to improve.
                </p>
              </CardContent>
            </Card>

            <Tabs defaultValue="matched" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="matched">Matched</TabsTrigger>
                <TabsTrigger value="missing">Missing</TabsTrigger>
                <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                <TabsTrigger value="industry">Industry</TabsTrigger>
              </TabsList>

              <TabsContent value="matched" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Matched Keywords
                    </CardTitle>
                    <CardDescription>Keywords found in your resume</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {results.matchedKeywords.map((keyword: string, index: number) => (
                        <Badge key={index} variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="missing" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                      Missing Keywords
                    </CardTitle>
                    <CardDescription>Important keywords not found in your resume</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {results.missingKeywords.map((keyword: string, index: number) => (
                        <Badge key={index} variant="secondary" className="bg-orange-500/10 text-orange-700 dark:text-orange-400">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="suggestions" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      AI Suggestions
                    </CardTitle>
                    <CardDescription>Recommendations to improve your resume</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {results.suggestions.map((suggestion: string, index: number) => (
                        <Alert key={index}>
                          <Sparkles className="h-4 w-4" />
                          <AlertDescription>{suggestion}</AlertDescription>
                        </Alert>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="industry" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Industry-Specific Keywords
                    </CardTitle>
                    <CardDescription>Relevant keywords for this industry</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {results.industryKeywords.map((keyword: string, index: number) => (
                        <Badge key={index} variant="outline">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}
