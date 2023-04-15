import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import './_contact.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
                        <div className="form-content-detail">
                            <input type="text" name="user_name" placeholder=" " required></input>
                            <label>nom *</label>
                        </div>
                        <div className="form-content-detail">
                            <input type="text" name="user_society" placeholder=" "></input>
                            <label>société</label>
                        </div>
                        <div className="form-content-detail"> 
                            <input type="tel" name="user_phone" placeholder=" "></input>
                            <label>téléphone</label>
                        </div>
                        <div className="form-content-detail">
                            <input type="email" name="user_email" id="mail-box" placeholder=" " required></input>
                            <label>email *</label>
                        </div>
                        <div className="form-content-detail">
                            <textarea name="user_message" placeholder=" " required></textarea>
                            <label>message *</label>
                        </div>
                    </div>
                        <button className="btn lightblue-btn submit-form-btn" type="submit">Soumettre</button>
                </form>
            </section>
        </>
    )
}

export default Contact;