import './_header.scss'
import React, { Component } from 'react'
import logo from '../../img/logo-dark-theme.png'


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTransparent: true,
            isSmallScreen: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.checkScreenSize);
    }
    checkScreenSize() {
        const isSmallScreen = window.innerWidth < 768;
        this.setState({ isSmallScreen });
    }
    handleScroll() {
        const isTransparent = window.scrollY < 100;
        this.setState({ isTransparent });
    }

    render() {
        const { isTransparent, isSmallScreen } = this.state;

        return (
            <nav className={`navbar_header ${(isTransparent && !isSmallScreen) ? 'navbar_header--transparent' : ''}`}>
                <div className='logo-container'><img className="navbar_logo" src={logo} alt='logo-light-theme' /></div>
                <ul className="navbar_list">
                    <li className="navbar_item"><a href='#about-me'>Accueil</a></li>
                    <li className="navbar_item"><a href='#profil'>Profil</a></li>
                    <li className="navbar_item"><a href='#skills'>Compétences</a></li>
                    <li className="navbar_item">Portefolio</li>
                    <li className="navbar_item">Contact</li>
                </ul>
                <button className="navbar_burger">coucou</button>
            </nav>
        )
    }
}

export default Header