import React, { useState } from 'react';
import { faqList } from '../data/pricingData';
import { ChevronDown, HelpCircle, Search, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Scope Lockdown', 'Device-Lock', 'Security & SHA-256', 'Pricing & Whitelabel', 'General'];

  const filteredFaqs = faqList.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 dark:bg-[#080c14] bg-[#f7f8fc] relative border-t dark:border-[#131126] border-[#c7c4d8]/35" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3525cd]/10 text-[#4f46e5] border border-[#3525cd]/30 text-[10px] font-mono font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black dark:text-white text-slate-950 tracking-tight">
            Have Questions About Scope Protection?
          </h2>
          <p className="text-sm dark:text-slate-300 text-slate-600">
            Transparent answers about Velloxis, legal proof validity, and Scope Lockdown.
          </p>
        </div>

        {/* Search and Category Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 dark:bg-[#0f172a] bg-white p-3 rounded-2xl border dark:border-[#131126] border-[#c7c4d8]/35 shadow-sm">
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#3525cd] text-white shadow-md'
                    : 'dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-60">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search question..."
              className="w-full dark:bg-[#080c14] bg-slate-50 dark:text-white text-slate-900 text-xs pl-9 pr-3 py-2 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35 focus:outline-none focus:border-[#3525cd]"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold dark:text-white text-slate-900">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-xl transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#3525cd] text-white' : 'dark:bg-[#080c14] bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed border-t dark:border-[#131126] border-[#c7c4d8]/35">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 text-center space-y-3 shadow-sm">
          <p className="text-xs dark:text-slate-300 text-slate-600">
            Have a specific question about your agency setup or client contracts?
          </p>
          <a
            href="https://app.aldolima.dev.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#10b981] bg-[#10b981]/10 hover:bg-[#10b981]/20 border border-[#10b981]/30 px-4 py-2.5 rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Speak with a Scope Protection Specialist</span>
          </a>
        </div>

      </div>
    </section>
  );
};
