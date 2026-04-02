import Navbar from "../components/Navbar";
import Gallery from "./components/Gallery";
import Content from "./components/Content";
import Footer from "../components/Footer";

function Main() {
    return (
        <div>
            <Navbar active="main" />
            <Gallery />
            <Content />
            <Footer />
        </div>
    );
}

export default Main;
