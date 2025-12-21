import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ContactProfileCard from "../components/ContactProfileCard";
import OverlayAnimation from "../components/OverlayAnimation";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const contactLeftRef = useRef<HTMLDivElement | null>(null);
  const contactRightRef = useRef<HTMLDivElement | null>(null);
  const wipeRef = useRef<HTMLDivElement | null>(null);

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

      if (contactLeftRef.current) {
        tl.from(
          contactLeftRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.25"
        );
      }

      if (contactRightRef.current) {
        tl.from(
          contactRightRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.05,
          },
          "-=0.55"
        );
      }
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={contactRef}
      className="min-h-screen w-screen overflow-x-hidden bg-ember-75"
    >
     <OverlayAnimation wipeRef={wipeRef} className={`bottom-0 bg-forest-50`} />

      <section
        className="
          w-full min-h-screen
          grid grid-cols-1 xl:grid-cols-2
          gap-12
          py-14
          px-6 sm:px-10 xl:px-0
        "
      >
        {/* LEFT COLUMN */}
        <div
          ref={contactLeftRef}
          className="
            flex flex-col justify-start
            w-full
            max-w-[720px]
            mx-auto
            xl:mx-0
            xl:ms-16
          "
        >
          <div>
            <h1 className="text-white text-[200px] font-glory-migella leading-[0.8] no-select">
              Hello...
            </h1>

            <p className="text-white text-[36px] mt-4 leading-tight no-select">
              In need of assistance? Get in touch
              <br /> with me :)
            </p>

            <p className="text-white text-[24px] font-light pt-4 no-select">
              Email:&nbsp;
              <a
                href="mailto:rayanenaboulsibusiness@gmail.com"
                className="link"
              >
                rayanenaboulsibusiness@gmail.com
              </a>
            </p>

            <p className="text-white text-[24px] font-light pt-2 no-select">
              Find me online:&nbsp;
              <a
                href="https://www.linkedin.com/in/rayane-naboulsi"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                LinkedIn
              </a>
              &nbsp;/&nbsp;
              <a
                href="https://github.com/Rayane300402"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          ref={contactRightRef}
          className="
            flex
            w-full
            justify-center xl:justify-end
            items-end
            max-w-[720px]
            mx-auto
          "
        >
          <ContactProfileCard />
        </div>
      </section>
    </main>
  );
};

export default Contact;
