import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import type { WorkExperience } from '../../backend';

interface WorkExperienceEditorProps {
  experience: WorkExperience[];
  onUpdate: (experience: WorkExperience[]) => void;
}

export default function WorkExperienceEditor({ experience, onUpdate }: WorkExperienceEditorProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(experience.length > 0 ? 0 : null);

  const addExperience = () => {
    const newExperience: WorkExperience = {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: [],
    };
    onUpdate([...experience, newExperience]);
    setExpandedIndex(experience.length);
  };

  const updateExperience = (index: number, field: keyof WorkExperience, value: any) => {
    const updated = [...experience];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate(updated);
  };

  const updateDescription = (index: number, text: string) => {
    const bullets = text.split('\n').filter((line) => line.trim());
    updateExperience(index, 'description', bullets);
  };

  const removeExperience = (index: number) => {
    onUpdate(experience.filter((_, i) => i !== index));
    if (expandedIndex === index) {
      setExpandedIndex(null);
    }
  };

  return (
    <div className="space-y-4">
      {experience.map((exp, index) => (
        <Card key={index}>
          <CardHeader className="cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
                <CardTitle className="text-base">
                  {exp.position || 'New Position'} {exp.company && `at ${exp.company}`}
                </CardTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); removeExperience(index); }}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          {expandedIndex === index && (
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Company *</Label>
                  <Input
                    value={exp.company}
                    onChange={(e) => updateExperience(index, 'company', e.target.value)}
                    placeholder="Company Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Position *</Label>
                  <Input
                    value={exp.position}
                    onChange={(e) => updateExperience(index, 'position', e.target.value)}
                    placeholder="Job Title"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input
                    value={exp.startDate}
                    onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                    placeholder="Jan 2020"
                  />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    value={exp.endDate}
                    onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                    placeholder="Present"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Description (one bullet point per line)</Label>
                <Textarea
                  value={exp.description.join('\n')}
                  onChange={(e) => updateDescription(index, e.target.value)}
                  placeholder="• Led team of 5 developers&#10;• Increased efficiency by 30%&#10;• Implemented new features"
                  rows={5}
                />
              </div>
            </CardContent>
          )}
        </Card>
      ))}
      <Button variant="outline" className="w-full" onClick={addExperience}>
        <Plus className="mr-2 h-4 w-4" />
        Add Experience
      </Button>
    </div>
  );
}
