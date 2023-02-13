import './_header.scss'
import React, { Component } from 'react'



class Header extends Component {
    render() {
        return (
            <nav>
                <div className="navbar_logo"></div>
                <ul className="navbar_list">
                    <li className="navbar_item">Accueil</li>
                    <li className="navbar_item">Profil</li>
                    <li className="navbar_item">Compétences</li>
                    <li className="navbar_item">Portefolio</li>
                    <li className="navbar_item">Contact</li>
                    <button className="navbar_burger"></button>
                </ul>
            </nav>
        )
    }
}

export default Header