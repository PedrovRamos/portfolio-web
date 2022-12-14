import '../stylesheets/PortfolioStyle.css';
import PortfolioCard from './PortfolioCard';

export default function Portfolio() {
  return (
    <div id="portfolio-section" className="d-flex flex-column align-items-center p-5">
      <h3 className="fw-bold fs-1">Meu Portfólio</h3>
      <h4 className="fw-light fs-5 mb-5">
        Estes são alguns projetos que eu já desenvolvi!
      </h4>
      <div
        id="portfolio-body"
        className="d-flex justify-content-center p-5 gap-3 flex-wrap"
      >
        <PortfolioCard
          projectTitle="Projeto Pixel Art 🎨"
          projectDescription="Neste projeto,
        criei uma breve aplicação que consiste em pintar um
        quadro de pixels, possibilitando o usuário a fazer pixel arts! Para
        a confecção deste projeto, utilizei HTML5, CSS3 e JavaScript! "
          haveInLinkedinAndGitHub={ false }
          linkedinUrl="https://www.linkedin.com/posts/pedro-ramos-dev_javascript-betrybe-vqv-activity-6950153200914059265-F16q?utm_source=share&utm_medium=member_desktop"
        />
        <PortfolioCard
          projectTitle="Projeto Restaurant Website 🍲"
          projectDescription="Neste projeto,
        criei a seção inicial de um site de apresentação para
        um restaurante fictício utilizando HTML5 e CSS3!
        O projeto possui 5 seções, o cabeçalho, Banner,
        seção para acessar o Cardápio, seção para acessar o Sobre e
        um rodapé, esse projeto me ajudou muito a consolidar meus
        aprendizados em HTML e CSS vanilla e fiquei muito satisfeito
        com o resultado estético!"
          haveInLinkedinAndGitHub
          linkedinUrl="https://www.linkedin.com/posts/pedro-ramos-dev_design-css-vqv-activity-6942312895242240000-SEja?utm_source=share&utm_medium=member_desktop"
          gitHubUrl="https://github.com/PedrovRamos/desafio-restaurante-page-fundamentos"
        />
        <PortfolioCard
          projectTitle="Projeto Crypto Coins 💲"
          projectDescription="Neste projeto,
        criei uma aplicação que exibe, em tempo real, a cotação
        das principais criptomoedas do mercado através da utilização da API CoinCap!
        Para a realização deste projeto,
        utilizei HTML5, CSS3 e JavaScript!"
          haveInLinkedinAndGitHub
          linkedinUrl="https://www.linkedin.com/posts/pedro-ramos-dev_betrybe-api-frontend-activity-6961853145559785472-MUSd?utm_source=share&utm_medium=member_desktop"
          gitHubUrl="https://github.com/PedrovRamos/Projeto-Crypto-Coins"
        />
        <PortfolioCard
          projectTitle="Projeto Shopping Cart 🛒"
          projectDescription="Neste projeto,
        criei e estilizei a feature carrinho de compras
        de um marketplace fictício fazendo uso da API do Mercado Livre!
        Foram usadas as seguintes tecnologias: HMTL5, CSS3, JavaScript e Jest
        para testes unitários e assíncronos!"
          haveInLinkedinAndGitHub={ false }
          linkedinUrl="https://www.linkedin.com/posts/pedro-ramos-dev_ol%C3%A1-rede-venho-compartilhar-com-voc%C3%AAs-mais-activity-6963960297120247808-XXRf?utm_source=share&utm_medium=member_desktop"
        />
        <PortfolioCard
          projectTitle="Projeto Employee Registration 👨‍💼"
          projectDescription="Neste projeto,
        criei e estilizei um sistema completo que possibilita cadastrar funcionários,
        cargos e designar os cargos cadastrados para cada funcionário! O CRUD foi
        construido inteiramente com o framework React e foram utilizadas as seguintes
        tecnologias: @material-ui, Axios, Bootstrap, React, Express, MySQL,
        Nodemon e Cors"
          haveInLinkedinAndGitHub
          linkedinUrl="https://www.linkedin.com/posts/pedro-ramos-dev_react-app-22-september-2022-activity-6978777780800892928-1uzp?utm_source=share&utm_medium=member_desktop"
          gitHubUrl="https://github.com/PedrovRamos/Crud-cadastro-de-funcionarios"
        />
      </div>
    </div>
  );
}
