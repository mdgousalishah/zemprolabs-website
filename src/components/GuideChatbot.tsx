import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, X, ArrowRight, Sparkles, RotateCcw } from 'lucide-react';
import { company } from '../data/company';

interface Topic {
  id: string;
  label: string;
  reply: string;
  ctaLabel: string;
  path: string;
}

const TOPICS: Topic[] = [
  {
    id: 'work',
    label: 'Show me real projects',
    reply:
      "We've shipped 14+ live production systems -- healthcare e-commerce, ServiceNow enterprise instances, SaaS platforms, and more. Every case study links to the actual deployed product, not a mockup.",
    ctaLabel: 'View case studies',
    path: '/work'
  },
  {
    id: 'pricing',
    label: 'I need a project estimate',
    reply:
      'Tell us your scope and our Project Estimation tool (or our team within 48 hours) will come back with an honest, fixed-milestone quote -- no padded hourly surprises.',
    ctaLabel: 'Get an estimate',
    path: '/project-estimation'
  },
  {
    id: 'services',
    label: 'What services do you offer?',
    reply:
      'Full-stack web apps & SaaS, Shopify Plus commerce, enterprise ServiceNow, technical SEO & growth, and a dedicated agile retainer that keeps everything maintained after launch.',
    ctaLabel: 'Explore services',
    path: '/services'
  },
  {
    id: 'process',
    label: 'How does your process work?',
    reply:
      "Every engagement follows a tailored 4-stage blueprint -- discovery, build, staging demos every Friday, then launch with a dedicated Slack channel to your engineers throughout.",
    ctaLabel: 'See our process',
    path: '/process'
  },
  {
    id: 'about',
    label: 'Tell me about Zemprolabs',
    reply:
      `${company.positioning} We're a senior engineering team based in ${company.address.city}, working directly with clients with zero account-manager relay games.`,
    ctaLabel: 'About us',
    path: '/about'
  },
  {
    id: 'contact',
    label: "I'd like to talk to someone",
    reply: `Happy to connect you directly. Reach us anytime at ${company.email} or ${company.phone}, or send a brief and we'll reply fast.`,
    ctaLabel: 'Contact us',
    path: '/contact'
  }
];

type ChatMessage =
  | { from: 'bot'; text: string; id: string }
  | { from: 'user'; text: string; id: string };

const GREETING =
  "Hi, I'm the Zemprolabs guide. Ask me where to look and I'll point you the right way.";

export const GuideChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{ from: 'bot', text: GREETING, id: 'greeting' }]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setHasOpenedOnce(true);
  };

  const pickTopic = (topic: Topic) => {
    setMessages((prev) => [...prev, { from: 'user', text: topic.label, id: `${topic.id}-${prev.length}` }]);
    setActiveTopic(null);
    setIsTyping(true);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: 'bot', text: topic.reply, id: `${topic.id}-reply-${prev.length}` }]);
      setActiveTopic(topic);
    }, 550);
  };

  const goToPage = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  const resetToMenu = () => {
    setActiveTopic(null);
  };

  return (
    <>
      {/* Chat panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Zemprolabs guide chat"
          className="fixed z-[70] bottom-24 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-28 sm:w-[380px] max-h-[75vh] sm:max-h-[560px] flex flex-col bg-white rounded-2xl border border-[#2C3E50]/15 shadow-2xl overflow-hidden animate-[fadeInPanel_280ms_ease-out]"
        >
          {/* Header */}
          <div className="bg-[#2C3E50] px-4 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#ECF0F1]" />
              </div>
              <div>
                <p className="text-sm font-bold font-display text-white leading-tight">Zemprolabs Guide</p>
                <p className="text-[11px] text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Here to help you navigate
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F4F6F7]">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] text-xs sm:text-sm leading-relaxed px-3.5 py-2.5 rounded-2xl ${
                    m.from === 'user'
                      ? 'bg-[#2C3E50] text-white rounded-br-sm'
                      : 'bg-white text-[#2C3E50] border border-[#2C3E50]/10 shadow-sm rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#2C3E50]/10 shadow-sm rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2C3E50]/40 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2C3E50]/40 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2C3E50]/40 animate-bounce" />
                </div>
              </div>
            )}

            {/* CTA for the just-answered topic */}
            {activeTopic && !isTyping && (
              <div className="flex justify-start">
                <button
                  type="button"
                  onClick={() => goToPage(activeTopic.path)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#2C3E50] text-white hover:bg-[#34495E] transition-colors"
                >
                  <span>{activeTopic.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Quick-reply menu / footer */}
          <div className="border-t border-[#2C3E50]/10 bg-white px-3.5 py-3 shrink-0 space-y-2">
            {activeTopic && !isTyping ? (
              <button
                type="button"
                onClick={resetToMenu}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#2C3E50] bg-[#BDC3C7]/40 hover:bg-[#BDC3C7]/70 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ask about something else</span>
              </button>
            ) : (
              !isTyping && (
                <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
                  {TOPICS.map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => pickTopic(topic)}
                      className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium text-[#2C3E50] bg-[#BDC3C7]/40 hover:bg-[#BDC3C7]/70 border border-[#2C3E50]/10 transition-colors"
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Floating launcher button */}
      <button
        type="button"
        onClick={() => (isOpen ? setIsOpen(false) : handleOpen())}
        aria-label={isOpen ? 'Close Zemprolabs guide chat' : 'Open Zemprolabs guide chat'}
        aria-expanded={isOpen}
        className="fixed z-[70] bottom-5 right-4 sm:right-6 w-14 h-14 rounded-full bg-[#2C3E50] text-white shadow-xl flex items-center justify-center hover:bg-[#34495E] active:scale-95 transition-all"
      >
        {!hasOpenedOnce && !isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#2C3E50]/50 motion-safe:animate-ping" />
        )}
        {isOpen ? <X className="w-6 h-6 relative" /> : <MessageCircle className="w-6 h-6 relative" />}
      </button>
    </>
  );
};

export default GuideChatbot;
