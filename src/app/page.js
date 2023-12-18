'use client';

import reactTodoPreview from '../../public/img/react-todo-preview.png'
import countryViewerPreview from '../../public/img/country-viewer-preview.png'
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

  const reactToDoListInfo = {
    name: "React To-do List",
    image: reactTodoPreview,
    techUsed: ["React", "Next.js", "TailwindCSS"],
    desc: "A simple to-do list app where users can add tasks, remove tasks individually, as well as clear all tasks marked complete at once. A user's tasks persist across sessions by keeping them in localStorage.",
    url: "https://react-todo-five-brown.vercel.app/"
  }
  const apiCountryViewerInfo = {
    name: "API Country Viewer",
    image: countryViewerPreview,
    techUsed: ["React", "Next.js", "TailwindCSS", "RESTful API"],
    desc: "A simple app to search for countries, allowing the user to filter them by name and region. Each tile links to a page with more detailed information. Users can switch to a dark theme, and their preference is saved in localStorage.",
    url: "https://fm-rest-countries-six.vercel.app/"
  };

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
            <h1 className="font-bold text-3xl mb-2
            sm:text-5xl">Hello, I'm Daniel</h1>
            <h2 className="font-semibold text-md sm:text-2xl">and I do Web Development</h2>
            <div id="explanationContainer" className="mt-4 
            text-xs font-sans
            sm:text-sm sm:mb-6">
              <p className="italic text-gray-400">This website was made with Next.js</p>
              
            </div>
          </div>
        </section>
        <section id="portfolioSection" className="bg-[rgb(246,247,248)] 
        flex flex-col items-center
        w-full h-full 
        scroll-mt-16 px-5 pb-10">

        <div className="max-w-[1000px]">
          <h2 className="text-3xl font-bold italic text-stone-700
          p-6 pb-8">
            Here's some of my work
          </h2>
          <section id="cardsContainer" className="grid gap-10 justify-center sm:grid-cols-2 px-8
          sm:mx-6">
            <ProjectCard project={reactToDoListInfo} changeModalDisplay={changeModalDisplay} /> 
            <ProjectCard project={apiCountryViewerInfo}
            changeModalDisplay={changeModalDisplay} />
            {/* <ProjectCard /> */}
          </section>
        </div>

        </section>        
      </main>
    </>
  )
}
