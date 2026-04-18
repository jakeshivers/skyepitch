import jsPDF from 'jspdf';
import type { GeneratedPitch } from './ai';

export function exportPitchPdf(p: GeneratedPitch, title: string) {
  const doc = new jsPDF({ unit: 'pt', format: 'letter' });
  const margin = 54;
  const width = doc.internal.pageSize.getWidth() - margin * 2;
  let y = margin;

  const write = (text: string, size = 11, bold = false) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, width);
    for (const line of lines) {
      if (y > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += size * 1.3;
    }
  };

  write('Skyepitch — Pitch Export', 16, true);
  write(title, 13, true);
  y += 6;
  write(`Tone: ${p.tone}`, 10);
  y += 10;

  write('Headline', 12, true);
  write(p.headline);
  y += 6;

  write('Talking Points', 12, true);
  for (const t of p.talkingPoints) write(`• ${t}`);
  y += 6;

  write('Objection Handlers', 12, true);
  for (const o of p.objections) {
    write(`Q: ${o.objection}`, 11, true);
    write(`A: ${o.response}`);
  }
  y += 6;

  write('Suggested Next Steps', 12, true);
  for (const n of p.nextSteps) write(`• ${n}`);

  doc.save(`${title.replace(/[^a-z0-9-]+/gi, '_')}.pdf`);
}
