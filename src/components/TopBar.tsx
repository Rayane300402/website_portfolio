import { Link } from "react-router-dom";

type TopBarProps = {
  year?: string;
  homeHref?: string;
  className?: string;
};

const TopBar = ({
  year = "©/2025",
  homeHref = "/",
  className = "",
}: TopBarProps) => {
  return (
    <div className={`w-full flex items-center ${className}`}>
      <span className="hidden md:block text-white  tracking-[0.18em] flex-1 font-segoe-ui font-light text-[18px]">
        {year}
      </span>

      <div className="w-40 mx-6 h-px bg-white/50 hidden md:block"></div>

      <Link
        to={homeHref}
        className="text-white  tracking-[0.18em] cursor-pointer font-segoe-ui font-light text-[18px]"
      >
        HOME
      </Link>

      <div className="w-40 mx-6 h-px bg-white/50 md:hidden"></div>
    </div>
  );
};

export default TopBar;
