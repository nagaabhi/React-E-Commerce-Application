import "./Sidebar.css";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
const Sidebar = ({ removeNavbar }) => {
  const { userLogin, mode, updateAppMode, setAuthenticate } =
    useContext(DataContext);
  return (
    <>
      <div
        className={`side-bar-container ${
          mode.type === "Dark" && "side-bar-dark-mode"
        }`}
      >
        <div className="cros-icon" onClick={() => removeNavbar(false)}>
          <RxCross2 size="30" />
        </div>

        <div className={`application-navigations ${mode.type === "Dark" && "dark-application-navigation"}`}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <div onClick={() => removeNavbar(false)} className="home">
              Home
            </div>
          </Link>

          <Link to="/categories" style={{ textDecoration: "none" }}>
            <div onClick={() => removeNavbar(false)} className="categories">
              Categories
            </div>
          </Link>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <div onClick={() => removeNavbar(false)} className="about">
              About
            </div>
          </Link>

          <div className="contact">contact</div>
          <div className="login-button" onClick={() => removeNavbar(false)}>
            <Link to="/login">
              <button onClick={() => setAuthenticate("login")}>
                {userLogin.isAuthenticated ? "login" : "logout"}
              </button>
            </Link>
          </div>

          <div
            className="dark-light-toggle"
            onClick={() => removeNavbar(false)}
          >
            <button onClick={updateAppMode}>
              {mode.type === "Dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
