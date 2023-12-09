import Image from 'next/image'
import Header from './header'
import ProjectCard from './projectcard'

export default function Home() {
  
  return (
    <>
      <Header />
      <main className="flex flex-col text-gray-800">
        <section id="aboutSection">
          {/* about section */}
          <h2>Hello</h2>
          <h1>I'm Daniel</h1>
          <h3>and I do Web Development</h3>
        </section>
        <section id="portfolioSection">
          {/* portfolio, cards that have an option to view an explanation of what they are and what tech they use, or link to the deployed project to try it 
            journal app with backend
            pokemon sleep collection manager
            react todo list,
            SHOW MORE BUTTON 
            fcc projects
          */}
          <ProjectCard /> 
        </section>
        <section id="contactSection">
          {/* contact info, including linkedin and github */}

        </section>
      </main>
    </>
  )
}
