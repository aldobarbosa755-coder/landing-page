import React, { useState } from 'react';
import { faqList } from '../data/pricingData';
import { ChevronDown, HelpCircle, Search, MessageCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Scope Lockdown', 'Device-Lock', 'Security & SHA-256', 'Pricing & Whitelabel', 'General'];

  // Calculate category counts
  const categoryCounts = categories.reduce((acc, cat) => {
    if (cat === 'All') {
      acc[cat] = faqList.length;
    } else {
      acc[cat] = faqList.filter((f) => f.category === cat).length;
    }
    return acc;
  }, {} as Record<string, number>);

  const filteredFaqs = faqList.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    // Find first matching item for newly selected category and open it smoothly
    const firstMatch = faqList.find((item) => cat === 'All' || item.category === cat);
    setOpenId(firstMatch ? firstMatch.id : null);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setOpenId('faq-1');
  };

  return (
    <section className="py-24 dark:bg-[#080c14] bg-[#f7f8fc] relative border-t dark:border-[#131126] border-[#c7c4d8]/35" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3525cd]/10 text-[#4f46e5] border border-[#3525cd]/30 text-[10px] font-mono font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-[#10b981]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black dark:text-white text-slate-950 tracking-tight">
            Have Questions About Scope Protection?
          </h2>
          <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 max-w-2xl mx-auto">
            Transparent, instant answers about Velloxis, legal proof validity, and Scope Lockdown.
          </p>
        </div>

        {/* Search and Category Filter Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 dark:bg-[#0f172a] bg-white p-3 sm:p-4 rounded-2xl border dark:border-[#131126] border-[#c7c4d8]/35 shadow-md">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    isSelected
                      ? 'bg-[#3525cd] text-white shadow-lg shadow-[#3525cd]/30'
                      : 'dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'dark:bg-slate-800 bg-slate-200 dark:text-slate-400 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search question..."
              className="w-full dark:bg-[#080c14] bg-slate-50 dark:text-white text-slate-900 text-xs pl-9 pr-8 py-2.5 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35 focus:outline-none focus:border-[#3525cd] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <XCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* FAQ Accordion List with Layout Animation */}
        <div className="space-y-3 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 overflow-hidden transition-all duration-200 hover:border-[#3525cd]/40 shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors cursor-pointer group"
                    >
                      <span className="text-sm sm:text-base font-bold dark:text-white text-slate-900 group-hover:text-[#4f46e5] transition-colors">
                        {item.question}
                      </span>
                      <div className={`p-2 rounded-xl transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#3525cd] text-white shadow-md shadow-[#3525cd]/30' : 'dark:bg-[#080c14] bg-slate-100 text-slate-500 group-hover:bg-[#3525cd]/10 group-hover:text-[#4f46e5]'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed border-t dark:border-[#131126] border-[#c7c4d8]/35 bg-slate-50/50 dark:bg-[#080c14]/50">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 text-center rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#3525cd]/10 text-[#4f46e5] flex items-center justify-center mx-auto">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold dark:text-white text-slate-900">
                    No questions found
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Try adjusting your search query or selecting a different category filter.
                  </p>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-[#3525cd] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#4f46e5] transition-all cursor-pointer"
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 rounded-2xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 text-center space-y-3 shadow-sm">
          <p className="text-xs dark:text-slate-300 text-slate-600 font-medium">
            Have a specific question about your agency setup or client contracts?
          </p>
          <a
            href="https://app.aldolima.dev.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#10b981] bg-[#10b981]/10 hover:bg-[#10b981]/20 border border-[#10b981]/30 px-5 py-2.5 rounded-xl transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Speak with a Scope Protection Specialist</span>
          </a>
        </div>

      </div>
    </section>
  );
};

