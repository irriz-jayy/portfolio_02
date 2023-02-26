import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Home />
      <Project />
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
