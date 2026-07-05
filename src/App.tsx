import { useState, useEffect } from "react";
import { translations, Language } from "./translations";
import { ChatSimulator } from "./components/ChatSimulator";
import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, 
  HelpCircle, 
  Phone, 
  MessageSquare, 
  AlertCircle, 
  ChevronDown, 
  CheckCircle, 
  Info,
  Clock,
  ThumbsUp,
  Share2,
  Sun,
  Moon
} from "lucide-react";

export default function App() {
  const [lang, setLang] = useState<Language>("vi");
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Read lang from URL query if present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const queryLang = params.get("lang") as Language;
      if (queryLang && translations[queryLang]) {
        setLang(queryLang);
      }
    }
  }, []);

  // Sync theme class and localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    // Sync to URL query parameters dynamically
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", newLang);
      window.history.replaceState({}, "", url.toString());
    }
  };

  const t = translations[lang];

  const toggleFaq = (index: number) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 antialiased selection:bg-indigo-100 selection:text-indigo-900 pb-16 transition-colors duration-300">
      {/* HEADER / LANG SELECTOR */}
      <header className="sticky top-0 z-50 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="font-display font-extrabold text-xl text-slate-800 dark:text-white tracking-tight">
              Friendly Ghost
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <div className="flex items-center space-x-2 bg-slate-100/80 dark:bg-slate-800/85 border border-slate-200/50 dark:border-slate-700/60 p-1.5 rounded-xl transition-colors duration-300">
              <Globe className="w-4 h-4 text-slate-400 ml-1.5 shrink-0" />
              <select
                value={lang}
                onChange={(e) => changeLanguage(e.target.value as Language)}
                className="bg-transparent border-none text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none pr-6 pl-1 cursor-pointer"
              >
                {Object.entries(translations).map(([code, content]) => (
                  <option key={code} value={code} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">
                    {content.langName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 pt-12 pb-20 border-b border-slate-100 dark:border-slate-800/60 transition-colors duration-300">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 dark:opacity-10 pointer-events-none">
          <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-indigo-200/50 dark:bg-indigo-900/50 blur-3xl animate-pulse" />
          <div className="absolute bottom-6 right-20 w-80 h-80 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/40 rounded-full text-red-600 dark:text-red-400 text-xs font-semibold mb-6 shadow-sm"
          >
            <AlertCircle className="w-3.5 h-3.5 shrink-0 animate-bounce" />
            <span>{t.bannerNotice}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
            id="main-title"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            {t.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* PROBLEM EXPLANATION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <div className="md:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100/50 dark:shadow-none rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-colors duration-300">
          <div>
            <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-3">
              <Info className="w-4 h-4" />
              <span>{t.aboutTitle}</span>
            </div>
            <h2 className="text-2xl font-bold font-display text-slate-800 dark:text-slate-100 tracking-tight leading-snug mb-4">
              {lang === "en" ? "Why is it a harmful habit?" : "Tại sao bơ tin nhắn là thói quen xấu?"}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-sans">
              {t.aboutText}
            </p>
          </div>

          <div className="mt-6 p-4 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/50 dark:border-indigo-900/30 rounded-2xl flex items-start space-x-3 text-xs text-indigo-700 dark:text-indigo-300 leading-relaxed transition-colors duration-300">
            <Clock className="w-4 h-4 shrink-0 mt-0.5 animate-spin text-indigo-500 dark:text-indigo-400" style={{ animationDuration: '6s' }} />
            <span>
              {lang === "en"
                ? "Giving space allows healthy communication instead of pushing people into toxic circles of silent treatment."
                : "Tôn trọng thời gian phản hồi giúp duy trì giao tiếp lành mạnh, tránh đưa nhau vào vòng lặp im lặng độc hại."}
            </span>
          </div>
        </div>

        <div className="md:col-span-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100/50 dark:shadow-none rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-colors duration-300">
          <div>
            <div className="flex items-center space-x-2 text-rose-500 dark:text-rose-400 font-semibold text-sm mb-4">
              <Phone className="w-4 h-4" />
              <span>{t.analogyTitle}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 font-display mb-3">
              {lang === "en" ? "The Closed Door Analogy" : "Phép so sánh Cánh cửa đóng"}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              {t.analogyDesc}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider font-mono transition-colors duration-300">
            🚫 {lang === "en" ? "Say no to toxic silent treatment!" : "Nói không với im lặng độc hại!"}
          </div>
        </div>
      </section>

      {/* WHY BAD LIST (BULLETS) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-slate-900 dark:bg-slate-900/40 dark:border dark:border-slate-800 text-white rounded-3xl p-6 md:p-8 shadow-xl transition-colors duration-300">
          <h3 className="text-xl font-bold font-display tracking-tight text-white mb-6">
            {t.whyBadTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.whyBadPoints.map((pt, i) => (
              <div key={i} className="flex items-start space-x-3 text-sm text-slate-300">
                <span className="p-1 bg-slate-800 dark:bg-slate-800/80 rounded-lg text-slate-400 dark:text-slate-500 font-mono text-xs font-bold shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="leading-relaxed font-sans">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE COMPARISON (CHAT SIMULATOR) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-100/50 dark:shadow-none transition-colors duration-300">
        <ChatSimulator t={t} />
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 font-display tracking-tight" id="faq-heading">
            {t.faqTitle}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-md mx-auto">
            {t.faqDesc}
          </p>
        </div>

        <div className="space-y-4">
          {t.faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full text-left p-5 flex items-center justify-between font-bold text-slate-800 dark:text-slate-200 text-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer"
              >
                <span className="leading-snug pr-4 font-sans">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-all shrink-0 ${
                    faqOpen[i] ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {faqOpen[i] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-5 border-t border-slate-100 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/50 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400 dark:text-slate-500 transition-colors duration-300">
        <div className="flex items-center justify-center space-x-2.5 mb-3">
          <span className="font-extrabold font-display text-slate-700 dark:text-slate-300 tracking-tight">
            Friendly Ghost
          </span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span>© 2026 Project saygex69</span>
        </div>
        <p className="max-w-md mx-auto leading-relaxed font-sans">
          {t.footerNote}
        </p>
      </footer>
    </div>
  );
}
