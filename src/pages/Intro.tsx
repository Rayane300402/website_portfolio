import IntroText from "../components/IntroText";
import ProfileCard from "../components/ProfileCard";
import { useState, useLayoutEffect, useRef, useCallback } from "react";
import { FiMenu } from "react-icons/fi";
import { gsap } from "gsap";
import NavWord from "../components/Nav";

  const NAV_LINKS = [
    { label: "PROJECT", href: "/projects" },
    { label: "DESIGN", href: "/design" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "/contact" },
    { label: "CV", href: "/docs/softwareDev.pdf", download: true },
  ];

const Intro = () => {
  const rightScrollRef = useRef<HTMLDivElement | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const introRef = useRef<HTMLDivElement | null>(null); // whole page scope
  const profileBlockRef = useRef<HTMLDivElement | null>(null); // left profile block
  const mobileNavRef = useRef<HTMLDivElement | null>(null); // NEW: mobile nav overlay

  const wipeRef = useRef<HTMLDivElement | null>(null); // wipe animation


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

      if(wipeRef.current) {
        tl.fromTo(
          wipeRef.current,
          {height:"100%"},
          {
            height: "0%",
            duration: 0.9,
            ease: "power4.inOut"
          }
        );
      }

      if (profileBlockRef.current) {
        tl.from(profileBlockRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        }, "-=0.25");
      }

      tl.from(".nav-word", {
        x: 80,
        opacity: 0,
        skewX: -12,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.07,
      }, "-=0.55");
    }, introRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!isNavOpen) return; // only animate when menu opens

    const ctx = gsap.context(() => {
      gsap.from(".nav-word-mobile", {
        x: 80,
        opacity: 0,
        skewX: -12,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.06, // fast trailing effect
      });
    }, mobileNavRef);

    return () => ctx.revert();
  }, [isNavOpen]);

  return (
    <main
      ref={introRef}
      onWheel={handleWheel}
      className=" h-screen w-screen overflow-x-hidden overflow-y-hidden bg-forest-50 flex items-center justify-center"
    >
          {/* Wipe overlay (ember) */}
      <div
        ref={wipeRef}
        className="fixed inset-x-0 top-0 z-50 bg-ember-75"
        style={{ height: "100%" }}
      />


      {/* hamburger icon on md and smaller */}
      <button
        type="button"
        className="absolute right-6 top-6 text-white lg:hidden z-20"
        onClick={() => setIsNavOpen((prev) => !prev)}
        aria-label="Open navigation"
      >
        <FiMenu size={28} />
      </button>

      {/* slide-in nav shell */}
      {isNavOpen && (
        <div
          ref={mobileNavRef}
          className="fixed inset-0 bg-forest-50 text-white lg:hidden z-10 flex items-center justify-center"
        >
          <div className="flex flex-col items-center space-y-4">
            <button
              type="button"
              onClick={() => setIsNavOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <FiMenu size={28} />
            </button>

            {NAV_LINKS.map((item) => (
              <NavWord
                key={item.label}
                label={item.label}
                href={item.href}
                download={item.download}
                className="nav-word-mobile"
              />
            ))}
          </div>
        </div>
      )}

      <section
        className="
          w-full h-full
           grid grid-cols-1 lg:grid-cols-[minmax(520px,0.4fr)_1fr]

          gap-12
          py-14
        "
      >
        {/* LEFT COLUMN */}
        <div
          className="
    flex flex-col h-full
    lg:ms-16 lg:min-w-[520px]
    w-full max-w-[520px] mx-auto
    items-center justify-center
  "
        >
          {/* Top block */}
          <div className="min-h-[200px] w-full">
            <IntroText />
          </div>

          {/* Bottom block */}
          <div
            ref={profileBlockRef}
            className="min-h-[300px] grow flex items-end pt-10 w-full"
          >
            <ProfileCard />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hidden lg:flex h-full me-16 pl-24 pe-14">
          <div
            ref={rightScrollRef}
            className="
      flex flex-col justify-center
      h-full w-full
      
      scroll-hidden
      pr-2
    "
          >
            {NAV_LINKS.map((item) => (
              <h2 key={item.label}>
                <NavWord
                  label={item.label}
                  href={item.href}
                  download={item.download}
                  className="nav-word glory-title text-[clamp(48px,10vw,160px)]"
                />
              </h2>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Intro;
