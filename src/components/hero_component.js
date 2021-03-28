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
        Discover innovative ways to decorate

        We provide unmatched quality, comfort, and style for property owners across the country.
        Our experts combine form and function in bringing your vision to life. Create a room in your
        own style with our collection and make your property a reflection of you and what you love.

      </div>
    </section>
  );
};


export default Hero;