const ExperienceItem = ({ item }) => {
  return (
    <div className="timeline-item">
      <h4 className="item-title">{item.title}</h4>
      <p className="item-institution">{item.company || item.institution}</p>
      <p className="item-duration">{item.duration}</p>

      <ul className="item-description-list">
        {item.description.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
