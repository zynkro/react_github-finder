import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import RepoList from '../components/repos/RepoList';
import GithubContext from '../contexts/github/GithubContext';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';

export function User() {
  const { getUserProfile, user, loading, getUserRepos, userRepos } =
    useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUserProfile(params.login);
    getUserRepos(params.login);
  }, []);

  // Destructuring things I want to use from `user` state (data)
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  const websiteUrl = blog?.startsWith('http') ? blog : 'https://' + blog;

  return (
    <>
      <div className='w-full mx-auto'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-accent'>
            Back To Search
          </Link>
        </div>

        <section className='grid grid-cols-1 md:grid-cols-3 md:gap-8 mb-8'>
          {/* Image, name and username card */}
          <div className='zynk-card-image mb-6 md:mb-0'>
            <div className='card image-full rounded-lg shadow-xl'>
              <figure>
                <img src={avatar_url} alt={`${name}'s profile`} />
              </figure>

              <div className='card-body justify-end'>
                <h2 className='card-title mb-0'>{name}</h2>
                <p className='flex-grow-0'>{login}</p>
              </div>
            </div>
          </div>

          {/* The rest of the grid is on the right side spanning 2 columns */}
          <div className='col-span-2'>
            <div className='mb-3'>
              <div className='flex items-center mb-3'>
                <h1 className='text-3xl card-title inline-block'>{name}</h1>
                <div className='ml-2 badge badge-success '>{type}</div>
                {hireable && (
                  <div className='mx-2 badge badge-info'>Hireable</div>
                )}
              </div>

              <p className='mb-3'>{bio}</p>

              <div className='card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-outline'
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className='w-full rounded-lg shadow-md bg-gray-800 stats border border-gray-600'>
              {location && (
                <div className='stat'>
                  <div className='stat-title text-md'>Location</div>
                  <div className='text-lg stat-value'>{location}</div>
                </div>
              )}
              {blog && (
                <div className='stat'>
                  <div className='stat-title text-md'>Website</div>
                  <div className='text-lg stat-value'>
                    <a
                      href={websiteUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {websiteUrl}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className='stat'>
                  <div className='stat-title text-md'>Twitter</div>
                  <div className='text-lg stat-value'>
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className='w-full mb-4 rounded-lg shadow-lg bg-gray-800 stats border border-gray-700'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div className='stat bg-gray-800 border border-gray-700'>
              <div className='stat-figure text-secondary'>
                <FaUsers className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Followers</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {followers}
              </div>
            </div>

            <div className='stat bg-gray-800 border border-gray-700'>
              <div className='stat-figure text-secondary'>
                <FaUserFriends className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Following</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {following}
              </div>
            </div>

            <div className='stat bg-gray-800 border border-gray-700'>
              <div className='stat-figure text-secondary'>
                <FaCodepen className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Repos</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {public_repos}
              </div>
            </div>

            <div className='stat bg-gray-800 border border-gray-700'>
              <div className='stat-figure text-secondary'>
                <FaStore className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Gists</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {public_gists}
              </div>
            </div>
          </div>
        </section>

        <RepoList userRepos={userRepos} />
      </div>
    </>
  );
}

export default User;
