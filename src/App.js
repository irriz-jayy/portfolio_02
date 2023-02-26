import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Home />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
