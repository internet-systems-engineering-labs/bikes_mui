import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BikesGrid from "./components/BikesGrid";

function List() {
    return (
        <div>
            <Navbar active="list" />
            <BikesGrid />
            <Footer />
        </div>
    );
}

export default List;
