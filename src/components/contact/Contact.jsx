import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import './_contact.scss';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    // Ref formulaire
    const form = useRef();
    // Fonction envoimail viaEmail.js
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fyxd0aq', 'template_k377uap', form.current, '-mdfyJh5FHwMPjywl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    // animation ... infinie
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
        <>
            <section id="contact">
                <h2 className='title'>Contactez-moi<span ref={textRef}><span className='display-dots'>.</span><span className='display-dots'>.</span><span className='display-dots'>.</span></span></h2>
                <form ref={form} onSubmit={sendEmail} className="form-box">
                    <div className="form-content">
                        <label>nom *</label>
                        <input type="text" name="user_name" required></input>
                        <label>société</label>
                        <input type="text" name="user_society"></input>
                        <label>téléphone</label>
                        <input type="tel" name="user_phone"></input>
                        <label>email *</label>
                        <input type="email" name="user_email" required></input>
                        <label>message *</label>
                        <textarea name="user_message" required></textarea>
                    </div>
                        <button type="submit">Soumettre</button>
                </form>
            </section>
        </>
    )
}

export default ContactUs;