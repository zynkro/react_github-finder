import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../contexts/github/GithubContext';

function UserProfile() {
  const { getUserProfile, user } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUserProfile(params.login);
  }, []);

  return <div>User profile: {user.login}</div>;
}

export default UserProfile;
