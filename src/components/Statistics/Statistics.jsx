import PropTypes from 'prop-types';
import './Statistics.css';

function Statistics({ stats, title }) {
  return (
    <section className="Statistics">
      {title && <h2 className="Title">{title}</h2>}

      <ul className="Stat-list">
        {stats.map(stat => (
          <li className="Item-stat" key={stat.id}>
            <span className="Label">{stat.label}</span>
            <span className="Percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
