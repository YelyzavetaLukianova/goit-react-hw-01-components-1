import PropTypes from 'prop-types';
import '../FriendList.css';

function FriendListItem({ friends }) {
  return friends.map(friend => (
    <li className="Item" key={friend.id}>
      <span
        className={friend.isOnline ? 'StatusOnline' : 'StatusOffline'}
      ></span>

      <img
        className="Avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="Name">{friend.name}</p>
    </li>
  ));
}

FriendListItem.propTypes = {
  transactions: PropTypes.arrayOf({
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    isOnline: PropTypes.bool,
  }),
};

export default FriendListItem;
