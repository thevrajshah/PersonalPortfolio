import { FaArrowUp, FaDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <div id="Hero">
      <section>
        <div id="heroText">
          <div id="hello">Hello There! 🖐️</div>
          <h1 id="name">I'm Vraj.</h1>
          <ul id="slider">
            <li>Developer</li>
            <li>Designer</li>
            <li>Student</li>
          </ul>
        </div>
        <button
          onClick={() => {
            window.open('/VrajShah_Resume.pdf', '_blank');
          }}
          className="btn"
        >
          <FaDownload /> Download CV
        </button>
        <div id="swipe">
          <FaArrowUp />
          <br />
          swipe up
        </div>
      </section>
    </div>
  );
}
