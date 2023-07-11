import Image from 'next/image'
import React from 'react'

type Props = {}

const Featured = (props: Props) => {
  return (
    <div className='flex flex-col items-start sm:items-center mt-8 ml-0 p-8 bg-[#FFF59F] border border-8 border-black sm:border-4 w-fit space-y-8 hover:shadow-[10px_10px_0px_0px_#000] xl:shadow-inherit lg:shadow-[10px_10px_0px_0px_#000] duration-150 ease-in text-black'>
      <h2 className='text-5xl sm:text-2xl font-bold cursor-default'>Featured Work</h2>
            <a href="https://www.figma.com/community/file/1209478811951634271/Neo-Brutalism-UI-Kit" target="_blank">
                <Image fill src="/Kit.png"  alt="UI Kit" className='xl:max-w-3xl lg:max-width-xl md:max-w-lg sm:max-w-[200px] sm:border-2 border-black border-4 hover:scale-[0.95] transition duration-150 ease-out mr-[0px]'/>
            </a>
        <button className='flex text-xl xl:py-2 sm:text-sm sm:px-2 sm:py-0 items-center border border-black border-2 hover:bg-[#B8FF9F] hover:font-bold transition duration-150'><a href="https://www.figma.com/community/file/1209478811951634271/Neo-Brutalism-UI-Kit" target="_blank">See this project ➭</a></button>
    </div>

    
  )
}

export default Featured
