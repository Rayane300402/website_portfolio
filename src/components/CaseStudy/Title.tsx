import { forwardRef, useImperativeHandle, useRef } from "react";

type HeroTitleBandProps = {
  title: string;
  className?: string;
};

export type HeroTitleBandRefs = {
  band: HTMLDivElement | null;
  title: HTMLHeadingElement | null;
};

const HeroTitleBand = forwardRef<HeroTitleBandRefs, HeroTitleBandProps>(
  ({ title, className }, ref) => {
    const bandEl = useRef<HTMLDivElement | null>(null);
    const titleEl = useRef<HTMLHeadingElement | null>(null);

    useImperativeHandle(ref, () => ({
      band: bandEl.current,
      title: titleEl.current,
    }));

    return (
      <div
        ref={bandEl}
        className={`
          relative
          bg-ember-75
          w-full
          h-[600px]
          rounded-[10px]
          md:rounded-tr-[10px] md:rounded-br-[10px]
          md:rounded-tl-none md:rounded-bl-none
          pr-6 lg:pr-16
          pb-8 sm:pb-10
          ${className ?? ""}
        `}
      >
        <h1
          ref={titleEl}
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            font-glory-migella
            text-white
            leading-none
            text-center
            text-[clamp(128px,16vw,320px)]

            md:inset-auto
            md:right-20
            md:bottom-10
            md:text-right
            md:block
          "
        >
          {title}
        </h1>
      </div>
    );
  }
);

HeroTitleBand.displayName = "HeroTitleBand";
export default HeroTitleBand;
