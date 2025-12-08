const ContactProfileCard = () => {
  return (
    <div className="relative h-[440px] w-full flex items-start">
      {/* PROFILE IMAGE – now on the LEFT */}
      <img
        src="/img/profile.png"
        alt="Profile illustration"
        className="
          absolute
          bottom-0
          left-0
          h-full
          w-auto
          object-cover
          translate-x-24  
          scale-x-[-1]    
          z-20
        "
      />

      {/* CONTAINER – now on the RIGHT */}
      <div
        className="
        absolute
          left-50
          right-auto
          top-0
          bottom-0
          ml-auto            
          w-[400px]
          h-full
          bg-forest-50
          rounded-[10px]
        "
      >
        {/* Sidebar */}
        <div
          className="
            absolute
            top-6 bottom-6 right-0
            flex flex-col justify-between items-center text-white
          "
        >
          <div className="flex flex-col items-center space-y-8 mt-2">
            <span className="-rotate-90 text-sm tracking-[0.2em]">
              HOME
            </span>

            <div className="h-28 w-px bg-white" />
          </div>

          <span className="-rotate-90 text-sm tracking-[0.2em] mb-2">
            ©2025
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactProfileCard;

