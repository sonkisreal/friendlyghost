export type Language = "vi" | "en";

export interface TranslationContent {
  langName: string;
  heroTitle: string;
  heroSubtitle: string;
  bannerNotice: string;
  aboutTitle: string;
  aboutText: string;
  whyBadTitle: string;
  whyBadPoints: string[];
  analogyTitle: string;
  analogyDesc: string;
  comparisonTitle: string;
  comparisonDesc: string;
  flowBadLabel: string;
  flowGoodLabel: string;
  chatStatusWaiting: string;
  chatStatusTyping: string;
  chatStatusActive: string;
  startSimBtn: string;
  resetSimBtn: string;
  aiTitle: string;
  aiDesc: string;
  aiInputPlaceholder: string;
  aiBtnRewrite: string;
  aiBtnRewriting: string;
  aiComparisonBefore: string;
  aiComparisonAfter: string;
  aiExplanationLabel: string;
  badgeTitle: string;
  badgeDesc: string;
  badgeCopySuccess: string;
  badgeCopyBtn: string;
  quizTitle: string;
  quizDesc: string;
  quizStartBtn: string;
  quizNextBtn: string;
  quizResultTitle: string;
  quizRetakeBtn: string;
  faqTitle: string;
  faqDesc: string;
  faqs: { q: string; a: string }[];
  footerNote: string;
}

