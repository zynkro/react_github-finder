import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_API = process.env.REACT_APP_GITHUB_API;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const initialStates = {
    users: [],
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
        loading: state.loading,
        getSearchedUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
