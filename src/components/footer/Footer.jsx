import { Component } from 'react';
import './_footer.scss';


class Footer extends Component {
    
    render() {

        return (
            <div className='footer'>
                <p id='copyright'>&#169; Copyright 2023 | Benjamin LEVEQUE | Tous droits réservés</p>
                <ul id='footer-links'>
                    <li className='footer-link'><a href='/LegalNotice'>Mentions légales</a></li>
                    <li className='footer-link'>Plan du site</li>
                </ul>
            </div>
        )
    }
}
export default Footer