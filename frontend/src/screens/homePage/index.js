import Navbar from "../../components/Navbar/Navbar";
import LatestDrop from "../../components/Latest Drop/LatestDrop";
import ChatSection from "../../components/Chat Section/chatSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
function HomePage() {
    return (
        <div className="home">
            <Navbar />
            <Header />
            <LatestDrop />
            <ChatSection />
            <Footer />

        </div>
    );
}

export default HomePage;
