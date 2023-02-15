import React, { Component } from 'react';
import './_about_me.scss';
// import pictCartoon from '../../img/pic_id_cartoon.jpg';


class TxtRotate extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        toRotate: JSON.parse(props.toRotate),
        loopNum: 0,
        txt: '',
        isDeleting: false,
      };
    }
  
    componentDidMount() {
      this.tick();
    }
  
    tick() {
      const { toRotate, loopNum, txt, isDeleting } = this.state;
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];
  
      if (isDeleting) {
        this.setState({ txt: fullTxt.substring(0, txt.length - 1) });
      } else {
        this.setState({ txt: fullTxt.substring(0, txt.length + 1) });
      }
  
      let delta = 300 - Math.random() * 100;
      const that = this;
  
      if (isDeleting) {
        delta /= 2;
      }
  
      if (!isDeleting && txt === fullTxt) {
        this.setState({ isDeleting: true });
        delta = this.props.period;
      } else if (isDeleting && txt === '') {
        this.setState(prevState => ({
          isDeleting: false,
          loopNum: prevState.loopNum + 1,
          txt: '',
        }));
        delta = 1000;
      }
  
      setTimeout(() => {
        that.tick();
      }, delta);
    }
  
    render() {
      return (
        <span className="txt-rotate">
          <span className="wrap">{this.state.txt}</span>
        </span>
      );
    }
  }
  
  export default class AboutMe extends Component {
    render() {
      return (
        <div className='about-me'>
          <p>
            Hello,{' '}
            <TxtRotate
              toRotate='["World !", "Visiteur !", "Recruteur ?!"]'
              period="5000"
            />
          </p>
        </div>
      );
    }
  }