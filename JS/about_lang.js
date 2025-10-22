// lang.js
const langData = {
  // Navbar
  "الصفحة الرئيسية": "Home",
  "عن داماسكا": "About Damasca",
  "الفعاليات": "Events",
  "تصنيفات": "Categories",
  "تواصل معنا": "Contact Us",

  // About Section
  "نبذة عن داماسكا": "About Damasca",
  "مرحبا بكم في مهرجان و فعاليات عاصمتنا دمشق الجميلة حيث نعتز بثقافتنا العريقة ونحيي روابطنا العميقة.":
    "Welcome to the festivals and events of our beautiful capital Damascus, where we cherish our rich culture and honor our deep connections.",
  "نحن نؤمن بأن الفعاليات ليست مجرد مناسبات، بل هي تجارب حية تُثري حياتنا وتربطنا بثقافتنا وتراثنا ومجتمعنا المحلي.":
    "We believe that events are not just occasions, but living experiences that enrich our lives and connect us with our culture, heritage, and local community.",
  "هدفنا في داماسكا :": "Our goal at Damasca:",
  "نسعى لنقدم كل ما يمتع المواطن او السائح في المدينة, بدءًا بالموسيقى التي تنبض بالإيقاعات،والفن الذي يعرض الإبداع المحلي والعالمي،":
    "We strive to offer everything that delights citizens or tourists in the city, from music pulsating with rhythms to art showcasing local and global creativity.",
  "والاهم من ذلك الثقافة التي تعكس أصالة دمشق وروحها الفريد.":
    "Most importantly, the culture that reflects the authenticity and unique spirit of Damascus.",
  "ماذا ستجد في داماسكا :": "What you will find at Damasca:",
  "موسيقى محلية وشعبية تعلق في الاذهان وعروض غنائية مليئة بالحيوية والالحان":
    "Local and folk music that sticks in your mind, and lively musical performances.",
  "طعام محلي لذيذ تعبق به أصالة مطبخنا العريق": "Delicious local food that carries the authenticity of our rich cuisine.",
  "فعاليات للأطفال والعائلات بمختلف الاعمار": "Activities for children and families of all ages.",
  "انضموا إلينا في رحلة داماسكا، حيث يلتقي التراث بالحداثة، ويصبح كل حدث فرصة للاكتشاف، التعلم، الترفيه، والتواصل مع الآخرين. لأننا نؤمن أن كل فعالية هي قصة،":
    "Join us on the Damasca journey, where heritage meets modernity, and every event becomes an opportunity for discovery, learning, entertainment, and connecting with others. We believe every event tells a story,",
  "وكل تجربة تستحق أن تُعاش بكل تفاصيلها.": "and every experience deserves to be lived in all its details.",

  // Team Section
  "تعرف على فريقنا": "Meet Our Team",

  // Members Names
  "دانة طري": "Dana Tari",
  "محمود الحريري": "Mahmoud Al-Hariri",
  "عبدالرحمن": "Abdulrahman",
  "ماجدة ابو الهوى": "Majeda Abu Al-Hawa",
  "عبير هوش": "Abeer Hosh",

  // Members Roles
  "مدير المشروع": "Project Manager",
  "مسؤول التنظيم": "Organization Manager",
  "مسؤول الموارد اللوجستية": "Logistics Manager",
  "مسؤول التسويق": "Marketing Manager",
  "مسؤول الدعم الفني": "Technical Support Manager",

  // Members Description
  "اشرف على الادارة في الصعيد العام": "Supervised overall administration",
  "اشرف على التنظيم والرقابة": "Oversaw organization and control",
  "اشرف على توفير الاحتياجات والموارد": "Managed supply of needs and resources",
  "اشرف على الاعلان والترويج": "Managed advertising and promotion",
  "اشرف على الجوانب التقنية": "Oversaw technical aspects",

  // Buttons
  "للتواصل": "Contact",

  // Footer
  "داماسكا": "Damasca",
  "روابط الموقع": "Site Links",
  "ارسل لنا استفسار": "Send us a Message",
  "تابعنا": "Follow Us",
  "اكتب رسالتك...": "Write your message...",
  "© احتفالات داماسكا. كل الحقوق محفوظة.": "© Damasca Festivals. All rights reserved.",
  "📍 دمشق, طريق المطار": "Damascus, Airport Road"
};

document.addEventListener("DOMContentLoaded", () => {
  const arBtn = document.getElementById("ar-btn");
  const enBtn = document.getElementById("en-btn");

  const aboutDiv = document.querySelector(".aboutTEXT");
  const aboutTitle = document.getElementById("about-title");
  const teamTitle = document.getElementById("team-title");

  function translateNode(el, lang) {
    if (el.nodeType === 3) return;
    el.childNodes.forEach(node => {
      if (node.nodeType === 3) {
        const text = node.textContent.trim();
        if (lang === "en" && langData[text]) {
          node.textContent = langData[text];

          if (aboutDiv && aboutDiv.contains(node)) {
            let parent = node.parentElement;
            while(parent && parent !== aboutDiv) {
              parent.style.textAlign = "left";
              parent.style.direction = "ltr";
              parent.style.marginLeft = "50px";
              parent.style.marginRight = "50px";
              parent = parent.parentElement;
            }
          }
        }

        if (lang === "ar") {
          for (const [key, value] of Object.entries(langData)) {
            if (value === text) {
              node.textContent = key;

              if (aboutDiv && aboutDiv.contains(node)) {
                let parent = node.parentElement;
                while(parent && parent !== aboutDiv) {
                  parent.style.textAlign = "";
                  parent.style.direction = "";
                  parent.style.marginLeft = "";
                  parent.style.marginRight = "";
                  parent = parent.parentElement;
                }
              }
              break;
            }
          }
        }
      } else {
        translateNode(node, lang);
      }
    });
  }

  function translatePlaceholders(lang) {
    document.querySelectorAll('input, textarea').forEach(el => {
      const text = el.getAttribute('placeholder')?.trim();
      if (!text) return;
      if (lang === "en" && langData[text]) {
        el.setAttribute('placeholder', langData[text]);
        el.style.textAlign = "left";
        el.style.direction = "ltr";
      }
      if (lang === "ar") {
        for (const [key, value] of Object.entries(langData)) {
          if (value === text) {
            el.setAttribute('placeholder', key);
            el.style.textAlign = "right";
            el.style.direction = "rtl";
            break;
          }
        }
      }
    });
  }

  function setLanguage(lang) {
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    translateNode(document.body, lang);
    translatePlaceholders(lang);

     
    if(lang === "en"){
      aboutTitle.style.textAlign = "left";
      aboutTitle.style.direction = "ltr";
      aboutTitle.style.marginLeft = "50px";
      aboutTitle.style.marginRight = "50px";

      teamTitle.style.textAlign = "left";
      teamTitle.style.direction = "ltr";
      teamTitle.style.marginLeft = "50px";
      teamTitle.style.marginRight = "50px";
    } else {
      aboutTitle.style.textAlign = "";
      aboutTitle.style.direction = "";
      aboutTitle.style.marginLeft = "";
      aboutTitle.style.marginRight = "";

      teamTitle.style.textAlign = "";
      teamTitle.style.direction = "";
      teamTitle.style.marginLeft = "";
      teamTitle.style.marginRight = "";
    }
  }

  arBtn.addEventListener("click", () => setLanguage("ar"));
  enBtn.addEventListener("click", () => setLanguage("en"));
});
