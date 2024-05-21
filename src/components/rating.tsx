import starIcon from "../assets/images/icon-star.svg";
import "./styles/rating.scss";

function RatingBar(props: { text: string }) {
  return (
    <div className="rating-bar">
      <div className="stars">
        <img className="star" src={starIcon} />
        <img className="star" src={starIcon} />
        <img className="star" src={starIcon} />
        <img className="star" src={starIcon} />
        <img className="star" src={starIcon} />
      </div>

      <p className="rating-text">{props.text}</p>
    </div>
  );
}

export default RatingBar;
