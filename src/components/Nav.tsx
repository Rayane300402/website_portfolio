interface NavWordProps {
  label: string;
  href: string;
  className?: string; // custom classes like nav-word or nav-word-mobile
  download?: boolean; // optional flag for CV
}

const NavWord = ({ label, href, className = "", download = false }: NavWordProps) => {
  const isPdf = href.endsWith(".pdf") || download;

  return (
    <a
      href={href}
      target={isPdf ? "_blank" : undefined}
      rel={isPdf ? "noopener noreferrer" : undefined}
      className={`glory-title ${className}`}
    >
      {label}
    </a>
  );
};

export default NavWord;
