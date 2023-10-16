import { useNavigate } from "react-router-dom";
import "../styling/pagenotfound.css";
import pageNotfound from "/404.gif";

const PageNotFound = () => {
  const navigate = useNavigate();
  const clickBackBtn = () => {
    navigate("/");
  };
  return (
    <div
      className="notFound"
      style={{
        backgroundImage: ` url(${pageNotfound})`,
      }}
    >
      {/* click the button, then back to movies */}
      <button className="backbtn" type="button" onClick={clickBackBtn}>
        🎬 Back to Movies
      </button>
      <h1>404 Errors</h1>
      <p>
        Oh snap! You did't break the internet, but we can't find what you are
        looking for
      </p>
    </div>
  );
};

export default PageNotFound;
