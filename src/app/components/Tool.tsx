import Image from 'next/image'
import React from 'react'

type Props = {}

const Tool = (props: Props) => {
  return (
    <div className='flex flex-col items-start sm:items-center xl:my-8 sm:my-4 ml-0 p-8 bg-pink-100 border border-8 border-black sm:border-4 w-fit space-y-8 hover:shadow-[10px_10px_0px_0px_#000] xl:shadow-inherit lg:shadow-[10px_10px_0px_0px_#000] duration-150 ease-in text-black'>
      <h2 className='text-5xl sm:text-2xl font-bold cursor-default'>Try it out</h2>
            <a href="https://muhamaddigdaya.github.io/percentage-calculator/" target="_blank">
                <Image src="/Calculator.png" width={1920} height={960} alt="UI Kit" className='xl:max-w-3xl lg:max-width-xl md:max-w-lg sm:max-w-[200px] sm:border-2 border-black border-4 hover:scale-[0.95] transition duration-150 ease-out mr-[0px]'/>
            </a>
        <button className='flex text-xl xl:py-2 sm:text-sm sm:px-2 sm:py-0 items-center border border-black border-2 hover:bg-[#C9BFEF] hover:font-bold transition duration-150'><a href="https://muhamaddigdaya.github.io/percentage-calculator/" target="_blank">Go to Percentage Calculator ➭</a></button>
    </div>
  )
}

export default Tool
