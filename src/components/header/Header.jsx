import './_header.scss'
import React, { Component } from 'react'
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
        const isTransparent = window.scrollY < 100;
        this.setState({ isTransparent });
    }
    
    render() {
        const { isTransparent, isSmallScreen, showLinks } = this.state;
        
        const handleClick = () => {
            window.location.reload();
        }
        const handleShowLinks = () => {
            this.setState({ showLinks: !this.state.showLinks });
        }

        console.log(showLinks);

        return (
            <nav className={`navbar_header ${showLinks ? "show_nav" : ""} ${(isTransparent && !isSmallScreen) ? 'navbar_header--transparent' : ''}`}>
                <div className='logo-container'>
                    <img className="navbar_logo" src={logo} alt='logo-dark-theme' onClick={handleClick}/>
                </div>
                <ul className="navbar_links">
                    <li className="navbar_item"><a href='#about-me' className='navbar_link'>Accueil</a></li>
                    <li className="navbar_item"><a href='#profil' className='navbar_link'>Profil</a></li>
                    <li className="navbar_item"><a href='#skills' className='navbar_link'>Compétences</a></li>
                    <li className="navbar_item"><a href='#portfolio' className='navbar_link'>Portfolio</a></li>
                    <li className="navbar_item"><a href='#contact' className='navbar_link'>Contact</a></li>
                </ul>
                <button className="navbar_burger" onClick={handleShowLinks}>
                    <span className="burger_bar"></span>
                </button>
            </nav>
        )
    }
}

export default Header