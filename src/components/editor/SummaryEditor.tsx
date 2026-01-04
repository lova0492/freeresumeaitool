import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface SummaryEditorProps {
  summary: string;
  onUpdate: (summary: string) => void;
}

export default function SummaryEditor({ summary, onUpdate }: SummaryEditorProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="summary">Professional Summary</Label>
      <Textarea
        id="summary"
        value={summary}
        onChange={(e) => onUpdate(e.target.value)}
        placeholder="Write a brief professional summary highlighting your key qualifications and career objectives..."
        rows={6}
        className="resize-none"
      />
      <p className="text-xs text-muted-foreground">
        Tip: Keep it concise (2-3 sentences) and focus on your most relevant achievements and skills.
      </p>
    </div>
  );
}
