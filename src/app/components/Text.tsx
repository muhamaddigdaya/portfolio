import Link from 'next/link'
import React from 'react'

type Props = {}

const Text = (props: Props) => {
  return (
    <div className="hero-section flex flex-col xl:items-end sm:items-center p-8 w-screen">
        <header className='cursor-default font-extrabold sm:text-5xl xl:text-8xl xl:text-right sm:text-center mb-4 '>Percentage Calculator</header>
        <p className='cursor-default sm:text-md xl:text-xl xl:text-right sm:text-center w-fit bg-white p-2 border-2 border-black xl:shadow-inherit lg:shadow-[10px_10px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_#000] duration-150 ease-out'>A tool that might be useful for you. <br /><Link href="https://muhamaddigdaya.github.io/percentage-calculator/" target="_blank" className='underline font-semibold hover:font-extrabold'>Go to Percentage Calculator ➭</Link></p>
    </div>
  )
}

export default Text
