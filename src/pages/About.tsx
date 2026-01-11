import { useLayoutEffect, useRef } from "react";
import TopBar from "../components/TopBar";
import OverlayAnimation from "../components/OverlayAnimation";
import { gsap } from "gsap/gsap-core";
import AboutButtonts from "../components/AboutButtonts";

const About = () => {
  const wipeRef = useRef<HTMLDivElement | null>(null);
  const aboutTextRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const aboutImgLgRef = useRef<HTMLImageElement | null>(null);
  const aboutImgBgRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (wipeRef.current) {
        tl.fromTo(
          wipeRef.current,
          { height: "100%" },
          {
            height: "0%",
            duration: 0.9,
            ease: "power4.inOut",
          }
        );
      }

      if (aboutTextRef.current) {
        tl.from(
          aboutTextRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.25"
        );
      }

      if (aboutImgLgRef.current) {
        tl.fromTo(
          aboutImgLgRef.current,
          { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.2, ease: "power3.out" },
          "-=0.35"
        );
      }

      // optional: also animate the behind-text image on <lg
      if (aboutImgBgRef.current) {
        tl.fromTo(
          aboutImgBgRef.current,
          { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.2, ease: "power3.out" },
          "-=0.55"
        );
      }
    }, aboutRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={aboutRef} className="main-setup bg-forest-50! overflow-y-auto">
      <OverlayAnimation wipeRef={wipeRef} className={`top-0 bg-ember-75`} />

      <div className="shrink-0 px-16 pt-14">
        <TopBar className="mb-8" homeHref="/" />
      </div>

      <section className="relative px-6 sm:px-12 lg:px-16 pb-12">
        <div
          className="md:hidden
          pointer-events-none
          absolute
          left-0 top-24
          w-[320px] h-[420px]
          rounded-[10px]
          bg-ember-75/90
          opacity-80
          -z-10"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_350px] gap-10 items-start">
          <div
            className="
            lg:hidden
            pointer-events-none
            absolute
            right-0
            top-24
            opacity-80
            w-[clamp(220px,35vw,520px)]"
          >
            <img
            ref={aboutImgBgRef}
              src="/img/profile2.png"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text section */}
          <div className="min-w-0 z-10">
            <h1
              ref={aboutTextRef}
              className=" font-glory-migella text-[clamp(100px,10vw,230px)] leading-[0.85] mt-12"
            >
              About
            </h1>

            <p className="font-segoe-ui font-extralight text-[clamp(22px,2.5vw,34px)] leading-tight mt-4">
              I'm Rayane. A developer, maker and problem solver
            </p>

            <div className="mt-10 space-y-6 font-segoe-ui font-light text-[22px] leading-relaxed">
              <p>
                During my 2nd year in high school, my computer's class had a
                session about HTML and a finals project. I just knew that this
                is something I want to learn more in depth, I scrambled to
                YouTube for inspiration and to figure out how to make it less
                plain, that's how I learned about CSS.
              </p>
              <p>
                University brought in numerous learning possibilities then just
                simple static HTML. Of course, it was not enough for a world
                that keeps going round and round, so I started to learn on my
                own in parallel to what the university taught.
              </p>
              <p>
                When our senior project popped up, I learned Flutter on my own
                before the semester began, and took a quick tutorial in MongoDB.
                That project was the best thing I've worked on UI/UX wise on
                Figma, whom I knew nothing of and just copied what I learned
                from my classmate in my 2nd year. Front-end Wise, it was a
                challenge but seeing the same UI as an actual desktop app, with
                the features and how I imagined them to work and look was
                prefect. The minimal DB knowledge I had pushed through in making
                the work even better, and I was so happy.
              </p>

              <p>
                My first job was a blank slate, it felt as if everything I
                learned in University was not enough, and so I tackled it head
                on, with a few panicky moments, I learned Angular, had a deeper
                understanding of Node & Express, got the opportunity to properly
                study SQL DBs with SQLite as well as how to turn Angular
                projects into desktop application via electron.
              </p>

              <p>
                Later on they declared the idea of making a mobile app, and It
                was perfect because I practiced before in making small mobile
                apps via flutter. It's not something I have to study from
                scratch, and so Laced was born, and it's my first project that I
                worked on without a prior existence to it, I brought a simple
                idea to life, it's not even a 2.0 of an existing product.
              </p>
            </div>

            <div className=" font-segoe-ui font-extralight mt-14 text-center text-[clamp(22px,2.5vw,34px)] leading-snug">
              "The success lies in how you respond to anxiety when it pops up,
              not whether or not it pops up."
            </div>

            <div className="mt-14 space-y-6 font-segoe-ui font-light text-[22px] leading-relaxed">
              <p>
                I abide by this quote every time I am hit with an obstacle, I
                get anxious and worry if i would ever figure it out. Usually
                after 2-5 minutes I bring out a sheet of paper and just write
                everything I have to do, split it if i can, make it look easier,
                prove that it's easier than it looks and/or sounds. I write and
                scribble and just cause a mess on this poor sheet of paper until
                i have a schedule in my mind, then i write it in my notebook in
                a clear way. I write it in my notes on my phone to not forget. I
                write in my slack chat, and I get to work.
              </p>
            </div>

            <div className=" font-segoe-ui font-extralight mt-14 text-[clamp(22px,2.5vw,34px)] leading-snug">
              Experience
            </div>

            <div className="mt-8 space-y-6 font-segoe-ui font-light text-[22px] leading-relaxed">
              <p>
                • I graduated with a BSc. in Computer Science, with honors.{" "}
                <br />
                • For basics such as HTML, CSS and JavaScript I have almost 4
                years of experience. <br />• As of 2026, I have 2,5 years worth
                of experience in Angular. <br />
                • 4 years for Flutter. <br />• Currently I have been working at
                AIY for 2 years and a half now as Software Developer.
              </p>
            </div>

            <div className=" font-segoe-ui font-extralight mt-14 text-[clamp(22px,2.5vw,34px)] leading-snug">
              Skills
            </div>

            <div className="mt-8 space-y-6 font-segoe-ui font-light text-[22px] leading-relaxed">
              <p>
                UI/Ux Design on Figma / HTML and CSS / Angular / Electron /
                Testing with Playwright / Flutter and Dart / SQLite / JavaScript
                and TypedScript / Python / Firebase / Linux
              </p>
            </div>
          </div>

          {/* Image and Button section */}
          <aside className=" ">
            <div className="lg:sticky lg:top-24 flex flex-col items-end gap-8">
              <img
              ref={aboutImgLgRef}
                src="/img/profile2.png"
                alt=""
                className="w-[clamp(320px,30vw,520px)] h-auto object-contain hidden lg:block"
              />

              {/* Buttons only on lg+ here */}
              <div className="w-full flex flex-col gap-4">
                <AboutButtonts />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default About;
