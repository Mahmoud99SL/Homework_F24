// lang.js
const langData = {
  // Navbar
  "الصفحة الرئيسية": "Home",
  "عن داماسكا": "About Damasca",
  "الفعاليات": "Events",
  "تواصل معنا": "Contact Us",

  // Contact Section
  "تواصل معنا": "Contact Us",
  "الاسم الكامل": "Full Name",
  "البريد الإلكتروني": "Email",
  "الرسالة": "Message",
  "اكتب اسمك هنا": "Enter your name",
  "example@mail.com": "example@mail.com",
  "اكتب رسالتك هنا...": "Write your message...",
  "إرسال": "Send",

  // Contact Info
  "معلومات التواصل البديلة": "Alternative Contact Info",
  "📧 البريد العام:": "📧 General Email:",
  "📞 الهاتف:": "📞 Phone:",
  "📍 العنوان:": "📍 Address:",
  "تابعنا على وسائل التواصل": "Follow us on social media",

  // Footer
  "داماسكا": "Damasca",
  "روابط الموقع": "Site Links",
  "ارسل لنا استفسار": "Send us a Message",
  "تابعنا": "Follow Us",
  "اكتب رسالتك...": "Write your message...",
  "© احتفالات داماسكا. كل الحقوق محفوظة.": "© Damasca Festivals. All rights reserved."
};

document.addEventListener("DOMContentLoaded", () => {
  const arBtn = document.getElementById("ar-btn");
  const enBtn = document.getElementById("en-btn");
  const navbarCollapse = document.getElementById("navbarNav");
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

  function translateNode(el, lang) {
    if (el.nodeType === 3) return; // Text node
    el.childNodes.forEach(node => {
      if (node.nodeType === 3) {
        const text = node.textContent.trim();
        if (lang === "en" && langData[text]) node.textContent = langData[text];
        if (lang === "ar") {
          for (const [key, value] of Object.entries(langData)) {
            if (value === text) { node.textContent = key; break; }
          }
        }
      } else translateNode(node, lang);
    });
  }

  function translatePlaceholders(lang) {
    document.querySelectorAll('input, textarea').forEach(el => {
      const text = el.getAttribute('placeholder')?.trim();
      if (!text) return;
      if (lang === "en" && langData[text]) el.setAttribute('placeholder', langData[text]);
      if (lang === "ar") {
        for (const [key, value] of Object.entries(langData)) {
          if (value === text) { el.setAttribute('placeholder', key); break; }
        }
      }
    });
  }

  function setLanguage(lang) {
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    translateNode(document.body, lang);
    translatePlaceholders(lang);
  }

  arBtn.addEventListener("click", () => { setLanguage("ar"); bsCollapse.hide(); });
  enBtn.addEventListener("click", () => { setLanguage("en"); bsCollapse.hide(); });

  // إغلاق القائمة عند الضغط على أي رابط داخلها
  document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
    link.addEventListener('click', () => { bsCollapse.hide(); });
  });
});