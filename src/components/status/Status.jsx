import './_status.scss'
import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import { useEffect } from 'react';



const Status = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const textSlideInTop = (elem) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                scale:0,
        },
        {
            opacity: 1,
            scale: 1,
            delay: 0.2,
            duration: 1,
            scrollTrigger: {
                trigger: elem,
                start: "top bottom",
                // end: "start bottom"
            }   
        }
        )
    }

    useEffect(() => {
        textSlideInTop(".status-content");
    }, [])

    return (
        <section id='status'>
            <div className='status-content'>
                <h2>Actuellement :</h2>
                <p>En recherche d'opportunités</p>
            </div>
        </section>
    );
}

export default Status;