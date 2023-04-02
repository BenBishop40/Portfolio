import { Component, createRef } from 'react';
import { gsap } from 'gsap';
import './_portfolio.scss';
import Popup from '../popup/Popup';

class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            popups: [
                {
                    id: 1,
                    trigger: false,
                    title: 'Popup Content1',
                    content: 'This is the content of the popup 1.'
                },
                {
                    id: 2,
                    trigger: false,
                    title: 'Popup Content2',
                    content: 'This is the content of the popup 2.'

                },
                {
                    id: 3,
                    trigger: false,
                    title: 'Popup Content3',
                    content: 'This is the content of the popup 3.'

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
    render() {
        return (
            <>
                <div id='portfolio'><h2 className='title'>Portfolio<span ref={this.textRef}><span className='display-dots'>.</span><span className='display-dots'>.</span><span className='display-dots'>.</span></span></h2></div>
                {this.state.popups.map((popup) => (
                    <div key= {popup.id}>
                        <button onClick={() => this.handleTogglePopup(popup.id)}>Toggle Btn</button>
                        <Popup trigger={popup.trigger} closePopup={() => this.handleTogglePopup(popup.id)}>
                            <h2>{popup.title}</h2>
                            <p>{popup.content}</p>
                        </Popup>
                    </div>
                ))}
            </>
        )
    }
}

export default Portfolio;