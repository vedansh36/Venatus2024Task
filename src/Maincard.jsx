import "./vematus.css";
export default function Maincard({
  heading,
  imgURL,
  color,
  content,
  buttonText,
}) {
  return (
    <>
      <div className="main-card">
        <div className="main-section1">
          <h2 className="main-section1-heading">{heading}</h2>
          <img className="main-section1-img" src={imgURL} alt="image" />
        </div>
        <div style={{ backgroundColor: color }} className="main-section2">
          <p className="main-section2-para">{content}</p>
          <button style={{ backgroundColor: color }} className="main-button">
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}
