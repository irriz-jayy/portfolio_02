import "../App.css";
// import Image from "./Image";

const Home = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-image">{/* <Image /> */}</div>
        <div className="hero-text">
          <p className="text">
            <h1 className="welcome-text">Welcome</h1>I am a Kenyan based young
            budding software engineer. I am currently learning HTML, Css,
            JavaScript, React.js, Ruby, Ruby on rails and many more. All this is
            on my journey to being a full stack web dev.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
