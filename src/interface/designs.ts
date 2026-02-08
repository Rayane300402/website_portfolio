import type { CaseStudy } from "./type";

export const CASE_STUDIES_DESIGN: CaseStudy[] = [
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

    // ---------------- SALEMTEK ----------------
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
                        x: -130,
                        y: 130,
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

    // ---------------- SERIESCRIBE ----------------
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
                        y: 100,
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

];
