const ProfileCard = () => {
  return (
    <div className="relative h-full w-full">
      
      {/* ORANGE CONTAINER */}
      <div
        className="
          absolute
          left-0
          right-auto
          top-0
          bottom-0
          w-[400px]
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
            <span className="-rotate-90 text-sm tracking-[0.2em]">LI</span>
            <span className="-rotate-90 text-sm tracking-[0.2em]">GH</span>
            <div className="h-28 w-px bg-white" />
          </div>
          <span className="-rotate-90 text-sm tracking-[0.2em] mb-2">
            ©2025
          </span>
        </div>
      </div>

      {/* PROFILE IMAGE */}
      <img
        src="/img/profile.png"
        alt="Profile illustration"
        className="
          absolute
          left-0
          right-auto
          top-0
          bottom-0
          translate-x-12
          w-auto
          h-full
          object-cover
        "
      />
    </div>
  );
};

export default ProfileCard;
