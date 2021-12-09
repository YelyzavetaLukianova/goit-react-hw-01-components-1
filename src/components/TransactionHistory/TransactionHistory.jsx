import PropTypes from 'prop-types';
import './TransactionHistory.css';

function TransactionHistory({ items }) {
  return (
    <div>
      <table className="Transaction-history">
        <thead className="Transaction-thead">
          <tr className="Transaction-tr">
            <th className="Transaction-th">type</th>
            <th className="Transaction-th">amount</th>
            <th className="Transaction-th">currency</th>
          </tr>
        </thead>
        <tbody className="Transaction-tbody">
          {items.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf({
    type: PropTypes.string,
    currency: PropTypes.string,
    id: PropTypes.number,
    amount: PropTypes.number,
  }),
};

export default TransactionHistory;
