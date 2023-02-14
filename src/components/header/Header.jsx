import './_header.scss'
import React, { Component } from 'react'
import logo from '../../img/logo-dark-theme.png'


class Header extends Component {
    render() {
        return (
            <nav className='navbar_header'>
                <div className='logo-container'><img className="navbar_logo" src={logo} alt='logo-light-theme' /></div>
                <ul className="navbar_list">
                    <li className="navbar_item">Accueil</li>
                    <li className="navbar_item">Profil</li>
                    <li className="navbar_item">Compétences</li>
                    <li className="navbar_item">Portefolio</li>
                    <li className="navbar_item">Contact</li>
                </ul>
                <button className="navbar_burger">coucou</button>
            </nav>
        )
    }
}

export default Header