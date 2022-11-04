import {IUserInfo} from 'interfaces/IUserInfo';

export interface IRootState {
  login: boolean;
  userInfo: IUserInfo;
}
