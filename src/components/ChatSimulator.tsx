import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, RotateCcw, AlertTriangle, CheckCircle, MessageSquare, Clock } from "lucide-react";
import { TranslationContent } from "../translations";

interface Message {
  id: string;
  sender: "user" | "peer";
  text: string;
  time: string;
}

interface ChatSimulatorProps {
  t: TranslationContent;
}

export function ChatSimulator({ t }: ChatSimulatorProps) {
  const [isPlayingBad, setIsPlayingBad] = useState(false);
  const [isPlayingGood, setIsPlayingGood] = useState(false);
  
  const [badMessages, setBadMessages] = useState<Message[]>([]);
  const [goodMessages, setGoodMessages] = useState<Message[]>([]);

  const [badStep, setBadStep] = useState(0);
  const [goodStep, setGoodStep] = useState(0);

  const [isBadTyping, setIsBadTyping] = useState(false);
  const [isGoodTyping, setIsGoodTyping] = useState(false);

  const [badTimer, setBadTimer] = useState<string>("0h");
  const [goodTimer, setGoodTimer] = useState<string>("0h");

  // Play controls for BAD flow (Anxious Spammer)
  useEffect(() => {
    if (!isPlayingBad) return;

    let timeout: NodeJS.Timeout;

    const runSequence = async () => {
      if (badStep === 0) {
        setIsBadTyping(true);
        timeout = setTimeout(() => {
          setIsBadTyping(false);
          setBadMessages([{ id: "b1", sender: "user", text: t.langName === "Tiếng Việt" ? "Alo, nay rảnh không m" : "Hey, free today?", time: "10:00" }]);
          setBadTimer("0h");
          setBadStep(1);
        }, 1200);
      } else if (badStep === 1) {
        timeout = setTimeout(() => {
          setIsBadTyping(true);
          timeout = setTimeout(() => {
            setIsBadTyping(false);
            setBadMessages(prev => [
              ...prev,
              { id: "b2", sender: "user", text: t.langName === "Tiếng Việt" ? "Tí có đi chơi không mày" : "Down to hang out in a bit?", time: "11:30" }
            ]);
            setBadTimer("+1.5h");
            setBadStep(2);
          }, 1200);
        }, 1000);
      } else if (badStep === 2) {
        timeout = setTimeout(() => {
          setIsBadTyping(true);
          timeout = setTimeout(() => {
            setIsBadTyping(false);
            setBadMessages(prev => [
              ...prev,
              { id: "b3", sender: "user", text: t.langName === "Tiếng Việt" ? "Ủa m định đéo rep tao à" : "U gonna ignore me?", time: "14:00" }
            ]);
            setBadTimer("+4h");
            setBadStep(3);
          }, 1500);
        }, 1000);
      } else if (badStep === 3) {
        timeout = setTimeout(() => {
          setIsBadTyping(true);
          timeout = setTimeout(() => {
            setIsBadTyping(false);
            setBadMessages(prev => [
              ...prev,
              { id: "b4", sender: "user", text: t.langName === "Tiếng Việt" ? "Dcu m, đéo muốn rep thì block com mẹ đi, phiền vãi cả đái" : "WTF, if u don't wanna reply just block me already, so annoying", time: "16:00" }
            ]);
            setBadTimer("+6h");
            setIsPlayingBad(false);
          }, 1800);
        }, 1000);
      }
    };

    runSequence();

    return () => clearTimeout(timeout);
  }, [isPlayingBad, badStep, t.langName]);

  // Play controls for GOOD flow (Graceful Closure)
  useEffect(() => {
    if (!isPlayingGood) return;

    let timeout: NodeJS.Timeout;

    const runSequence = async () => {
      if (goodStep === 0) {
        setIsGoodTyping(true);
        timeout = setTimeout(() => {
          setIsGoodTyping(false);
          setGoodMessages([
            {
              id: "g1",
              sender: "user",
              text: t.langName === "Tiếng Việt"
                ? "Alo, tí rảnh lượn phố tí không m?"
                : "Yo, down to ride around in a bit?",
              time: "10:00"
            }
          ]);
          setGoodTimer("0h");
          setGoodStep(1);
        }, 1500);
      } else if (goodStep === 1) {
        // Simulated 24 hours of silence... Then sender sends closure message and moves on
        timeout = setTimeout(() => {
          setIsGoodTyping(true);
          timeout = setTimeout(() => {
            setIsGoodTyping(false);
            setGoodMessages(prev => [
              ...prev,
              {
                id: "g2",
                sender: "user",
                text: t.langName === "Tiếng Việt"
                  ? "Thôi t đi với người khác rồi nhé, khi khác rảnh thì hú."
                  : "Nvm went with someone else, catch u later.",
                time: "Chiều tối 18:00"
              }
            ]);
            setGoodTimer("+8h");
            setIsPlayingGood(false);
          }, 2000);
        }, 1500);
      }
    };

    runSequence();

    return () => clearTimeout(timeout);
  }, [isPlayingGood, goodStep, t.langName]);

  const handleStartBad = () => {
    setBadMessages([]);
    setBadStep(0);
    setBadTimer("0h");
    setIsPlayingBad(true);
  };

  const handleStartGood = () => {
    setGoodMessages([]);
    setGoodStep(0);
    setGoodTimer("0h");
    setIsPlayingGood(true);
  };

  const handleReset = () => {
    setIsPlayingBad(false);
    setIsPlayingGood(false);
    setBadMessages([]);
    setGoodMessages([]);
    setBadStep(0);
    setGoodStep(0);
    setIsBadTyping(false);
    setIsGoodTyping(false);
    setBadTimer("0h");
    setGoodTimer("0h");
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight transition-colors duration-300" id="chat-sim-heading">
          {t.comparisonTitle}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xl mx-auto text-sm transition-colors duration-300">
          {t.comparisonDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* BAD FLOW */}
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col h-[480px] transition-colors duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="p-1 bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 rounded-lg">
                <AlertTriangle className="w-4 h-4" />
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
                {t.flowBadLabel}
              </span>
            </div>
            <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-full border border-slate-100 dark:border-slate-800 transition-colors duration-300">
              <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              <span>{t.chatStatusActive}: <strong className="text-red-500 dark:text-red-400 font-medium">{badTimer}</strong></span>
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 overflow-y-auto py-4 space-y-3.5 flex flex-col justify-end min-h-0">
            {badMessages.length === 0 && !isBadTyping && (
              <div className="text-center my-auto text-slate-400 dark:text-slate-500 text-xs">
                {t.chatStatusWaiting}
              </div>
            )}

            <div className="space-y-3.5">
              <AnimatePresence initial={false}>
                {badMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className={`flex flex-col max-w-[85%] ${
                      msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                    }`}
                  >
                    <div
                      className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm ${
                        msg.sender === "user"
                          ? "bg-rose-500 dark:bg-rose-600 text-white rounded-tr-none"
                          : "bg-slate-200/70 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1">{msg.time}</span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isBadTyping && (
                <div className="flex items-center space-x-1 ml-auto bg-rose-200/30 dark:bg-rose-950/20 px-3 py-2 rounded-2xl rounded-tr-none max-w-[50%]">
                  <div className="flex space-x-1 py-1">
                    <span className="w-1.5 h-1.5 bg-rose-400 dark:bg-rose-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-rose-400 dark:bg-rose-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-rose-400 dark:bg-rose-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex space-x-2">
            <button
              onClick={handleStartBad}
              disabled={isPlayingBad || isPlayingGood}
              className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-semibold shadow-sm transition-all ${
                isPlayingBad || isPlayingGood
                  ? "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                  : "bg-rose-600 hover:bg-rose-700 text-white cursor-pointer"
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>{t.startSimBtn}</span>
            </button>
          </div>
        </div>

        {/* GOOD FLOW */}
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col h-[480px] transition-colors duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="p-1 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-lg">
                <CheckCircle className="w-4 h-4" />
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
                {t.flowGoodLabel}
              </span>
            </div>
            <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-full border border-slate-100 dark:border-slate-800 transition-colors duration-300">
              <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              <span>{t.chatStatusActive}: <strong className="text-emerald-500 dark:text-emerald-400 font-semibold">{goodTimer}</strong></span>
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 overflow-y-auto py-4 space-y-3.5 flex flex-col justify-end min-h-0">
            {goodMessages.length === 0 && !isGoodTyping && (
              <div className="text-center my-auto text-slate-400 dark:text-slate-500 text-xs">
                {t.chatStatusWaiting}
              </div>
            )}

            <div className="space-y-3.5">
              <AnimatePresence initial={false}>
                {goodMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className={`flex flex-col max-w-[85%] ${
                      msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                    }`}
                  >
                    <div
                      className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm ${
                        msg.sender === "user"
                          ? "bg-emerald-600 dark:bg-emerald-700 text-white rounded-tr-none"
                          : "bg-slate-200/70 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1">{msg.time}</span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isGoodTyping && (
                <div className="flex items-center space-x-1 ml-auto bg-emerald-200/30 dark:bg-emerald-950/20 px-3 py-2 rounded-2xl rounded-tr-none max-w-[50%]">
                  <div className="flex space-x-1 py-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 dark:bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-emerald-400 dark:bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-emerald-400 dark:bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex space-x-2">
            <button
              onClick={handleStartGood}
              disabled={isPlayingGood || isPlayingBad}
              className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-semibold shadow-sm transition-all ${
                isPlayingGood || isPlayingBad
                  ? "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>{t.startSimBtn}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleReset}
          className="flex items-center space-x-2 text-xs font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl shadow-sm transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.resetSimBtn}</span>
        </button>
      </div>
    </div>
  );
}
