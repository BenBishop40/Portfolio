import React, { Component } from 'react';
import './_about_me.scss';
import pictCartoon from '../../img/PicID5.jpg';

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

class TxtToDisplay extends Component {
  constructor(props) {
    super(props);

    this.h2Ref = React.createRef();
    this.h3Ref = React.createRef();
  }
  typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = '';

    let i = 0;
    let timer = setInterval(() => {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        element.classList.remove("hidden");
      }
    }, speed);
  }

  componentDidMount() {
    const speed = 75;
    const h2 = this.h2Ref.current;
    const h3 = this.h3Ref.current;

    const delay =  h3.innerHTML.length*speed;
    h2.classList.add("hidden");
    h3.classList.add("hidden");

    this.typeEffect(h2, speed);
    
    setTimeout(() => {
      this.typeEffect(h3, speed);
    }, delay);
  }

  render() {
    return (
      <div className='txt-display'>
        <h2 ref={this.h2Ref}>Je suis Benjamin LEVEQUE</h2>
        <h3 ref={this.h3Ref}>Développeur web et intégrateur</h3>
      </div>
    )
  }
}
  
class AboutMe extends Component {
  render() {
    return (
      <div id='about-me'>
        <img className='img-cartoon' alt='portrait_cartoon_benjamin_leveque' src={pictCartoon}/>
        <div className="presentation">
          <p>
            Hello{' '}
            <TxtRotate
              toRotate='["World !", "Visiteur !", "Recruteur ?!"]'
              period="5000"
            />
            <span className='wrap-border'>
              |
            </span>
          </p>
          <TxtToDisplay />
          <button className='btn btn-about-me lightblue-btn'><a href='#profil'>En savoir plus</a></button>
        </div>
      </div>
    );
  }
}

export default AboutMe;
