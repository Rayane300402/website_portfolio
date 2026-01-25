import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

type MockAsset = {
  src: string;
  alt?: string;
  side: "left" | "right";
  y?: number; // px
  x?: number; // px
  w?: number; // px
  z?: number; // z-index
};

export default function HeroMockupBlock({
  bgText,
  assets,
}: {
  bgText: string;
  assets: MockAsset[];
}) {
  const mockupRefs = useRef<HTMLImageElement[]>([]);

  useLayoutEffect(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const els = mockupRefs.current.filter(Boolean);
  if (!els.length) return;

  const ctx = gsap.context(() => {
    // prevent stacked animations (StrictMode / rerenders)
    gsap.killTweensOf(els);

    // reset any prior gsap transforms on y to avoid drift
    gsap.set(els, { yPercent: 0 });

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // same speed for both; slight phase offset (0.4s) so not perfectly in sync
    tl.to(els[0], { yPercent: -2, duration: 4.5, ease: "sine.inOut" }, 0);
    if (els[1]) {
      tl.to(els[1], { yPercent: -2, duration: 4.5, ease: "sine.inOut" }, 0.5);
    }
  });

  return () => ctx.revert();
}, []);



  return (
    <section className="">
      <div className="relative mx-auto w-full max-w-[1600px] px-6">
        {/* stage */}
        <div className="relative overflow-hidden rounded-3xl bg-forest-50/0 min-h-[260px] md:min-h-[620px] lg:min-h-[720px]">
          {/* background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="
      text-white font-extrabold uppercase leading-[0.9]
      tracking-tight opacity-90 text-center
      drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]
      whitespace-normal wrap-break-words
      max-w-[900px] w-full px-6 font-montserrat
      text-[clamp(72px,10vw,170px)]
    "
            >
              {bgText}
            </div>
          </div>

          {/* mockups */}
          {assets.map((a, idx) => {
            const isLeft = a.side === "left";
            const isRight = a.side === "right";

            // 1) visibility: left only on lg+
            const visibility = isLeft ? "hidden lg:block" : "block";

            // 2) position:
            // - LEFT (lg+ only): left side
            // - RIGHT:
            //    - < lg: hard bottom-right
            //    - lg+: right side normal
            const posClass = isLeft
              ? "left-[6%] bottom-0"
              : "right-3 bottom-3 lg:right-[6%] lg:bottom-0"; // <-- HARD bottom-right on sm/md

            // 3) sizing:
            // - RIGHT: smaller on sm/md, bigger on lg
            // - LEFT: only lg anyway
            const widthClass = isLeft
              ? "w-[520px]"
              : "w-[140px] sm:w-[170px] md:w-[220px] lg:w-[520px]"; // <-- small on mobile

            // IMPORTANT: kill x/y transforms on sm/md for the RIGHT laptop
            // so nothing can pull it away from bottom-right.
            const x = a.x ?? 0;
            const y = a.y ?? 0;
            const transform = isRight
              ? "translate(0px, 0px)" // default for mobile; overridden by lg below
              : `translate(${x}px, ${y}px)`;

            return (
              <img
              ref={(el) => {
                if(!el) return;
                mockupRefs.current[idx] = el;
              }}
                key={idx}
                src={a.src}
                alt={a.alt ?? ""}
                className={`
        absolute ${visibility} ${posClass} ${widthClass}
        select-none
        drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]
      `}
                style={{
                  transform,
                  zIndex: a.z ?? 10,
                  maxWidth: "70%",
                }}
                loading="lazy"
                decoding="async"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
