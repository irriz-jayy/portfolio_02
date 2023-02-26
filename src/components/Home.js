import "../App.css";
import Image from "./Image";

const Home = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="hero-image">
          <Image />
        </div>
        <div className="hero-text">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            impedit perspiciatis cumque earum soluta sapiente, qui accusantium
            doloremque! Voluptatibus ad iure ducimus suscipit sapiente dolorum
            veritatis maxime nisi. Cumque, animi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
