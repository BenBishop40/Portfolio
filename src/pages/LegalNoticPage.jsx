import { Component } from "react";
import Header from "../components/header/Header";
import LegalNotice from "../components/legal-notice/Legal-Notice";
import Footer from "../components/footer/Footer";

class LegalNoticPage extends Component {
    render() {
        return (
            <>
                <Header />
                <LegalNotice />
                <Footer />
            </>
        );
    }
}

export default LegalNoticPage;
