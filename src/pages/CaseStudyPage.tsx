import { CASE_STUDIES } from "../interface/projects";
import TopBar from "../components/TopBar";
import { Navigate, useParams } from "react-router-dom";
import { useLayoutEffect, useMemo, useRef } from "react";
import OverlayAnimation from "../components/OverlayAnimation";
import { gsap } from "gsap";
import type { HeroTitleBandRefs } from "../components/CaseStudy/Title";
import HeroTitleBand from "../components/CaseStudy/Title";
import CaseStudyGrid from "../components/CaseStudy/Grid";
import HeroMockupBlock from "../components/CaseStudy/MockBlock";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const wipeRef = useRef<HTMLDivElement | null>(null);
  const caseStudyRef = useRef<HTMLDivElement | null>(null);

  const heroRef = useRef<HeroTitleBandRefs | null>(null);

  const caseStudy = useMemo(
    () => CASE_STUDIES.find((c) => c.slug === slug),
    [slug],
  );

  const colList = [
    {
      label: "WORK",
      lines: (caseStudy?.header.work ?? []).map((w) => (
        <span key={w}>{w}</span>
      )),
    },
    {
      label: "RESPONSIBILITIES",
      lines: [caseStudy?.header.responsibilities ?? ""],
    },
    {
      label: "URL",
      lines: (caseStudy?.header.links ?? []).map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 break-words whitespace-normal"
        >
          {l.href}
        </a>
      )),
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const buildTimeline = (opts: {
        bandFromX: number;
        titleFromY: number;
      }) => {
        const tl = gsap.timeline();

        // wipe
        if (wipeRef.current) {
          tl.fromTo(
            wipeRef.current,
            { height: "100%" },
            { height: "0%", duration: 0.9, ease: "power4.inOut" },
          );
        }

        const band = heroRef.current?.band;
        const title = heroRef.current?.title;

        if (band) gsap.set(band, { xPercent: -110 }); // fully off left
        if (title) gsap.set(title, { y: 80, opacity: 0 });

        // band: quick left -> right swipe (no warping)
        if (band) {
          tl.to(
            band,
            {
              xPercent: 0,
              duration: 0.55,
              ease: "power3.out",
            },
            "+=0.05",
          );
        }

        // title: bottom -> up
        if (title) {
          tl.fromTo(
            title,
            { y: opts.titleFromY, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power4.out" },
            "-=0.2",
          );
        }

        return () => tl.kill();
      };

      mm.add("(max-width: 767px)", () =>
        buildTimeline({ bandFromX: -120, titleFromY: 80 }),
      );

      mm.add("(min-width: 768px)", () =>
        buildTimeline({ bandFromX: -220, titleFromY: 140 }),
      );

      return () => mm.revert();
    }, caseStudyRef);

    return () => ctx.revert();
  }, []);

  if (!caseStudy) return <Navigate to="/projects" replace />;

  return (
    <main
      ref={caseStudyRef}
      className="main-setup bg-forest-50! overflow-y-auto"
    >
      <OverlayAnimation wipeRef={wipeRef} className={`top-0 bg-ember-75`} />

      <div className="shrink-0 px-16 pt-14">
        <TopBar className="mb-8" homeHref="/" />
      </div>

      <section className="px-6  pr-6 sm:px-10 md:pr-12 lg:pr-16 pb-16">
        <HeroTitleBand
          ref={heroRef}
          title={caseStudy.header.title}
          className="md:-ml-10"
        />

        {/* description */}
        <div className="py-24">
          <p className=" text-[clamp(30px,5.5vw,50px)] leading-tight text-center  max-w-[900px] mx-auto">
            {caseStudy.header.shortDescription}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="w-full">
          <div className="mx-auto w-full max-w-6xl ">
            <CaseStudyGrid cols={colList} />
          </div>
        </div>

        {/* Intro Image */}
        <div className="case-study-img">
          <img
            src={caseStudy?.introAssets!.src}
            alt={caseStudy?.introAssets!.alt}
            className="w-full h-auto "
          />
        </div>

        {caseStudy.blocks.map((b) => {
          if (b.type === "hero-mockup") {
            return (
              <HeroMockupBlock key={b.id} bgText={b.bgText} assets={b.assets} />
            );
          }
          return null;
        })}

        {caseStudy.blocks.map((b) => {
          if (b.id === "gallery-1") {
            return (
              <div className="case-study-img">
                <img src={b.asset.src} alt="" className="w-full h-auto" />
              </div>
            );
          }
          return null;
        })}

        {caseStudy.blocks.map((b) => {
          if (b.id === "note-2") {
            return (
              <div className="py-24">
                <p className=" text-xl text-center max-w-5xl mx-auto">
                  {b.text}
                </p>
              </div>
            );
          }
          return null;
        })}

        {caseStudy.blocks.map((b) => {
          if (b.id === "final-note") {
            return (
              <div className="py-24">
                <p className="  text-[clamp(30px,5.5vw,50px)] leading-tight text-center  max-w-5xl mx-auto">
                  {b.text}
                </p>
              </div>
            );
          }
          return null;
        })}
      </section>
    </main>
  );
};

export default CaseStudyPage;
