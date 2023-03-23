import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import css from '../friends/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

FriendList.prototype = {
  friends: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
