import type { CaseStudy } from "./type";

export const CASE_STUDIES: CaseStudy[] =
  [
    {
      slug: "tsb-2",
      header: {
        kind: "project",
        title: "TSB 2.0",
        shortDescription: "A shoe botting, now all in one botting app I co-built in Angular for AIY.",
        work: ["UI/UX", "Front End Developer", "Angular and SQLite"],
        responsibilities:
          "Minor fixes in Figma design, product development using Angular & Electron, database via SQLite.",
        links: [
          { label: "theshitbot.com", href: "https://www.theshitbot.com/" },
        ],
      },
      introAssets: [
        { type: "image", src: "/img/tsb/hero-1.png", alt: "TSB hero" },
      ],
      blocks: [
        {
          id: "mockups-1",
          type: "hero-mockup",
          bgText: "THE REAL SHIT",
          assets: [
            { type: "image", src: "/img/tsb/laptop-1.png", className: "absolute left-0 top-0" },
            { type: "image", src: "/img/tsb/laptop-2.png", className: "absolute right-0 bottom-0" },
          ],
        },
        {
          id: "note-1",
          type: "text",
          variant: "body",
          text: ["After a year of hard work and testing, TSB 2.0 was published..."],
        },
        {
          id: "gallery-1",
          type: "media",
          variant: "double",
          assets: [
            { type: "image", src: "/img/tsb/screen-1.png" },
            { type: "image", src: "/img/tsb/screen-2.png" },
          ],
        },
      ],
      actions: {
        primary: { label: "Live Site", href: "https://www.theshitbot.com/", external: true },
        secondary: { label: "Back", href: "/projects" },
      },
    }
  ];
