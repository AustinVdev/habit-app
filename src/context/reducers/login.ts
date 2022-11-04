export enum LoginActionKind {
  LOGOUT = 'LOGOUT',
  LOGIN = 'LOGIN',
}

export interface LoginAction {
  type: LoginActionKind;
  payload: boolean;
}

export interface ILoginContext {
  state: boolean;
  dispatch: React.Dispatch<LoginAction>;
}

const loginReducer = (state: boolean, action: LoginAction) => {
  const {type, payload} = action;
  switch (type) {
    case LoginActionKind.LOGIN:
      return payload;
    case LoginActionKind.LOGOUT:
      return payload;
  }
};
export default loginReducer;
