/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import '../stylesheets/PortfolioCardStyle.css';
import PropTypes from 'prop-types';

export default function PortfolioCard({ projectTitle, projectDescription, haveInLinkedinAndGitHub, linkedinUrl, gitHubUrl }) {
  return (
    <div id="portfolio-card" className="card shadow-lg" style={ { maxWidth: '500px' } }>
      <div className="card-body">
        <h5 className="card-title">{projectTitle}</h5>
        <p
          className="card-text"
        >
          {projectDescription}
        </p>
        {
          haveInLinkedinAndGitHub
            ? <div className="d-flex gap-2 flex-wrap">
              <a href={ linkedinUrl } target="_blank" className="btn btn-primary" rel="noreferrer">Ver postagem no Linkedin</a>
              <a href={ gitHubUrl } target="_blank" className="btn btn-dark" rel="noreferrer">Ver código no GitHub</a>

              </div> : <a href={ linkedinUrl } target="_blank" className="btn btn-primary align-self-end" rel="noreferrer">Ver postagem no Linkedin</a>
        }
      </div>
    </div>
  );
}

PortfolioCard.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  haveInLinkedinAndGitHub: PropTypes.bool.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
  gitHubUrl: PropTypes.string,
};

PortfolioCard.defaultProps = {
  gitHubUrl: 'vasco na série A ❤️',
};
