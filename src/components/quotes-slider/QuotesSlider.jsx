import './_quotes_slider.scss';
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class QuotesSlider extends Component {
    render() {
        return (
            <section id='carousel'>
                <Carousel 
                    autoPlay= {true}
                    infiniteLoop
                    interval={5000}
                    showStatus={false}
                    showThumbs={false}
                    showArrows={true}
                    >
                        <div className='quote-item'>
                            <p className='quote'>&laquo;&nbsp;Il y a 10 sortes de personnes dans le monde, ceux qui connaissent le binaire et ceux qui ne le connaissent pas&nbsp;&raquo;</p>
                            <p className='author'>Auteur inconnu</p>
                        </div>
                        <div className='quote-item'>
                            <p className='quote'>&laquo;&nbsp;Se réunir est un début, rester ensemble est un progrès, travailler ensemble est la réussite.&nbsp;&raquo;</p>
                            <p className='author'>Henry Ford</p>
                        </div>
                        <div className='quote-item'>
                            <p className='quote'>&laquo;&nbsp;L’action est la clé fondamentale de tout succès.&nbsp;&raquo;</p>
                            <p className='author'>Pablo Picasso</p>
                        </div>
                </Carousel>
            </section>
        )
    }
}

export default QuotesSlider;