import { useContext } from 'react';
import { SoftSkilsContext } from '../context/SoftSkillsContext';

const StudyPage = () => {
  const softSkilsContext = useContext(SoftSkilsContext);

  if (!softSkilsContext) {
    return <p>Loading...</p>;
  }

  return (
    <div className="study title-text">
      <div className="about-tabs">
        {softSkilsContext.map((Skill: string, index: number) => (
          <div key={index} className="study-card">
            <span>{Skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyPage;
