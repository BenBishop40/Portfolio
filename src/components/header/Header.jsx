import './_header.scss'
import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import logo from '../../img/logo-dark-theme.png'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTransparent: true,
            isSmallScreen: false,
            showLinks: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.checkScreenSize = this.checkScreenSize.bind(this);
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
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
        const isTransparent = window.scrollY < 250;
        this.setState({ isTransparent });
    }
    handleLinkClick = (event) => {
        const { hash } = event.currentTarget;
        const element = document.querySelector(hash);

        // fermer menu burger post click
        this.setState({ showLinks: false })

        // Scroll vers section ID
        if (element) {
            event.preventDefault();
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth",
            });
        };
    }

    
    render() {
        
        const { isTransparent, isSmallScreen, showLinks } = this.state;
        
        // fonction icone retour Home
        const handleClick = () => {
            window.location.replace('/');
        }
        // Menu Burger ouverture et fermeture
        const handleShowLinks = () => {
            this.setState({ showLinks: !this.state.showLinks });
        }


        return (
            <header>
                <nav className={`navbar_header ${showLinks ? "show_nav" : ""} ${(isTransparent && !isSmallScreen) ? 'navbar_header--transparent' : ''}`}>
                    <div className='logo-container'>
                        <img className="navbar_logo" src={logo} alt='logo-dark-theme' onClick={handleClick}/>
                    </div>
                    <ul className="navbar_links">
                        <li className="navbar_item slideInDown1"><a href='/#about-me' className='navbar_link' onClick={this.handleLinkClick}>Accueil</a></li>
                        <li className="navbar_item slideInDown2"><a href='/#profil' className='navbar_link' onClick={this.handleLinkClick}>Profil</a></li>
                        <li className="navbar_item slideInDown3"><a href='/#skills' className='navbar_link' onClick={this.handleLinkClick}>Compétences</a></li>
                        <li className="navbar_item slideInDown4"><a href='/#portfolio' className='navbar_link' onClick={this.handleLinkClick}>Portfolio</a></li>
                        <li className="navbar_item slideInDown5"><a href='/#contact' className='navbar_link' onClick={this.handleLinkClick}>Contact</a></li>
                    </ul>
                    <button className="navbar_burger" onClick={handleShowLinks}>
                        <span className="burger_bar"></span>
                    </button>
                </nav>
            </header>
        )
    }
}

export default Header