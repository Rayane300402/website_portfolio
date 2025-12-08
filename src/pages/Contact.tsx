import ContactProfileCard from "../components/ContactProfileCard";

const Contact = () => {
  return (
    <main className=" min-h-screen w-screen overflow-x-hidden items-center justify-center bg-ember-75">
      <section
        className="
          w-full h-screen
          grid grid-cols-1 md:grid-cols-2
          gap-12
          py-14
        "
      >
        {/* LEFT COLUMN — top aligned */}
        <div className="flex flex-col justify-start h-full ms-16">
          <div>
            {/* TITLE */}
            <h1 className="text-white text-[200px] font-glory-migella leading-[0.8]">
              Hello...
            </h1>

            {/* SUBTEXT */}
            <p className="text-white text-[36px] mt-4 leading-tight">
              In need of assistance? Get in touch
              <br /> with me :)
            </p>

            {/* EMAIL */}
            <p className="text-white text-[24px] font-light pt-4">
              Email:&nbsp;
              <a
                href="mailto:rayanenaboulsibusiness@gmail.com"
                className="link"
              >
                rayanenaboulsibusiness@gmail.com
              </a>
            </p>

            {/* SOCIALS */}
            <p className="text-white text-[24px] font-light pt-2">
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

        {/* RIGHT COLUMN — bottom aligned */}
        <div className="flex flex-col justify-end items-end h-full me-16">
         <ContactProfileCard />
        </div>
      </section>
    </main>
  );
};

export default Contact;
