import { Component } from 'react';
import './_about_me.scss';

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <img src="" alt="" className="about-me-pic" />
                <h1>This pen is
                <span
                    class="txt-rotate"
                    data-period="2000"
                    data-rotate='[ "nerdy.", "simple.", "pure JS.", "pretty.", "fun!" ]'></span>
                </h1>
                <h2>A single &lt;span&gt; is all you need.</h2>
            </div>
        )
    }
}

export default AboutMe