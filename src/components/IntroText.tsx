
const IntroText = () => {
  return (
        <div className="text-white">
      {/* Name */}
      <h1
        className="
          font-segoe font-normal 
          text-[36px] leading-[1.2] no-select
        "
      >
        RAYANE NABOULSI
      </h1>

      {/* Roles */}
      <p
        className="
          font-segoe font-light 
          text-[24px] leading-[1.4] mt-4 no-select
        "
      >
        Software Developer / UI UX <br />
        Developer / Flutter Developer
      </p>

      {/* Work line */}
      <p
        className="
          font-segoe font-light 
          text-[24px] leading-[1.4] mt-6 no-select
        "
      >
        Currently working full-time as a Software <br />
        Developer at{" "}
        <span className="underline">
          AIY EXPERT SOLUTIONS
        </span>
      </p>
    </div>
  )
}

export default IntroText
