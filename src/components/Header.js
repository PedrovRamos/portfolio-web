/* eslint-disable react/jsx-max-depth */
import '../stylesheets/HeaderStyle.css';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light justify-content-center">
        <div className="container-fluid">
          <a
            id="header-brand"
            style={ { marginLeft: '350px' } }
            className="navbar-brand fs-2 fw-bolder"
            href="#home-container"
          >
            /Pedro Ramos
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul
              id="header-options"
              style={ { marginRight: '350px' } }
              className="navbar-nav ms-auto p-2 fs-5"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#home-container"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="a">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="a">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="a">Portfólio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="a">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
