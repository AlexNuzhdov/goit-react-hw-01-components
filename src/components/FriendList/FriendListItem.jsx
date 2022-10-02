import PropTypes from 'prop-types';
import css from './Friendlist.module.css';

export const FriendListItem = ( {name, avatar,  isOnline} ) => {
 return (
    <div className={css.card}>
    <li className= {css.id}>
        <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
    </div>
 )
 
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};