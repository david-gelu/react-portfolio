import { useContext } from 'react';
import { StudyContext } from '../context/StudyContext';

const StudyPage = () => {
  const studyContext = useContext(StudyContext);

  if (!studyContext) {
    return <p>Loading...</p>;
  }

  return (
    <div className="study title-text">
      <div className="about-tabs">
        {studyContext.map((s, index) => (
          <div key={index} className="study-card">
            <span>{s.institution}:</span>
            <span> {s.study}</span>
            <div className="fs-small mt-3">{s.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyPage;
