import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.module.css';

export const Profile = ({  
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) => {
    return (
  <div className ={css.card}>
     <div className ={css.description}>
        <img
          src= {avatar} width="100"
          alt="User avatar"
          className ={css.avatar}
        />
        <p className ={css.username}>{username}</p>
        <p className ={css.tag}>{tag}</p>
        <p className ={css.location}>{location}</p>
      </div>

      <ul className ={css.stats}>
        <li className ={css.list}>
          <span className ={css.label}>Followers</span>
          <span className ={css.views}>{followers}</span>
        </li>
        <li className ={css.list}>
          <span className ={css.label}>Views</span>
          <span className ={css.views}>{views}</span>
        </li>
        <li className ={css.list}>
          <span className ={css.label}>Likes</span>
          <span className ={css.views}>{likes}</span>
        </li>
      </ul>
  </div>
    )
        
    
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
};    