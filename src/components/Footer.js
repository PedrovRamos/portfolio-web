/* eslint-disable global-require */
import '../stylesheets/FooterStyle.css';

export default function Footer() {
  return (
    <div
      id="footer-container"
      className="bg-dark rounded-top shadow-lg d-flex align-items-center ps-5 pe-5 d-flex
      justify-content-between"
      style={ { height: '60px', width: '90vw', margin: 'auto' } }
    >
      <p className="m-0 text-light">© 2022 Pedro Ramos™. All Rights Reserved.</p>
      <div className="d-flex gap-4">
        <i
          id="react-icon"
          style={ { fontSize: '35px', color: 'white' } }
          className="devicon-react-original-wordmark"
        />
        <i
          id="bootstrap-icon"
          style={ { fontSize: '35px', color: 'white' } }
          className="devicon-bootstrap-plain-wordmark"
        />
        <i
          id="javascript-icon"
          style={ { fontSize: '35px', color: 'white' } }
          className="devicon-javascript-plain"
        />
        <i
          id="css-icon"
          style={ { fontSize: '35px', color: 'white' } }
          className="devicon-css3-plain-wordmark"
        />
        <i
          id="html-icon"
          style={ { fontSize: '35px', color: 'white' } }
          className="devicon-html5-plain-wordmark"
        />
      </div>
    </div>
  );
}
