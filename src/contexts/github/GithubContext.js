import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

// const GITHUB_API = process.env.REACT_APP_GITHUB_API;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_API = "https://api.github.com"

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const initialStates = {
    users: [],
    user: {},
    userRepos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialStates);

  // Get results based on submitted search string
  const getSearchedUsers = async (searchString) => {
    setLoading();

    const params = new URLSearchParams({
      q: searchString,
    });

    // const response = await fetch(`${GITHUB_API}/search/users?${params}`, {
    //   headers: {
    //     Authorization: `token ${GITHUB_TOKEN}`,
    //   },
    // });

    const response = await fetch(`${GITHUB_API}/search/users?${params}`);

    const { items } = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  // Get single user's profile information
  const getUserProfile = async (login) => {
    setLoading();

    // const response = await fetch(`${GITHUB_API}/users/${login}`);
    const response = await fetch(`${GITHUB_API}/users/${login}`, {
      // headers: {
      //   Authorization: `token ${GITHUB_TOKEN}`,
      // },
    });

    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      const data = await response.json();

      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    }
  };

    // Get all repositories from a given user
    const getUserRepos = async (login) => {
      setLoading();

      const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
      })

      const response = await fetch(`${GITHUB_API}/users/${login}/repos?${params}`, {
        // headers: {
        //   Authorization: `token ${GITHUB_TOKEN}`,
        // },
      });

      const data = await response.json();

      dispatch({
        type: 'GET_USER_REPOS',
        payload: data,
      });
    };

  // Clear users (e.g. when searched via `UserSearch` component)
  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING_TRUE' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        userRepos: state.userRepos,
        loading: state.loading,
        getSearchedUsers,
        getUserProfile,
        getUserRepos,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
