import { Component } from 'react';
import './_footer.scss'
import Popup from '../legale-notice/LegalNotice';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trigger: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.closePopup = this.closePopup.bind(this);

        
    }
    handleClick() {
        this.setState({ trigger: !this.state.trigger });
    }

    closePopup() {
        this.setState({ trigger: false })
    }
    render() {

        return (
            <div className='footer'>
                <p id='copyright'>&#169; Copyright 2023 | Benjamin LEVEQUE | Tous droits réservés</p>
                <ul id='footer-links'>
                    <li className='footer-link' onClick={this.handleClick}>Mentions légales</li>
                    <li className='footer-link'>Plan du site</li>
                    <li className='footer-link'>Politique de confidentialité</li>
                </ul>
                    <Popup trigger={this.state.trigger} closePopup={this.closePopup} />
            </div>
        )
    }
}
export default Footer