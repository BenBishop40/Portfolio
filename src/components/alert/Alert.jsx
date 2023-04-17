import { Component } from 'react';
import './_alert.scss'

class Alert extends Component {
    
    render() {
        return (
            <>
                <div className='alert-container'>
                    <p>{`Votre message a bien été envoyé. Merci ${this.props.user_name} !`}</p>
                    <button className="close-btn lightdark-btn" onClick={this.props.closeAlert}>close</button>
                </div>
            </>
        )
    }
}

export default Alert;