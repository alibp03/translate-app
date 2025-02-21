import bgImage from '../assets/hero_img.jpg';
import logoImage from '../assets/logo.svg';

export default function Background() {
  return (
    <div className="background">
      <img src={bgImage} alt="background" className="bg-image" />
      <div className="bg-color"></div>
      <img src={logoImage} alt="logo" className="logo-image" />
    </div>
  );
}
