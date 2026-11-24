import { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Trash2, Paperclip, Loader2 } from 'lucide-react';
import type { ChatMessage, Language, Track } from '../types';
import type { TranslationDictionary } from '../translations';

interface AiAssistantDrawerProps {
  dict: TranslationDictionary;
  lang: Language;
  track: Track;
  isOpen: boolean;
  onToggleOpen: (open: boolean) => void;
  pendingContext: { title: string; content: string } | null;
  onConsumePendingContext: () => void;
}

function buildClientSafetyFallback(
  message: string,
  lang: Language,
  track: Track,
  contextTitle?: string
): string {
  const q = message.toLowerCase();
  if (lang === 'km') {
    if (q.includes('amt') || q.includes('តេជោ') || q.includes('mptc') || q.includes('ប្រៀបធៀបអាហារូបករណ៍')) {
      return [
        'ខាងក្រោមនេះជាការប្រៀបធៀបរវាង **អាហារូបករណ៍ AMT** និង **អាហារូបករណ៍ទេពកោសល្យឌីជីថលតេជោ (MPTC)**៖',
        '',
        '• **AMT (សម្តេចតេជោ និងសម្តេចកិត្តិព្រឹទ្ធបណ្ឌិត)៖** រួចថ្លៃសិក្សា ៨០%–១០០% (កញ្ញា – តុលា; ហាមដាក់ពាក្យស្ទួន) — មានទាំងផ្នែកប្រឡង (ITC, IFL, IISPP-RUPP, AUPP 100%, NUM, UHS/NIE) និងផ្នែកមិនប្រឡង (សាកលវិទ្យាល័យតាមខេត្ត, AUB, Norton)។',
        '• **MPTC ទេពកោសល្យឌីជីថលតេជោ៖** រួចថ្លៃសិក្សា ១០០% + ប្រាក់ឧបត្ថម្ភប្រចាំខែ + កុំព្យូទ័រយួរដៃ (ដូចជា CADT) នៅ CADT, AUPP, ITC, RUPP, Paragon, NUM (ប្រឡងគណិត តក្កវិទ្យា អង់គ្លេស និងសម្ភាសន៍)។',
      ].join('\n');
    }
    if (q.includes('គណិត') || q.includes('លំហាត់')) {
      return [
        'វិធីដោះស្រាយលំហាត់គណិតវិទ្យាបាក់ឌុបឱ្យបានពិន្ទុពេញ៖',
        '',
        '• **ជំហានទី ១៖** សរសេររូបមន្តគោលឱ្យបានច្បាស់ (ឧ. ∫ u′ · e^u dx = e^u + C)។',
        '• **ជំហានទី ២៖** បង្ហាញជំហានប្តូរអថេរ u = x² ⇒ du = 2x dx កុំរំលង។',
        '• **ជំហានទី ៣៖** ផ្ទៀងផ្ទាត់សញ្ញា (+ / −) និងកុំភ្លេចថេរ + C នៅចម្លើយចុងក្រោយ។',
      ].join('\n');
    }
    if (q.includes('តារាង') || q.includes('ពេលវេលា') || q.includes('សប្តាហ៍')) {
      return [
        `តារាងរៀនប្រចាំសប្តាហ៍ (${track === 'social' ? 'ថ្នាក់វិទ្យាសាស្ត្រសង្គម' : 'ថ្នាក់វិទ្យាសាស្ត្រ'})៖`,
        '',
        track === 'social'
          ? '• **ចន្ទ & ព្រហស្បតិ៍៖** អក្សរសាស្ត្រខ្មែរ (១២៥ ពិន្ទុ) — តែងសេចក្តី ៣ ផ្នែក និងអក្ខរាវិរុទ្ធ។'
          : '• **ចន្ទ & ព្រហស្បតិ៍៖** គណិតវិទ្យា (១២៥ ពិន្ទុ) — លីមីត អាំងតេក្រាល កុំផ្លិច និងឌីផេរ៉ង់ស្យែល។',
        '• **អង្គារ – សៅរ៍៖** បំបែកម៉ោងតាមមុខវិជ្ជា ៧៥ ពិន្ទុ និង ៥០ ពិន្ទុ។',
        '• **អាទិត្យ៖** ហាត់ធ្វើវិញ្ញាសា PDF ២០២១–២០២៥ ពេញម៉ោងនៅក្នុងផ្នែក "ត្រៀមប្រឡង"។',
      ].join('\n');
    }
    return [
      contextTitle
        ? `គោលការណ៍ណែនាំសម្រាប់ **${contextTitle}**៖`
        : 'គោលការណ៍ត្រៀមបាក់ឌុប និងអាហារូបករណ៍ EduBridge៖',
      '',
      '• **១.** សរសេររូបមន្តគោល MoEYS ជាមុន មុនពេលជំនួសលេខគណនា។',
      '• **២.** បង្ហាញជំហានកណ្តាល និងពិនិត្យសញ្ញា (+ / −), + C និងខ្នាត SI ឱ្យបានច្បាស់។',
      '• **៣.** បើកវិញ្ញាសា PDF ២០២១–២០២៥ ក្នុងផ្នែក "ត្រៀមប្រឡង" ដើម្បីផ្ទៀងជាមួយកំណែលោកគ្រូ-អ្នកគ្រូ។',
    ].join('\n');
  }

  return [
    contextTitle ? `Study guide for **${contextTitle}**:` : 'EduBridge Study & Scholarship Guide:',
    '',
    '• **1.** State the official MoEYS formula first before substituting numerical values.',
    '• **2.** Keep every intermediate step explicit and verify signs, "+ C", and SI units.',
    '• **3.** Practice the 16 combined MoEYS exam + answer key PDFs in the Prepare section.',
  ].join('\n');
}

