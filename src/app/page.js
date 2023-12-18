'use client';

import Image from 'next/image'
import Header from './header'
import ProjectCard from './projectcard'
import AboutPopUp from "./aboutpopup"
import { useState } from 'react';


export default function Home() {
  // states for the display of the various 
  const [thisPageDesc, setThisPageDesc] = useState(false);

  const changeModalDisplay = (stateFunction) => {
    stateFunction(state => !state)
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center 
      text-gray-800 font-Oswald">
        <section id="aboutSection" className="bg-gray-50 
        min-h-[30vh] w-full 
        flex justify-center
        shadow-[0_3px_2px_0px_rgb(0_0_0_/_0.13)] z-10
        sm:h-auto">
          {/* about section */}
          <div id="welcomeContainer" className="flex flex-col 
          w-full max-w-[500px]
          text-left mt-20 p-6
          sm:mt-24">
            <h1 className="font-bold text-3xl sm:text-5xl">Hello, I'm Daniel</h1>
            <h2 className="font-semibold text-md sm:text-2xl">and I do Web Development</h2>
            <div id="explanationContainer" className="mt-4 
            text-xs font-sans
            sm:text-sm sm:mb-6">
              <p className="italic">This website was made with Next.js</p>
              <a className="text-gray-400 italic">Click <span className="text-amber-500 hover:text-amber-400 active:text-amber-300"
              onClick={() => changeModalDisplay(setThisPageDesc)}>here</span> to learn about all the techonologies used to make this page</a>
              {/* make a modal window that pops up and shows the technologies used in this page:
              react.js with next.js
              tailwind.css*/}
              <AboutPopUp project="This page" displayState={thisPageDesc} changeModalDisplay={() => changeModalDisplay(setThisPageDesc)} />
              
              {/*  */}
              
            </div>
          </div>
        </section>
        <section id="portfolioSection" className="bg-[rgb(246,247,248)] 
        flex flex-col items-center
        w-full h-full 
        scroll-mt-16 px-5 pb-10
        ">

        <div className="max-w-[1000px]">
          <h2 className="text-3xl font-bold italic p-6 pb-8
          ">Here's some of my work</h2>
          <section id="cardsContainer" className="grid gap-10 justify-center sm:grid-cols-2 px-8
          sm:mx-6">
            <ProjectCard project="React To-do List" changeModalDisplay={changeModalDisplay} /> 
            <ProjectCard project="API Country Viewer"
            changeModalDisplay={changeModalDisplay} />
            {/* <ProjectCard /> */}
          </section>
        </div>

        </section>        
      </main>
    </>
  )
}
