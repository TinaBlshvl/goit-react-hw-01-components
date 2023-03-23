import PropTypes from 'prop-types';
import css from '../transactions/Transactions.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.trName}>
          <th className={css.thName}>type</th>
          <th className={css.thName}>amount</th>
          <th className={css.thName}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map(({ type, amount, currency, id }) => (
          <tr key={id} className={css.trString}>
            <td className={css.tdString}>{type}</td>
            <td className={css.tdString}>{amount}</td>
            <td className={css.tdString}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.prototype = {
  items: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
