import { Component } from "react";
import Header from "./components/header/Header";
import BannerTop from "./components/banner-top/BannerTop";
import AboutMe from "./components/about-me/AboutMe";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <BannerTop />
                <AboutMe />
            </>
        );
    }
}

export default App;
