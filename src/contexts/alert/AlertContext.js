import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set up (or update) `alert` state used to display alerts
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
