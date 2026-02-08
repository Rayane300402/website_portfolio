import type { CaseStudy } from "./type";

export const CASE_STUDIES: CaseStudy[] = [
  // ---------------- TSB 2.0 ----------------
  {
    slug: "tsb-2",
    header: {
      kind: "project",
      title: "TSB 2.0",
      shortDescription:
        "A shoe botting, now all in one botting app I co-built in Angular for AIY.",
      work: ["UI/UX", "Front End Developer", "Angular and SQLite"],
      responsibilities:
        "Minor fixes in Figma design, product development using Angular & Electron, database via SQLite.",
      links: [{ label: "theshitbot.com", href: "https://www.theshitbot.com/" }],
    },

    introAssets: {
      type: "image",
      src: "/img/TSB/tsb2.png",
      alt: "TSB hero",
    },

    blocks: [
      {
        id: "mockups",
        type: "hero-mockup",
        bgText: "THE REAL SHIT",
        assets: [
          {
            type: "image",
            src: "/img/TSB/tsb-laptop-1.png",
            side: "left",
            x: 100,
            y: -185,
          },
          {
            type: "image",
            src: "/img/TSB/tsb-laptop-2.png",
            side: "right",
            x: 0,
            y: 0,
          },
        ],
      },

      {
        id: "note-intro",
        type: "text",
        variant: "body",
        text:
          "This project was a 2.0, a whole revamp for the original TSB. A new UI and new features to add, I worked on building the app using Angular, which I did not have prior experience in. The first 2 weeks of my internship involved me learning Angular properly as well as getting a better understanding of Nodejs and electron before taking over the project. When the UI was completed I was tasked to build the local database which was a very challenging but fun experience trying to figure out how to build the database using SQLite and make sure it was smooth sailing and proper.",
      },

      {
        id: "gallery",
        type: "media",
        variant: "single",
        assets: [{ type: "image", src: "/img/TSB/tsb.png", alt: "TSB UI" }],
      },

      {
        id: "note-final",
        type: "text",
        variant: "body",
        text:
          "After a year of hard work and so much testing, TSB 2.0 was finally published to the public to used by user.",
      },
    ],
  },

  // ---------------- Laced ----------------
  {
    slug: "laced",
    header: {
      kind: "project",
      title: "Laced",
      shortDescription:
        "A cross-platform mobile application built using Flutter. The ultimate tool for sneakerheads & resellers ",
      work: [
        "UI/UX",
        "Front End Developer",
        "Flutter, Dart and SQLite",
        "Backend Developer",
        "Nodejs and Express",
      ],
      responsibilities:
        "Created first UI/UX draft on Figma, consultation on new UI created by designer, Flutter front-end setup, SQLite set up and working on existing server and backend code.",
      links: [
        {
          label: "link for Android", href: "https://play.google.com/store/apps/details?id=com.aiy.laced",
          img: "/img/google.png"
        },
        { label: "link for iOS", href: "https://apps.apple.com/us/app/laced-snkr-drops/id6741904336", img: "/img/apple.png" },
      ],
    },

    introAssets: {
      type: "image",
      src: "/img/LACED/lacedIntro.png",
      alt: "Laced hero",
    },

    blocks: [
      {
        id: "mockups",
        type: "hero-mockup",
        bgText: "LACE(D) YOUR NIKE SHOES!",
        assets: [
          {
            type: "image",
            src: "/img/LACED/laced-phone1.png",
            side: "left",
            x: 20,
            y: -110,
          },
          {
            type: "image",
            src: "/img/LACED/laced-phone2.png",
            side: "right",
            x: 0,
            y: 0,
          },
        ],
      },

      {
        id: "note-intro",
        type: "text",
        variant: "body",
        text:
          "AIY expanded its desktop tooling into a mobile application to support sneakerheads and resellers who needed reliable access during live drops—without relying on a powerful laptop. Laced was designed as a lightweight, pocket-ready companion that brought core functionality to users wherever they were.",
      },

      {
        id: "gallery",
        type: "media",
        variant: "single",
        assets: [{ type: "image", src: "/img/LACED/laced2.png", alt: "Laced UI" }],
      },

      {
        id: "note-2",
        type: "text",
        variant: "body",
        text:
          "I owned the Flutter app end-to-end, including UI implementation, local persistence with SQLite, and integration with existing backend services. I designed the local data layer to be predictable and resilient—handling schema changes, safe upgrades, and data consistency—while keeping the app responsive under real-time usage during drops.",
      },

      {
        id: "note-final",
        type: "text",
        variant: "body",
        text:
          "Laced launched successfully on both Android and iOS and has since reached over 1.8k Android users and 400+ iOS users. I continue to maintain the app with a focus on stability, performance, and long-term scalability as the product evolves.",
      },
    ],

    actions: {
      primary: { label: "Get it On Google Play Store", href: "", img: "/img/google.png", external: true },
      secondary: { label: "Get it On App Store", href: "", img: "/img/apple.png", external: true },
    },
  },

  // ---------------- VirtuEscape ----------------
  {
    slug: "virtuescape",
    header: {
      kind: "project",
      title: "VirtuEscape",
      shortDescription:
        "A simple HTML/CSS and JS website for at home traveling during the pandemic when nobody could go anywhere. ",
      work: ["UI/UX", "Front End Developer", "HTML, CSS and JS"],
      responsibilities:
        "Co-created design with classmate, split the work evenly and developed it with HTML, CSS and JavaScript for a course project",
      links: [
        {
          label: "VirtuEscape",
          href: "https://virtue-escape.netlify.app/",
        },
      ],
    },

    introAssets: {
      type: "image",
      src: "/img/VE/veIntro.png",
      alt: "VirtuEscape hero",
    },

    blocks: [
      {
        id: "mockups",
        type: "hero-mockup",
        bgText: "NEVER BEEN\n ON A PLANE?",
        assets: [
          {
            type: "image",
            src: "/img/VE/ve-laptop-1.png",
            side: "left",
            x: 100,
            y: -185,
          },
          {
            type: "image",
            src: "/img/VE/ve-laptop-2.png",
            side: "right",
            x: 0,
            y: 0,
          },

        ],
      },

      {
        id: "gallery",
        type: "media",
        variant: "double",
        assets: [
          { type: "image", src: "/img/VE/ve2.png", alt: "VirtuEscape shot 1" },
          { type: "image", src: "/img/VE/ve3.png", alt: "VirtuEscape shot 2" },
        ],
      },

      {
        id: "note-intro",
        type: "text",
        variant: "body",
        text:
          "VirtuEscape was my first full blown HTML, CSS and Javascript website, the first project I was tasked to do at my University. It was built when the pandemic was at it’s highest and our university schedule was  more on the online than the face to face. The goal here was for people to travel from the comfort of their bed,  to see the world on their phone. It was a very simple idea, a good start to many many projects.",
      },

      {
        id: "note-final",
        type: "text",
        variant: "body",
        text:
          "This website was also my first to upload online using netlify. Your free ticket around the world. From the comfort of your bed!",
      },
    ],

    actions: {
      primary: {
        label: "VirtuEscape",
        href: "https://virtue-escape.netlify.app/",
        img: "",
        external: true,
      },
    },
  },

  // ---------------- ShareCare ----------------
  {
    slug: "sharecare",
    header: {
      kind: "project",
      title: "ShareCare",
      shortDescription:
        "A remake of a website co-worked on for the GDSC solution challenge to combat food waste  ",
      work: ["UI/UX", "Front End Developer", "Angular and Bootstrap"],
      responsibilities:
        "re-edited design and remade it using Angular and Bootstrap as a challenge.",
      links: [
        { label: "ShareCare", href: "https://sharecare.netlify.app/" },
      ],
    },

    introAssets: {
      type: "image",
      src: "/img/SC/sharecareIntro.png",
      alt: "ShareCare hero",
    },

    blocks: [
      {
        id: "mockups",
        type: "hero-mockup",
        bgText: "IT’S ALL ABOUT THE PEOPLE",
        assets: [
          {
            type: "image",
            src: "/img/SC/sharecare-laptop-1.png",
            side: "left",
            x: 80,
            y: 0,
          },
          {
            type: "image",
            src: "/img/SC/sharecare-laptop-2.png",
            side: "right",
            x: 0,
            y: -90,
          },
        ],
      },

      {
        id: "note-1",
        type: "text",
        variant: "body",
        text:
          "ShareCare began as a collaborative web project built in 2022 using React and Tailwind CSS for the Google Solution Challenge. The goal was to design a practical solution to reduce food waste by connecting donors with individuals and organizations in need, while keeping accessibility and ease of use at the core of the experience.",
      },

      {
        id: "gallery-1",
        type: "media",
        variant: "single",
        assets: [{ type: "image", src: "/img/SC/sharecareDesign.png", alt: "ShareCare shot 1" }],
      },

      {
        id: "note-2",
        type: "text",
        variant: "body",
        text:
          "After the initial release, I revisited ShareCare to redesign key flows in Figma and fully rewrite the application using Angular and Bootstrap. This revamp allowed me to reinforce my proficiency with Bootstrap’s layout system while improving structure, consistency, and scalability across the UI. The rewrite focused on cleaner component separation, clearer user journeys, and improved responsiveness across devices.",
      },
      // TODO: CHANGE TO VIDEO
      {
        id: "gallery-2",
        type: "media",
        variant: "single",
        assets: [{ type: "image", src: "/img/SC/sharecareIntro.png", alt: "ShareCare video" }],
      },

      {
        id: "note-final",
        type: "text",
        variant: "body",
        text:
          "ShareCare was developed as a solution-oriented platform addressing food redistribution and sustainability. The project ranked Top 30 in the MENA region during the Google Solution Challenge, validating both the concept and its execution as a real-world social impact tool.",
      },
    ],

    actions: {
      primary: {
        label: "ShareCare",
        href: "https://sharecare.netlify.app/",
        img: "",
        external: true,
      },
    },
  },

 // ---------------- Zentry ----------------
   {
    slug: "zentry",
    header: {
      kind: "project",
      title: "Zentry",
      shortDescription:
        "A GSAP-driven React remake inspired by the award-winning Zentry experience by RESN, built to deepen my understanding of animation timing, sequencing, and motion-driven layouts.",
      work: ["Front End Developer", "React and TailwindCSS", "Animation Engineering with GSAP"],
      responsibilities:
        "Rebuilt the experience from scratch using React and GSAP, focusing on scroll-based animations, layered transitions, and motion choreography rather than visual duplication.",
      links: [
        { label: "Inspired by RESN's Zentry", href: "https://www.awwwards.com/sites/zentry" },
        { label: "My work", href: "https://zentry-react-clone.netlify.app/" },
      ],
    },

    introAssets: {
      type: "image",
      src: "/img/ZENTRY/zentryIntro.png",
      alt: "Zentry hero",
    },

    blocks: [
      {
        id: "mockups",
        type: "hero-mockup",
        bgText: "REDEFINE GAMING",
        assets: [
          {
            type: "image",
            src: "/img/ZENTRY/zentry-laptop-1.png",
            side: "left",
            x: -50,
            y: -60,
          },
          {
            type: "image",
            src: "/img/ZENTRY/zentry-phone-2.png",
            side: "right",
            x: 0,
            y: -90,
          },
        ],
      },

      {
        id: "note-1",
        type: "text",
        variant: "body",
        text:
          "Zentry was a personal exploration into animation-heavy interfaces using GSAP and React. The goal was not to replicate visuals pixel-for-pixel, but to understand how motion, timing, and spatial transitions shape the overall experience of a site.",
      },

      {
        id: "gallery-1",
        type: "media",
        variant: "single",
        assets: [{ type: "image", src: "/img/ZENTRY/zentry2.png", alt: "Zentry shot 1" }],
      },

      {
        id: "note-2",
        type: "text",
        variant: "body",
        text:
          "This section focused on large-scale layout transitions. I experimented with scroll-driven animations, easing curves, and staggered element reveals to create a sense of scale and progression without overwhelming the user.",
      },
      // TODO: MAKE IT A GIF
      {
        id: "gallery-2",
        type: "media",
        variant: "single",
        assets: [{ type: "image", src: "/img/ZENTRY/zentry3.png", alt: "Zentry shot 3" }],
      },

      {
        id: "note-final",
        type: "text",
        variant: "body",
        text:
          "Through this project, I strengthened my understanding of GSAP timelines, transform coordination, and animation performance in React. Zentry served as a focused environment to practice building expressive motion systems while keeping the codebase structured and maintainable.",
      },
    ],

    actions: {
      primary: {
        label: "My Zentry clone",
        href: "https://zentry-react-clone.netlify.app/",
        img: "",
        external: true,
      },
    },
  },  
];
