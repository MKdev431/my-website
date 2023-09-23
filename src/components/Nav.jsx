import Logo from "../components/Logo";

import "../components/styles/Nav.scss";

export default function Nav() {
  return (
    <div className="navbar-wrapper">
      <Logo />
      <div className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a
              href="#"
              className="nav__link"
            >
              Portfolio
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#"
              className="nav__link"
            >
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#"
              className="nav__link"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
