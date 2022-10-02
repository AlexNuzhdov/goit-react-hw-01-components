import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export const Statistics = ({title, stats}) => {
   return ( 
    <section className={css.card}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => (
        <li className={css.id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </li>

        ))}
    </ul>
</section>
 );
};

Statistics.protoTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
};
