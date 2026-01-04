import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import type { Education } from '../../backend';

interface EducationEditorProps {
  education: Education[];
  onUpdate: (education: Education[]) => void;
}

export default function EducationEditor({ education, onUpdate }: EducationEditorProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(education.length > 0 ? 0 : null);

  const addEducation = () => {
    const newEducation: Education = {
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      honors: '',
    };
    onUpdate([...education, newEducation]);
    setExpandedIndex(education.length);
  };

  const updateEducation = (index: number, field: keyof Education, value: string) => {
    const updated = [...education];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate(updated);
  };

  const removeEducation = (index: number) => {
    onUpdate(education.filter((_, i) => i !== index));
    if (expandedIndex === index) {
      setExpandedIndex(null);
    }
  };

  return (
    <div className="space-y-4">
      {education.map((edu, index) => (
        <Card key={index}>
          <CardHeader className="cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
                <CardTitle className="text-base">
                  {edu.degree || 'New Degree'} {edu.institution && `at ${edu.institution}`}
                </CardTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); removeEducation(index); }}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          {expandedIndex === index && (
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Institution *</Label>
                <Input
                  value={edu.institution}
                  onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                  placeholder="University Name"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Degree *</Label>
                  <Input
                    value={edu.degree}
                    onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                    placeholder="Bachelor of Science"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Field of Study</Label>
                  <Input
                    value={edu.fieldOfStudy}
                    onChange={(e) => updateEducation(index, 'fieldOfStudy', e.target.value)}
                    placeholder="Computer Science"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input
                    value={edu.startDate}
                    onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                    placeholder="2016"
                  />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    value={edu.endDate}
                    onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                    placeholder="2020"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Honors/GPA</Label>
                <Input
                  value={edu.honors}
                  onChange={(e) => updateEducation(index, 'honors', e.target.value)}
                  placeholder="Summa Cum Laude, GPA: 3.9"
                />
              </div>
            </CardContent>
          )}
        </Card>
      ))}
      <Button variant="outline" className="w-full" onClick={addEducation}>
        <Plus className="mr-2 h-4 w-4" />
        Add Education
      </Button>
    </div>
  );
}
