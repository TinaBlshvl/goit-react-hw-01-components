import PropTypes from 'prop-types';

import css from '../friends/FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={isOnline ? css.online : css.ofline}>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" className={css.img} />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
