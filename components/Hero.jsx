import { FaArrowAltCircleRight, FaArrowUp } from 'react-icons/fa';

export default function Hero() {
  return (
    <div id="Hero">
      <section>
        <div id="heroText">
          <div id="hello">Hello There! 🖐️</div>
          <div id="name">I'm Vraj.</div>
          <ul id="slider">
            <li>Developer</li>
            <li>Designer</li>
            <li>Student</li>
          </ul>
        </div>
        <div id="swipe">
          <FaArrowUp />
          {/* <i className="fa fa-arrow-up" /> */}
          <br />
          swipe up
        </div>
      </section>
    </div>
  );
}
