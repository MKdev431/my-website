import Nav from "../components/Nav";
import MyImage from "../components/images/michal_kurek-fullsize-rbg.png";
import Button from "../components/Button";

import "../components/styles/Header.scss";
import "../components/styles/Button.scss";

export default function Header() {
  return (
    <div className="header">
      <Nav />
      <div className="about">
        <div className="text-wrapper">
          <h1 className="about__name">Michał Kurek</h1>
          <h2 className="about__profession">Frontend Developer</h2>
          <p className="about__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi totam tempore consequuntur? Eos doloremque id excepturi eligendi molestias inventore architecto cumque provident </p>
          <Button />
        </div>
        <div className="img-wrapper">
          <img
            src={MyImage}
            alt="zdjęcie Michał Kurek"
            className="about__img"
          />
        </div>
      </div>
    </div>
  );
}
