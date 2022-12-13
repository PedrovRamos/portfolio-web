/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import '../stylesheets/SkillsBarStyle.css';

export default function SkillBar(props) {
  return (
    <div>
      <p className="mb-1 fw-bold">{props.skill}</p>
      <div
        id="progress-bar"
        className="progress border border-secondary"
        style={ { width: '400px', height: '25px' } }
      >
        <div
          className="progress-bar"
          role="progressbar"
          aria-label="Example with label"
          style={ { width: `${props.percent}%` } }
          aria-valuenow={ props.percent }
          aria-valuemin="0"
          aria-valuemax="100"
        >
          { `${props.percent}%` }
        </div>
      </div>
    </div>
  );
}
