
const AboutButtonts = () => {
  return (
      <div className="flex flex-col gap-4">
      {/* CV*/}
      <a
        href="/docs/softwareDev.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          glory-title
          no-select
          rounded-full
          border
          border-ember-75/60
          text-ember-75
          hover:bg-ember-75
          hover:text-forest-50
        
          bg-transparent
          px-10 py-4
          text-[34px]
          inline-flex! items-center! justify-center
        "
      >
        CV
      </a>

      {/* Contact */}
      <a
        href="/contact"
        className="
        font-glory-migella
          rounded-full
          bg-forest-75
          text-forest-50
          px-10 py-4
           text-[34px]
          inline-flex items-center justify-center
        "
      >
        Contact
      </a>
    </div>
  )
}

export default AboutButtonts
