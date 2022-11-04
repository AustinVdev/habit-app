import {UserContext} from '@ctx/providers';
import {useContext} from 'react';

const useUserContext = () => useContext(UserContext);

export default useUserContext;
