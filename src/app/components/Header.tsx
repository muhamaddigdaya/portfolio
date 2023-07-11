import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="hero-section flex flex-col xl:items-start sm:items-center w-screen">
        <img src="/SMILE.png" alt="SMILE!" className='animate-bounce w-[120px]'/>
        <header className='cursor-default font-extrabold sm:text-7xl xl:text-8xl sm:text-center mb-4'>Muhamad Digdaya</header>
        <p className='cursor-default sm:text-md xl:text-xl w-fit bg-white p-2 border-2 border-black xl:shadow-inherit lg:shadow-[10px_10px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_#000] duration-150 ease-out'>Inspiring over 3.5k designers trough <a href="https://www.figma.com/@muhamaddigdaya" className='underline hover:font-bold' target='_blank'>Figma Community</a></p>
    </div>
  )
}

export default Header
