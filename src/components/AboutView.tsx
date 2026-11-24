import { Database, BookCheck, ArrowRight, HeartHandshake, ExternalLink } from 'lucide-react';
import type { NavPage } from '../types';
import type { TranslationDictionary } from '../translations';

interface AboutViewProps {
  dict: TranslationDictionary;
  onNavigate: (page: NavPage) => void;
}

export function AboutView({ dict, onNavigate }: AboutViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 lg:p-12 space-y-4">
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-[#12366B] max-w-3xl"
          style={{ textWrap: 'balance' }}
        >
          {dict.about.title}
        </h1>
        <p className="text-base text-[#64748B] max-w-3xl leading-relaxed">
          {dict.about.subtitle}
        </p>
      </section>

      {/* Platform Overview */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 bg-[#EEF3FA] rounded-2xl p-8 space-y-4">
          <h2 className="text-xl font-bold text-[#12366B]">{dict.about.overviewTitle}</h2>
          <p className="text-sm text-[#1E293B] leading-relaxed">{dict.about.overviewBody}</p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('learn')}
              className="px-5 py-2.5 rounded-xl bg-[#F47700] hover:bg-[#dc6b00] text-white text-sm font-bold transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{dict.nav.startAssessment}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Why We Built EduBridge */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 space-y-6">
          <h2 className="text-xl font-bold text-[#12366B]">{dict.about.challengesTitle}</h2>
          <div className="divide-y divide-slate-100">
            {dict.about.challenges.map((item) => (
              <div key={item.pillar} className="py-4 first:pt-0 last:pb-0 space-y-2">
                <div className="text-xs font-bold text-[#F47700]">{item.pillar}</div>
                <p className="text-sm font-semibold text-[#1E293B]">{item.problem}</p>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Data Attribution: Strictly 2 Official MoEYS & OER Sources + Teacher Credit */}
      <section
        id="open-data-sources"
        className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 space-y-6 scroll-mt-20"
      >
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl font-bold text-[#12366B]">{dict.about.openDataTitle}</h2>
          <p className="text-sm text-[#64748B] leading-relaxed">{dict.about.openDataIntro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.about.datasets.map((ds, idx) => {
            const Icon = idx === 0 ? Database : BookCheck;
            return (
              <div
                key={ds.title}
                className="rounded-xl bg-[#F5F7FB] border border-slate-200 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#12366B]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#12366B]">{ds.title}</h3>
                  <div className="text-xs font-semibold text-[#F47700]">{ds.provider}</div>
                  <p className="text-sm text-[#64748B] leading-relaxed">{ds.role}</p>
                </div>

                <div>
                  <a
                    href={ds.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12366B] hover:text-[#F47700] transition-colors"
                  >
                    <span>{ds.url.replace('https://', '')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Attribution crediting MoEYS and Cambodian Teachers */}
        <div className="rounded-xl bg-[#FFF3E8] border border-[#F47700]/20 p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-white border border-[#F47700]/20 flex items-center justify-center text-[#F47700] shrink-0">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-extrabold text-[#12366B]">
              {dict.about.teacherCreditTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed">
              {dict.about.teacherCreditBody}
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Visual Pipeline Card */}
      <section className="rounded-2xl bg-[#12366B] text-white p-8 lg:p-10 space-y-6">
        <h2 className="text-2xl font-bold">{dict.about.pipelineTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.about.pipelineSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl bg-white/10 border border-white/15 p-5 space-y-2"
            >
              <div className="text-sm font-extrabold text-[#F47700] tabular-nums">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-white">{step.title}</h3>
              <p className="text-xs text-slate-200 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
