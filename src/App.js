import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";

import Home from "./pages/Home";
import LegalNoticPage from "./pages/LegalNoticPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./components/not-found/NotFound";

class App extends Component {
    // fonction retour Home (icone et lien notFound via props)
    handleClick = () => {
        window.location.replace("/");
    };
    render() {
        return (
            <>
                <BrowserRouter>
                    <Header handleClick={this.handleClick} />
                    <Routes>
                        <Route path="/LegalNotice/" element={<LegalNoticPage />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<NotFound handleClick={this.handleClick} />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </>
        );
    }
}

export default App;
