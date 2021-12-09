import FriendListItem from './FriendListItem';
import friends from '../../data/friends';
import './FriendList.css';
import '../../styles/contaiter.css';

function FriendList() {
  return (
    <ul className="Friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
}

export default FriendList;
