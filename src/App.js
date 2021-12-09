import './App.css';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import data from './data/data';
import transactions from './data/transactions';

function App() {
  return (
    <>
      <Profile />
      <Statistics stats={data} title="Upload stats" />
      <FriendList />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
