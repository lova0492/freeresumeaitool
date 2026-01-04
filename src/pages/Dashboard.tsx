import { useState } from 'react';
import { useGetUserResumes, useDeleteResume, useCreateResume } from '../hooks/useQueries';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Plus, MoreVertical, Edit, Copy, Trash2, FileText, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import type { Resume } from '../backend';

interface DashboardProps {
  onCreateResume: () => void;
  onEditResume: (resumeId: string) => void;
}

export default function Dashboard({ onCreateResume, onEditResume }: DashboardProps) {
  const { identity } = useInternetIdentity();
  const { data: resumes = [], isLoading } = useGetUserResumes();
  const deleteResume = useDeleteResume();
  const createResume = useCreateResume();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [resumeToDelete, setResumeToDelete] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!resumeToDelete) return;
    try {
      await deleteResume.mutateAsync(resumeToDelete);
      toast.success('Resume deleted successfully');
      setDeleteDialogOpen(false);
      setResumeToDelete(null);
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete resume');
    }
  };

  const handleDuplicate = async (resume: Resume) => {
    if (!identity) return;
    try {
      const duplicatedResume: Resume = {
        ...resume,
        id: `resume-${Date.now()}`,
        owner: identity.getPrincipal(),
        personalInfo: {
          ...resume.personalInfo,
          name: `${resume.personalInfo.name} (Copy)`,
        },
      };
      await createResume.mutateAsync(duplicatedResume);
      toast.success('Resume duplicated successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to duplicate resume');
    }
  };

  const confirmDelete = (resumeId: string) => {
    setResumeToDelete(resumeId);
    setDeleteDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center px-4 py-12">
        <div className="text-center">
          <Loader2 className="mx-auto mb-4 h-12 w-12 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading your resumes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Resumes</h1>
          <p className="mt-2 text-muted-foreground">Create and manage your professional resumes</p>
        </div>
        <Button onClick={onCreateResume} size="lg">
          <Plus className="mr-2 h-5 w-5" />
          New Resume
        </Button>
      </div>

      {resumes.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex min-h-[400px] flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">No resumes yet</h3>
            <p className="mb-6 max-w-sm text-muted-foreground">
              Get started by creating your first professional resume. It only takes a few minutes!
            </p>
            <Button onClick={onCreateResume} size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Create Your First Resume
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resumes.map((resume) => (
            <Card key={resume.id} className="group transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="line-clamp-1">
                      {resume.personalInfo.name || 'Untitled Resume'}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Template {Number(resume.templateId)} • Color {Number(resume.colorScheme)}
                    </CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onEditResume(resume.id)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDuplicate(resume)}>
                        <Copy className="mr-2 h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => confirmDelete(resume.id)}
                        className="text-destructive focus:text-destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-[3/4] overflow-hidden rounded-md border border-border bg-muted/30">
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    <FileText className="h-16 w-16" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => onEditResume(resume.id)} className="w-full">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Resume
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Resume</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this resume? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              {deleteResume.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                'Delete'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
