import { Component } from "react";
import Header from "./components/header/Header";
import BannerTop from "./components/banner-top/BannerTop";
import AboutMe from "./components/about-me/AboutMe";
import Profil from "./components/profil/Profil";
import Status from "./components/status/Status";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <BannerTop />
                <AboutMe />
                <Profil />
                <Status />
            </>
        );
    }
}

export default App;
