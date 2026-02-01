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
            w: 540,
            y: -185,
          },
          {
            type: "image",
            src: "/img/TSB/tsb-laptop-2.png",
            side: "right",
            x: -140,
            w: 540,
            y: 150,
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
            x: -70,
            y: 135,
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
          label: "https://virtue-escape.netlify.app/",
          href: "https://virtue-escape.netlify.app/",
        },
      ],
    },

    introAssets: {
      type: "image",
      src: "/img/Laced/laced.png",
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
            src: "/img/TSB/tsb-laptop-1.png",
            side: "left",
            x: 100,
            w: 540,
            y: -185,
          },
          {
            type: "image",
            src: "/img/TSB/tsb-laptop-2.png",
            side: "right",
            x: -140,
            w: 540,
            y: 150,
          },
        ],
      },

      // gallery-1 + gallery-2 were back-to-back -> merged
      {
        id: "gallery",
        type: "media",
        variant: "grid",
        assets: [
          { type: "image", src: "/img/TSB/tsb.png", alt: "VirtuEscape shot 1" },
          { type: "image", src: "/img/TSB/tsb.png", alt: "VirtuEscape shot 2" },
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
    slug: "ShareCare",
    header: {
      kind: "project",
      title: "VirtuEscape",
      shortDescription:
        "A remake of a website co-worked on for the GDSC solution challenge to combat food waste  ",
      work: ["UI/UX", "Front End Developer", "Angular and Bootstrap"],
      responsibilities:
        "re-edited design and remade it using Angular and Bootstrap as a challenge.",
      links: [
        { label: "https://sharecare.netlify.app/", href: "https://sharecare.netlify.app/" },
      ],
    },

    introAssets: {
      type: "image",
      src: "/img/Laced/laced.png",
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
            src: "/img/TSB/tsb-laptop-1.png",
            side: "left",
            x: -100,
            w: 540,
            y: 185,
          },
          {
            type: "image",
            src: "/img/TSB/tsb-laptop-2.png",
            side: "right",
            x: 140,
            w: 540,
            y: -150,
          },
        ],
      },

      {
        id: "note-1",
        type: "text",
        variant: "body",
        text:
          "VirtuEscape was my first full blown HTML, CSS and Javascript website, the first project I was tasked to do at my University. It was built when the pandemic was at it’s highest and our university schedule was  more on the online than the face to face. The goal here was for people to travel from the comfort of their bed,  to see the world on their phone. It was a very simple idea, a good start to many many projects.",
      },

      {
        id: "gallery-1",
        type: "media",
        variant: "single",
        assets: [{ type: "image", src: "/img/TSB/tsb.png", alt: "ShareCare shot 1" }],
      },

      {
        id: "note-2",
        type: "text",
        variant: "body",
        text:
          "VirtuEscape was my first full blown HTML, CSS and Javascript website, the first project I was tasked to do at my University. It was built when the pandemic was at it’s highest and our university schedule was  more on the online than the face to face. The goal here was for people to travel from the comfort of their bed,  to see the world on their phone. It was a very simple idea, a good start to many many projects.",
      },

      {
        id: "gallery-2",
        type: "media",
        variant: "single",
        assets: [{ type: "video", src: "/img/TSB/tsb.png", alt: "ShareCare video" }],
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
        label: "ShareCare",
        href: "https://sharecare.netlify.app/",
        img: "",
        external: true,
      },
    },
  },
];