export function AiAssistantDrawer({
  dict,
  lang,
  track,
  isOpen,
  onToggleOpen,
  pendingContext,
  onConsumePendingContext,
}: AiAssistantDrawerProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attachedContext, setAttachedContext] = useState<{ title: string; content: string } | null>(
    null
  );
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onToggleOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onToggleOpen]);

  const sendMessage = async (
    textToSend: string,
    overrideContext?: { title: string; content: string } | null
  ) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    const activeCtx = overrideContext !== undefined ? overrideContext : attachedContext;
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
      contextLabel: activeCtx?.title,
    };

    const historySnapshot = messages
      .filter((m) => !m.error)
      .slice(-6)
      .map((m) => ({ role: m.role, text: m.text }));

    const assistantMsgId = `model-${Date.now()}`;
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    let accumulated = '';
    let createdAssistantBubble = false;

    const appendChunkText = (chunkText: string) => {
      accumulated += chunkText;
      if (!createdAssistantBubble) {
        createdAssistantBubble = true;
        setMessages((prev) => [
          ...prev,
          {
            id: assistantMsgId,
            role: 'model',
            text: accumulated,
          },
        ]);
      } else {
        setMessages((prev) =>
          prev.map((m) => (m.id === assistantMsgId ? { ...m, text: accumulated } : m))
        );
      }
    };

    try {
      const response = await fetch('/api/assistant/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          language: lang,
          track,
          contextTitle: activeCtx?.title,
          contextContent: activeCtx?.content,
          history: historySnapshot,
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error('Fallback to local safety net');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const rawLine of lines) {
          const line = rawLine.trim();
          if (!line.startsWith('data:')) continue;
          const payload = line.slice(5).trim();
          if (payload === '[DONE]') continue;
          try {
            const parsed = JSON.parse(payload) as { text?: string };
            if (parsed.text) {
              appendChunkText(parsed.text);
            }
          } catch {
            // Ignore partial chunk JSON parse boundary
          }
        }
      }

      if (!createdAssistantBubble) {
        appendChunkText(buildClientSafetyFallback(trimmed, lang, track, activeCtx?.title));
      }

      if (overrideContext !== undefined) {
        setAttachedContext(null);
      }
    } catch {
      // Bulletproof Layer 3 client safety net if network drops completely
      if (!createdAssistantBubble) {
        appendChunkText(buildClientSafetyFallback(trimmed, lang, track, activeCtx?.title));
      }
      if (overrideContext !== undefined) {
        setAttachedContext(null);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Automatically receive exercises or PDFs sent from Prepare PDF Viewer
  useEffect(() => {
    if (pendingContext) {
      setAttachedContext(pendingContext);
      const prompt =
        lang === 'km'
          ? `សូមជួយពន្យល់ និងណែនាំរបៀបដោះស្រាយវិញ្ញាសានេះជាជំហានៗ ព្រមទាំងបញ្ជាក់កំហុសដែលសិស្សងាយភ្លាត់៖`
          : `Please explain how to solve this exam paper step-by-step according to strict MoEYS grading and point out common student mistakes:`;
      void sendMessage(prompt, pendingContext);
      onConsumePendingContext();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingContext]);

  return (
    <>
      {/* Persistent Floating Bottom-Right Button */}
      <button
        type="button"
        onClick={() => onToggleOpen(true)}
        className="fixed bottom-5 right-5 z-40 px-4 py-3 rounded-full bg-[#12366B] hover:bg-[#0d2a54] text-white shadow-lg border border-white/15 flex items-center gap-2.5 text-xs sm:text-sm font-bold transition-transform hover:scale-[1.02] cursor-pointer"
        aria-label={dict.assistant.fabLabel}
      >
        <span className="w-7 h-7 rounded-full bg-[#F47700] flex items-center justify-center shrink-0">
          <Bot className="w-4 h-4 text-white" />
        </span>
        <span className="whitespace-nowrap">{dict.assistant.fabLabel}</span>
      </button>

      {/* Slide-Over Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs"
          onClick={() => onToggleOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-white h-full shadow-2xl border-l border-slate-200 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={dict.assistant.drawerTitle}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-5 py-4 bg-[#12366B] text-white flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-[#F47700] flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-sm font-extrabold truncate">{dict.assistant.drawerTitle}</h2>
                  <p className="text-[11px] text-slate-200 truncate">
                    {dict.assistant.drawerSubtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setMessages([]);
                    setAttachedContext(null);
                  }}
                  className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title={dict.assistant.clearLabel}
                  aria-label={dict.assistant.clearLabel}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onToggleOpen(false)}
                  className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title={dict.assistant.closeLabel}
                  aria-label={dict.assistant.closeLabel}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto clean-scroll p-5 space-y-4 bg-[#F5F7FB]">
              {/* Welcome Message */}
              <div className="bg-white rounded-2xl border border-slate-200 p-4 text-xs sm:text-sm text-[#1E293B] leading-relaxed shadow-xs">
                {dict.assistant.welcomeMessage}
              </div>

              {/* Starter Chips (3 concise quick prompts when empty) */}
              {messages.length === 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#12366B]">
                    {dict.assistant.starterHeading}
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {dict.assistant.starterChips.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => void sendMessage(chip)}
                        className="text-left px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#EEF3FA] border border-slate-200 text-xs font-semibold text-[#12366B] transition-colors cursor-pointer"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Thread */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.role === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  {msg.contextLabel && (
                    <div className="text-[11px] font-semibold text-[#F47700] mb-1 flex items-center gap-1">
                      <Paperclip className="w-3 h-3" />
                      <span>
                        {dict.assistant.contextBadgePrefix}: {msg.contextLabel}
                      </span>
                    </div>
                  )}
                  <div
                    className={`max-w-[90%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-[#12366B] text-white'
                        : 'bg-white border border-slate-200 text-[#1E293B] shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && messages[messages.length - 1]?.role !== 'model' && (
                <div className="flex items-center gap-2 text-xs font-semibold text-[#12366B] bg-white border border-slate-200 rounded-xl px-4 py-3 w-fit">
                  <Loader2 className="w-4 h-4 animate-spin text-[#F47700]" />
                  <span>{dict.assistant.thinkingLabel}</span>
                </div>
              )}

              <div ref={endRef} />
            </div>

            {/* Attached Context Bar (if any) */}
            {attachedContext && (
              <div className="px-4 py-2 bg-[#FFF3E8] border-t border-[#F47700]/20 flex items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-[#12366B] truncate">
                  {dict.assistant.contextBadgePrefix}: {attachedContext.title}
                </span>
                <button
                  type="button"
                  onClick={() => setAttachedContext(null)}
                  className="text-[#F47700] hover:text-[#dc6b00] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void sendMessage(inputValue);
              }}
              className="p-4 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={dict.assistant.inputPlaceholder}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#F5F7FB] border border-slate-200 text-xs sm:text-sm text-[#1E293B] focus:border-[#12366B]"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="px-4 py-2.5 rounded-xl bg-[#F47700] hover:bg-[#dc6b00] disabled:opacity-50 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{dict.assistant.sendLabel}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
