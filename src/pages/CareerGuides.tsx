import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, ArrowRight, Clock, TrendingUp, AlertCircle, Search, ArrowLeft } from 'lucide-react';
import { useGetAllCareerGuides } from '@/hooks/useQueries';
import { useState, useMemo } from 'react';
import type { CareerGuide } from '@/backend';

export default function CareerGuides() {
  const { data: guides = [], isLoading, error } = useGetAllCareerGuides();
  const [selectedGuide, setSelectedGuide] = useState<CareerGuide | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique difficulties and tags from backend data
  const difficulties = useMemo(() => {
    const uniqueDifficulties = new Set(guides.map(g => g.difficulty));
    return [
      { value: 'all', label: 'All Difficulties' },
      ...Array.from(uniqueDifficulties).map(diff => ({ value: diff, label: diff }))
    ];
  }, [guides]);

  const tags = useMemo(() => {
    const allTags = guides.flatMap(g => g.tags);
    const uniqueTags = new Set(allTags);
    return [
      { value: 'all', label: 'All Tags' },
      ...Array.from(uniqueTags).map(tag => ({ value: tag, label: tag }))
    ];
  }, [guides]);

  const filteredGuides = useMemo(() => {
    return guides.filter((guide) => {
      const difficultyMatch = selectedDifficulty === 'all' || guide.difficulty === selectedDifficulty;
      const tagMatch = selectedTag === 'all' || guide.tags.includes(selectedTag);
      const searchMatch = searchQuery === '' ||
        guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return difficultyMatch && tagMatch && searchMatch;
    });
  }, [guides, selectedDifficulty, selectedTag, searchQuery]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  if (selectedGuide) {
    return (
      <div className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => setSelectedGuide(null)}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Guides
          </Button>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge className={getDifficultyColor(selectedGuide.difficulty)}>
                  {selectedGuide.difficulty}
                </Badge>
                {selectedGuide.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="mb-4 text-4xl font-bold">{selectedGuide.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>By {selectedGuide.author}</span>
                <span>•</span>
                <span>{selectedGuide.publishDate}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {Number(selectedGuide.readingTime)} min read
                </span>
              </div>
            </div>

            <div className="mb-8 rounded-lg bg-muted p-6">
              <p className="text-lg font-medium">{selectedGuide.summary}</p>
            </div>

            <div className="mb-8">
              <div dangerouslySetInnerHTML={{ __html: selectedGuide.content }} />
            </div>

            {selectedGuide.sections.length > 0 && (
              <div className="space-y-8">
                {selectedGuide.sections.map((section, index) => (
                  <section key={index}>
                    <h2 className="mb-4 text-2xl font-bold">{section.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  </section>
                ))}
              </div>
            )}
          </article>
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
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Career Guides & Resources</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Educational, research-based content to help you succeed in your career journey
          </p>
        </div>

        {error && (
          <div className="mb-8 flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p>Failed to load career guides. Please try again later.</p>
          </div>
        )}

        <div className="mb-8 space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <div className="w-full sm:w-64">
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((diff) => (
                    <SelectItem key={diff.value} value={diff.value}>
                      {diff.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-64">
              <Select value={selectedTag} onValueChange={setSelectedTag}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tag" />
                </SelectTrigger>
                <SelectContent>
                  {tags.map((tag) => (
                    <SelectItem key={tag.value} value={tag.value}>
                      {tag.label}
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
                placeholder="Search guides by title, summary, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="mb-2 h-4 w-24" />
                  <Skeleton className="h-6 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="mb-4 h-20 w-full" />
                  <Skeleton className="h-4 w-24" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : guides.length === 0 ? (
          <div className="py-16 text-center">
            <BookOpen className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <h3 className="mb-2 text-xl font-semibold">No Guides Available</h3>
            <p className="text-muted-foreground">
              Career guides will be published soon. Check back later!
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredGuides.map((guide) => (
                <Card key={guide.id} className="group overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src="/assets/generated/career-resources-illustration.dim_400x300.png"
                      alt={guide.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between gap-2 text-sm">
                      <Badge className={getDifficultyColor(guide.difficulty)}>
                        {guide.difficulty}
                      </Badge>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {Number(guide.readingTime)} min
                      </span>
                    </div>
                    <CardTitle className="text-xl">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-3">
                      {guide.summary}
                    </CardDescription>
                    <div className="mb-4 flex flex-wrap gap-1">
                      {guide.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {guide.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{guide.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 font-semibold text-primary hover:bg-transparent"
                      onClick={() => setSelectedGuide(guide)}
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredGuides.length === 0 && guides.length > 0 && (
              <div className="py-12 text-center">
                <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <p className="text-muted-foreground">
                  No guides found matching your filters. Try adjusting your selection.
                </p>
              </div>
            )}
          </>
        )}

        <div className="mt-16">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">
                <TrendingUp className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription className="text-base">
                Subscribe to our newsletter for the latest career insights and AI-powered job search tips
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button size="lg">
                Subscribe Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
