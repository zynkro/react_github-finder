import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='card shadow-lg compact side bg-base-200'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='profile' />
            </div>
          </div>
        </div>
        <div>
          <p className='card-title'>{login}</p>
          <Link
            className='text-base-content text-opacity-60'
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
