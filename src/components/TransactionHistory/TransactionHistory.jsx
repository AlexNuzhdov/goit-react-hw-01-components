import PropTypes from 'prop-types';
import css from './TransactionHistiry.module.css';

export const TransactionHistory = ({ items }) => {
 return (
    <table className={css.transaction}>
  <thead >
    <tr className={css.list}>
      <th  className={css.item}>Type</th>
      <th className={css.item}>Amount</th>
      <th className={css.item}>Currency</th>
    </tr>
  </thead>

  <tbody className={css.items}>
    {items.map(({id, type, amount, currency}) => (
      <tr className={css.tr} key = {id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>

    ))}

    </tbody>
  </table>

 );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

