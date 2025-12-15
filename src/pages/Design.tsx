import { useRef } from "react";
import TopBar from "../components/TopBar";
import CustomTextBox from "../components/CustomTextBox";
import NavWord from "../components/Nav";

const DESIGN_LINKS = [
  { label: "Salemtek", href: "/projects", isNew: true },
  { label: "A.V.O.O", href: "/design", isNew: false },
  { label: "SeriesScribe", href: "#about", isNew: false },
  { label: "OrderlyFlow", href: "/contact", isNew: false }, // todo: fix it to work with right click
];

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
            <CustomTextBox
              title="Designs"
              p1="This is a showcase of my best and latest designs. Form the simplest to more complex ideas.  "
              p2="Good designs considers how things are built, and goood code respects how things are experienced. The best work happens when both meet, with clarity, intent, and shared understanding "
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="min-h-0 flex items-stretch justify-center md:block">
          <div className="w-full max-w-[720px] md:max-w-none h-full min-h-0">
            <div
              ref={rightScrollRef}
              className="h-full overflow-y-auto scroll-hidden"
            >
              <div className="p-6 space-y-6">
                {DESIGN_LINKS.map((item) => (
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

export default Design;
