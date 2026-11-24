import { useState, useMemo, useEffect } from 'react';
import { Bookmark, ExternalLink, Calendar, Award, CheckCircle2, X } from 'lucide-react';
import type { ScholarshipItem, Track } from '../types';
import type { TranslationDictionary } from '../translations';

interface DiscoverViewProps {
  dict: TranslationDictionary;
  savedIds: string[];
  navResetTick: number;
  onToggleSave: (scholarshipId: string) => void;
}

export function DiscoverView({
  dict,
  savedIds,
  navResetTick,
  onToggleSave,
}: DiscoverViewProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'saved'>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'domestic' | 'international'>('all');
  const [trackFilter, setTrackFilter] = useState<'all' | Track>('all');
  const [formatFilter, setFormatFilter] = useState<'all' | 'written_strict' | 'grade_interview'>('all');
  const [selectedScholarshipId, setSelectedScholarshipId] = useState<string | null>(null);

  // Reset Discover state when clicking Discover in top navbar
  useEffect(() => {
    setActiveTab('all');
    setCategoryFilter('all');
    setTrackFilter('all');
    setFormatFilter('all');
    setSelectedScholarshipId(null);
  }, [navResetTick]);

  // Close Scholarship detail modal on Escape
  useEffect(() => {
    if (!selectedScholarshipId) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedScholarshipId(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedScholarshipId]);

  const activeScholarship: ScholarshipItem | null = useMemo(() => {
    if (!selectedScholarshipId) return null;
    return dict.scholarships.find((s) => s.id === selectedScholarshipId) ?? null;
  }, [dict.scholarships, selectedScholarshipId]);

  const filteredScholarships = useMemo(() => {
    return dict.scholarships.filter((s) => {
      if (activeTab === 'saved' && !savedIds.includes(s.id)) {
        return false;
      }
      if (categoryFilter !== 'all' && s.category !== categoryFilter) {
        return false;
      }
      if (
        trackFilter !== 'all' &&
        !s.tracks.includes('both') &&
        !s.tracks.includes(trackFilter)
      ) {
        return false;
      }
      if (formatFilter !== 'all' && s.examFormatType !== 'mixed' && s.examFormatType !== formatFilter) {
        return false;
      }
      return true;
    });
  }, [dict.scholarships, activeTab, savedIds, categoryFilter, trackFilter, formatFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-2 max-w-3xl">
        <h1 className="text-3xl font-extrabold text-[#12366B]">{dict.discover.pageTitle}</h1>
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          {dict.discover.pageSubtitle}
        </p>
      </div>

      {/* Tabs + Category & Format Filters Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* All vs Saved Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F5F7FB] rounded-xl border border-slate-200 w-fit">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#12366B] text-white shadow-sm'
                  : 'text-[#64748B] hover:text-[#12366B]'
              }`}
            >
              {dict.discover.tabAll} ({dict.scholarships.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer tabular-nums ${
                activeTab === 'saved'
                  ? 'bg-[#F47700] text-white shadow-sm'
                  : 'text-[#64748B] hover:text-[#12366B]'
              }`}
            >
              {dict.discover.tabSaved} ({savedIds.length})
            </button>
          </div>

          {/* Domestic vs International Category Filter */}
          <div className="flex items-center gap-1 p-1 bg-[#F5F7FB] rounded-xl border border-slate-200 w-fit">
            <button
              type="button"
              onClick={() => setCategoryFilter('all')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                categoryFilter === 'all'
                  ? 'bg-white text-[#12366B] shadow-xs'
                  : 'text-[#64748B] hover:text-[#12366B]'
              }`}
            >
              {dict.discover.filterCategoryAll}
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter('domestic')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                categoryFilter === 'domestic'
                  ? 'bg-[#EEF3FA] text-[#12366B] shadow-xs'
                  : 'text-[#64748B] hover:text-[#12366B]'
              }`}
            >
              {dict.discover.categoryLabels.domestic}
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter('international')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                categoryFilter === 'international'
                  ? 'bg-[#FFF3E8] text-[#F47700] shadow-xs'
                  : 'text-[#64748B] hover:text-[#12366B]'
              }`}
            >
              {dict.discover.categoryLabels.international}
            </button>
          </div>
        </div>

        {/* Track & Format Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={trackFilter}
            onChange={(e) => setTrackFilter(e.target.value as 'all' | Track)}
            aria-label={dict.discover.filterTrackAll}
            className="py-2 px-3.5 rounded-xl bg-[#F5F7FB] border border-slate-200 text-xs font-semibold text-[#1E293B]"
          >
            <option value="all">{dict.discover.filterTrackAll}</option>
            <option value="science">{dict.tracks.science.label}</option>
            <option value="social">{dict.tracks.social.label}</option>
          </select>

          <select
            value={formatFilter}
            onChange={(e) =>
              setFormatFilter(e.target.value as 'all' | 'written_strict' | 'grade_interview')
            }
            aria-label={dict.discover.filterFormatAll}
            className="py-2 px-3.5 rounded-xl bg-[#F5F7FB] border border-slate-200 text-xs font-semibold text-[#1E293B]"
          >
            <option value="all">{dict.discover.filterFormatAll}</option>
            <option value="written_strict">{dict.discover.filterFormatWritten}</option>
            <option value="grade_interview">{dict.discover.filterFormatInterview}</option>
          </select>
        </div>
      </div>

      {/* Directory Grid or Saved Empty State */}
      {filteredScholarships.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredScholarships.map((item) => {
            const isSaved = savedIds.includes(item.id);
            const statusText = dict.discover.statusLabels[item.status];
            const categoryText = dict.discover.categoryLabels[item.category];

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  {/* Category badge + status + exam format metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-md font-extrabold ${
                          item.category === 'international'
                            ? 'bg-[#FFF3E8] text-[#F47700]'
                            : 'bg-[#EEF3FA] text-[#12366B]'
                        }`}
                      >
                        {categoryText}
                      </span>
                      <span
                        className={`font-extrabold ${
                          item.status === 'CLOSING_SOON' ? 'text-[#F47700]' : 'text-emerald-700'
                        }`}
                      >
                        {statusText}
                      </span>
                    </div>
                    <span className="font-semibold text-[#12366B]">{item.examFormatTag}</span>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => setSelectedScholarshipId(item.id)}
                      className="text-left group cursor-pointer"
                    >
                      <h2 className="text-lg font-extrabold text-[#12366B] group-hover:text-[#F47700] transition-colors leading-snug">
                        {item.name}
                      </h2>
                    </button>
                    <div className="text-xs text-[#64748B] mt-1">{item.organization}</div>
                  </div>

                  <p className="text-sm text-[#1E293B] leading-relaxed whitespace-pre-line">
                    {item.summary}
                  </p>

                  {/* Structured specs without nested box borders */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs">
                    <div>
                      <span className="text-[#64748B] block">{dict.discover.minGradeLabel}</span>
                      <span className="font-bold text-[#12366B] flex items-center gap-1 mt-0.5">
                        <Award className="w-3.5 h-3.5 text-[#F47700] shrink-0" />
                        <span>{item.minBaciiGrade}</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-[#64748B] block">{dict.discover.deadlineLabel}</span>
                      <span className="font-bold text-[#1E293B] flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3.5 h-3.5 text-[#12366B] shrink-0" />
                        <span>{item.deadline}</span>
                      </span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-[#64748B] block">{dict.discover.coverageLabel}</span>
                      <span className="font-medium text-[#1E293B] mt-0.5 block">
                        {item.coverage}
                      </span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-[#64748B] block">{dict.discover.subjectsLabel}</span>
                      <span className="font-semibold text-[#12366B] mt-0.5 block">
                        {item.keySubjects}
                      </span>
                    </div>
                  </div>

                  {activeTab === 'saved' && (
                    <div className="rounded-xl bg-[#EEF3FA] px-4 py-3 text-xs text-[#12366B] flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F47700] shrink-0 mt-0.5" />
                      <span>
                        <strong>{dict.discover.savedChecklistLabel}: </strong>
                        {item.checklistTip}
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onToggleSave(item.id)}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                      isSaved
                        ? 'bg-[#FFF3E8] text-[#F47700] border border-[#F47700]/40'
                        : 'bg-[#EEF3FA] text-[#12366B] hover:bg-[#e1eaf7]'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#F47700]' : ''}`} />
                    <span>{isSaved ? dict.discover.savedBtn : dict.discover.saveBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedScholarshipId(item.id)}
                    className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#12366B] text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {dict.discover.viewDetailsBtn}
                  </button>

                  <a
                    href={item.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-[#12366B] hover:bg-[#0d2a54] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span>{dict.discover.visitPortalBtn}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <Bookmark className="w-8 h-8 text-[#F47700] mx-auto" />
          <h3 className="text-base font-bold text-[#12366B]">{dict.discover.savedEmptyTitle}</h3>
          <p className="text-xs text-[#64748B] max-w-md mx-auto leading-relaxed">
            {dict.discover.savedEmptyDesc}
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveTab('all');
              setCategoryFilter('all');
            }}
            className="px-4 py-2 rounded-xl bg-[#12366B] text-white text-xs font-bold cursor-pointer"
          >
            {dict.discover.tabAll}
          </button>
        </div>
      )}

      {/* Scholarship Detail Modal (with persistent X button and backdrop close) */}
      {activeScholarship && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/55 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={activeScholarship.name}
          onClick={() => setSelectedScholarshipId(null)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Top-Right X Close Button */}
            <div className="px-6 py-4 bg-[#F5F7FB] border-b border-slate-200 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span
                    className={`px-2 py-0.5 rounded font-extrabold ${
                      activeScholarship.category === 'international'
                        ? 'bg-[#FFF3E8] text-[#F47700]'
                        : 'bg-[#EEF3FA] text-[#12366B]'
                    }`}
                  >
                    {dict.discover.categoryLabels[activeScholarship.category]}
                  </span>
                  <span
                    className={`font-extrabold ${
                      activeScholarship.status === 'CLOSING_SOON'
                        ? 'text-[#F47700]'
                        : 'text-emerald-700'
                    }`}
                  >
                    {dict.discover.statusLabels[activeScholarship.status]}
                  </span>
                  <span className="text-[#64748B]">·</span>
                  <span className="font-semibold text-[#12366B]">
                    {activeScholarship.examFormatTag}
                  </span>
                </div>
                <h2 className="text-lg font-extrabold text-[#12366B] mt-1.5 leading-snug">
                  {activeScholarship.name}
                </h2>
                <p className="text-xs text-[#64748B] mt-0.5">{activeScholarship.organization}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedScholarshipId(null)}
                aria-label={dict.discover.closeModalLabel}
                className="p-2 rounded-xl text-[#64748B] hover:text-[#12366B] hover:bg-white transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm text-[#1E293B] leading-relaxed whitespace-pre-line">
                {activeScholarship.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100 text-xs">
                <div>
                  <span className="text-[#64748B] block">{dict.discover.minGradeLabel}</span>
                  <span className="font-bold text-[#12366B] flex items-center gap-1.5 mt-1">
                    <Award className="w-4 h-4 text-[#F47700] shrink-0" />
                    <span>{activeScholarship.minBaciiGrade}</span>
                  </span>
                </div>
                <div>
                  <span className="text-[#64748B] block">{dict.discover.deadlineLabel}</span>
                  <span className="font-bold text-[#1E293B] flex items-center gap-1.5 mt-1">
                    <Calendar className="w-4 h-4 text-[#12366B] shrink-0" />
                    <span>{activeScholarship.deadline}</span>
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[#64748B] block">{dict.discover.coverageLabel}</span>
                  <span className="font-semibold text-[#1E293B] mt-1 block">
                    {activeScholarship.coverage}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[#64748B] block">{dict.discover.subjectsLabel}</span>
                  <span className="font-semibold text-[#12366B] mt-1 block">
                    {activeScholarship.keySubjects}
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-[#EEF3FA] px-4 py-3 text-xs text-[#12366B] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F47700] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>{dict.discover.savedChecklistLabel}: </strong>
                  {activeScholarship.checklistTip}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onToggleSave(activeScholarship.id)}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                    savedIds.includes(activeScholarship.id)
                      ? 'bg-[#FFF3E8] text-[#F47700] border border-[#F47700]/40'
                      : 'bg-[#EEF3FA] text-[#12366B] hover:bg-[#e1eaf7]'
                  }`}
                >
                  <Bookmark
                    className={`w-3.5 h-3.5 ${
                      savedIds.includes(activeScholarship.id) ? 'fill-[#F47700]' : ''
                    }`}
                  />
                  <span>
                    {savedIds.includes(activeScholarship.id)
                      ? dict.discover.savedBtn
                      : dict.discover.saveBtn}
                  </span>
                </button>

                <a
                  href={activeScholarship.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-5 rounded-xl bg-[#12366B] hover:bg-[#0d2a54] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{dict.discover.visitPortalBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
