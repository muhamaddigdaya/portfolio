import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="hero-section flex flex-col xl:items-start sm:items-center w-screen">
      <Suspense fallback={`loading...`}>
        <Image src="/SMILE.png" alt="SMILE!" width={120} height={120} className='animate-bounce' />
      </Suspense>
      <header className='cursor-default font-extrabold sm:text-7xl xl:text-8xl sm:text-center mb-4'>Muhamad Digdaya</header>
      <p className='cursor-default text-sm xl:text-xl w-fit bg-white p-2 m-2 md:m-0 border-2 sm:max-w-full md:max-w-xl border-black xl:shadow-inherit lg:shadow-[10px_10px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_#000] duration-150 ease-out'>Inspiring over 4k designers trough <Link href="https://www.figma.com/@muhamaddigdaya" className='underline hover:font-bold' target='_blank'>Figma Community</Link></p>
    </div>
  )
}

export default Header
