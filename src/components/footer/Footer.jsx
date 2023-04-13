import { Component } from 'react';
import { Link } from 'react-router-dom';
import './_footer.scss';


class Footer extends Component {
    
    render() {

        return (
            <section className='footer'>
                <p id='copyright'>&#169; Copyright 2023 | Benjamin LEVEQUE | Tous droits réservés</p>
                <ul id='footer-links'>
                    <li className='footer-link'><Link to={"/LegalNotice"}>Mentions légales</Link></li>
                    <li className='footer-link'>Plan du site</li>
                </ul>
            </section>
        )
    }
}
export default Footer