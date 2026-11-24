import { useState, useMemo, useEffect, useCallback } from 'react';
import {
  Search,
  FileText,
  Download,
  Bot,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import type { ExamPaper, SubjectId, Track } from '../types';
import type { TranslationDictionary } from '../translations';
import { getAllUniqueSubjectIds } from '../utils/subjects';
import { downloadExamPaperPdf } from '../utils/pdfExport';
import { PdfCanvasViewer } from './PdfCanvasViewer';

interface PrepareViewProps {
  dict: TranslationDictionary;
  initialPaperId: string | null;
  navResetTick: number;
  onClearInitialPaper: () => void;
  onAskAiAboutExercise: (title: string, content: string) => void;
}

export function PrepareView({
  dict,
  initialPaperId,
  navResetTick,
  onClearInitialPaper,
  onAskAiAboutExercise,
}: PrepareViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [trackFilter, setTrackFilter] = useState<'all' | Track>('all');
  const [subjectFilter, setSubjectFilter] = useState<'all' | SubjectId>('all');
  const [yearFilter, setYearFilter] = useState<'all' | number>('all');

  const [activePaper, setActivePaper] = useState<ExamPaper | null>(null);
  const [pdfScale, setPdfScale] = useState(1.15);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleTotalPagesChange = useCallback((total: number) => {
    setTotalPages(total);
  }, []);

  const handleCurrentPageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  // Reset filters and close modal when clicking Prepare navbar tab
  useEffect(() => {
    setSearchQuery('');
    setTrackFilter('all');
    setSubjectFilter('all');
    setYearFilter('all');
    setActivePaper(null);
  }, [navResetTick]);

  // Reset zoom and page counters when opening a paper
  useEffect(() => {
    if (activePaper) {
      setPdfScale(1.15);
      setTotalPages(0);
      setCurrentPage(1);
    }
  }, [activePaper?.id]);

  // Jump straight to a linked paper when coming from Learn weak topics
  useEffect(() => {
    if (initialPaperId) {
      const found = dict.examPapers.find((p) => p.id === initialPaperId);
      if (found) {
        setActivePaper(found);
      }
      onClearInitialPaper();
    }
  }, [initialPaperId, dict.examPapers, onClearInitialPaper]);

  // Escape key closes PDF modal
  useEffect(() => {
    if (!activePaper) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePaper(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activePaper]);

  // Keep active modal synced if user switches language while viewing a paper
  const syncedActivePaper = useMemo(() => {
    if (!activePaper) return null;
    return dict.examPapers.find((p) => p.id === activePaper.id) ?? activePaper;
  }, [activePaper, dict.examPapers]);

  const filteredPapers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return dict.examPapers.filter((paper) => {
      if (trackFilter !== 'all' && paper.track !== 'both' && paper.track !== trackFilter) {
        return false;
      }
      if (subjectFilter !== 'all' && paper.subjectId !== subjectFilter) {
        return false;
      }
      if (yearFilter !== 'all' && paper.year !== yearFilter) {
        return false;
      }
      if (!q) return true;
      const subjectName = dict.subjects[paper.subjectId].name.toLowerCase();
      return (
        paper.title.toLowerCase().includes(q) ||
        subjectName.includes(q) ||
        String(paper.year).includes(q) ||
        paper.topics.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [dict.examPapers, dict.subjects, searchQuery, trackFilter, subjectFilter, yearFilter]);

  const years = [2025, 2024, 2023, 2022, 2021];
  const allSubjects = getAllUniqueSubjectIds();

  const formatPaperForAi = (paper: ExamPaper) => {
    const trackLabel =
      paper.track === 'both'
        ? `${dict.tracks.science.label} / ${dict.tracks.social.label}`
        : dict.tracks[paper.track].label;
    return [
      `Exam Paper: ${paper.title}`,
      `Track: ${trackLabel} | Year: ${paper.year} | Score Weight: ${paper.points} pts`,
      `Core Topics: ${paper.topics.join(', ')}`,
      ...paper.exercises.map(
        (ex) => `${ex.number} (${ex.topic}): ${ex.statement} ${ex.subParts.join(' ')}`
      ),
    ].join('\n');
  };

  const handleDownloadPaper = (paper: ExamPaper) => {
    if (paper.pdfPath) {
      const link = document.createElement('a');
      link.href = paper.pdfPath;
      link.download = `${paper.id}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      downloadExamPaperPdf(paper.id);
    }
  };

  const handleZoomOut = () => {
    setPdfScale((s) => Math.max(0.65, Number((s - 0.15).toFixed(2))));
  };

  const handleZoomIn = () => {
    setPdfScale((s) => Math.min(2.2, Number((s + 0.15).toFixed(2))));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-2 max-w-3xl">
        <h1 className="text-3xl font-extrabold text-[#12366B]">{dict.prepare.pageTitle}</h1>
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          {dict.prepare.pageSubtitle}
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-5 relative">
          <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={dict.prepare.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F5F7FB] border border-slate-200 text-xs sm:text-sm text-[#1E293B] focus:border-[#12366B]"
          />
        </div>

        <div className="md:col-span-3">
          <select
            value={trackFilter}
            onChange={(e) => setTrackFilter(e.target.value as 'all' | Track)}
            aria-label={dict.prepare.allTracks}
            className="w-full py-2.5 px-3.5 rounded-xl bg-[#F5F7FB] border border-slate-200 text-xs sm:text-sm font-semibold text-[#1E293B]"
          >
            <option value="all">{dict.prepare.allTracks}</option>
            <option value="science">{dict.tracks.science.label}</option>
            <option value="social">{dict.tracks.social.label}</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value as 'all' | SubjectId)}
            aria-label={dict.prepare.allSubjects}
            className="w-full py-2.5 px-3.5 rounded-xl bg-[#F5F7FB] border border-slate-200 text-xs sm:text-sm font-semibold text-[#1E293B]"
          >
            <option value="all">{dict.prepare.allSubjects}</option>
            {allSubjects.map((sid) => (
              <option key={sid} value={sid}>
                {dict.subjects[sid].name}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <select
            value={yearFilter}
            onChange={(e) =>
              setYearFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))
            }
            aria-label={dict.prepare.allYears}
            className="w-full py-2.5 px-3.5 rounded-xl bg-[#F5F7FB] border border-slate-200 text-xs sm:text-sm font-semibold text-[#1E293B] tabular-nums"
          >
            <option value="all">{dict.prepare.allYears}</option>
            {years.map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Exam Paper Cards Grid */}
      {filteredPapers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper) => {
            const trackLabel =
              paper.track === 'both'
                ? `${dict.tracks.science.label} / ${dict.tracks.social.label}`
                : dict.tracks[paper.track].label;

            return (
              <article
                key={paper.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  {/* Metadata line */}
                  <div className="text-xs text-[#64748B] flex flex-wrap items-center gap-1.5 tabular-nums">
                    <span className="font-bold text-[#F47700]">{paper.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-[#12366B]">
                      {dict.subjects[paper.subjectId].name}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {paper.points} {dict.prepare.pointsUnit}
                    </span>
                  </div>

                  <h2 className="text-base font-extrabold text-[#12366B] leading-snug">
                    {paper.title}
                  </h2>

                  <div className="text-xs text-[#64748B] leading-relaxed">
                    {trackLabel} · {paper.durationMinutes} {dict.prepare.minutesUnit}
                  </div>

                  <div className="text-xs text-[#1E293B] leading-relaxed">
                    {paper.topics.join(' · ')}
                  </div>

                  <div className="pt-1 text-[11px] font-semibold text-emerald-700">
                    {dict.prepare.verifiedTag}
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setActivePaper(paper)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#12366B] hover:bg-[#0d2a54] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{dict.prepare.viewPdfBtn}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadPaper(paper)}
                    className="p-2.5 rounded-xl bg-[#EEF3FA] hover:bg-[#dfe8f6] text-[#12366B] transition-colors cursor-pointer"
                    title={dict.prepare.modalDownloadPdf}
                    aria-label={dict.prepare.modalDownloadPdf}
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center text-sm text-[#64748B]">
          {dict.prepare.emptyState}
        </div>
      )}

      {/* Wide Combined MoEYS PDF.js Canvas Viewer Modal */}
      {syncedActivePaper && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={syncedActivePaper.title}
          onClick={() => setActivePaper(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Toolbar: Source Credit, Page Counter, Zoom (-/+), Download, Ask AI, and Top-Right X */}
            <div className="px-4 sm:px-5 py-3.5 border-b border-slate-200 bg-[#F5F7FB] flex flex-wrap items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-bold text-[#F47700]">
                  {dict.prepare.sourceCreditLine}
                </div>
                <h2 className="text-sm sm:text-lg font-extrabold text-[#12366B] truncate">
                  {syncedActivePaper.title}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {/* Page Counter & Zoom Controls */}
                {totalPages > 0 && (
                  <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl px-2 py-1 text-xs font-bold text-[#12366B] tabular-nums">
                    <span className="px-1.5">
                      {currentPage} / {totalPages}
                    </span>
                    <span className="h-4 w-px bg-slate-200" aria-hidden="true" />
                    <button
                      type="button"
                      onClick={handleZoomOut}
                      className="p-1 rounded-lg hover:bg-[#EEF3FA] text-[#12366B] transition-colors cursor-pointer"
                      title="Zoom out"
                      aria-label="Zoom out"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="min-w-[3rem] text-center text-[11px] text-[#64748B]">
                      {Math.round(pdfScale * 100)}%
                    </span>
                    <button
                      type="button"
                      onClick={handleZoomIn}
                      className="p-1 rounded-lg hover:bg-[#EEF3FA] text-[#12366B] transition-colors cursor-pointer"
                      title="Zoom in"
                      aria-label="Zoom in"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => handleDownloadPaper(syncedActivePaper)}
                  className="px-3.5 py-2 rounded-xl bg-[#12366B] hover:bg-[#0d2a54] text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{dict.prepare.modalDownloadPdf}</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    onAskAiAboutExercise(
                      syncedActivePaper.title,
                      formatPaperForAi(syncedActivePaper)
                    )
                  }
                  className="px-3.5 py-2 rounded-xl bg-[#F47700] hover:bg-[#dc6b00] text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>{dict.prepare.modalAskAiFullPaper}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivePaper(null)}
                  className="p-2 rounded-xl text-[#64748B] hover:text-[#12366B] hover:bg-white transition-colors cursor-pointer"
                  aria-label={dict.prepare.modalClose}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF.js Canvas Renderer (Never blocked by Chrome sandbox frames) */}
            <div className="flex-1 bg-slate-200/70 overflow-hidden flex flex-col">
              {syncedActivePaper.pdfPath ? (
                <PdfCanvasViewer
                  pdfUrl={syncedActivePaper.pdfPath}
                  scale={pdfScale}
                  loadingLabel={dict.prepare.modalOfficialPdfNote}
                  errorLabel={dict.prepare.emptyState}
                  onTotalPagesChange={handleTotalPagesChange}
                  onCurrentPageChange={handleCurrentPageChange}
                />
              ) : (
                <div className="flex-1 flex items-center justify-center p-8 text-sm text-[#64748B]">
                  {dict.prepare.emptyState}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
