import PropTypes from 'prop-types';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className='mb-2 rounded-xl card bg-gray-700 hover:bg-gray-900 hover:cursor-pointer'>
      <a
        href={html_url}
        target='_blank'
        rel='noopener noreferrer'
        className='card-body'
      >
        <div className="flex items-center mb-2">
          <FaLink className='mr-2' />
          <h3 className='text-xl font-semibold'>
            {name}
          </h3>
        </div>

        {description && <p className='mb-3'>{description}</p>}

        <div>
          <div className='mr-2 badge badge-info badge-lg'>
            <FaEye className='mr-2 fill-black text-lg' />
            {watchers_count}
          </div>

          <div className='mr-2 badge badge-success badge-lg'>
            <FaStar className='mr-2 fill-black text-lg' />
            {stargazers_count}
          </div>

          <div className='mr-2 badge badge-error badge-lg'>
            <FaInfo className='mr-2 fill-black text-lg' />
            {open_issues}
          </div>

          <div className='mr-2 badge badge-warning badge-lg'>
            <FaUtensils className='mr-2 fill-black text-lg' />
            {forks}
          </div>
        </div>
      </a>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
