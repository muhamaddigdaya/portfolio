import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex flex-row justify-between space-x-4 items-center w-screen bg-green-300 xl:p-8 lg:p-4 md:p-4 sm:p-2'>
        <div className='flex flex-row p-2 space-x-4 items-center '>
          <a href="https://www.linkedin.com/in/muhamaddigdaya/" target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" className='xl:h-[50px] lg:h-[50px] md:h-[50px] sm:h-[34px] hover:scale-[1.2]' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="mailto:kamadanendra@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" className='xl:h-[60px] lg:h-[60px] md:h-[60px] sm:h-[44px] hover:scale-[1.2]' viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
          </a>
        </div>
        <div>
            <img src="/NOSHADOWSMILE.png" alt="smile :)" className='xl:w-[72px] lg:w-[72px] md:w-[72px] sm:w-[40px] animate-spin'/>
        </div>
    </div>
  )
}

export default Footer