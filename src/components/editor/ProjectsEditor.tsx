import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, X } from 'lucide-react';
import type { Project } from '../../backend';

interface ProjectsEditorProps {
  projects: Project[];
  onUpdate: (projects: Project[]) => void;
}

export default function ProjectsEditor({ projects, onUpdate }: ProjectsEditorProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(projects.length > 0 ? 0 : null);
  const [newTech, setNewTech] = useState<{ [key: number]: string }>({});

  const addProject = () => {
    const newProject: Project = {
      name: '',
      description: '',
      technologies: [],
    };
    onUpdate([...projects, newProject]);
    setExpandedIndex(projects.length);
  };

  const updateProject = (index: number, field: keyof Project, value: any) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate(updated);
  };

  const removeProject = (index: number) => {
    onUpdate(projects.filter((_, i) => i !== index));
    if (expandedIndex === index) {
      setExpandedIndex(null);
    }
  };

  const addTechnology = (projectIndex: number) => {
    const tech = newTech[projectIndex]?.trim();
    if (tech && !projects[projectIndex].technologies.includes(tech)) {
      const updated = [...projects];
      updated[projectIndex].technologies = [...updated[projectIndex].technologies, tech];
      onUpdate(updated);
      setNewTech({ ...newTech, [projectIndex]: '' });
    }
  };

  const removeTechnology = (projectIndex: number, tech: string) => {
    const updated = [...projects];
    updated[projectIndex].technologies = updated[projectIndex].technologies.filter((t) => t !== tech);
    onUpdate(updated);
  };

  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <Card key={index}>
          <CardHeader className="cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{project.name || 'New Project'}</CardTitle>
              <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); removeProject(index); }}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          {expandedIndex === index && (
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Project Name *</Label>
                <Input
                  value={project.name}
                  onChange={(e) => updateProject(index, 'name', e.target.value)}
                  placeholder="E-commerce Platform"
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={project.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  placeholder="Brief description of the project and your role..."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>Technologies</Label>
                <div className="flex gap-2">
                  <Input
                    value={newTech[index] || ''}
                    onChange={(e) => setNewTech({ ...newTech, [index]: e.target.value })}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addTechnology(index);
                      }
                    }}
                    placeholder="React, Node.js, MongoDB"
                  />
                  <Button onClick={() => addTechnology(index)} size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="gap-1 pr-1">
                      {tech}
                      <button
                        onClick={() => removeTechnology(index, tech)}
                        className="ml-1 rounded-full hover:bg-muted"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      ))}
      <Button variant="outline" className="w-full" onClick={addProject}>
        <Plus className="mr-2 h-4 w-4" />
        Add Project
      </Button>
    </div>
  );
}
