import "./styles/review.scss";

function Review(props: { name: string; review: string; image: string }) {
  return (
    <div className="review-box">
      <div className="user-badge">
        <img className="user-picture" src={props.image} alt="user picture" />
        <div className="user-text">
          <p className="name">{props.name}</p>
          <p className="badge">Verified Buyer</p>
        </div>
      </div>
      <div className="review">{props.review}</div>
    </div>
  );
}

export default Review;
