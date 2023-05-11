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
    created_at,
    pushed_at,
  } = repo;

  const createdAtDate = new Date(created_at).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const pushedAtDate = new Date(pushed_at).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className='mb-2 rounded-xl card bg-gray-700 hover:bg-gray-900 hover:cursor-pointer hover:transition-all'>
      <a
        href={html_url}
        target='_blank'
        rel='noopener noreferrer'
        className='card-body'
      >
        <div className='flex items-center gap-4 mb-2'>
          <FaLink />
          <h3 className='text-xl font-semibold'>{name}</h3>
        </div>

        <div className='flex flex-wrap items-center gap-x-3 gap-y-1 mb-2'>
          <div className='text-md mb-0 italic bg-gray-600 px-2 py-1 rounded'>
            Created at <strong>{createdAtDate}</strong>
          </div>
          <div className='text-md italic bg-gray-600 px-2 py-1 rounded'>
            Last updated <strong>{pushedAtDate}</strong>
          </div>
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
