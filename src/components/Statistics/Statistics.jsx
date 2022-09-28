import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';



 export const Statistics = ({title, stats}) => {
   return ( 
    <section className={css.card}>
  <h2 className={css.title}>Upload stats</h2>

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
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  )
};
