import Link from 'next/link'
import React from 'react'

export const SectionButton = () => {
  return (
    <Link href='mailto:isimemewhyte@gmial.com' className="bg-primary text-white hover:bg-primaryReduced transition duration-300 px-5 rounded-md xl:text-sm lg:px-4 lg:text-xs py-2.5 w-full lg:w-fit">
    Send a mail
  </Link>
  )
}