export const translations: Record<Language, TranslationContent> = {
  vi: {
    langName: "Tiếng Việt",
    heroTitle: "Ghosting & Đọc đéo trả lời tin nhắn",
    heroSubtitle: "Bạn bị im lặng không một lý do? Đừng hoảng loạn hay đánh mất lòng tự tôn. Hãy ứng xử văn minh, khôn ngoan để làm chủ tâm lý của chính mình!",
    bannerNotice: "Website này chỉ tham khảo, có thể không chính xác 100%!",
    aboutTitle: "Bơ tin nhắn (Ghosting) là gì?",
    aboutText: "Ghosting là hành vi một người đột ngột cắt đứt mọi liên lạc (không trả lời tin nhắn, seen không rep, tắt trạng thái hoạt động hoặc âm thầm 'bỏ qua' cuộc trò chuyện) mà không đưa ra bất kỳ lý do hay lời giải thích nào. Hành vi này phản ánh sự thiếu trưởng thành trong kỹ năng giao tiếp và né tránh cảm xúc của đối phương, chứ không hề phản ánh giá trị bản thân của bạn.",
    whyBadTitle: "Tại sao bị bơ tin nhắn lại gây lo âu cực độ?",
    whyBadPoints: [
      "Kích hoạt tâm lý tự trách bản thân, liên tục suy diễn xem mình đã làm sai điều gì.",
      "Tạo ra cảm giác bất an dai dẳng khi liên tục mở điện thoại kiểm tra dấu chấm xanh hoạt động.",
      "Dễ đưa bạn vào 'bẫy' nhắn tin dồn dập (double-texting) làm giảm sút lòng tự trọng.",
      "Việc thiếu lời kết rõ ràng (closure) khiến tâm trí bị dằn vặt và khó lòng bước tiếp."
    ],
    analogyTitle: "Phép so sánh",
    analogyDesc: "Bơ tin nhắn cũng giống như việc ai đó đóng sầm cửa lại trước mặt bạn. Việc bạn tiếp tục đứng ngoài đập cửa, réo gọi chỉ làm bạn thêm mệt mỏi và biến bạn thành kẻ làm phiền. Quy tắc vàng khi bị ghosting là: Gõ cửa 1-2 lần lịch sự. Nếu họ không mở, hãy mỉm cười và kiêu hãnh quay lưng bước đi.",
    comparisonTitle: "Phản ứng: Spam Tuyệt Vọng vs. Closure Lịch Lãm",
    comparisonDesc: "Hãy mô phỏng và so sánh sự khác biệt lớn về tinh thần và vị thế của bạn sau 24 giờ bị đối phương 'Seen không rep'.",
    flowBadLabel: "Spam Tin Nhắn Tuyệt Vọng (Tự hại tâm lý)",
    flowGoodLabel: "Gửi Tin Nhắn Closure & Bước Tiếp (Khí chất)",
    chatStatusWaiting: "Hoạt động 2 giờ trước • Đã xem",
    chatStatusTyping: "đang soạn tin...",
    chatStatusActive: "Đã xem lúc 08:30",
    startSimBtn: "Bắt đầu mô phỏng",
    resetSimBtn: "Đặt lại trò chuyện",
    aiTitle: "AI Gỡ Rối & Soạn Tin Nhắn Khí Chất",
    aiDesc: "Bạn đang muốn nhắn tin dồn dập hỏi cho ra lẽ? Đừng làm vậy! Hãy nhập bản nháp đầy bức xúc hoặc lo âu của bạn vào đây. Gemini sẽ tối ưu nó thành một tin nhắn kiểm tra lịch thiệp (Friendly Check-in) hoặc một tin nhắn đóng lại mối quan hệ (Closure Message) cực kỳ lịch lãm và sâu sắc.",
    aiInputPlaceholder: "Ví dụ: Sao anh seen mà ko thèm rep? Ghét em thì nói một câu đi chứ sao cứ bơ em thế...",
    aiBtnRewrite: "Gỡ rối",
    aiBtnRewriting: "Đang gỡ rối...",
    aiComparisonBefore: "Bản nháp lo âu / tức giận",
    aiComparisonAfter: "Tin nhắn tối ưu (Gửi tin này để giữ khí chất!)",
    aiExplanationLabel: "Lời khuyên ứng xử:",
    badgeTitle: "",
    badgeDesc: "",
    badgeCopySuccess: "",
    badgeCopyBtn: "",
    quizTitle: "",
    quizDesc: "",
    quizStartBtn: "",
    quizNextBtn: "",
    quizResultTitle: "",
    quizRetakeBtn: "",
    faqTitle: "Q-A",
    faqDesc: "Các thắc mắc phổ biến về việc kiểm tra trạng thái bị ẩn tin nhắn và giải tỏa tâm lý lo âu.",
    faqs: [
      {
        q: "Làm sao để biết mình bị đưa vào danh sách 'Bỏ qua tin nhắn' (Ignore) hay 'Hạn chế' (Restrict) trên Messenger?",
        a: "Nếu bạn gửi tin nhắn mà chỉ hiện vòng tròn tích xám (đã gửi nhưng không nhận), trong khi đối phương vẫn bật chấm xanh hoạt động, hoặc bạn không nhìn thấy trạng thái online của họ nữa dù trước đây vẫn thấy, rất có thể bạn đã bị đưa vào danh sách Hạn chế (Restrict) hoặc Bỏ qua tin nhắn."
      },
      {
        q: "Quy tắc vàng khi bị bơ tin nhắn trong tình yêu là gì?",
        a: "Có 3 quy tắc cốt lõi: 1. Đừng tự trách mình (hành vi của họ nói lên kỹ năng sống của họ, không phải giá trị của bạn). 2. Đặt giới hạn thời gian (sau 24h - 48h im lặng, hãy ngừng trông chờ). 3. Tuyệt đối không spam tin nhắn dồn dập hoặc gọi điện liên tục vì điều này chỉ hạ thấp lòng tự trọng của bạn."
      },
      {
        q: "Có nên gửi tin nhắn cuối cùng (Closure message) hay cứ thế im lặng rời đi?",
        a: "Nếu mối quan hệ đã sâu đậm, một tin nhắn Closure lịch sự, ngắn gọn và dứt khoát ('Mình thấy chúng ta không còn tìm được tiếng nói chung nữa. Chúc bạn mọi điều tốt đẹp!') sẽ giúp bạn đóng lại nút thắt tâm lý để bước tiếp thanh thản, thay vì ấm ức kéo dài."
      }
    ],
    footerNote: "Dự án này dựa trên nohello.net và nguồn ở ngoài nên có gì sai sót thì feedback qua mail me@sonk.site"
  },
  en: {
    langName: "English",
    heroTitle: "Ghosting & Being Ignored",
    heroSubtitle: "Were you suddenly met with silence? Don't panic or lose your self-worth. Learn how to respond with absolute grace, wisdom, and dignity!",
    bannerNotice: "This website is for reference only, and may not be 100% accurate!",
    aboutTitle: "What is Ghosting & Message Ignoring?",
    aboutText: "Ghosting is when someone suddenly cuts off all communication (not replying, leaving you on 'Seen', muting or restricting your chat) without any explanation. This behavior reflects their own avoidance patterns and lack of communication maturity, rather than your personal value or worth.",
    whyBadTitle: "Why does being ignored cause so much anxiety?",
    whyBadPoints: [
      "Triggers self-blame, forcing you to overthink what you might have done wrong.",
      "Creates constant anticipation, keeping you hooked on checking their active status.",
      "Lures you into desperate double-texting which drains your dignity.",
      "The lack of closure keeps your mind locked in endless speculation."
    ],
    analogyTitle: "Analogy",
    analogyDesc: "Ignoring messages is like slamming a door in your face. Standing outside banging and shouting only exhausts you and makes them lock it tighter. The golden rule: Knock once or twice politely. If no one opens, smile and walk away with your head held high.",
    comparisonTitle: "Reaction: Desperate Spam vs. Elegant Closure",
    comparisonDesc: "Simulate and compare the mental state and dignity levels 24 hours after being left on 'Seen'.",
    flowBadLabel: "Desperate Spamming (Self-Destructive)",
    flowGoodLabel: "Send Closure & Move On (Dignified)",
    chatStatusWaiting: "Active 2h ago • Seen",
    chatStatusTyping: "typing...",
    chatStatusActive: "Seen at 08:30",
    startSimBtn: "Start Simulation",
    resetSimBtn: "Reset Simulation",
    aiTitle: "AI Ghosting Solver & Closure Writer",
    aiDesc: "About to send an angry wall of text? Don't do it! Paste your anxious or frustrated draft here. Gemini will rewrite it into a polite check-in or an elegant closure message that preserves your dignity.",
    aiInputPlaceholder: "e.g., Why are you ignoring me? If you don't want to talk just say so, why keep leaving me on read...",
    aiBtnRewrite: "Solve",
    aiBtnRewriting: "Solving...",
    aiComparisonBefore: "Anxious / Angry Draft",
    aiComparisonAfter: "Dignified Message (Send this to keep your head high!)",
    aiExplanationLabel: "Advice:",
    badgeTitle: "",
    badgeDesc: "",
    badgeCopySuccess: "",
    badgeCopyBtn: "",
    quizTitle: "",
    quizDesc: "",
    quizStartBtn: "",
    quizNextBtn: "",
    quizResultTitle: "",
    quizRetakeBtn: "",
    faqTitle: "Q-A",
    faqDesc: "Answers to common concerns about checking restriction status and handling emotional stress.",
    faqs: [
      {
        q: "How can I tell if I am Restricted or Muted on Messenger?",
        a: "If you send a message and it stays as sent (unfilled gray checkmark) for days while they are clearly active elsewhere, or if you can no longer see their active status at all, they might have Restricted or muted your chat."
      },
      {
        q: "What is the golden rule when being ignored?",
        a: "First, stop blaming yourself; their silence is their issue, not yours. Second, set a time limit (after 24-48 hours, stop waiting). Lastly, never spam them with endless double-texts."
      },
      {
        q: "Should I send a closure message or just go silent?",
        a: "For meaningful connections, sending a polite, brief, and absolute closure message ('It seems we are not on the same page anymore. Wishing you the best!') can help you mentally close the door and heal faster."
      }
    ],
    footerNote: "This project is based on nohello.net and external sources. For any suggestions, please feedback via email me@sonk.site"
  }
};
