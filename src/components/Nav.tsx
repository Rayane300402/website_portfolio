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

  return (
    <a
      href={href}
      target={isPdf ? "_blank" : undefined}
      rel={isPdf ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-3"
    >
      <span className={` ${className}`}>{label}</span>

      {isNew && (
        <span
          className="
            glory-new
          "
        >
          NEW
        </span>
      )}
    </a>
  );
};

export default NavWord;
