'use client';

import Image from "next/image"
// import reactTodoPreview from '../../public/img/react-todo-preview.png'
// import countryViewerPreview from '../../public/img/country-viewer-preview.png'
import AboutPopUp from "./aboutpopup"
import { useState } from "react";

export default function ProjectCard({ project, changeModalDisplay }) {
    const [modalDisplay, setModalDisplay] = useState(false);

    return (
        <section className="bg-white w-full max-w-[400px] 
        flex flex-col justify-between
        rounded-lg shadow-md overflow-hidden" >
            <h3 className="text-xl font-bold text-center p-3">
                {project.name}
            </h3>
            <div>
            <Image
                src={project.image}
                width="auto"
                height="auto"
                alt={`A screenshot of a ${project['name']} app`}
                placeholder="blur" />
            <div className="flex justify-between">
                <span className="w-1/2 text-center
                p-3 
                hover:bg-gray-100 
                active:bg-gray-300
                ease-out duration-300"><a href={project.url} target="_blank">Try it</a></span>
                <span className="w-1/2 text-center
                p-3 
                hover:bg-gray-100 hover:cursor-pointer
                active:bg-gray-300
                ease-out duration-300"
                onClick={() => changeModalDisplay(setModalDisplay)}>About</span>
            </div>
            </div>
            <AboutPopUp project={project} displayState={modalDisplay} changeModalDisplay={() => changeModalDisplay(setModalDisplay)} />
            {/* will show a screenshot of the project, a title, short desct, and 2 buttons. 
                one to check out the code on github
                one for a more in depth desc, including the technologies used
                clicking on the image or card outside of the buttons will go to the deployed project (target _blank)*/}
        </section>
    )
}