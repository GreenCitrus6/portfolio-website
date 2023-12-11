import Image from 'next/image'
import Header from './header'
import ProjectCard from './projectcard'

export default function Home() {
  
  return (
    <>
      <Header />
      <main className="flex flex-col text-gray-800">
        <section id="aboutSection" className="">
          {/* about section */}
          <h1>Hello, I'm Daniel</h1>
          <h2>and I do Web Development</h2>
          <div id="explanationContainer">
            <p >This website was made with Next.js</p>
            <a className="text-gray-400 italic">Click <span className="text-amber-500 hover:text-amber-400 active:text-amber-300">here</span> to learn about all the techonologies used to make this page</a>
            {/* make a modal window that pops up and shows the technologies used in this page:
            react.js with next.js
            tailwind.css*/}
          </div>
        </section>
        <section id="portfolioSection" className="">
          <h2>Projects</h2>
          {/* portfolio, cards that have an option to view a modal window with an explanation of what they are and what tech they use, or link to the deployed project to try it 
            journal app with backend
            pokemon sleep collection manager
            react todo list,
            SHOW MORE BUTTON 
            fcc projects
          */}
          <ProjectCard /> 
        </section>
        <section id="contactSection" className="">
          <h2>Check out more of my work</h2>
          {/* contact info, including linkedin and github */}

        </section>
      </main>
    </>
  )
}
