import {IUserInfo} from '@interfaces/IUserInfo';

export enum UserActionKind {
  SET_USER = 'SET_USER',
}

export interface UserAction {
  type: UserActionKind;
  payload: IUserInfo;
}

export interface IUserContext {
  state: IUserInfo;
  dispatch: React.Dispatch<UserAction>;
}

const userReducer = (state: IUserInfo, action: UserAction) => {
  const {type, payload} = action;
  switch (type) {
    case UserActionKind.SET_USER:
      return payload;
  }
};
export default userReducer;
