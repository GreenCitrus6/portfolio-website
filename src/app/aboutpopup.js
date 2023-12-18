'use client';

import { useState } from "react";

export default function AboutPopUp({ project, displayState, changeModalDisplay, describedItem }) {

    let techUsed = ['React', 'Next.js', 'TailwindCSS'];

    if (displayState) {
    return(

        <div className="modalOverlay absolute top-0 left-0 
        flex justify-center items-center bg-[rgb(0,0,0,0.3)]
        w-full h-full z-40">
            <div className="modalWrapper w-[500px] h-[600px]">
                <section className="modalWindow bg-gray-50
                h-full w-full rounded-lg p-4">
                    <div className="modalHeader flex justify-between items-center">
                        <h3>{project}</h3>
                        <a href="#" className="text-3xl" 
                        onClick={changeModalDisplay}>
                            x
                        </a>
                    </div>
                    <div className="modalBody pt-3">
                        <p>abcd</p>
                    </div>
                </section>
            </div>
        </div>
    )
    }
}