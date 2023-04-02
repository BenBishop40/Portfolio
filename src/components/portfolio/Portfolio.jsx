import { Component } from 'react';
import './_portfolio.scss';
import Popup from '../popup/Popup';

class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showPopup: false,
        };

        this.handleTogglePopup = this.handleTogglePopup.bind(this);
    }

    handleTogglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <>
                <div><h2>Portfolio</h2></div>
                <div>
                    <button onClick={this.handleTogglePopup}>Toggle btn</button>
                    <Popup trigger={this.state.showPopup} closePopup={this.handleTogglePopup}>
                        <h2>Popup Content1</h2>
                        <p>This is the content of the popup 1.</p>
                    </Popup>
                </div>
                <div>
                    <button onClick={this.handleTogglePopup}>Toggle btn</button>
                    <Popup trigger={this.state.showPopup} closePopup={this.handleTogglePopup}>
                        <h2>Popup Content2</h2>
                        <p>This is the content of the popup 2.</p>
                    </Popup>
                </div>
            </>
        )
    }
}

export default Portfolio;