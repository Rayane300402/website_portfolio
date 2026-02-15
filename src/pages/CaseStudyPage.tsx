/* eslint-disable @typescript-eslint/no-explicit-any */
import { CASE_STUDIES } from "../interface/projects";
import TopBar from "../components/TopBar";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useLayoutEffect, useMemo, useRef } from "react";
import OverlayAnimation from "../components/OverlayAnimation";
import { gsap } from "gsap";
import type { HeroTitleBandRefs } from "../components/CaseStudy/Title";
import HeroTitleBand from "../components/CaseStudy/Title";
import CaseStudyGrid from "../components/CaseStudy/Grid";
import HeroMockupBlock from "../components/CaseStudy/MockBlock";
import CaseStudyActions from "../components/CaseStudy/ActionButtons";

type Section = "design" | "project";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();

  const section: Section = pathname.startsWith("/design")
    ? "design"
    : "project";

  const wipeRef = useRef<HTMLDivElement | null>(null);
  const caseStudyRef = useRef<HTMLDivElement | null>(null);

  const heroRef = useRef<HeroTitleBandRefs | null>(null);

  const caseStudy = useMemo(() => {
    if (!slug) return undefined;
    return CASE_STUDIES.find((c) => c.slug === slug);
  }, [slug]);

  // ✅ not found: bounce back to the list you came from
  if (!caseStudy) {
    return (
      <Navigate to={section === "design" ? "/design" : "/projects"} replace />
    );
  }

  const kind = caseStudy.header.kind; // "design" | "project" | "both"

  // ✅ gatekeeping rules
  const allowedInDesign = kind === "design" || kind === "both";
  const allowedInProjects = kind === "project" || kind === "both";

  if (section === "design" && !allowedInDesign) {
    return <Navigate to={`/projects/${slug}`} replace />;
  }
  if (section === "project" && !allowedInProjects) {
    return <Navigate to={`/design/${slug}`} replace />;
  }


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
        <div className="flex flex-row gap-2">
          {l.img && (
            <img src={l.img} alt={l.label} className="w-6 object-contain" />
          )}

          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 wrap-break-word whitespace-normal"
          >
            {l.label}
          </a>
        </div>
      )),
    },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const buildTimeline = (opts: {
        bandFromX: number;
        titleFromY: number;
      }) => {
        const tl = gsap.timeline();

        if (wipeRef.current) {
          tl.fromTo(
            wipeRef.current,
            { height: "100%" },
            { height: "0%", duration: 0.9, ease: "power4.inOut" },
          );
        }

        const band = heroRef.current?.band;
        const title = heroRef.current?.title;

        if (band) gsap.set(band, { xPercent: -110 });
        if (title) gsap.set(title, { y: 80, opacity: 0 });

        if (band) {
          tl.to(
            band,
            { xPercent: 0, duration: 0.55, ease: "power3.out" },
            "+=0.05",
          );
        }

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

  const renderBlock = (b: any) => {
    switch (b.type) {
      case "hero-mockup":
        return (
          <HeroMockupBlock key={b.id} bgText={b.bgText} assets={b.assets} />
        );

      case "media": {
        if (!b.assets || b.assets.length === 0) return null;

        // SINGLE
        if (b.variant === "single" || b.assets.length === 1) {
          const a = b.assets[0];
          return (
            <div key={b.id} className="case-study-img">
              {a.type === "image" ? (
                <img src={a.src} alt={a.alt ?? ""} className="w-full h-auto" />
              ) : (
                <video
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={a.poster}
                >
                  <source src={a.src} />
                </video>
              )}
            </div>
          );
        }

        // DOUBLE = 2+ (STACKED COLUMN)
        return (
          <div key={b.id} className="case-study-img flex flex-col gap-6">
            {b.assets.map((a: any, i: number) => (
              <div key={i}>
                {a.type === "image" ? (
                  <img
                    src={a.src}
                    alt={a.alt ?? ""}
                    className="w-full h-auto"
                  />
                ) : (
                  <video
                    className="w-full h-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={a.poster}
                  >
                    <source src={a.src} />
                  </video>
                )}
              </div>
            ))}
          </div>
        );
      }

      case "text": {
        const paragraphs = Array.isArray(b.text) ? b.text : [b.text];
        const isFinal = b.id.includes("final");

        return (
          <div key={b.id} className="py-24">
            {paragraphs.map((t: string, i: number) => (
              <p
                key={i}
                className={
                  isFinal
                    ? "text-[clamp(30px,5.5vw,50px)] leading-tight text-center max-w-5xl mx-auto"
                    : "text-xl text-center max-w-5xl mx-auto"
                }
              >
                {t}
              </p>
            ))}
          </div>
        );
      }

      default:
        return null;
    }
  };

  if (!caseStudy)
    return (
      <Navigate to={section === "design" ? "/design" : "/projects"} replace />
    );
  return (
    <main
      ref={caseStudyRef}
      className="main-setup bg-forest-50! overflow-y-auto"
    >
      <OverlayAnimation wipeRef={wipeRef} className={`top-0 bg-ember-75`} />

      <div className="shrink-0 px-16 pt-14">
        <TopBar className="mb-8" isHome={false} isDesign={section === "design"} />
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

        {/* blocks */}
        {caseStudy.blocks.map(renderBlock)}

        {/* actions */}

        {caseStudy.actions && <CaseStudyActions actions={caseStudy.actions} />}
      </section>
    </main>
  );
};

export default CaseStudyPage;
