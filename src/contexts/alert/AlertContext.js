import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // This function sets up a temporary state `alert`, being an object with
  // strings `message` and `type`; this state is then cleared up (set to
  // null) after 3.5 seconds ...
  const setAlert = (message, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { message, type },
    });

    setTimeout(
      () =>
        dispatch({
          type: 'REMOVE_ALERT',
        }),
      3500,
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
