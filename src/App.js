import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";

import Home from "./pages/Home";
import LegalNoticPage from "./pages/LegalNoticPage";

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/LegalNotice/" element={<LegalNoticPage />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
