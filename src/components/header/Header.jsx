import './_header.scss'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
        console.log({ hash });
        console.log(element);

        // Scroll vers section ID
        if (element) {
            event.preventDefault();
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth",
            });
        };
        // fermer menu burger post click
        this.setState({ showLinks: false })
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
                        <li className="navbar_item slideInDown1"><Link to='/#about-me' className='navbar_link' onClick={this.handleLinkClick}>Accueil</Link></li>
                        <li className="navbar_item slideInDown2"><Link to='/#profil' className='navbar_link' onClick={this.handleLinkClick}>Profil</Link></li>
                        <li className="navbar_item slideInDown3"><Link to='/#skills' className='navbar_link' onClick={this.handleLinkClick}>Compétences</Link></li>
                        <li className="navbar_item slideInDown4"><Link to='/#portfolio' className='navbar_link' onClick={this.handleLinkClick}>Portfolio</Link></li>
                        <li className="navbar_item slideInDown5"><Link to='/#contact' className='navbar_link' onClick={this.handleLinkClick}>Contact</Link></li>
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