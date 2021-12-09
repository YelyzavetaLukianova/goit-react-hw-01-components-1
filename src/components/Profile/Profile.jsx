import PropTypes from 'prop-types';
import user from '../../data/user';
import './Profile.css';
import '../../styles/contaiter.css';

function Profile(props) {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className="Profile">
      <div className="Description">
        <img src={avatar} alt="User avatar" className="Avatar" />
        <p className="Name">{username}</p>
        <p className="Tag">{tag}</p>
        <p className="Location">{location}</p>
      </div>

      <ul className="Stats">
        <li className="ListItem">
          <span className="Label">Followers</span>
          <span className="Quantity">{stats.followers}</span>
        </li>
        <li className="ListItem">
          <span className="Label">Views</span>
          <span className="Quantity">{stats.views}</span>
        </li>
        <li className="ListItem">
          <span className="Label">Likes</span>
          <span className="Quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.number,
};

export default Profile;
