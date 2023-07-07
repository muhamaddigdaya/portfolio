import Image from 'next/image'
import React from 'react'

type Props = {}

const Text = (props: Props) => {
  return (
    <div className="hero-section flex flex-col xl:items-start sm:items-center p-8 w-screen ">
        <header className='cursor-default font-extrabold sm:text-5xl xl:text-8xl xl:text-left sm:text-center mb-4'>Percentage Calculator</header>
        <p className='cursor-default sm:text-md xl:text-xl w-fit bg-white p-2 border-2 border-black xl:shadow-inherit lg:shadow-[10px_10px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_#000] duration-150 ease-out'>A tool that might be useful for you.</p>
    </div>
  )
}

export default Text
