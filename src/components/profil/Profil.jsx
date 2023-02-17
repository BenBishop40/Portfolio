import './_profil.scss';
import pictCartoon from '../../img/PicID5.jpg'
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const slideInTop = (elem) => {
    gsap.fromTo(
        elem,
        {opacity: 0,
        y: 200,
    },
    {
       opacity: 1,
       y: 0,
       delay:.2,
       duration: 1,
       scrollTrigger: {
        trigger: elem,
        start: "top center",
        end: "bottom center"
       } 
    }
    )
}

const Profil = () => {
    
    useEffect(() => {
        slideInTop('#profil');
    }, [])


    const textRef = useRef(null);
    useEffect(() => {
        const timeline = gsap.timeline({repeat: -1});

        const chars = Array.from(textRef.current.querySelectorAll('.display-dots'));

        timeline.from(chars, {opacity: 0, stagger: 0.5})
        .to(chars, {opacity: 1, stagger: 0.5, delay: 0})
        .from(chars.reverse(), {opacity: 1, stagger: 0.5})
        .to(chars.reverse(), {opacity: 0, stagger: 0.5, delay: 0})

        return () => {
            timeline.kill();
        };
    }, []);
        
    return (
        <section id='profil'>
            <div className='profil-container'>
                <div className="profil-presentation">
                    <h2 className='profil-title'>A propos de moi<span ref={textRef}><span className='display-dots'>.</span><span className='display-dots'>.</span><span className='display-dots'>.</span></span></h2>
                    <div className="profil-presentation-txt">
                        <p>Bonjour,</p>
                        <p >Je m'appelle Benjamin, <span>développeur Web junior</span> formé à <a href='https://www.lapiscine.pro/' target='_blank'  rel="noreferrer">La Piscine</a> et vis actuellement sur Bordeaux. Je suis également <span>ingénieur en mécanique</span>. J'ai travaillé une dizaine d'années sur des postes de <span>responsable technique</span> et <span>manager de projet</span> dans différents secteurs <em>(aéronautique, spatial, outillages industriels automatisés et robotisés)</em> sur des projets techniques à forte valeur ajoutée.</p>
                        <p>Fraîchement diplômé du <a href='https://www.francecompetences.fr/recherche/rncp/31114/' target='_blank'  rel="noreferrer">TP de développeur Web</a> et en formation autodidacte depuis <span>un an</span>, je souhaite renforcer ces nouvelles compétences. D’un naturel <span>curieux</span>, <span>logique</span> et <span>pragmatique</span> j’aimerais intégrer un poste de <span>développeur Web full stack</span> afin de monter en compétence technique.</p>
                        <p>Passioné par les technologies, la physique et le monde qui nous entoure, je suis <span>ouvert à tous types de secteurs</span> et pourrait faire profiter de mon <span>expérience du milieu industriel</span> et de mes <span>qualités d'organisation</span> dans la <span>conduite de projets</span>.</p>
                    </div>
                </div>
                <div className='profil-pict'>
                    <img className="profil-pict-main" src={pictCartoon} alt='Benjamin Leveque'/>
                </div>
            </div>
        </section>
    )

}
export default Profil;
