import { Component } from "react";
import Header from "./components/header/Header";
import BannerTop from "./components/banner-top/BannerTop";
import AboutMe from "./components/about-me/AboutMe";
import Profil from "./components/profil/Profil";
import Status from "./components/status/Status";
import Skills from "./components/skills/Skills";
import QuotesSlider from "./components/quotes-slider/QuotesSlider";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <BannerTop />
                <AboutMe />
                <Profil />
                <Status />
                <Skills />
                <QuotesSlider />
            </>
        );
    }
}

export default App;
