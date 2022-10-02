import PropTypes from 'prop-types';
import css from './Friendlist.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (

    <div className={css.card}>
      {friends.map(({ id, name, avatar,  isOnline }) => (
        <FriendListItem 
         key={id}  
         avatar={avatar} 
         name={name} 
         isOnline={isOnline} 
        />   
            
        ))}
    </div>

    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      }),
    ),
};
