/* eslint-disable global-require */
import '../stylesheets/HomeStyle.css';

function Home() {
  return (
    <div
      id="home-container"
      className="d-flex bg-light
      justify-content-evenly align-items-center p-5 gap-2"
    >
      <div id="icons-container" className="d-flex gap-3 flex-column">
        <a
          href="https://github.com/PedrovRamos"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="img-fluid"
            alt="linkedin icon"
            src={ require('../images/icons8-github-48.png') }
          />
        </a>
        <a
          href="https://linkedin.com/in/pedro-ramos-dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="img-fluid"
            alt="linkedin icon"
            src={ require('../images/icons8-linkedin-48.png') }
          />
        </a>
      </div>
      <div
        id="home-content"
        className="d-flex flex-column gap-3"
      >
        <div className="fw-bolder fs-1">
          Olá, meu nome é
          {' '}
          <br />
          {' '}
          Pedro Ramos!
        </div>
        <div className="fw-normal fs-5">Desenvolvedor Front End</div>
        <div
          style={ { maxWidth: '400px' } }
          className="fw-light text-break fs-6"
        >
          Responsável pela estrutura, codificação e design de uma página web,
          visando sempre a priorização da experiência de usuário ao interagir
          com a aplicação, buscando sempre a evolução!

        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
          >
            Entre em contato

          </button>
        </div>
        <div id="scrool-down-message" className="fw-bold mt-5">
          Role para baixo
          {' '}
          <svg style={ { marginTop: '10px' } } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#326efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-right-down">
            <polyline points="10 15 15 20 20 15" />
            <path d="M4 4h7a4 4 0 0 1 4 4v12" />
          </svg>
        </div>
      </div>
      <div>
        <img
          width={ 650 }
          className="img-fluid"
          alt="Foto principal da Homepage, foto do profissional"
          src={ require('../images/Imagem-portfolio-web.png') }
        />
      </div>
    </div>
  );
}

export default Home;
