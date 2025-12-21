interface OverlayProps {
  wipeRef: React.RefObject<HTMLDivElement | null>;
  className?: string; 
}

const OverlayAnimation = ({wipeRef, className}:OverlayProps) => {
  return (
    <div
      ref={wipeRef}
      className={`fixed inset-x-0 z-50 ${className}`}
      style={{ height: "100%" }}
    />
  );
};

export default OverlayAnimation;
