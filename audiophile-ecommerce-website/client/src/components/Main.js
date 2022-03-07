import HeroImage from "../assets/images/home/desktop/image-hero.jpg";
const Main = () => (
  <div>
    <img src={HeroImage} alt="hero" style={{ width: "100%" }} />
    <p>New product</p>
    <h1>XX99 Mark II Headphones</h1>
    <p>
      Experience natural, lifelike audio and exceptional build quality made for
      the passionate music enthusiast.
    </p>
    <button>SEE PRODUCT</button>
  </div>
);

export default Main;
