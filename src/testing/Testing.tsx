import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Quiz from "./features/Quiz";

function Testing() {
    return (
        <div>
            <Navbar active="testing" />
            <Quiz />
            <Footer />
        </div>
    );
}

export default Testing;
