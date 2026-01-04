import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { PersonalInfo } from '../../backend';

interface PersonalInfoEditorProps {
  personalInfo: PersonalInfo;
  onUpdate: (info: Partial<PersonalInfo>) => void;
}

export default function PersonalInfoEditor({ personalInfo, onUpdate }: PersonalInfoEditorProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          value={personalInfo.name}
          onChange={(e) => onUpdate({ name: e.target.value })}
          placeholder="John Doe"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          value={personalInfo.email}
          onChange={(e) => onUpdate({ email: e.target.value })}
          placeholder="john@example.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          value={personalInfo.phone}
          onChange={(e) => onUpdate({ phone: e.target.value })}
          placeholder="+1 (555) 123-4567"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          value={personalInfo.address}
          onChange={(e) => onUpdate({ address: e.target.value })}
          placeholder="City, State"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="linkedin">LinkedIn</Label>
        <Input
          id="linkedin"
          value={personalInfo.linkedin}
          onChange={(e) => onUpdate({ linkedin: e.target.value })}
          placeholder="linkedin.com/in/johndoe"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          value={personalInfo.website}
          onChange={(e) => onUpdate({ website: e.target.value })}
          placeholder="johndoe.com"
        />
      </div>
    </div>
  );
}
