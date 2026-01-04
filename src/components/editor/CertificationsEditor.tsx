import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import type { Certification } from '../../backend';

interface CertificationsEditorProps {
  certifications: Certification[];
  onUpdate: (certifications: Certification[]) => void;
}

export default function CertificationsEditor({ certifications, onUpdate }: CertificationsEditorProps) {
  const addCertification = () => {
    const newCert: Certification = {
      title: '',
      issuer: '',
      date: '',
    };
    onUpdate([...certifications, newCert]);
  };

  const updateCertification = (index: number, field: keyof Certification, value: string) => {
    const updated = [...certifications];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate(updated);
  };

  const removeCertification = (index: number) => {
    onUpdate(certifications.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {certifications.map((cert, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{cert.title || 'New Certification'}</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => removeCertification(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Certification Title *</Label>
              <Input
                value={cert.title}
                onChange={(e) => updateCertification(index, 'title', e.target.value)}
                placeholder="AWS Certified Solutions Architect"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Issuer</Label>
                <Input
                  value={cert.issuer}
                  onChange={(e) => updateCertification(index, 'issuer', e.target.value)}
                  placeholder="Amazon Web Services"
                />
              </div>
              <div className="space-y-2">
                <Label>Date</Label>
                <Input
                  value={cert.date}
                  onChange={(e) => updateCertification(index, 'date', e.target.value)}
                  placeholder="Jan 2023"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button variant="outline" className="w-full" onClick={addCertification}>
        <Plus className="mr-2 h-4 w-4" />
        Add Certification
      </Button>
    </div>
  );
}
