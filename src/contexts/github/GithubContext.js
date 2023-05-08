import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_API = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

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
    })

    const response = await fetch(`${GITHUB_API}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const {items} = await response.json();

    // setUsers(data);
    // setLoading(false);
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  const setLoading = () => dispatch({type: 'SET_LOADING_TRUE'});

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        getSearchedUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
