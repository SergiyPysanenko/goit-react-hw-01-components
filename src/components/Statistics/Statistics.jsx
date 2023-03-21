import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


const getRandomHexColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);


const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <title className={styles.title}>{title}</title>}

    <ul className={styles.list}>
      {stats.map(stat => (
        <li
          className={styles.item}
          key={stat.id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
      })
    )
  };

export default Statistics;

