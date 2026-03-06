const ProfileCard = () => {
  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[400px] aspect-4/5 mx-auto lg:mx-0">
      {/* ORANGE CONTAINER */}
      <div
        className="
          absolute
          inset-0
          bg-[#B76939]
          rounded-[10px]
        "
      >
        {/* Sidebar */}
        <div
          className="
            absolute
            top-6 bottom-6 left-0
            flex flex-col justify-between text-white
          "
        >
          <div className="flex flex-col items-center space-y-4">
            <span className="-rotate-90 text-sm tracking-[0.2em] txt-hover">
              <a
                href="https://www.linkedin.com/in/rayane-naboulsi"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                LI
              </a>
            </span>
            <span className="-rotate-90 text-sm tracking-[0.2em] txt-hover">
              <a
                href="https://github.com/Rayane300402"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                GH
              </a>
            </span>
            <div className="h-28 w-px bg-white" />
          </div>
          <span className="-rotate-90 text-sm tracking-[0.2em] mb-2 no-select">
            ©2026
          </span>
        </div>
      </div>

      {/* PROFILE IMAGE */}
      <img
        src="/img/profile.png"
        alt="Profile illustration"
        className="
          absolute
          top-0
          left-0
          h-full
          w-auto
          max-w-none
          translate-x-8 sm:translate-x-10 lg:translate-x-12
          object-cover
        "
      />
    </div>
  );
};

export default ProfileCard;
