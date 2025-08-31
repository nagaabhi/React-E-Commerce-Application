import "./Footer.css"
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
const Footer = () => {

  const {mode} = useContext(DataContext);
  return (
    <>
      <footer>
        <div className={`footer-container ${mode.type === "Dark" && "footer-result"}`}>
          <div className="footer-section">
            <h3>About Food Spot</h3>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Help</h3>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Order Tracking</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="#">Restaurants</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Rewards</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Get the App</h3>
            <p>Download Food Spot on your mobile:</p>
            <div className="store-buttons">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                />
              </a>
              <a href="#">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2025 Food Spot. All rights reserved.
        </div>
      </footer>
    </>
  );
};
export default Footer;
