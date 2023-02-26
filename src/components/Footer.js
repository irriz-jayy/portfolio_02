import "../App.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer-container">
      <h3 className="footer-text">Designed by Jay</h3>
      <h3 className="footer-text">Copyright © {year} JF</h3>
    </div>
  );
};

export default Footer;
