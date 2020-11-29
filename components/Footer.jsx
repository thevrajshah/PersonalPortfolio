import { FaAngleUp, FaHeart, FaReact } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <section style={{ padding: '0 25px' }}>
        <button id="toTop" onClick={() => window.scrollTo(0, 0)}>
          <FaAngleUp />
        </button>
        <div id="credits">
          <div id="createdWith">
            Created with &nbsp;
            <FaHeart style={{ fontSize: '14px', color: '#dc143c' }} />
            &nbsp; & &nbsp;
            <FaReact style={{ fontSize: '14px', color: '#0ad3fd' }} />.
          </div>
          <div id="copyright">
            © 2020 <strong>VrajShah</strong>.
          </div>
        </div>
      </section>
    </footer>
  );
}
