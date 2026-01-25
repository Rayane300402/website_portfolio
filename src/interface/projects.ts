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
      introAssets: { 
        type: "image",
         src: "/img/TSB/tsb2.png",
          alt: "TSB hero" },
      
      blocks: [
        {
          id: "mockups-1",
          type: "hero-mockup",
          bgText: "THE REAL SHIT",
          assets: [
            { type: "image", src: "/img/TSB/tsb-laptop-1.png", side:"left", x:100, w:540 , y:-185},
            { type: "image", src: "/img/TSB/tsb-laptop-2.png", side:"right", x:-140, w:540, y:150},
          ],
        },
        {
          id: "note-2",
          type: "text",
          variant: "body",
          text: "This project was a 2.0, a whole revamp for the original TSB. A new UI and new features to add, I worked on building the app using Angular, which I did not have prior experience in. The first 2 weeks of my internship involved me learning Angular properly as well as getting a better understanding of Nodejs and electron before taking over the project. When the UI was completed I was tasked to build the local database which was a very challenging but fun experience trying to figure out how to build the database using SQLite and make sure it was smooth sailing and proper.",
        },
        {
          id: "gallery-1",
          type: "media",
          variant: "double",
          asset: { type: "image", src: "/img/TSB/tsb.png" },

        },

         {
          id: "final-note",
          type: "text",
          variant: "body",
          text: "After a year of hard work and so much testing, TSB 2,0 was finally published to the public to used by user.",
        },
        
      ],
   
    }
  ];
