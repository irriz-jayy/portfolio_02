import "./App.css";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Languages from "./components/Languages";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Home />
      <Languages />
      <Project />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
