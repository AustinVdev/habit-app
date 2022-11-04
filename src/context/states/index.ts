import {IRootState} from '@ctx/interfaces/IRootState';
import login from '@ctx/states/login';
import userInfo from '@ctx/states/user-info';

const RootState: IRootState = {
  login,
  userInfo,
};

export default RootState;
