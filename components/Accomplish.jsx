import React from 'react'

function Accomplish({ individualValue }) {
  return (
    <section className="px-5 xl:px-24 sm:px-16 pb-32">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="lg:max-w-sm flex-shrink-0">
          <h2
            className="text-2xl lg:mt-20 md:text-4xl mb-4"
          >
            {individualValue.attributes?.heading}
          </h2>
          <span className="block relative h-px bg-white/40 after:absolute after:h-3 after:w-3 after:rounded-full after:bg-primary after:-bottom-1.5" />
        </div>
        <div className="text-sm lg:text-base grid gap-5 grid-cols-1">
          {individualValue.attributes?.story.map((item, index) => (
            <p
            key={index}
            >
              {item.children[0].text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Accomplish