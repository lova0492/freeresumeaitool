import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';

interface ColorSchemeSelectorProps {
  selectedScheme: bigint;
  onSelectScheme: (schemeId: bigint) => void;
}

export default function ColorSchemeSelector({ selectedScheme, onSelectScheme }: ColorSchemeSelectorProps) {
  const colorSchemes = [
    { id: 1, name: 'Blue', primary: 'oklch(0.50 0.20 250)' },
    { id: 2, name: 'Green', primary: 'oklch(0.55 0.22 150)' },
    { id: 3, name: 'Orange', primary: 'oklch(0.52 0.24 30)' },
    { id: 4, name: 'Purple', primary: 'oklch(0.48 0.26 330)' },
    { id: 5, name: 'Red', primary: 'oklch(0.50 0.23 0)' },
    { id: 6, name: 'Cyan', primary: 'oklch(0.53 0.21 200)' },
    { id: 7, name: 'Indigo', primary: 'oklch(0.45 0.20 280)' },
    { id: 8, name: 'Lime', primary: 'oklch(0.56 0.24 120)' },
    { id: 9, name: 'Pink', primary: 'oklch(0.51 0.25 350)' },
    { id: 10, name: 'Dark Blue', primary: 'oklch(0.40 0.15 270)' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-base font-semibold">Color Scheme</Label>
        <p className="text-sm text-muted-foreground">Choose a color scheme for your resume</p>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {colorSchemes.map((scheme) => (
          <button
            key={scheme.id}
            onClick={() => onSelectScheme(BigInt(scheme.id))}
            className={`group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-lg border-2 transition-all hover:scale-105 ${
              Number(selectedScheme) === scheme.id ? 'border-primary' : 'border-border'
            }`}
            title={scheme.name}
          >
            <div
              className="h-8 w-8 rounded-full"
              style={{ backgroundColor: scheme.primary }}
            />
            {Number(selectedScheme) === scheme.id && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
            )}
            <span className="text-xs font-medium">{scheme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
