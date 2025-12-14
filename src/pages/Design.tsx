import { useRef } from "react";
import TopBar from "../components/TopBar";

const Design = () => {
  const rightScrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <main
      className="main-setup"
      onWheel={(e) => {
        const el = rightScrollRef.current;
        if (!el) return;

        // route the wheel delta to the right column
        el.scrollTop += e.deltaY;

        // stop the browser from trying to scroll the page
        e.preventDefault();
      }}
    >
      <div className="shrink-0 px-16 pt-14">
        <TopBar className="mb-8" homeHref="/" />
      </div>

      <section className="flex-1 min-h-0 w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-10 md:px-12 lg:px-16 pb-12">
        {/* LEFT  */}
        <div className="min-h-0 flex items-start justify-center md:block">
          <div className="w-full max-w-[720px] md:max-w-none">
            <div className="h-[240px] w-full bg-white/10 rounded-md" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="min-h-0 flex items-stretch justify-center md:block">
          <div className="w-full max-w-[720px] md:max-w-none h-full min-h-0">
            <div
              ref={rightScrollRef}
              className="h-full overflow-y-auto scroll-hidden bg-white/10 rounded-md"
            >
              <div className="p-6 space-y-6">
                <div className="h-[220px] bg-white/10 rounded" />
                <div className="h-[220px] bg-white/10 rounded" />
                <div className="h-[220px] bg-white/10 rounded" />
                <div className="h-[220px] bg-white/10 rounded" />
                <div className="h-[220px] bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Design;
