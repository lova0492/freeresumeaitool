import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { FileText, Download, Loader2, Printer } from 'lucide-react';
import type { Resume } from '../../backend';

interface ExportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resume: Resume;
}

export default function ExportDialog({ open, onOpenChange, resume }: ExportDialogProps) {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = async () => {
    setIsExporting(true);
    try {
      // Use browser's print functionality to save as PDF
      const element = document.getElementById('resume-preview');
      if (!element) {
        throw new Error('Resume preview not found');
      }

      // Create a new window with the resume content
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        throw new Error('Please allow pop-ups to export PDF');
      }

      // Clone the element and its styles
      const clonedElement = element.cloneNode(true) as HTMLElement;
      
      // Create a complete HTML document for printing
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${resume.personalInfo.name || 'Resume'}</title>
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.5;
              }
              @media print {
                body {
                  margin: 0;
                  padding: 0;
                }
                @page {
                  margin: 0;
                  size: A4;
                }
              }
            </style>
          </head>
          <body>
            ${clonedElement.outerHTML}
          </body>
        </html>
      `);
      
      printWindow.document.close();
      
      // Wait for content to load
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
          printWindow.onafterprint = () => {
            printWindow.close();
          };
        }, 250);
      };
      
      toast.success('Opening print dialog. Choose "Save as PDF" as your printer.');
      onOpenChange(false);
    } catch (error: any) {
      console.error('Export error:', error);
      toast.error(error.message || 'Failed to export PDF');
    } finally {
      setIsExporting(false);
    }
  };

  const exportToWord = async () => {
    try {
      // Generate a simple HTML version that can be opened in Word
      const element = document.getElementById('resume-preview');
      if (!element) {
        throw new Error('Resume preview not found');
      }

      const htmlContent = `
        <!DOCTYPE html>
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
          <head>
            <meta charset='utf-8'>
            <title>${resume.personalInfo.name || 'Resume'}</title>
            <style>
              body {
                font-family: Calibri, Arial, sans-serif;
                font-size: 11pt;
                line-height: 1.5;
              }
            </style>
          </head>
          <body>
            ${element.innerHTML}
          </body>
        </html>
      `;

      const blob = new Blob([htmlContent], { type: 'application/msword' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${resume.personalInfo.name || 'resume'}_${Date.now()}.doc`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success('Resume exported as Word document!');
      onOpenChange(false);
    } catch (error: any) {
      console.error('Export error:', error);
      toast.error(error.message || 'Failed to export Word document');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Export Resume</DialogTitle>
          <DialogDescription>
            Choose a format to download your resume
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="h-auto flex-col items-start gap-2 p-4"
            onClick={exportToPDF}
            disabled={isExporting}
          >
            <div className="flex w-full items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center">
                <Printer className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-semibold">Export as PDF</div>
                <div className="text-xs text-muted-foreground">
                  Use browser's print dialog to save as PDF
                </div>
              </div>
              {isExporting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Download className="h-5 w-5" />
              )}
            </div>
          </Button>
          <Button
            variant="outline"
            className="h-auto flex-col items-start gap-2 p-4"
            onClick={exportToWord}
            disabled={isExporting}
          >
            <div className="flex w-full items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-semibold">Export as Word</div>
                <div className="text-xs text-muted-foreground">
                  Download as .doc file (editable)
                </div>
              </div>
              <FileText className="h-5 w-5" />
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
