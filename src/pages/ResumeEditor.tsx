import { useState, useEffect } from 'react';
import { useGetResume, useCreateResume, useUpdateResume } from '../hooks/useQueries';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Save, Download, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import EditorPanel from '../components/editor/EditorPanel';
import PreviewPanel from '../components/editor/PreviewPanel';
import TemplateSelector from '../components/editor/TemplateSelector';
import ColorSchemeSelector from '../components/editor/ColorSchemeSelector';
import AIAssistant from '../components/editor/AIAssistant';
import ExportDialog from '../components/editor/ExportDialog';
import type { Resume, PersonalInfo, WorkExperience, Education, Skill, Certification, Project, LayoutSettings } from '../backend';

interface ResumeEditorProps {
  resumeId: string | null;
  onBack: () => void;
}

export default function ResumeEditor({ resumeId, onBack }: ResumeEditorProps) {
  const { identity } = useInternetIdentity();
  const { data: existingResume, isLoading } = useGetResume(resumeId);
  const createResume = useCreateResume();
  const updateResume = useUpdateResume();
  const [exportDialogOpen, setExportDialogOpen] = useState(false);

  const [resume, setResume] = useState<Resume>({
    id: '',
    owner: identity?.getPrincipal() || ('' as any),
    templateId: BigInt(1),
    colorScheme: BigInt(1),
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      website: '',
    },
    summary: '',
    workExperience: [],
    education: [],
    skills: [],
    certifications: [],
    projects: [],
    layoutSettings: {
      spacing: BigInt(1),
      margins: BigInt(1),
      fontSize: BigInt(12),
    },
  });

  useEffect(() => {
    if (existingResume) {
      setResume(existingResume);
    } else if (resumeId === 'new' && identity) {
      setResume((prev) => ({
        ...prev,
        id: `resume-${Date.now()}`,
        owner: identity.getPrincipal(),
      }));
    }
  }, [existingResume, resumeId, identity]);

  const handleSave = async () => {
    try {
      if (resumeId === 'new') {
        await createResume.mutateAsync(resume);
        toast.success('Resume created successfully!');
      } else {
        await updateResume.mutateAsync(resume);
        toast.success('Resume saved successfully!');
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to save resume');
    }
  };

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setResume((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  };

  const updateSummary = (summary: string) => {
    setResume((prev) => ({ ...prev, summary }));
  };

  const updateWorkExperience = (experience: WorkExperience[]) => {
    setResume((prev) => ({ ...prev, workExperience: experience }));
  };

  const updateEducation = (education: Education[]) => {
    setResume((prev) => ({ ...prev, education }));
  };

  const updateSkills = (skills: Skill[]) => {
    setResume((prev) => ({ ...prev, skills }));
  };

  const updateCertifications = (certifications: Certification[]) => {
    setResume((prev) => ({ ...prev, certifications }));
  };

  const updateProjects = (projects: Project[]) => {
    setResume((prev) => ({ ...prev, projects }));
  };

  const updateTemplate = (templateId: bigint) => {
    setResume((prev) => ({ ...prev, templateId }));
  };

  const updateColorScheme = (colorScheme: bigint) => {
    setResume((prev) => ({ ...prev, colorScheme }));
  };

  const updateLayoutSettings = (settings: Partial<LayoutSettings>) => {
    setResume((prev) => ({
      ...prev,
      layoutSettings: { ...prev.layoutSettings, ...settings },
    }));
  };

  if (isLoading) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center px-4 py-12">
        <div className="text-center">
          <Loader2 className="mx-auto mb-4 h-12 w-12 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading resume...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      {/* Toolbar */}
      <div className="border-b border-border bg-background px-4 py-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{resume.personalInfo.name || 'Untitled Resume'}</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setExportDialogOpen(true)}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm" onClick={handleSave} disabled={createResume.isPending || updateResume.isPending}>
              {createResume.isPending || updateResume.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Editor Layout */}
      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={45} minSize={30}>
            <div className="h-full overflow-auto">
              <Tabs defaultValue="content" className="h-full">
                <div className="border-b border-border px-4">
                  <TabsList className="h-12">
                    <TabsTrigger value="content">Content</TabsTrigger>
                    <TabsTrigger value="design">Design</TabsTrigger>
                    <TabsTrigger value="ai">AI Assistant</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="content" className="m-0 p-4">
                  <EditorPanel
                    resume={resume}
                    onUpdatePersonalInfo={updatePersonalInfo}
                    onUpdateSummary={updateSummary}
                    onUpdateWorkExperience={updateWorkExperience}
                    onUpdateEducation={updateEducation}
                    onUpdateSkills={updateSkills}
                    onUpdateCertifications={updateCertifications}
                    onUpdateProjects={updateProjects}
                  />
                </TabsContent>
                <TabsContent value="design" className="m-0 p-4">
                  <div className="space-y-6">
                    <TemplateSelector selectedTemplate={resume.templateId} onSelectTemplate={updateTemplate} />
                    <ColorSchemeSelector
                      selectedScheme={resume.colorScheme}
                      onSelectScheme={updateColorScheme}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="ai" className="m-0 p-4">
                  <AIAssistant
                    resume={resume}
                    onUpdateSummary={updateSummary}
                    onUpdateWorkExperience={updateWorkExperience}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={55} minSize={30}>
            <div className="h-full overflow-auto bg-muted/30 p-8">
              <PreviewPanel resume={resume} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <ExportDialog open={exportDialogOpen} onOpenChange={setExportDialogOpen} resume={resume} />
    </div>
  );
}
