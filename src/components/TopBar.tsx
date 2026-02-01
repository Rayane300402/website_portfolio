import { Link } from "react-router-dom";

type TopBarProps = {
  className?: string;
  isHome?: boolean;
  isDesign?: boolean;
};

const TopBar = ({
  className = "",
  isHome = true,
  isDesign = false
}: TopBarProps) => {
  return (
    <div className={`w-full flex items-center ${className}`}>
      <span className="hidden md:block text-white  tracking-[0.18em] flex-1 font-segoe-ui font-light text-[18px]">
        ©/{(new Date().getFullYear())}
      </span>

      <div className="w-40 mx-6 h-px bg-white/50 hidden md:block"></div>

      {isHome ? (<Link
        to="/"
        className="text-white  tracking-[0.18em] cursor-pointer font-segoe-ui font-light text-[18px]"
      >
        HOME
      </Link>) :
        isDesign ?
      (<Link
        to="/projects"
        className="text-white  tracking-[0.18em] cursor-pointer font-segoe-ui font-light text-[18px]"
      >
        DESIGN
      </Link>) :
      (<Link
        to="/design"
        className="text-white  tracking-[0.18em] cursor-pointer font-segoe-ui font-light text-[18px]"
      >
        PROJECT
      </Link>)
      }

      <div className="w-40 mx-6 h-px bg-white/50 md:hidden"></div>
    </div>
  );
};

export default TopBar;
