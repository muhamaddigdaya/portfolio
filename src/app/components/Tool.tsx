import Image from 'next/image'
import Link from 'next/link'
import React, {Suspense} from 'react'

type Props = {}

const Tool = (props: Props) => {
  return (
    <div className='flex flex-col items-start sm:items-center rounded-3xl xl:my-8 sm:my-4 ml-0 p-8 bg-red-100 border-8 border-black sm:border-4 w-fit space-y-8 hover:shadow-[10px_10px_0px_0px_#000] xl:shadow-inherit lg:shadow-[10px_10px_0px_0px_#000] duration-150 ease-in text-black'>
      <h2 className='text-5xl sm:text-2xl font-bold cursor-default'>Try it out</h2>
      <Link href="https://muhamaddigdaya.github.io/percentage-calculator/" target="_blank">
      <Suspense fallback="loading...">
        <Image src="/Calculator.png" width={1920} height={960} alt="UI Kit" className='xl:max-w-3xl lg:max-width-xl md:max-w-lg sm:max-w-[200px] sm:border-2 border-black border-4 hover:scale-[0.95] transition duration-150 ease-out mr-[0px]' />
      </Suspense>
      </Link>
      <button className='flex text-xl xl:py-2 sm:text-sm sm:px-2 sm:py-0 items-center border-black border-2 hover:bg-red-200 hover:font-bold transition duration-150'><Link href="https://muhamaddigdaya.github.io/percentage-calculator/" target="_blank">Go to Percentage Calculator ➭</Link></button>
    </div>
  )
}

export default Tool
