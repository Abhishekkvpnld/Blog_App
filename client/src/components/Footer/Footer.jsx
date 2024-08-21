import "./footer.css";
import fbIcon from '../../assets/facebook.svg';
import instaIcon from '../../assets/instagram.svg';
import whatsapp from "../../assets/whatsapp.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Learn more about our blog and the team behind it.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: info@blogapp.com</p>
                    <p>Phone: +91 8674586235</p>
                    <p>
                        <img width={"25px"} style={{ marginRight: "5px" }} height={"25px"} src={fbIcon} alt="icon" />
                        <img width={"25px"} style={{ marginRight: "5px" }} height={"25px"} src={whatsapp} alt="icon" />
                        <img width={"25px"} style={{ marginRight: "5px" }} height={"25px"} src={instaIcon} alt="icon" />
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Blog App. All rights reserved.</p>
            </div>
        </footer>

    )
}

export default Footer;