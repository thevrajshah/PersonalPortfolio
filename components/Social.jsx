import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Social() {
  return (
    <span id="Social">
      <a
        target="_blank"
        href="https://github.com/thevrajshah"
        rel="noopener noreferrer"
      >
        <FaGithub id="github" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/thevrajshah/"
        rel="noopener noreferrer"
      >
        <FaLinkedin id="linkedin" />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/thevrajshah"
        rel="noopener noreferrer"
      >
        <FaTwitter id="twitter" />
      </a>
      {/*{" "}
      <a
        target='_blank'
        className='fab fa-dev'
        href='https://dev.to/thevrajshah'
        rel='noopener noreferrer'
      />{" "}
      */}
    </span>
  );
}
