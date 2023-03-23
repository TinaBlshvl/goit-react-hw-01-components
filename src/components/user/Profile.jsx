import PropTypes from 'prop-types';
import css from '../user/Profile.module.css';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.info}>
        <img src={avatar} alt="User Avatar" className={css.img} width="120" />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statisctic}>
        <li className={css.list}>
          <span className={css.paragraph}>Followers</span>
          <span className={css.operation}>{followers}</span>
        </li>
        <li className={css.list}>
          <span className={css.paragraph}>Views</span>
          <span className={css.operation}>{views}</span>
        </li>
        <li className={css.list}>
          <span className={css.paragraph}>Likes</span>
          <span className={css.operation}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
