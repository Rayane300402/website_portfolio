import IntroText from "../components/IntroText";
import ProfileCard from "../components/ProfileCard";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { gsap } from "gsap";
import NavWord from "../components/Nav";

const Intro = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(() => {
    return sessionStorage.getItem("introLoaded") !== "1";
  });

  const introRef = useRef<HTMLDivElement | null>(null); // whole page scope
  const profileBlockRef = useRef<HTMLDivElement | null>(null); // left profile block
  const mobileNavRef = useRef<HTMLDivElement | null>(null); // NEW: mobile nav overlay

  const NAV_LINKS = [
    { label: "PROJECT", href: "/projects" },
    { label: "DESIGN", href: "/design" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "/contact" }, // todo: fix it to work with right click
    { label: "CV", href: "/docs/softwareDev.pdf", download: true },
  ];

  useEffect(() => {
    if (!isLoading) return;

    const timer = window.setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("introLoaded", "1");
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [isLoading]);

  useLayoutEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      if (profileBlockRef.current) {
        gsap.from(profileBlockRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      }

      gsap.from(".nav-word", {
        x: 80,
        opacity: 0,
        skewX: -12,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.07,
      });
    }, introRef);
    return () => ctx.revert();
  }, [isLoading]);

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

  if (isLoading) {
    return (
      <main className="h-screen w-screen flex items-center justify-center bg-forest-50">
        <div className="loader">
          <li className="ball"></li>
          <li className="ball"></li>
          <li className="ball"></li>
        </div>
      </main>
    );
  }

  return (
    <main
      ref={introRef}
      className=" h-screen w-screen overflow-x-hidden overflow-y-hidden bg-forest-50 flex items-center justify-center"
    >
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
            className="
      flex flex-col justify-center
      h-full w-full
      overflow-y-auto
      overscroll-contain
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
                  className="nav-word"
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
