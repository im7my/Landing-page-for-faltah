// Simple bilingual (AR/EN) toggle + smooth scroll with privacy-first approach
const dict = {
  ar: {
    brand: "فلته",
    nav_about: "عن فلته",
    nav_features: "المزايا",
    nav_join: "سجّل اهتمامك",
    hero_h1: "التوصيل بين المدن—بأسلوب أذكى",
    hero_p: "فلته تربط المرسِل بالمسافر مباشرة لتوصيل الطلبات بسرعة وبتكلفة أقل، مع تجربة فاخرة مستوحاة من iOS واهتمام كامل بالخصوصية.",
    hero_cta: "انضم للقائمة",
    hero_secondary: "شاهد المزايا",
    badge_ar_en: "واجهة عربية/إنجليزية",
    badge_privacy: "خصوصية أولًا (بدون تتبع)",
    badge_sa: "موجّه للسوق السعودي",
    kpi_title: "لمحة عن تجربة المستخدم",
    kpi1: "تسعير ديناميكي",
    kpi1s: "حسب الوزن/المسافة",
    kpi2: "لغة عربية/إنجليزية",
    kpi2s: "RTL/LTR",
    kpi3: "وسائل دفع محلية",
    kpi3s: "Apple Pay لاحقًا",
    kpi_disc: "* تفاصيل المُنتج قيد التطوير — الأرقام الحساسة تُشارك لاحقًا عند الطلب.",
    about_h2: "عن فلته (Faltah)",
    about_p: "فلته تطبيق توصيل سعودي يربط المسافرين بالمرسلين لتسليم الشحنات بين المدن. نبدأ بالمنطقة الوسطى مع معايير أمان وجودة عالية، ونموذج تسعير واضح وعادل.",
    about_card1_h3: "لماذا الآن؟",
    about_card1_p: "الطلب على حلول توصيل مرنة وسريعة في ازدياد. فلته يقلل التكلفة بربط الطلبات برحلات قائمة فعلاً.",
    about_card2_h3: "نهج الخصوصية",
    about_card2_p: "لا نستخدم أي تعقب طرف ثالث. لا Google Analytics. لا Pixel. جمع الحد الأدنى من البيانات عبر نموذج Tally.",
    about_card3_h3: "للمستثمرين",
    about_card3_p: "نسخة مختصرة من الرؤية والمزايا هنا فقط. التفاصيل المالية الحساسة متاحة مؤقتًا عند الطلب وبمذكرة عدم إفشاء.",
    features_h2: "مزايا أساسية",
    f1_h: "تسعير ذكي",
    f1_p: "أساس + مسافة + وزن مع تحفيز التجميع للتجار.",
    f2_h: "تجربة Apple‑style",
    f2_p: "واجهة داكنة أنيقة، أزرق × أبيض، زجاجية ناعمة.",
    f3_h: "ثنائي اللغة",
    f3_p: "عربي/إنجليزي مع دعم RTL/LTR كامل.",
    f4_h: "جاهزية الدفع المحلي",
    f4_p: "تكامل Apple Pay ومزودي دفع محليين لاحقًا.",
    form_h2: "سجّل اهتمامك",
    form_p: "عبّئ النموذج أدناه ليصلك تحديث الإطلاق.",
    privacy_note: "نحترم خصوصيتك — لا نبيع بياناتك. تُستخدم معلوماتك للتواصل حول الإطلاق فقط.",
    contact_h2: "للتواصل والشراكات",
    contact_p: "للمستثمرين والشركاء: راسلنا لطلب نسخة مختصرة تحت NDA. سيتم توفير تفاصيل إضافية لاحقًا.",
    contact_cta: "انضم للقائمة",
    foot_copy: "© 2025 فلته — جميع الحقوق محفوظة.",
    foot_priv: "سياسة الخصوصية (مختصرة)",
    foot_terms: "الشروط (مختصرة)"
  },
  en: {
    brand: "Faltah",
    nav_about: "About",
    nav_features: "Features",
    nav_join: "Join Waitlist",
    hero_h1: "Intercity delivery — made smarter",
    hero_p: "Faltah connects senders with travelers to deliver items faster and at lower cost, with an iOS‑inspired, privacy‑first experience.",
    hero_cta: "Join the list",
    hero_secondary: "See features",
    badge_ar_en: "Arabic/English UI",
    badge_privacy: "Privacy‑first (no tracking)",
    badge_sa: "Built for Saudi market",
    kpi_title: "Experience Highlights",
    kpi1: "Dynamic pricing",
    kpi1s: "by distance/weight",
    kpi2: "Arabic/English",
    kpi2s: "RTL/LTR",
    kpi3: "Local payments",
    kpi3s: "Apple Pay later",
    kpi_disc: "* Details in progress — sensitive figures shared on request.",
    about_h2: "About Faltah",
    about_p: "A Saudi delivery app that connects travelers with senders for intercity shipments. We start in Central KSA with strong safety and clear pricing.",
    about_card1_h3: "Why now?",
    about_card1_p: "Demand for flexible, fast delivery is rising. Faltah reduces cost by matching existing trips.",
    about_card2_h3: "Privacy stance",
    about_card2_p: "We don't use third‑party tracking. No Google Analytics. Minimal data via Tally form.",
    about_card3_h3: "For investors",
    about_card3_p: "Only a short public overview here. Financial details on request under NDA.",
    features_h2: "Key features",
    f1_h: "Smart pricing",
    f1_p: "Base + distance + weight; merchant bundling incentives.",
    f2_h: "Apple‑style UX",
    f2_p: "Elegant dark UI, blue × white, soft glassmorphism.",
    f3_h: "Bilingual",
    f3_p: "Arabic/English with full RTL/LTR support.",
    f4_h: "Local payments ready",
    f4_p: "Apple Pay and local PSPs later.",
    form_h2: "Join the waitlist",
    form_p: "Fill the form below to get launch updates.",
    privacy_note: "We respect your privacy — no data sale. Used only for launch updates.",
    contact_h2: "Contact & Partnerships",
    contact_p: "Investors/partners: request a short brief under NDA. More details soon.",
    contact_cta: "Join the list",
    foot_copy: "© 2025 Faltah — All rights reserved.",
    foot_priv: "Privacy (short)",
    foot_terms: "Terms (short)"
  }
};

function setLang(lang){
  const root = document.documentElement;
  const isAr = lang === "ar";
  root.lang = isAr ? "ar" : "en";
  root.dir = isAr ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[lang][key]) el.textContent = dict[lang][key];
  });
  document.getElementById("arBtn").setAttribute("aria-pressed", isAr ? "true" : "false");
  document.getElementById("enBtn").setAttribute("aria-pressed", !isAr ? "true" : "false");
  localStorage.setItem("faltah_lang", lang);
}

document.getElementById("arBtn").addEventListener("click", ()=>setLang("ar"));
document.getElementById("enBtn").addEventListener("click", ()=>setLang("en"));

const saved = localStorage.getItem("faltah_lang");
setLang(saved === "en" ? "en" : "ar");

// Smooth scroll (no external libs)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click", e=>{
    const id = a.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth", block:"start"});
    }
  });
});
