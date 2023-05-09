import React, { Component } from 'react'
import './_not-found.scss'


export default class NotFound extends Component {
  render() {
    const { handleClick } = this.props;
    return (
        <>
        <div className='not-found-container'>
            <div className="redirect-box">
            <code><p>Oups... il semble que vous soyez sur une mauvaise page</p> 
                <p><strong>cliquez sur le bouton</strong> pour revenir au point de départ</p>
            </code>
              <button onClick={handleClick} className='btn lightblue-btn'>Retour accueil</button>
            </div>
        </div>
      </>
    )
  }
}
