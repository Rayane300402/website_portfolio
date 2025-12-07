import IntroText from "../components/IntroText";
import ProfileCard from "../components/ProfileCard";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Intro = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <main className=" h-screen w-screen overflow-x-hidden overflow-y-hidden bg-forest-50 flex items-center justify-center">
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
        <div className="fixed inset-0 bg-forest-50 text-white lg:hidden z-10 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <button
              type="button"
              onClick={() => setIsNavOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <FiMenu size={28} />
            </button>

            <a href="#work" className="glory-title">
              WORK
            </a>
            <a href="#design" className="glory-title">
              DESIGN
            </a>
            <a href="#about" className="glory-title">
              ABOUT
            </a>
            <a href="#contact" className="glory-title">
              CONTACT
            </a>
            <a href="/cv" className="glory-title">
              CV
            </a>
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
          <div className="min-h-[300px] grow flex items-end pt-10 w-full">
            <ProfileCard />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        {/* RIGHT COLUMN */}
        <div className="hidden lg:flex flex-col justify-center me-16 h-full pl-24 pe-14">
          <h2 className="glory-title">WORK</h2>
          <h2 className="glory-title">DESIGN</h2>
          <h2 className="glory-title">ABOUT</h2>
          <h2 className="glory-title">CONTACT</h2>
          <h2 className="glory-title">CV</h2>
        </div>
      </section>
    </main>
  );
};

export default Intro;
