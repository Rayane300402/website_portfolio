import { useRef } from "react";
import TopBar from "../components/TopBar";
import CustomTextBox from "../components/CustomTextBox";

const Projects = () => {
    const rightScrollRef = useRef<HTMLDivElement | null>(null);
  
  return (
    <main
      className="main-setup"
      onWheel={(e) => {
        const el = rightScrollRef.current;
        if (!el) return;
        el.scrollTop += e.deltaY;
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

export default Projects;
