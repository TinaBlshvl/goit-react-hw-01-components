import PropTypes from 'prop-types';
import css from '../stats/Stats.module.css';

export const Statistics = ({ title = '', stats }) => {
  function randomColor() {
    return (
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
    );
  }
  return (
    <section className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
