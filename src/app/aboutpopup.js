'use client';

import Image from "next/image";

export default function AboutPopUp({ project, displayState, changeModalDisplay }) {

    if (displayState) {
    return(

        <div className="modalOverlay absolute top-0 left-0 
        flex justify-center items-center bg-[rgb(0,0,0,0.3)]
        w-full h-full z-40">
            <div className="modalWrapper w-[500px] max-h-[600px] px-5">
                <section className="modalWindow bg-gray-50 text-gray-700
                h-full w-full rounded-lg p-4">
                    <div className="modalHeader flex justify-between items-center">
                        <h3 className="text-2xl font-bold">
                            {project.name}
                        </h3>
                        <a href="#" className="text-3xl font-mono
                        hover:text-red-700 
                        active:text-gray-300
                        ease-out duration-200" 
                        onClick={changeModalDisplay}>
                            x
                        </a>
                    </div>
                    <div className="modalBody pt-3">
                        <Image
                        src={project.image}
                        className="border-2 border-gray-500 rounded-md mb-5" />
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

                    </div>
                </section>
            </div>
        </div>
    )
    }
}