// نظام الترجمة المتقدم
class TranslationSystem {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'ar';
        this.translations = {
            ar: {
                // Navigation
                "nav.home": "الصفحة الرئيسية",
                "nav.events": "الفعاليات",
                "nav.about": "عن الدليل",
                "nav.contact": "اتصل بنا",
                
                // Header
                "events.header.title": "كل الفعاليات القادمة",
                "events.header.subtitle": "استكشف فعاليات مدينتك حسب التاريخ أو التصنيف أو المكان",
                
                // Filter
                "filter.all_categories": "كل التصنيفات",
                "filter.cultural": "ثقافي",
                "filter.sports": "رياضي",
                "filter.family": "عائلي",
                "filter.music": "موسيقي",
                "filter.all_dates": "كل التواريخ",
                "filter.all_locations": "كل الأماكن",
                "filter.filter_btn": "فلترة",
                
                // Events
                "event1.title": "ليالي أوبرا دمشق",
                "event1.text": "عروض مباشرة لأفضل الفرق الموسيقية.",
                "event1.details": "التفاصيل",
                
                "event2.title": "معرض الكتاب",
                "event2.text": "اكتشف أحدث الكتب والقصص.",
                
                "event3.title": "بطولة المدينة الرياضية",
                "event3.text": "منافسات رياضية وحماسية لجميع الأعمار.",
                
                "event4.title": "مهرجان العائلة",
                "event4.text": "فعاليات ممتعة للأطفال والعائلات.",
                
                // Messages
                "events.no_events": "لا توجد فعاليات مطابقة للبحث أو الفلترة.",
                
                // Footer
                "footer.links": "روابط سريعة",
                "footer.contact_title": "معلومات التواصل",
                "footer.message_title": "ارسل لنا استفسار",
                "footer.message_placeholder": "اكتب رسالتك...",
                "footer.send": "إرسال",
                "footer.follow": "تابعنا",
                "footer.copy": "© دليل فعاليات المدينة. جميع الحقوق محفوظة.",
                
                // Navigation small
                "nav.home_sm": "الصفحة الرئيسية",
                "nav.events_sm": "الفعاليات",
                "nav.about_sm": "عن الدليل",
                "nav.contact_sm": "اتصل بنا"
            },
            en: {
                // Navigation
                "nav.home": "Home",
                "nav.events": "Events",
                "nav.about": "About",
                "nav.contact": "Contact",
                
                // Header
                "events.header.title": "All Upcoming Events",
                "events.header.subtitle": "Explore your city's events by date, category, or location",
                
                // Filter
                "filter.all_categories": "All Categories",
                "filter.cultural": "Cultural",
                "filter.sports": "Sports",
                "filter.family": "Family",
                "filter.music": "Music",
                "filter.all_dates": "All Dates",
                "filter.all_locations": "All Locations",
                "filter.filter_btn": "Filter",
                
                // Events
                "event1.title": "Damascus Opera Nights",
                "event1.text": "Live performances by the best musical groups.",
                "event1.details": "Details",
                
                "event2.title": "Book Fair",
                "event2.text": "Discover the latest books and stories.",
                
                "event3.title": "City Sports Championship",
                "event3.text": "Exciting sports competitions for all ages.",
                
                "event4.title": "Family Festival",
                "event4.text": "Fun activities for children and families.",
                
                // Messages
                "events.no_events": "No events match your search or filters.",
                
                // Footer
                "footer.links": "Quick Links",
                "footer.contact_title": "Contact Information",
                "footer.message_title": "Send us an inquiry",
                "footer.message_placeholder": "Type your message...",
                "footer.send": "Send",
                "footer.follow": "Follow Us",
                "footer.copy": "© City Events Guide. All rights reserved.",
                
                // Navigation small
                "nav.home_sm": "Home",
                "nav.events_sm": "Events",
                "nav.about_sm": "About",
                "nav.contact_sm": "Contact"
            }
        };
        
        this.init();
    }
    
    init() {
        this.applyLanguage();
        this.updateLanguageButtons();
    }
    
    switchLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.applyLanguage();
        this.updateLanguageButtons();
    }
    
    applyLanguage() {
        const html = document.documentElement;
        const body = document.body;
        
        // Set language and direction
        html.setAttribute('lang', this.currentLanguage);
        body.className = body.className.replace(/lang-\w+/g, '');
        body.classList.add(`lang-${this.currentLanguage}`);
        
        // Set direction
        if (this.currentLanguage === 'ar') {
            html.setAttribute('dir', 'rtl');
            body.style.direction = 'rtl';
        } else {
            html.setAttribute('dir', 'ltr');
            body.style.direction = 'ltr';
        }
        
        // Apply translations
        this.updateTranslations();
    }
    
    updateTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translations[this.currentLanguage][key];
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    const placeholderKey = element.getAttribute('data-i18n-placeholder');
                    if (placeholderKey && this.translations[this.currentLanguage][placeholderKey]) {
                        element.setAttribute('placeholder', this.translations[this.currentLanguage][placeholderKey]);
                    }
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update page title if it has data-i18n
        const titleElement = document.querySelector('title[data-i18n]');
        if (titleElement) {
            const key = titleElement.getAttribute('data-i18n');
            const translation = this.translations[this.currentLanguage][key];
            if (translation) {
                document.title = translation;
            }
        }
    }
    
    updateLanguageButtons() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(button => {
            button.classList.remove('active');
            if (button.textContent.includes('العربية') || button.textContent.includes('Arabic')) {
                if (this.currentLanguage === 'ar') {
                    button.classList.add('active');
                }
            } else {
                if (this.currentLanguage === 'en') {
                    button.classList.add('active');
                }
            }
        });
    }
}

// Global function for language switching
function switchLanguage(lang) {
    if (window.translationSystem) {
        window.translationSystem.switchLanguage(lang);
    } else {
        window.translationSystem = new TranslationSystem();
        window.translationSystem.switchLanguage(lang);
    }
}

// Initialize translation system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.translationSystem = new TranslationSystem();
    
    // Add smooth transition for language switching
    const style = document.createElement('style');
    style.textContent = `
        .lang-switching {
            opacity: 0.7;
            transition: opacity 0.3s ease;
        }
        body {
            transition: direction 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Add loading state during language switch
    document.addEventListener('languageSwitching', function() {
        document.body.classList.add('lang-switching');
        setTimeout(() => {
            document.body.classList.remove('lang-switching');
        }, 300);
    });
});

// Export for global use
window.switchLanguage = switchLanguage;