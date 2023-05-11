import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function RepoList({ userRepos }) {
  return (
    <div className='rounded-lg shadow-lg card bg-gray-800 border border-gray-600'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>
          Latest Repositories
        </h2>
        {userRepos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

RepoList.propTypes = {
  userRepos: PropTypes.array.isRequired,
};

export default RepoList;
