import { Component } from "react";
import Header from "./components/header/Header";
import AboutMe from "./components/about-me/AboutMe";
import Profil from "./components/profil/Profil";
import Status from "./components/status/Status";
import Skills from "./components/skills/Skills";
import QuotesSlider from "./components/quotes-slider/QuotesSlider";
import Footer from "./components/footer/Footer";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <AboutMe />
                <Profil />
                <Status />
                <Skills />
                <QuotesSlider />
                <Footer />
            </>
        );
    }
}

export default App;
