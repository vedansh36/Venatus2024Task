import { useNavigate} from "react-router-dom";
import "./vematus.css"
export default function Header() {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/login");
  }
  return (
    <>
      <div className="header">
        <div className="header-left">
          <div className="header-left-icon">
            <img src="./public/MC_Intuit_New_-_Brand_Assets_02.png" alt="icon" className="header-left-image" />
          </div>
          <div>
            <a href="" className="header-links">Solutions and Services ▼</a>
            <a href="" className="header-links">Resources ▼</a>
            <a href="" className="header-links">Switch to Mailchimp</a>
            <a href="" className="header-links">Pricing</a>
          </div>
        </div>
        <div className="header-right">
          <a href="#">
            <img
              className="header-search-icon"
              src="./public/OIP (1).jpeg"
              alt="search icon"
            />
          </a>
          <a className="header-right-link" href="#">
            EN ▼
          </a>
          <a className="header-right-link" href="#">
            Sales: +1(800) 315-5939
          </a>
          <a href="" className="header-right-pricing">Pricing</a>
          <button onClick={handleClick} className="header-button1">Log In</button>
          <button className="header-button2">Sign Up</button>
          <button className="header-ham"><img src="Hamburger.svg" alt="ham"/></button>
        </div>
      </div>
    </>
  );
}
