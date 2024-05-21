import "./App.scss";
import bgDesktopBot from "./assets/images/bg-pattern-bottom-desktop.svg";
import bgDesktopTop from "./assets/images/bg-pattern-top-desktop.svg";
import AnneImage from "./assets/images/image-anne.jpg";
import ColtonImage from "./assets/images/image-colton.jpg";
import IreneImage from "./assets/images/image-irene.jpg";
import RatingBar from "./components/rating";
import Review from "./components/review";
import Text from "./components/text";

function App() {
  return (
    <>
      <div
        className="background"
        style={{
          backgroundImage: `url(${bgDesktopTop}), url(${bgDesktopBot})`,
        }}
      ></div>
      <div className="main">
        <div className="top-container">
          <div className="text-area">
            <Text
              header="10,000+ of our users love our products."
              description="We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services."
            />
          </div>
          <div className="ratings-area">
            <RatingBar text="Rated 5 Stars in Reviews" />
            <RatingBar text="Rated 5 Stars in Report Guru" />
            <RatingBar text="Rated 5 Stars in BestTech" />
          </div>
        </div>
        <div className="reviews-section">
          <Review
            name="Colton Smith"
            review='"We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"'
            image={ColtonImage}
          />
          <Review
            name="Irene Roberts"
            review='"Customer service is always excellent and very quick turn around. Completely
            delighted with the simplicity of the purchase and the speed of delivery."'
            image={IreneImage}
          />
          <Review
            name="Anne Wallace"
            review='"Put an order with this company and can only praise them for the very high
            standard. Will definitely use them again and recommend them to everyone!"'
            image={AnneImage}
          />
        </div>
      </div>
    </>
  );
}

export default App;
