import leftIcon from "../assets/images/icon-angle-left.svg";
import rightIcon from "../assets/images/icon-angle-right.svg";

const Hero = () => {

  return (
    <section className="hero">
      <div className="hero__image">
      
        <div className="hero__slide-button-wrapper">
          <button className="hero__slide-button">
            <img src={leftIcon} className="hero__slide-button-img" alt="slide left"/>
          </button>
          <button className="hero__slide-button">
            <img src={rightIcon} className="hero__slide-button-img" alt="slide right"/>
          </button>
        </div>
      </div>
      <div className="hero__description">
        <h1 className="hero__description-header">
          Discover innovative ways to decorate
        </h1>

        <div className="hero__description-text">
          We provide unmatched quality, comfort, and style for property owners across the country.
          Our experts combine form and function in bringing your vision to life. Create a room in your
          own style with our collection and make your property a reflection of you and what you love.        
        </div>

        <button className="hero__button">
          <span className="hero__button-text">Shop now</span>
          <svg className="hero__button-svg" width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
        </button>

      </div>
    </section>
  );
};


export default Hero;