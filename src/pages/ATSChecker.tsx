import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { FileCheck, Upload, CheckCircle2, XCircle, AlertCircle, FileText } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ATSChecker() {
  const [file, setFile] = useState<File | null>(null);
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResults(null);
    }
  };

  const handleScan = async () => {
    if (!file) return;
    
    setScanning(true);
    // Simulate ATS scanning
    setTimeout(() => {
      setResults({
        overallScore: 82,
        categories: [
          { name: 'Format Compatibility', score: 95, status: 'pass' },
          { name: 'Keyword Optimization', score: 78, status: 'warning' },
          { name: 'Contact Information', score: 100, status: 'pass' },
          { name: 'Section Structure', score: 85, status: 'pass' },
          { name: 'File Type', score: 100, status: 'pass' },
          { name: 'Font & Formatting', score: 60, status: 'fail' },
        ],
        issues: [
          { type: 'warning', message: 'Consider adding more industry-specific keywords' },
          { type: 'error', message: 'Avoid using tables or text boxes - they may not parse correctly' },
          { type: 'warning', message: 'Use standard section headings like "Work Experience" and "Education"' },
        ],
        recommendations: [
          'Use a simple, single-column layout',
          'Stick to standard fonts like Arial, Calibri, or Times New Roman',
          'Save as .docx or .pdf format',
          'Include relevant keywords from the job description',
          'Use standard section headings',
        ],
      });
      setScanning(false);
    }, 2500);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      case 'fail':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FileCheck className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">ATS Compatibility Checker</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Scan your resume for ATS compliance and get detailed feedback on how to improve it
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Upload Your Resume</CardTitle>
            <CardDescription>Upload your resume in PDF or DOCX format</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="resume-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-12 h-12 mb-4 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">PDF or DOCX (MAX. 5MB)</p>
                    {file && (
                      <p className="mt-4 text-sm font-medium text-primary">
                        Selected: {file.name}
                      </p>
                    )}
                  </div>
                  <input
                    id="resume-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <Button
                size="lg"
                onClick={handleScan}
                disabled={!file || scanning}
                className="w-full"
              >
                {scanning ? (
                  <>
                    <FileCheck className="mr-2 h-5 w-5 animate-pulse" />
                    Scanning Resume...
                  </>
                ) : (
                  <>
                    <FileCheck className="mr-2 h-5 w-5" />
                    Scan Resume
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {results && (
          <div className="space-y-6">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>ATS Compatibility Score</CardTitle>
                  <div className={`text-5xl font-bold ${getScoreColor(results.overallScore)}`}>
                    {results.overallScore}%
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={results.overallScore} className="h-4" />
                <p className="mt-4 text-sm text-muted-foreground">
                  {results.overallScore >= 80
                    ? 'Great! Your resume is highly compatible with ATS systems.'
                    : results.overallScore >= 60
                    ? 'Good, but there\'s room for improvement. Check the recommendations below.'
                    : 'Your resume needs significant improvements for ATS compatibility.'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Analysis</CardTitle>
                <CardDescription>Category-by-category breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {results.categories.map((category: any, index: number) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(category.status)}
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span className={`font-semibold ${getScoreColor(category.score)}`}>
                          {category.score}%
                        </span>
                      </div>
                      <Progress value={category.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Issues Found</CardTitle>
                <CardDescription>Problems that may affect ATS parsing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {results.issues.map((issue: any, index: number) => (
                    <Alert key={index} variant={issue.type === 'error' ? 'destructive' : 'default'}>
                      {issue.type === 'error' ? (
                        <XCircle className="h-4 w-4" />
                      ) : (
                        <AlertCircle className="h-4 w-4" />
                      )}
                      <AlertTitle>{issue.type === 'error' ? 'Error' : 'Warning'}</AlertTitle>
                      <AlertDescription>{issue.message}</AlertDescription>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>How to improve your ATS compatibility</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {results.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
