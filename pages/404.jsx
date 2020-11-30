import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function Custon404() {
  return (
    <div id="Head">
      <section>
        <h1 style={{ color: '#111', fontSize: '3rem' }}>
          Oops! ...Something Went Wrong
        </h1>
        <Link href="/">
          <button
            style={{
              margin: '1.5rem 5px',
              padding: '1rem 1.5rem',
              background: 'var(--background1)',
              color: 'var(--acccent)',
              fontSize: '1.4rem',
              borderRadius: '25px',
              transition: 'all 0.3s $curve2 0s',
              boxShadow: '0 5px 10px 0px rgba(7, 143, 255, 0.1)',
            }}
          >
            <FaArrowLeft /> &nbsp; Go Back
          </button>
        </Link>
      </section>
    </div>
  );
}
