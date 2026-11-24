import { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { Loader2, AlertCircle } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

interface PdfCanvasViewerProps {
  pdfUrl: string;
  scale: number;
  loadingLabel: string;
  errorLabel: string;
  onTotalPagesChange: (total: number) => void;
  onCurrentPageChange: (page: number) => void;
}

export function PdfCanvasViewer({
  pdfUrl,
  scale,
  loadingLabel,
  errorLabel,
  onTotalPagesChange,
  onCurrentPageChange,
}: PdfCanvasViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Load PDF document whenever pdfUrl changes
  useEffect(() => {
    let cancelled = false;
    let loadedDoc: pdfjsLib.PDFDocumentProxy | null = null;

    setIsLoading(true);
    setErrorMsg(null);
    setPdfDoc(null);
    setNumPages(0);
    onTotalPagesChange(0);
    onCurrentPageChange(1);

    const loadingTask = pdfjsLib.getDocument({
      url: pdfUrl,
      useSystemFonts: true,
    });

    loadingTask.promise
      .then((doc) => {
        if (cancelled) {
          doc.cleanup().catch(() => {});
          return;
        }
        loadedDoc = doc;
        setPdfDoc(doc);
        setNumPages(doc.numPages);
        onTotalPagesChange(doc.numPages);
        onCurrentPageChange(1);
        setIsLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('PDF.js load error:', err);
        setErrorMsg(errorLabel);
        setIsLoading(false);
      });

    return () => {
      cancelled = true;
      loadingTask.destroy().catch(() => {});
      if (loadedDoc) {
        loadedDoc.cleanup().catch(() => {});
      }
    };
  }, [pdfUrl, errorLabel, onTotalPagesChange, onCurrentPageChange]);

  // Render all pages onto high-resolution canvases whenever pdfDoc or scale changes
  useEffect(() => {
    if (!pdfDoc || numPages === 0) return;

    let cancelled = false;
    const renderTasks: pdfjsLib.RenderTask[] = [];

    const renderAllPages = async () => {
      const outputScale = Math.min(window.devicePixelRatio || 1, 2);

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        if (cancelled) return;
        const canvas = canvasRefs.current[pageNum - 1];
        if (!canvas) continue;

        try {
          const page = await pdfDoc.getPage(pageNum);
          if (cancelled) return;

          const viewport = page.getViewport({ scale });
          const context = canvas.getContext('2d');
          if (!context) continue;

          canvas.width = Math.floor(viewport.width * outputScale);
          canvas.height = Math.floor(viewport.height * outputScale);
          canvas.style.width = `${Math.floor(viewport.width)}px`;
          canvas.style.height = `${Math.floor(viewport.height)}px`;

          const transform =
            outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined;

          const renderTask = page.render({
            canvasContext: context,
            canvas,
            transform,
            viewport,
          });
          renderTasks.push(renderTask);
          await renderTask.promise;
        } catch (err: unknown) {
          if (
            err &&
            typeof err === 'object' &&
            'name' in err &&
            (err as { name: string }).name === 'RenderingCancelledException'
          ) {
            return;
          }
          if (!cancelled) {
            console.error(`Error rendering PDF page ${pageNum}:`, err);
          }
        }
      }
    };

    renderAllPages();

    return () => {
      cancelled = true;
      for (const task of renderTasks) {
        try {
          task.cancel();
        } catch {
          // ignore already finished tasks
        }
      }
    };
  }, [pdfDoc, numPages, scale]);

  // Track currently visible page on scroll
  useEffect(() => {
    const rootEl = containerRef.current;
    if (!rootEl || numPages === 0) return;

    const handleScroll = () => {
      const containerTop = rootEl.getBoundingClientRect().top;
      let closestPage = 1;
      let smallestOffset = Infinity;

      for (let i = 0; i < numPages; i++) {
        const el = canvasRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const offset = Math.abs(rect.top - containerTop - 24);
        if (offset < smallestOffset) {
          smallestOffset = offset;
          closestPage = i + 1;
        }
      }

      onCurrentPageChange(closestPage);
    };

    rootEl.addEventListener('scroll', handleScroll, { passive: true });
    return () => rootEl.removeEventListener('scroll', handleScroll);
  }, [numPages, onCurrentPageChange]);

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-3 p-8 text-sm font-semibold text-[#12366B]">
        <Loader2 className="w-7 h-7 animate-spin text-[#F47700]" />
        <span>{loadingLabel}</span>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-3 p-8 text-center text-sm text-rose-700">
        <AlertCircle className="w-7 h-7 text-rose-600" />
        <span>{errorMsg}</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-200/80"
    >
      <div className="flex flex-col items-center gap-5">
        {Array.from({ length: numPages }, (_, idx) => (
          <div
            key={`${pdfUrl}-page-${idx + 1}`}
            className="bg-white shadow-md border border-slate-300/80 rounded-sm overflow-hidden"
          >
            <canvas
              ref={(el) => {
                canvasRefs.current[idx] = el;
              }}
              className="block"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
