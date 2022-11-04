import {LoginContext} from '@ctx/providers';
import {useContext} from 'react';

const useLoginContext = () => useContext(LoginContext);

export default useLoginContext;
