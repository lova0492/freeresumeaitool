import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';

interface TemplateSelectorProps {
  selectedTemplate: bigint;
  onSelectTemplate: (templateId: bigint) => void;
}

export default function TemplateSelector({ selectedTemplate, onSelectTemplate }: TemplateSelectorProps) {
  const templates = [
    { id: 1, name: 'Classic', preview: '/assets/generated/template-1-preview.dim_400x600.png' },
    { id: 2, name: 'Modern', preview: '/assets/generated/template-2-preview.dim_400x600.png' },
    { id: 3, name: 'Minimal', preview: '/assets/generated/template-3-preview.dim_400x600.png' },
    { id: 4, name: 'Professional', preview: '/assets/generated/template-4-preview.dim_400x600.png' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-base font-semibold">Choose Template</Label>
        <p className="text-sm text-muted-foreground">Select a template design for your resume</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              Number(selectedTemplate) === template.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => onSelectTemplate(BigInt(template.id))}
          >
            <CardContent className="p-3">
              <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-muted">
                <img src={template.preview} alt={template.name} className="h-full w-full object-cover" />
                {Number(selectedTemplate) === template.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-2 text-center text-sm font-medium">{template.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
