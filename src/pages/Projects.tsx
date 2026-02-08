import { useCallback, useLayoutEffect, useRef } from "react";
import TopBar from "../components/TopBar";
import CustomTextBox from "../components/CustomTextBox";
import NavWord from "../components/Nav";
import { gsap } from "gsap";
import OverlayAnimation from "../components/OverlayAnimation";

const PROJECT_LINKS = [
  { label: "Laced", href: "/projects/laced", isNew: false },
  { label: "Zentry", href: "/projects/zentry", isNew: true },
  { label: "ShareCare", href: "/projects/sharecare", isNew: false },
  { label: "TSB2.0", href: "/projects/tsb-2", isNew: false },
  { label: "VirtuEscape", href: "/projects/virtuescape", isNew: false },
];

const Projects = () => {
  const rightScrollRef = useRef<HTMLDivElement | null>(null);
  const wipeRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    // md breakpoint = 768px
    if (window.innerWidth < 768) return; // ✅ allow normal page scroll on sm

    const el = rightScrollRef.current;
    if (!el) return;

    el.scrollTop += e.deltaY;
    e.preventDefault(); // ✅ only block page scroll on md+
  }, []);

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

      tl.from(
        ".nav-word",
        {
          x: 80,
          opacity: 0,
          skewX: -12,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.07,
        },
        "-=0.25"
      );
    }, projectRef);
    return () => ctx.revert();
  }, []);

  return (
    <main
      className="main-setup overflow-y-auto md:overflow-hidden"
      onWheel={handleWheel}
      ref={projectRef}
    >
       <OverlayAnimation wipeRef={wipeRef} className={`top-0 bg-forest-50`}/>

      <div className="shrink-0 px-16 pt-14">
        <TopBar className="mb-8" />
      </div>

      <section className="flex-1 min-h-0 w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-10 md:px-12 lg:px-16 pb-12">
        {/* LEFT  */}
        <div className="min-h-0 flex items-start justify-center md:block">
          <div className="w-full max-w-[720px] md:max-w-none">
            <CustomTextBox
              title="Projects"
              p1="This is a showcase of my best and latest work. Form the simplest to more complex projects. Company projects and self made projects "
              p2="The development and coding world keeps evolving, everyday there is a new update, and new change, new tools to use & my work also has evolved even if it has only been 2 years. I keep learning and gaining new skills everyday"
            />
          </div>
        </div>

        {/* RIGHT*/}
        <div className="min-h-0 flex items-stretch justify-center md:block">
          <div className="w-full max-w-[720px] md:max-w-none h-full min-h-0">
            <div
              ref={rightScrollRef}
              className="  md:h-full
                overflow-visible md:overflow-y-auto
                scroll-hidden"
            >
              <div className="p-6 space-y-6">
                {PROJECT_LINKS.map((item) => (
                  <h2 key={item.label}>
                    <NavWord
                      label={item.label}
                      href={item.href}
                      isNew={item.isNew}
                      className="nav-word glory-title text-[clamp(40px,8vw,160px)] "
                    />
                  </h2>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
