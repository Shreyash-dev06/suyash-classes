import logo from "../assets/logo.png";

function Loader() {
  return (
    <div className="loader-container">
      <img
        src={logo}
        alt="Suyash Classes"
        className="loader-image"
      />

      <h2>Suyash Classes</h2>
      <p>Building Bright Futures Since 1990</p>
    </div>
  );
}

export default Loader;