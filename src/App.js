import { Component } from "react";
import Header from "./components/header/Header";
import BannerTop from "./components/banner-top/BannerTop";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <BannerTop />
            </>
        );
    }
}

export default App;
