import { Component, createRef } from 'react';
import { gsap } from 'gsap';
import './_portfolio.scss';
import Popup from '../popup/Popup';

import portfolioProjet1 from '../../img/portfolio-projet1-findyourwave.png';
import TBD from '../../img/PicID5.jpg';

class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            popups: [
                {
                    id: 1,
                    trigger: false,
                    title: 'Find Your Wave | application SPA',
                    content: "Application pour surfers et bodyboarders. Aprés création du profil, permet de consulter les prévisions météos et marées partout dans le monde et les enregistrer. Archivage des sessions de surf et infos associées.",
                    imageProject: portfolioProjet1,
                    content2:"Single Page Application développée dans le cadre de mon projet de formation, que je continue à développer avant une future mise en ligne",
                    skillsFront: ["React.JS", "JavaScript", "HTML", "CSS/SCSS"],
                    skillsBack: ["Node.JS","MySQL", "API externes"],
                },
                {
                    id: 2,
                    trigger: false,
                    title: 'Popup Content2',
                    content: 'This is the content of the popup 2.',
                    imageProject: TBD,
                    content2:"",
                    skillsFront: [],
                    skillsBack: [],
                },
                {
                    id: 3,
                    trigger: false,
                    title: 'Popup Content3',
                    content: 'This is the content of the popup 3.',
                    imageProject: TBD,
                    content2:"",
                    skillsFront: [],
                    skillsBack: [],
                },

            ]
        };

        this.handleTogglePopup = this.handleTogglePopup.bind(this);
    
        this.textRef = createRef();
    }

    componentDidMount() {
        const timeline = gsap.timeline({ repeat: -1 });

        const chars = Array.from(this.textRef.current.querySelectorAll(".display-dots"));

        timeline.from(chars, {opacity: 0, stagger: 0.5})
        .to(chars, {opacity: 1, stagger: 0.5, delay: 0})
        .from(chars.reverse(), {opacity: 1, stagger: 0.5})
        .to(chars.reverse(), {opacity: 0, stagger: 0.5, delay: 0});
    
        this.timeline = timeline;
    }

    componentWillUnmount() {
        this.timeline.kill();
    }

    handleTogglePopup(id) {
        const popups = [...this.state.popups];
        const index = popups.findIndex(p => p.id === id);
        popups[index].trigger = !popups[index].trigger;
        this.setState({ popups });
    }

    randomKey() {
        const keyRandomNumber = Math.random()/1000;
        return keyRandomNumber;
    }

    imageFrontToDisplay (skill) {
        if (skill === "React.JS") {
            return (<i className="fa-brands fa-react fa-beat-fade"></i>)
        } else if (skill === "JavaScript") {
            return (<i className="fa-brands fa-square-js fa-beat-fade"></i>)
        } else if (skill === "HTML") {
            return (<i className="fa-brands fa-html5 fa-beat-fade"></i>)
        } else if (skill === "CSS/SCSS") {
            return (<i className="fa-brands fa-css3-alt fa-beat-fade"></i>)
        }
    }

    imageBackToDisplay (skill) {
        if (skill === "Node.JS") {
            return (<i className="fa-brands fa-node fa-beat-fade"></i>)
        } else if (skill === "MySQL") {
            return (<i className="fa-solid fa-database fa-beat-fade"></i>)
        } else if (skill === "API externes") {
            return (<i className="fa-solid fa-gears fa-beat-fade"></i>)
        }
    }

    render() {
        return (
            <>
                <div id='portfolio'><h2 className='title'>Portfolio<span ref={this.textRef}><span className='display-dots'>.</span><span className='display-dots'>.</span><span className='display-dots'>.</span></span></h2></div>
                {this.state.popups.map((popup) => (
                    <div key= {popup.id}>
                        <button onClick={() => this.handleTogglePopup(popup.id)}>Toggle Btn</button>
                        <Popup trigger={popup.trigger} closePopup={() => this.handleTogglePopup(popup.id)}>
                            <h3>{popup.title}</h3>
                            <p>{popup.content}</p>
                            <img className='img-project' src={popup.imageProject} alt='project-insight'></img>
                            <p>{popup.content2}</p>
                            <div className="stacks-container">
                                <div className="stackFront-container">
                                    <h4>Stacks Front:</h4>
                                    <em>{popup.skillsFront.map((skill) => (
                                        <div key={this.randomKey()}>
                                            <p>{`#${skill}`}</p>
                                            {this.imageFrontToDisplay(skill)}
                                        </div>
                                    ))}</em>
                                </div>
                                <div className="stackFront-container">
                                    <h4>Stacks Back:</h4>
                                    <em>{popup.skillsBack.map((skill) => (
                                        <div key={this.randomKey()}>
                                            <p>{`#${skill}`}</p>
                                            {this.imageBackToDisplay(skill)}
                                        </div>
                                    ))}</em>
                                </div>
                            </div>  
                        </Popup>
                    </div>
                ))}
            </>
        )
    }
}

export default Portfolio;