import './TextCard.css'

const TextCard = ({ title, date, subtitle, description, tags, link, linkText }) => {
  return (
    <div className='text-card'>
      <div className='card-header'>
        <h3>{title}</h3>
        {date && (
          <span className='date'>
            {date}
            </span>
        )}
      </div>

      {subtitle && (
        <div className='subtitle'>
          {subtitle}
        </div>
      )}

      {Array.isArray(description) ? (
        <ul className="card-list">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{description}</p>
      )}

      {tags && (
        <div className='project-tags'>
          {tags.map((tag, i) => (
            <span key={i} className='tag'>{tag}</span>
          ))}
        </div>
      )}

      {link && (
        <a
          href={link}
          className='project-link'
          target='_blank'
          rel='noopener noreferrer'
        >
         {linkText}
        </a>
      )}
    </div>
  );
};

export default TextCard;
