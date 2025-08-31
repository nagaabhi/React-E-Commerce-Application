import "./Navbar.css";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

const Navbar = () => {
  const { setAuthenticate, mode, updateAppMode, userLogin } =
    useContext(DataContext);
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <h1>
              Food<span>spot</span>
            </h1>
          </Link>
        </div>

        <div className="navbar-middle">
          <ul>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>

            <Link to="/categories" style={{ textDecoration: "none" }}>
              <li>Categories</li>
            </Link>

            <Link to="/about" style={{textDecoration : "none"}}>
              <li>About</li>
            </Link>

            <li>Contact</li>
          </ul>
        </div>

        <div className="navbar-right">
          <div className="login-button">
            <Link to="/login">
              <button onClick={() => setAuthenticate("login")}>
                {userLogin.isAuthenticated ? "login" : "logout"}
              </button>
            </Link>
          </div>

          <div className="dark-light-toggle">
            <button onClick={updateAppMode}>
              {mode.type === "Dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
