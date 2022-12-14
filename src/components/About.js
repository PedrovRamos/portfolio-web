/* eslint-disable global-require */
import '../stylesheets/AboutStyle.css';

export default function About() {
  return (
    <div
      id="about-section"
      style={ { backgroundColor: 'rgb(80,124,240)' } }
      className="d-flex flex-column align-items-center pt-5"
    >
      <h3 className="fw-bold fs-1 text-light">Sobre mim</h3>
      <h4 className="fw-light fs-5 mb-5 text-light">
        Me conheça um pouco mais!
      </h4>
      <div
        id="about-body"
        className="d-flex gap-5 p-5 pt-0 justify-content-evenly align-items-center"
      >
        <div>
          <img
            width={ 400 }
            className="img-fluid shadow-lg"
            alt="Imagem do proficional na seção sobre"
            src={ require('../images/imagem-sobre.png') }
          />
        </div>

        <div
          id="about-text"
          className="fw-light fs-6 text-white"
          style={ { maxWidth: '500px' } }
        >
          <p>
            Olá, me chamo Pedro Victor, tenho 18 anos e atualmente estou
            cursando desenvolvimento web Full Stack na Trybe! Após o termino
            do ensino médio, resolvi trabalhar com algo que sempre amei,
            tecnologia e inovação. Meu objetivo como programador e
            desenvolvedor web é criar soluções para problemas e assim somar
            em um time de desenvolvimento! Adoro aprender coisas novas, me
            desafiar, me superar e tenho como meta diária crescer
            profissionalmente e pessoalmente!
          </p>
          <div
            id="about-style"
            style={ { height: '5px', width: '180px', backgroundColor: 'white' } }
          />
        </div>
      </div>
    </div>
  );
}
