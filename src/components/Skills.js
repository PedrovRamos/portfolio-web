import SkillBar from './SkillsBar';

export default function Skills() {
  return (
    <div id="skill-section" className="d-flex flex-column align-items-center p-5">
      <h3 className="fw-bold fs-1">Minhas skills</h3>
      <h4 className="fw-light fs-5 mb-5">
        Aqui estão as tecnologias que já tive oportunidade de estudar!
      </h4>
      <div
        style={ { maxWidth: '1500px' } }
        className="d-flex gap-5 flex-wrap justify-content-center"
      >
        <SkillBar percent="100" skill="HTML5" />
        <SkillBar percent="90" skill="CSS3" />
        <SkillBar percent="95" skill="React.js" />
        <SkillBar percent="100" skill="JavaScript" />
        <SkillBar percent="100" skill="Git" />
        <SkillBar percent="100" skill="Bootstrap" />
        <SkillBar percent="80" skill="Jest" />
        <SkillBar percent="75" skill="React Testing Library" />
        <SkillBar percent="80" skill="SQL" />
      </div>
    </div>
  );
}
