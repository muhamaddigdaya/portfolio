import Image from "next/image"
import React from "react"

type Props = {}

const Community = (props: Props) => {
  return (
    <div className="flex sm:flex-col min-h-screen w-screen bg-[#A8A6FF] min-w-screen items-center justify-items-center justify-center p-8">
      <header className="cursor-default font-extrabold sm:text-4xl xl:text-8xl xl:p-16 lg:p-4 md:p-4 sm:p-4 text-white hover:text-[#FFF59F] duration-300 ease-out">Figma Community</header>
      <div className="grid xl:grid-cols-3 sm:grid-cols-none gap-8 text-black">
      <a href="https://www.figma.com/community/file/1207145809192122717" target="_blank">
        <div className="bg-white hover:bg-green-100 w-fit text-black p-4 space-y-2 border-4 w-fit border-black">
          <Image fill src="/Carousel.png"  alt="Carousel Thumbnail" className="xl:w-500px lg:w-450 md:w-400 sm:w-200px"/>
          <h2 className="text-xl font-bold text-white bg-[#FF5959] w-fit p-2">Interactive Carousel</h2>
          <p className="font-mono w-4/5">You can try the prototype now, go to the page, interact, and customize!</p>
        </div>
      </a>
      <a href="https://www.figma.com/community/file/1123140672040727667/UI-Component---Interactive-Dropdown-(customizable)" target="_blank">
        <div className="bg-white hover:bg-orange-100 w-fit text-black p-4 space-y-2 border-4 w-fit border-black">
          <Image fill src="/Dropdown.png"  alt="Dropdown Thumbnail" className="xl:w-500px lg:w-450 md:w-400 sm:w-200px"/>
          <h2 className="text-xl font-bold text-white bg-[#308FFF] w-fit p-2">Interactive Dropdown</h2>
          <p className="font-mono w-4/5">Customize your own version of <b>Dropdown</b> without starting from scratch.</p>
        </div>
      </a>
      <a href="https://www.figma.com/community/file/1131738974378358873/UI-Component---Interactive-Selection-Radio-Button(customizable)" target="_blank">
        <div className="bg-white hover:bg-blue-100 w-fit text-black p-4 space-y-2 border-4 w-fit border-black">
          <Image fill src="/Radio.png"  alt="Radio Thumbnail" className="xl:w-500px lg:w-450 md:w-400 sm:w-200px"/>
          <h2 className="text-xl font-bold text-black bg-[#FFA149] w-fit p-2">Interactive Radio Button</h2>
          <p className="font-mono w-4/5">Radio button pre-made for you to customize and match your project's style.</p>
        </div>
      </a>
      <a href="https://www.figma.com/community/file/1206095085125985582/Website-Landing-Page-Template-(neo-brutalism)" target="_blank">
        <div className="bg-white hover:bg-yellow-100 w-fit text-black p-4 space-y-2 border-4 w-fit border-black">
          <Image fill src="/Website.png"  alt="Website Thumbnail" className="xl:w-500px lg:w-450 md:w-400 sm:w-200px"/>
          <h2 className="text-xl font-bold text-white bg-[#9747FF] w-fit p-2">Website Template</h2>
          <p className="font-mono w-4/5">Landing Page to inspire your next neo-brutalism project, or maybe even use it as a template.</p>
        </div>
        </a>
      <a href="https://www.figma.com/community/file/1209364886079568569/UI-Component---Interactive-Checkbox-(customizable)" target="_blank">
        <div className="bg-white hover:bg-green-100 w-fit text-black p-4 space-y-2 border-4 w-fit border-black">
          <Image fill src="/Checkbox.png"  alt="Checkbox Thumbnail" className="xl:w-500px lg:w-450 md:w-400 sm:w-200px"/>
          <h2 className="text-xl font-bold text-black bg-[#FFA6F6] w-fit p-2">Interactive Checkbox</h2>
          <p className="font-mono w-4/5">Use this if you are lazy to make a checkbox. All done for you.</p>
        </div>
      </a>
      <a href="https://www.figma.com/community/file/1209140581871190509/UI-Component---Interactive-Button-(customizable)" target="_blank">
        <div className="bg-white hover:bg-purple-100  w-fit text-black p-4 space-y-2 border-4 w-fit border-black">
          <Image fill src="/Button.png"  alt="Button Thumbnail" className="xl:w-500px lg:w-450 md:w-400 sm:w-200px"/>
          <h2 className="text-xl font-bold text-black bg-[#FFF6A6] w-fit p-2">Interactive Button</h2>
          <p className="font-mono w-4/5">Completed button interactions, made for you, ready to use and customize.</p>
        </div>
      </a>

      </div>
    </div>
  )
}

export default Community
