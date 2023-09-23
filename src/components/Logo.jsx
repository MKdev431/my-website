import MyLogo from "../components/images/przezroczyte czarne-kd.png";
import "./styles/Logo.scss";

export default function Logo() {
  return (
    <div className="logo">
      <img
        src={MyLogo}
        alt="Logo Michał Kurek"
        className="logo__img"
      />
    </div>
  );
}
