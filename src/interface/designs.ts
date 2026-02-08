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
                    img:  "/img/google-logo.png"
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
                        x: -50,
                        y: 80
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
