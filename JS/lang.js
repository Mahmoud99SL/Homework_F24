// ./JS/lang.js
(function () {
  const defaultLang = "ar"; // default language
  const storageKey = "siteLang";

  // translations map: keys match data-i18n attributes in HTML
  const translations = {
    title: { ar: "Damasca Festivals", en: "Damasca Festivals" },

    // Navbar
    "nav.home": { ar: "الصفحة الرئيسية", en: "Home" },
    "nav.about": { ar: "عن داماسكا", en: "About Damasca" },
    "nav.events": { ar: "الفعاليات", en: "Events" },
    "nav.categories": { ar: "تصنيفات", en: "Categories" },
    "nav.contact": { ar: "تواصل معنا", en: "Contact" },

    // small variants used in footer links
    "nav.home_sm": { ar: "الصفحة الرئيسية", en: "Home" },
    "nav.about_sm": { ar: "عن داماسكا", en: "About" },
    "nav.events_sm": { ar: "الفعاليات", en: "Events" },
    "nav.contact_sm": { ar: "تواصل معنا", en: "Contact" },

    // Hero
    "hero.title": {
      ar: "مرحباً بكم في احتفالات دمشق العريقة",
      en: "Welcome to the Historic Damascus Festivals",
    },
    "hero.lead": {
      ar: "احتفل بالثقافة الدمشقية، الطعام، الموسيقى والمجتمع المحلي",
      en: "Celebrate Damascus culture, food, music and the local community",
    },
    "hero.cta": { ar: "اكتشف المزيد", en: "Discover More" },

    // About
    "about.title": { ar: "لماذا يجب أن تحضر داماسكا؟", en: "Why attend Damasca?" },
    "about.text": {
      ar:
        "يجمع مهرجان مدينتنا الناس من خلال الموسيقى والفن والطعام والتقاليد. استمتعوا بعروض نابضة بالحياة، ومأكولات محلية شهية، وذكريات لا تُنسى مع الأصدقاء والعائلة",
      en:
        "Our city festival brings people together with music, art, food and traditions. Enjoy live performances, delicious local cuisine, and unforgettable memories with friends and family.",
    },
    "about.li1": { ar: "✅ موسيقى محلية وعروض غنائية", en: "✅ Local music and live acts" },
    "about.li2": { ar: "✅ طعام محلي تعبق به الأصالة", en: "✅ Authentic local food" },
    "about.li3": { ar: "✅ فعاليات للأطفال والعائلات", en: "✅ Family & kids activities" },
    "about.join": { ar: "انضم إلينا", en: "Join Us" },

    // Carousel controls (visually-hidden text)
    "carousel.prev": { ar: "السابق", en: "Previous" },
    "carousel.next": { ar: "التالي", en: "Next" },

    // Categories buttons
    "categories.sports": { ar: "الفعاليات الرياضية", en: "Sports Events" },
    "categories.culture": { ar: "الفعاليات الثقافية", en: "Cultural Events" },
    "categories.family": { ar: "الفعاليات العائلية", en: "Family Events" },

    // Cards / Events
    "cards.title": { ar: "أحدث الفعاليات", en: "Latest Events" },
    "event1.title": { ar: "ليالي أوبرا دمشق", en: "Damascus Opera Nights" },
    "event1.text": { ar: "عروض مباشرة لأفضل الفرق الموسيقية.", en: "Live shows from top music groups." },
    "event1.details": { ar: "التفاصيل", en: "Details" },

    "event2.title": { ar: "معرض الكتاب", en: "Book Fair" },
    "event2.text": { ar: "واكتشف أحدث الكتب والقصص.", en: "Discover the latest books and stories." },
    "event2.details": { ar: "التفاصيل", en: "Details" },

    "event3.title": { ar: "معرض دمشق الدولي", en: "Damascus International Fair" },
    "event3.text": { ar: "اطلع على آخر ما تقدمه سوريا للعالم.", en: "See Syria's latest offerings to the world." },
    "event3.details": { ar: "التفاصيل", en: "Details" },

    // Footer
    "footer.mode": { ar: "الوضع", en: "Mode" },
    "footer.title": { ar: "داماسكا", en: "Damasca" },
    "footer.links": { ar: "روابط الموقع", en: "Quick Links" },
    "footer.contact_title": { ar: "معلومات الاتصال", en: "Contact Info" },
    "footer.message_title": { ar: "ارسل لنا استفسار", en: "Send us a message" },
    "footer.message_placeholder": { ar: "اكتب رسالتك...", en: "Write your message..." },
    "footer.send": { ar: "إرسال", en: "Send" },
    "footer.follow": { ar: "تابعنا", en: "Follow Us" },
    "footer.copy": { ar: "© احتفالات داماسكا. كل الحقوق محفوظة.", en: "© Damasca Festivals. All rights reserved." }
  };

  // utility: get selected language (from storage or default)
  function getLang() {
    const stored = localStorage.getItem(storageKey);
    return stored ? stored : defaultLang;
  }

  // utility: save language
  function setLang(lang) {
    localStorage.setItem(storageKey, lang);
    applyLangToDocument(lang);
    applyTranslations(lang);
    updateFlagActive(lang);
  }

  // apply dir and html lang attributes
  function applyLangToDocument(lang) {
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // optional: add a body class for CSS adjustments
    document.body.classList.toggle("lang-ar", lang === "ar");
    document.body.classList.toggle("lang-en", lang === "en");
  }

  // set .active look on flag buttons
  function updateFlagActive(lang) {
    const btnAr = document.getElementById("btn-ar");
    const btnEn = document.getElementById("btn-en");
    if (!btnAr || !btnEn) return;
    btnAr.classList.toggle("active", lang === "ar");
    btnEn.classList.toggle("active", lang === "en");
  }

  // main translation application
  function applyTranslations(lang) {
    // elements with data-i18n -> set textContent / innerText
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && translations[key]) {
        el.textContent = translations[key][lang] ?? translations[key].ar;
      }
    });

    // attributes like placeholder: data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && translations[key]) {
        el.setAttribute("placeholder", translations[key][lang] ?? translations[key].ar);
      }
    });

    // title attribute translations (optional)
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (key && translations[key]) {
        el.setAttribute("title", translations[key][lang] ?? translations[key].ar);
      }
    });

    // also translate <title> element
    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      const key = titleEl.getAttribute("data-i18n");
      if (key && translations[key]) {
        titleEl.textContent = translations[key][lang] ?? translations[key].ar;
      }
    }
  }

  // initialize UI and event listeners
  function init() {
    const current = getLang();

    // event listeners for flag buttons
    const btnAr = document.getElementById("btn-ar");
    const btnEn = document.getElementById("btn-en");
    if (btnAr) btnAr.addEventListener("click", () => setLang("ar"));
    if (btnEn) btnEn.addEventListener("click", () => setLang("en"));

    applyLangToDocument(current);
    applyTranslations(current);
    updateFlagActive(current);
  }

  // run on DOMContentLoaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
