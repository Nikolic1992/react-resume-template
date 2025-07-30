import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
function Hero() {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm John Snow,</span> Frontend Developer based in Castle Black
      </h1>
      <p>
        I specialize in creating beautiful and functional user interfaces using
        the latest web technologies. Let's build something amazing together!
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
