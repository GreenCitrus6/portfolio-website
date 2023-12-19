'use client';

import Image from "next/image";

export default function AboutPopUp({ project, displayState, changeModalDisplay }) {

    if (displayState) {
    return(
        
        <div className="modalOverlay fixed top-0 left-0 right-0
        flex justify-center items-center bg-[rgb(0,0,0,0.3)]
        w-full h-full z-30"
        onClick={changeModalDisplay}>
            <div className="modalWrapper max-w-[450px] px-5
            md:max-w-[600px]">
                <section className="modalWindow bg-gray-50 text-gray-700 z-40 
                h-full max-h-[calc(100vh-2rem)] w-full overflow-scroll rounded-lg p-4"
                onClick={changeModalDisplay}> {/* when the body of the modal is clicked, state is changed twice, therefore it does not disappear */}
                    <div className="modalHeader flex justify-between items-center">
                        <h3 className="text-2xl font-bold">
                            {project.name}
                        </h3>
                        <a className="text-3xl font-mono z-50
                        hover:text-red-700 
                        hover:cursor-pointer
                        active:text-gray-300
                        ease-out duration-200" 
                        onClick={changeModalDisplay}> {/* clicking the exit X changed the displayState 3 times */}
                            x
                        </a>
                    </div>
                    <div className="modalBody pt-3">
                        <Image
                        src={project.image}
                        alt={`A screenshot of a ${project.name} app`}
                        className="border-2 border-gray-500 rounded-md mb-5
                        w-full" />
                        <span className="italic">
                            Made with:
                        </span>
                        <ul className="mb-3 pl-7
                        list-disc">
                            {project['techUsed'].map((item, index) => {
                                return (
                                    <li key={index} className="py-1">{item}</li>
                                )
                            })}
                        </ul>
                        <p className="p-2">{project.desc}</p>
                        <p className="p-2">{('projectOrigin' in project ? project.projectOrigin : '')}</p>
                    </div>
                </section>
            </div>
        </div>
    )
    }
}