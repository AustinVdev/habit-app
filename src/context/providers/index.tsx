import loginReducer, {ILoginContext} from '@ctx/reducers/login';
import userReducer, {IUserContext} from '@ctx/reducers/user';
import RootState from '@ctx/states';
import React, {createContext, FC, useMemo, useReducer} from 'react';

export const LoginContext = createContext({} as ILoginContext);

export const UserContext = createContext({} as IUserContext);

const RootProvider: FC = ({children}) => {
  const [login_state, login_dispatch] = useReducer(
    loginReducer,
    RootState.login,
  );

  const login_value = useMemo(
    () => ({
      state: login_state,
      dispatch: login_dispatch,
    }),
    [login_state],
  );

  const [user_state, user_dispatch] = useReducer(
    userReducer,
    RootState.userInfo,
  );

  const user_value = useMemo(
    () => ({
      state: user_state,
      dispatch: user_dispatch,
    }),
    [user_state],
  );

  return (
    <LoginContext.Provider value={login_value}>
      <UserContext.Provider value={user_value}>{children}</UserContext.Provider>
    </LoginContext.Provider>
  );
};
export default RootProvider;
