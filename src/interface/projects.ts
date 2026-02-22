import type { CaseStudy } from "./type";

export const CASE_STUDIES: CaseStudy[] = [
  // ---------------- CODING SECTION ----------------

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

  // ---------------- DESIGN SECTION ----------------

  // ---------------- OrderlyFlow ----------------
  {
    slug: "orderlyflow",
    header: {
      kind: "design",
      title: "OrderlyFlow",
      shortDescription:
        "A Flutter desktop HR management system designed to centralize internal communication, scheduling, and task coordination.",
      work: ["UI/UX", "Product Design", "Flutter and MongoDB"],
      responsibilities:
        "Senior capstone project developed with a team of four. I led the product design, created the primary UI system in Figma, implemented roughly 75% of the Flutter interface, and assisted with MongoDB schema and integration.",
      links: [{ label: "GitHub Code", href: "https://github.com/Rayane300402/OrderlyFlow" },

      ],

    },

    introAssets: {
      type: "image",
      src: "/img/OF/ofIntro.png",
      alt: "OF hero",
    },

    blocks: [
      {
        id: "mockups",
        type: "hero-mockup",
        bgText: "ORGANIZE YOUR WORKFLOW",
        assets: [
          {
            type: "image",
            src: "/img/OF/of-laptop-1.png",
            side: "left",
            x: 50,
            y: -150,
          },
          {
            type: "image",
            src: "/img/OF/of-laptop-2.png",
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
          "OrderlyFlow was developed as my senior capstone project: a desktop HR management platform designed to replace scattered communication channels with a centralized workspace. The system enables teams to manage tasks, announcements, calendars, and collaboration in one environment."
      },
      {
        id: "gallery-main",
        type: "media",
        assets: [
          { type: "image", src: "/img/OF/of-1.png", alt: "Announcements" },
          { type: "image", src: "/img/OF/of-2.png", alt: "Calendar" },
          { type: "image", src: "/img/OF/of-3.png", alt: "Task management" },
          { type: "image", src: "/img/OF/of-4.png", alt: "Dashboard" },
          { type: "image", src: "/img/OF/of-5.png", alt: "Login" }
        ]
      },

      {
        id: "note-2",
        type: "text",
        variant: "body",
        text:
          "I owned the overall product structure and visual system, designing the interface and interaction patterns before implementing most of the UI directly in Flutter. Beyond front-end development, I contributed to the MongoDB data model and assisted with backend integration to ensure the platform remained stable as features expanded."
      },

      {
        id: "note-final",
        type: "text",
        variant: "body",
        text:
          "The platform was adopted internally by its intended users, reducing manual coordination and saving roughly 30 hours per month of repetitive administrative work."
      }
    ],
    actions: {
      primary: {
        label: "View Github Repository",
        href: "https://github.com/Rayane300402/OrderlyFlow",
        external: true,
      }
    }
  },

  // ---------------- AVOO ----------------
  {
    slug: "avoo",
    header: {
      kind: "design",
      title: "AVOO",
      shortDescription:
        "A financial-wellness mobile app concept focused on accessible budgeting and habit-building, created as the capstone project for the Google UX Design Professional Certificate.",

      work: [
        "UX Research",
        "Product Design",
        "Figma",
        "Interaction Design"
      ],

      responsibilities:
        "End-to-end UX ownership: research, personas, journey mapping, wireframing, accessibility validation, and high-fidelity prototyping.",

      links: [
        {
          label: "View Figma Prototype",
          href: "https://www.figma.com/design/29NXlTWKs1hQkuIfvnFhia/UX-Course?node-id=4-2&t=itVUmwmUpuW1iaF2-1",
          img: "/img/figma.png"
        },
        {
          label: "View Research Slides",
          href: "https://docs.google.com/presentation/d/1I9XTZ_appR-S_DBG9rYSq6EmktB1levFfhPnuSApj94/edit?usp=sharing",
          img: "/img/google-logo.png"
        }
      ],
    },

    introAssets: {
      type: "image",
      src: "/img/AVOO/avoo-1.png",
      alt: "AVOO overview"
    },

    blocks: [
      {
        id: "mockups",
        type: "hero-mockup",
        bgText: "BUILD BETTER MONEY HABITS",
        assets: [
          {
            type: "image",
            src: "/img/AVOO/avoo-phone-1.png",
            side: "left",
            x: 30,
            y: -90
          },
          {
            type: "image",
            src: "/img/AVOO/avoo-laptop-2.png",
            side: "right",
            x: 0,
            y: 0
          }
        ]
      },

      {
        id: "note-intro",
        type: "text",
        variant: "body",
        text:
          "AVOO was developed as my capstone project for the Google UX Design Professional Certificate. The goal was to design a financial-wellness experience that makes budgeting less intimidating and more habit-driven for young adults who struggle to consistently track spending."
      },

      {
        id: "gallery-problem",
        type: "media",
        variant: "single",
        assets: [
          { type: "image", src: "/img/AVOO/GoogleProblem.png", alt: "Problem and goal" }
        ]
      },

      {
        id: "note-2",
        type: "text",
        variant: "body",
        text:
          "Research interviews and secondary analysis revealed that many users abandon budgeting tools within weeks due to complexity, friction, or lack of motivation. The design direction focused on reducing cognitive load, guiding users through small achievable steps, and reinforcing progress through clear feedback rather than dense analytics."
      },

      {
        id: "gallery-persona",
        type: "media",
        variant: "single",
        assets: [
          { type: "image", src: "/img/AVOO/persona.png", alt: "Primary persona" }
        ]
      },

      {
        id: "gallery-sketches",
        type: "media",
        assets: [
          { type: "image", src: "/img/AVOO/AVOO-3.jpeg", alt: "Sketch 1" },
          { type: "image", src: "/img/AVOO/AVOO-4.jpeg", alt: "Sketch 2" },
          { type: "image", src: "/img/AVOO/AVOO-5.jpeg", alt: "Sketch 3" },
          { type: "image", src: "/img/AVOO/AVOO-6.jpeg", alt: "Sketch 4" }
        ]
      },

      {
        id: "note-3",
        type: "text",
        variant: "body",
        text:
          "Early paper wireframes were used to rapidly explore navigation, reminders, and dashboard structure before committing to detailed visuals. During this phase I also evaluated accessibility considerations, including color contrast and color-blind friendly palettes, ensuring information hierarchy was readable without relying solely on color."
      },

      {
        id: "gallery-lowfi",
        type: "media",
        variant: "double",
        assets: [
          { type: "image", src: "/img/AVOO/lowfiMobile.png", alt: "Low fidelity mobile" },
          { type: "image", src: "/img/AVOO/lowfiWeb.png", alt: "Low fidelity web" }
        ]
      },

      {
        id: "gallery-proto",
        type: "media",
        variant: "double",
        assets: [
          { type: "image", src: "/img/AVOO/protoMobile.png", alt: "Prototype mobile" },
          { type: "image", src: "/img/AVOO/protoWeb.png", alt: "Prototype web" }
        ]
      },

      {
        id: "note-final",
        type: "text",
        variant: "body",
        text:
          "This project established my foundation in structured UX thinking: translating research into design decisions, validating usability early, and building prototypes that communicate a clear product narrative from onboarding through long-term habit formation."
      }
    ],

    actions: {
      primary: {
        label: "View Figma Prototype",
        href: "https://www.figma.com/design/29NXlTWKs1hQkuIfvnFhia/UX-Course?node-id=4-2&t=itVUmwmUpuW1iaF2-1",
        external: true,
        img: "/img/figma.png"
      },
      secondary: {
        label: "View Research Deck",
        href: "https://docs.google.com/presentation/d/1I9XTZ_appR-S_DBG9rYSq6EmktB1levFfhPnuSApj94/edit?usp=sharing",
        external: true,
        img: "/img/google-logo.png"
      }
    }
  },

  // ---------------- SERIESCRIBE ----------------
  {
    slug: "seriesscribe",
    header: {
      kind: "design",
      title: "SeriesScribe",
      shortDescription:
        "A UI-first mobile app concept inspired by StoryGraph—reimagined for TV series, anime, and dramas. Built as an early Figma practice project to learn hierarchy, consistency, and designing at scale.",
      work: [
        "UI Design",
        "Design Systems",
        "Interaction Design",
        "Figma",
        "Mobile Product Design",
      ],
      responsibilities:
        "Designed a large multi-screen mobile product in Figma, building reusable components and end-to-end flows (onboarding, discovery, tracking, goals, stats, reviews, challenges, and settings).",
      links: [
        {
          label: "View Figma File",
          href: "https://www.figma.com/design/GRnAon4yUXMNI1c2je3XKT/SeriesScribe?node-id=0-1&t=Nf9JhdGClwkBrKhg-1",
          img: "/img/figma.png",
        },
      ],
    },

    introAssets: {
      type: "image",
      src: "/img/SS/seriesscribeIntro.png",
      alt: "SeriesScribe overview",
    },

    blocks: [
      {
        id: "mockups",
        type: "hero-mockup",
        bgText: "Deserve better shows.",
        assets: [
          {
            type: "image",
            src: "/img/SS/ss_phone_1.png",
            side: "left",
            x: 30,
            y: -90,
          },
          {
            type: "image",
            src: "/img/SS/ss_phone_2.png",
            side: "right",
            x: -20,
            y: -100,
          },
        ],
      },

      {
        id: "note-1",
        type: "text",
        variant: "body",
        text:
          "SeriesScribe began as a focused UI learning exercise before I formally studied UX research. I wanted to rebuild a complex, real multi-screen product experience in Figma to improve my fundamentals—spacing, hierarchy, type scale, and consistency. I took heavy inspiration from StoryGraph, but adapted the concept from books to TV series, anime, and dramas.",
      },

      {
        id: "gallery-1",
        type: "media",
        variant: "single",
        assets: [{ type: "image", src: "/img/SS/ss2.png", alt: "SeriesScribe screens set 1" }],
      },

      {
        id: "note-2",
        type: "text",
        variant: "body",
        text:
          "The main goal wasn’t to invent a brand-new product from scratch—it was to understand how mature interfaces are assembled. I broke down patterns screen-by-screen (navigation, card structure, filters, empty states, long-scroll rhythm) and then rebuilt them as a coherent design system that could survive dozens of screens without visual drift.",
      },

      {
        id: "gallery-2",
        type: "media",
        variant: "double",
        assets: [
          { type: "image", src: "/img/SS/ss3.png", alt: "SeriesScribe screens set 2" },
          { type: "image", src: "/img/SS/ss4.png", alt: "SeriesScribe screens set 3" },
        ],
      },

      {
        id: "note-final",
        type: "text",
        variant: "body",
        text:
          "This project is where my visual design leveled up the most—especially color and typography. I moved away from harsh, noisy palettes and learned how to use restrained accents, consistent spacing, and clear information hierarchy. SeriesScribe marks the point where I went from “making screens” to designing a product system that feels intentional and scalable.",
      },
    ],

    actions: {
      primary: {
        label: "View Figma File",
        href: "https://www.figma.com/design/GRnAon4yUXMNI1c2je3XKT/SeriesScribe?node-id=0-1&t=Nf9JhdGClwkBrKhg-1",
        external: true,
        img: "/img/figma.png",
      },
    },
  },

  // ---------------- BOTH SECTION ----------------
  // ---------------- SALEMTEK ----------------
  {
    slug: "salemtek",
    header: {
      kind: "both",
      title: "Salemtek",
      shortDescription:
        "A mobile medication tracking concept designed to help users build consistent pill-taking habits through reminders, analytics, and gentle behavioral reinforcement.",
      work: [
        "UX Research",
        "UI/UX Design",
        "Mobile App Concept",
        "Figma Prototyping",
      ],
      responsibilities:
        "Led research, defined problem framing, created personas, designed full mobile UX flow, wireframed, built high-fidelity UI, and developed interactive prototype in Figma.",
      links: [
        {
          label: "View Figma Prototype",
          href: "https://www.figma.com/design/PYBCmi2Xfe7iF6kDD2VEDh/Salemtek----Niyyah?node-id=0-1&t=gXPX67rhABXSoJJ8-1",
          img: "/img/figma.png"
        },
        {
          label: "View Research Slides",
          href: "https://docs.google.com/presentation/d/12T75SAT2WO4FHve4xa6qgzzOA5HeVrL2ndJUJsPnJV8/edit?usp=sharing",
          img: "/img/google-logo.png"
        }
      ],
    },

    introAssets: {
      type: "image",
      src: "/img/SALEMTEK/salemtekIntro.png",
      alt: "Salemtek hero",
    },

    blocks: [
      {
        id: "mockups",
        type: "hero-mockup",
        bgText: "YOUR POCKET MED CABINET",
        assets: [
          {
            type: "image",
            src: "/img/SALEMTEK/salemtek-phone-1.png",
            side: "left",
            x: 0,
            y: -200,
          },
          {
            type: "image",
            src: "/img/SALEMTEK/salemtek-phone-2.png",
            side: "right",
            x: 20,
            y: 0,
          },
        ],
      },

      // ---------------- INTRO NOTE ----------------
      {
        id: "note-intro",
        type: "text",
        variant: "body",
        text:
          "Salemtek is a mobile-first medication reminder concept designed for people who struggle with consistency when taking daily or recurring medication. While the app is inclusive for all users, it was designed with young women in mind—focusing on clarity, emotional comfort, and habit reinforcement rather than clinical rigidity.",
      },

      // ---------------- PROBLEM & APPROACH ----------------
      {
        id: "gallery-problem",
        type: "media",
        variant: "single",
        assets: [
          {
            type: "image",
            src: "/img/SALEMTEK/salemtek-problem-goal.png",
            alt: "Salemtek problem and goal"
          }
        ]
      },

      {
        id: "note-problem",
        type: "text",
        variant: "body",
        text:
          "The core challenge addressed by Salemtek is behavioral inconsistency. Many users forget doses not because of complexity, but because reminders feel generic, cold, or easy to dismiss. Salemtek reframes medication tracking as a supportive system—allowing users to log medication type (pill, injection, cream), dosage frequency (daily, weekly, monthly, every X days), and visualize adherence through a clean, motivating analytics dashboard.",
      },

      // ---------------- PERSONA ----------------
      {
        id: "gallery-persona",
        type: "media",
        variant: "single",
        assets: [
          {
            type: "image",
            src: "/img/SALEMTEK/salemtek-persona.png",
            alt: "Salemtek primary persona"
          }
        ]
      },

      {
        id: "note-persona",
        type: "text",
        variant: "body",
        text:
          "The primary persona reflects users who want structure but don't want a complicated health dashboard. Core needs included: fast setup, reminders that feel gentle but persistent, and a progress view that motivates habit-building. Design decisions prioritized clarity and reassurance over “power user” density."
      },

      // ---------------- PHYSICAL SKETCHES ----------------
      {
        id: "gallery-sketches",
        type: "media",
        assets: [
          {
            type: "image",
            src: "/img/SALEMTEK/salemtek-sketch-1.jpeg",
            alt: "Sketch 1"
          },
          {
            type: "image",
            src: "/img/SALEMTEK/salemtek-sketch-2.jpeg",
            alt: "Sketch 2"
          },

        ]
      },

      {
        id: "note-sketches",
        type: "text",
        variant: "body",
        text:
          "Paper wireframes were used to rapidly explore onboarding, medication input flow, notification logic, and the analytics structure. This phase helped validate information hierarchy early—ensuring the experience stayed lightweight and understandable without sacrificing functionality."
      },

      // ---------------- WIREFRAMES ----------------
      {
        id: "gallery-wireframes",
        type: "media",
        variant: "single",
        assets: [
          {
            type: "image",
            src: "/img/SALEMTEK/salemtek2.png",
            alt: "Salemtek low fidelity wireframes",
          },
        ],
      },

      {
        id: "note-wireframes",
        type: "text",
        variant: "body",
        text:
          "Early wireframes explored onboarding simplicity, medication setup flow, and the structure of the analytics dashboard. The goal was minimizing cognitive load—keeping navigation shallow and actions obvious. Physical sketching allowed rapid experimentation before committing to visual direction.",
      },

      // ---------------- DESIGN SYSTEM / STICKER SHEET ----------------
      {
        id: "gallery-design-system",
        type: "media",
        variant: "single",
        assets: [
          {
            type: "image",
            src: "/img/SALEMTEK/stickerSheet.png",
            alt: "Salemtek design system and sticker sheet",
          },
        ],
      },

      {
        id: "note-design-system",
        type: "text",
        variant: "body",
        text:
          "Before moving into high-fidelity UI, I defined a lightweight design system including an accessible color palette, typographic scale, and reusable navigation components. Particular attention was given to contrast ratios and color-blind accessibility to ensure reminders and status indicators remained clear and readable.",
      },

      // ---------------- FINAL UI / PROTOTYPE ----------------
      {
        id: "gallery-prototype",
        type: "media",
        variant: "single",
        assets: [
          {
            type: "image",
            src: "/img/SALEMTEK/salemtek3.png",
            alt: "Salemtek final UI prototype",
          },
        ],
      },

      {
        id: "note-final",
        type: "text",
        variant: "body",
        text:
          "The final prototype integrates calendar-based tracking, push-style reminders, medication logging, and a consistency analytics board. By combining structured scheduling with visual progress feedback, Salemtek turns medication adherence into a measurable and motivating routine rather than a passive reminder.",
      },
    ],

    actions: {
      primary: {
        label: "View Figma Prototype",
        href: "YOUR_FIGMA_LINK_HERE",
        external: true,
        img:"/img/figma.png"
      },
      secondary: {
        label: "View Research Deck",
        href: "https://docs.google.com/presentation/d/12T75SAT2WO4FHve4xa6qgzzOA5HeVrL2ndJUJsPnJV8/edit?usp=sharing",
        external: true,
        img: "/img/google-logo.png"
      }
    },
  }
  ,
];
