import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { FileText, Download, Eye, Loader2, Search, AlertCircle } from 'lucide-react';
import { useGetAllResumeExamples } from '@/hooks/useQueries';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import type { ResumeExample } from '@/backend';

export default function ResumeExamples() {
  const { data: examples = [], isLoading, error, isFetching } = useGetAllResumeExamples();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewExample, setPreviewExample] = useState<ResumeExample | null>(null);

  // Extract unique categories and levels from backend data
  const categories = useMemo(() => {
    const uniqueCategories = new Set(examples.map(ex => ex.category));
    return [
      { value: 'all', label: 'All Categories' },
      ...Array.from(uniqueCategories).map(cat => ({ value: cat, label: cat }))
    ];
  }, [examples]);

  const experienceLevels = useMemo(() => {
    const uniqueLevels = new Set(examples.map(ex => ex.experienceLevel));
    return [
      { value: 'all', label: 'All Levels' },
      ...Array.from(uniqueLevels).map(level => ({ value: level, label: `${level} Level` }))
    ];
  }, [examples]);

  const filteredExamples = useMemo(() => {
    return examples.filter((example) => {
      const categoryMatch = selectedCategory === 'all' || example.category === selectedCategory;
      const levelMatch = selectedLevel === 'all' || example.experienceLevel === selectedLevel;
      const searchMatch = searchQuery === '' || 
        example.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        example.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        example.category.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && levelMatch && searchMatch;
    });
  }, [examples, selectedCategory, selectedLevel, searchQuery]);

  const handleDownload = (example: ResumeExample) => {
    if (example.downloadUrl) {
      // Open download URL in new tab
      window.open(example.downloadUrl, '_blank');
    }
  };

  const handlePreview = (example: ResumeExample) => {
    setPreviewExample(example);
  };

  if (isLoading) {
    return (
      <div className="container px-4 py-12">
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <Loader2 className="mx-auto mb-4 h-12 w-12 animate-spin text-primary" />
            <p className="text-lg font-medium">Loading resume examples...</p>
            <p className="mt-2 text-sm text-muted-foreground">Please wait while we fetch the data</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error Loading Resume Examples</AlertTitle>
            <AlertDescription>
              {error instanceof Error ? error.message : 'Failed to load resume examples. Please try again later.'}
            </AlertDescription>
          </Alert>
          <div className="mt-8 text-center">
            <Button onClick={() => window.location.reload()}>
              Retry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Resume Examples by Industry</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Browse professional resume examples categorized by job type and experience level. Download templates and customize them for your needs.
          </p>
        </div>

        {examples.length > 0 && (
          <div className="mb-8 space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <div className="w-full sm:w-64">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-64">
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mx-auto max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by title, description, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            {isFetching && (
              <div className="flex justify-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Refreshing data...</span>
                </div>
              </div>
            )}
          </div>
        )}

        {examples.length === 0 ? (
          <div className="py-16 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <FileText className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">No Resume Examples Available</h3>
            <p className="mb-6 text-muted-foreground">
              Resume examples will be added soon. Check back later!
            </p>
            <Alert className="mx-auto max-w-md">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Coming Soon</AlertTitle>
              <AlertDescription>
                We're working on adding professional resume examples across various industries and experience levels.
              </AlertDescription>
            </Alert>
          </div>
        ) : (
          <>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredExamples.length} of {examples.length} resume{examples.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredExamples.map((example) => (
                <Card key={example.id} className="group transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-3 aspect-[2/3] overflow-hidden rounded-md bg-muted">
                      <img
                        src={example.previewImage.startsWith('/') ? example.previewImage : `/assets/generated/${example.previewImage}`}
                        alt={example.title}
                        className="h-full w-full object-contain transition-transform group-hover:scale-105"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600"%3E%3Crect fill="%23f0f0f0" width="400" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23999"%3EResume Preview%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <Badge variant="secondary">{example.experienceLevel}</Badge>
                      <Badge variant="outline">{example.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{example.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => handlePreview(example)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => handleDownload(example)}
                        disabled={!example.downloadUrl}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredExamples.length === 0 && examples.length > 0 && (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">No Results Found</h3>
                <p className="mb-4 text-muted-foreground">
                  No examples found matching your filters. Try adjusting your selection.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedLevel('all');
                    setSearchQuery('');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      <Dialog open={!!previewExample} onOpenChange={() => setPreviewExample(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{previewExample?.title}</DialogTitle>
            <DialogDescription>
              {previewExample?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{previewExample?.experienceLevel}</Badge>
              <Badge variant="outline">{previewExample?.category}</Badge>
              <Badge>Template {previewExample?.templateId.toString()}</Badge>
            </div>
            <div className="aspect-[2/3] overflow-hidden rounded-md border bg-muted">
              <img
                src={previewExample?.previewImage.startsWith('/') ? previewExample.previewImage : `/assets/generated/${previewExample?.previewImage}`}
                alt={previewExample?.title}
                className="h-full w-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600"%3E%3Crect fill="%23f0f0f0" width="400" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23999"%3EResume Preview%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Button variant="outline" onClick={() => setPreviewExample(null)} className="w-full sm:w-auto">
                Close
              </Button>
              <Button 
                onClick={() => previewExample && handleDownload(previewExample)}
                disabled={!previewExample?.downloadUrl}
                className="w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Template
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
