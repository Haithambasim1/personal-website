import "./home.css";
const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/haithambm_/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=972597813108"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i className="uil uil-whatsapp"></i>
      </a>

      <a
        href="https://github.com/Haithambasim1"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
