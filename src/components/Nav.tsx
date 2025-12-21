import { Link } from "react-router-dom";

interface NavWordProps {
  label: string;
  href: string;
  className?: string; // custom classes like nav-word or nav-word-mobile
  download?: boolean; //  for CV
  isNew?: boolean; // for projects and designs
}

const NavWord = ({
  label,
  href,
  className = "",
  download = false,
  isNew = false,
}: NavWordProps) => {
  const isPdf = href.endsWith(".pdf") || download;
  const isExternal = /^https?:\/\//i.test(href);
  const isInternalRoute = href.startsWith("/") && !isPdf && !isExternal;

  const content = (
    <>
      <span  className={className}>{label}</span>
       {isNew && <span className="glory-new">NEW</span>}
    </>
  );

  if(isInternalRoute) {
    return (
      <Link to={href} className="inline-flex items-center gap-3">
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={isPdf ? "_blank" : undefined}
      rel={isPdf ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-3"
    >
      {content}
    </a>
  );
};

export default NavWord;
