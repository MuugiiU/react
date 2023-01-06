import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Content from "./components/Content";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      {/* <Footer />  */}
    </div>
  );
}

export default App;
