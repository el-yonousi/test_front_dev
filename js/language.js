const get = (selector) => {
    return document.querySelector(selector)
}

function switchLang(code) {
    if (code == 'ar') {
        change(code, 'rtl', ar)

    } else if (code == 'en') {
        change(code, 'ltr', en)
    }
}


function change(code, direction, file) {
    get('[data-html]').dir = direction;
    get('[data-html]').lang = code;
    get('[data-nav-home]').innerHTML = file.nav.home;
    get('[data-nav-service]').innerHTML = file.nav.service;

    get('[data-header-title]').innerHTML = file.header.title;
    get('[data-header-description]').innerHTML = file.header.description;
    get('[data-header-action]').innerHTML = file.header.action;

    get('[data-content-title]').innerHTML = file.content.title;
    get('[data-content-card-1-title]').innerHTML = file.content.card_1.title;
    get('[data-content-card-1-description]').innerHTML = file.content.card_1.description;
    get('[data-content-card-2-title]').innerHTML = file.content.card_2.title;
    get('[data-content-card-2-item-1]').innerHTML = file.content.card_2.item_1;
    get('[data-content-card-2-item-2]').innerHTML = file.content.card_2.item_2;
    get('[data-content-card-2-item-3]').innerHTML = file.content.card_2.item_3;
    get('[data-content-card-3-title]').innerHTML = file.content.card_3.title;
    get('[data-content-card-3-item-1]').innerHTML = file.content.card_3.item_1;
    get('[data-content-card-3-item-2]').innerHTML = file.content.card_3.item_2;
    get('[data-content-card-3-item-3]').innerHTML = file.content.card_3.item_3;
    get('[data-content-card-3-action]').innerHTML = file.content.card_3.action;
    get('[data-content-card-4-title]').innerHTML = file.content.card_4.title;
    get('[data-content-card-4-description]').innerHTML = file.content.card_4.description;
    get('[data-content-footer-title]').innerHTML = file.content.footer.title;
    get('[data-content-footer-description]').innerHTML = file.content.footer.description;
    get('[data-content-footer-action]').innerHTML = file.content.footer.action;

    get('[data-offers-title]').innerHTML = file.offers.title
    get('[data-offers-card-1-title]').innerHTML = file.offers.card_1.title
    get('[data-offers-card-1-description]').innerHTML = file.offers.card_1.description
    get('[data-offers-card-1-action]').innerHTML = file.offers.card_1.action
    get('[data-offers-card-2-title]').innerHTML = file.offers.card_2.title
    get('[data-offers-card-2-occupation]').innerHTML = file.offers.card_2.occupation
    get('[data-offers-card-2-expert]').innerHTML = file.offers.card_2.expert
    get('[data-offers-card-2-description]').innerHTML = file.offers.card_2.description
    get('[data-offers-card-3-title]').innerHTML = file.offers.card_3.title
    get('[data-offers-card-3-description]').innerHTML = file.offers.card_3.description
    get('[data-offers-card-3-action]').innerHTML = file.offers.card_3.action
    get('[data-offers-action]').innerHTML = file.offers.action
}

const ar = {
    offers: {
        title: "فرصة عظيمة للتعلم والنمو",
        card_1: {
            title: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع",
            description: "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص،",
            action: "مزيد من المعلومات",
        },
        card_2: {
            title: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع",
            occupation: "الاستشاريين",
            expert: "اسم الخبير",
            description: "للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص،",
        },
        card_3: {
            title: "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع",
            description: "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص،",
            action: "مزيد من المعلومات"
        },
        action: "قدم الآن",
    },
    content: {
        title: "تحسين حياتك المهنية من خلال نهج العقلية الاستشارية",
        card_1: {
            title: 'لمن هذا',
            description: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر'
        },
        card_2: {
            title: 'لمن هذا',
            description: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر',
            item_1: "هو ببساطة نص شكلي (بمعنى أن الغاية",
            item_2: "هو ببساطة نص شكلي (بمعنى أن الغاية",
            item_3: "هو ببساطة نص شكلي (بمعنى أن الغاية",
        },
        card_3: {
            title: '3 جلسة مباشرة عبر الإنترنت',
            item_1: "أبريل",
            item_2: "مايو",
            item_3: "يونيو يوليو",
            action: 'مزيد من المعلومات'
        },
        card_4: {
            title: 'مهمة مجموعة المشاريع والتدريب',
            description: "للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص،للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص،للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص،",
        },
        footer: {
            title: "تسجيل إضافي",
            description: "09 مارس 2021",
            action: "قدم الآن"
        }
    },
    header: {
        title: "انضم إلى رحلة التعلم",
        description: "حسن حياتك المهنية من خلال نهج عقلية استشارية لتعزيز حياتك المهنية في المستقبل",
        action: "قدم الآن",
    },
    nav: {
        home: "الرئيسية",
        service: "الخدمات",
    }
}
const en = {
    offers: {
        title: "A great opportunity to learn and grow",
        card_1: {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestias.",
            action: "More Info",
        },
        card_2: {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.",
            occupation: "consultants",
            expert: "Expert Name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestias.",
        },
        card_3: {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestias.",
            action: "More Info"
        },
        action: "Apply Now",
    },
    content: {
        title: "improve your career with a consultative mindset approach",
        card_1: {
            title: 'who is it for',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ea debitis qui molestias accusamus incidunt distinctio ut neque doloremque minus nostrum."
        },
        card_2: {
            title: 'what we will cover',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ea debitis qui molestias accusamus incidunt distinctio ut neque doloremque minus nostrum.",
            item_1: "Lorem ipsum, dolor sit amet consectetur.",
            item_2: "Lorem ipsum, dolor sit amet consectetur.",
            item_3: "Lorem ipsum, dolor sit amet consectetur.",
        },
        card_3: {
            title: '3 online live session',
            item_1: "April",
            item_2: "May",
            item_3: "June July",
            action: 'More Info'
        },
        card_4: {
            title: 'Group Projects assignment and coaching',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ea debitis qui molestias accusamus incidunt distinctio ut neque doloremque minus nostrum, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        footer: {
            title: "registration Extra",
            description: "09 March 2021",
            action: "Apply Now"
        }
    },
    header: {
        title: "Join the Learning journey",
        description: "Improve your career with consultative mindset approach to enhance your future creer",
        action: "Apply Now",
    },
    nav: {
        home: "Home",
        service: "Services",
    }
}