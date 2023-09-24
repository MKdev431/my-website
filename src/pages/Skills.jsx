import "../components/styles/Skills.scss";

export default function Skills() {
  return (
    <div className="skills">
      <h2 className="skills__title">Umiejętności</h2>
      <div className="skill-wrapper">
        <div className="skill">
          <img
            src="/icons/html.png"
            alt=""
            className="skill__icon"
          />
          <span>HTML</span>
        </div>
        <div className="skill">
          <img
            src="/icons/css.png"
            alt=""
            className="skill__icon"
          />
          <span>CSS</span>
        </div>
        <div className="skill">
          <img
            src="/icons/js.png"
            alt=""
            className="skill__icon"
          />
          <span>JS</span>
        </div>
        <div className="skill">
          <img
            src="/icons/react.png"
            alt=""
            className="skill__icon"
          />
          <span>REACT</span>
        </div>
        <div className="skill">
          <img
            src="/icons/sass.png"
            alt=""
            className="skill__icon"
          />
          <span>SASS</span>
        </div>
        <div className="skill">
          <img
            src="/icons/figma.png"
            alt=""
            className="skill__icon"
          />
          <span>FIGMA</span>
        </div>
        <div className="skill">
          <img
            src="/icons/github.png"
            alt=""
            className="skill__icon"
          />
          <span>GITHUB</span>
        </div>
        <div className="skill">
          <img
            src="/icons/rwd.png"
            alt=""
            className="skill__icon"
          />
          <span>RWD</span>
        </div>
        <div className="skill">
          <img
            src="/icons/wp.png"
            alt=""
            className="skill__icon"
          />
          <span>WORDPR</span>
        </div>
        <div className="skill">
          <img
            src="/icons/elementor.png"
            alt=""
            className="skill__icon"
          />
          <span>ELMNTOR</span>
        </div>
        <div className="skill">
          <img
            src="/icons/win.png"
            alt=""
            className="skill__icon"
          />
          <span>WIN</span>
        </div>
        <div className="skill">
          <img
            src="/icons/macos.png"
            alt=""
            className="skill__icon"
          />
          <span>MACOS</span>
        </div>
      </div>
    </div>
  );
}
