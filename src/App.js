import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";

import Home from "./pages/Home";
import LegalNoticPage from "./pages/LegalNoticPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/LegalNotice/" element={<LegalNoticPage />} />
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </>
        );
    }
}

export default App;
