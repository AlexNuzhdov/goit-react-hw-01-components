import PropTypes from 'prop-types';
import css from '../FriendList/Friendlist.module.css';

export const FriendList = ({ friends }) => {
    return (

    <div className={css.card}>
        {friends.map(({ id, name, avatar,  isOnline }) => (
        <li className= {css.id}>
            <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
        
        ))}
    </div>

    );
};

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

