import React, {FC} from 'react';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  ImageProps,
} from 'react-native';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';
import styles from './styles';
import useLoginContext from '@hooks/useLoginContext';
import {userData} from '@data/user-data';
import {LoginActionKind} from '@ctx/reducers/login';
import useUserContext from '@hooks/useUserContext';
import {UserActionKind} from '@ctx/reducers/user';

const Login: FC = () => {
  const loginContext = useLoginContext();
  const userContext = useUserContext();

  const set_login = loginContext.dispatch;
  const set_user = userContext.dispatch;

  const [value, setValue] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (
    props?: Partial<ImageProps>,
  ): React.ReactElement<ImageProps> => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const handleLogin = () => {
    if (value === userData.email && password === userData.password) {
      set_user({type: UserActionKind.SET_USER, payload: userData});
      set_login({type: LoginActionKind.LOGIN, payload: true});
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.layout}>
        <View style={styles.inputContent}>
          <Text category="h1" style={styles.text_center}>
            HA-BIT
          </Text>
        </View>
        <View style={styles.inputContent}>
          <Input
            placeholder="Correo electrónico"
            value={value}
            onChangeText={nextValue => setValue(nextValue)}
          />
        </View>
        <View style={styles.inputContent}>
          <Input
            value={password}
            placeholder="Contraseña"
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setPassword(nextValue)}
          />
        </View>
        <View style={styles.inputContent}>
          <Button onPress={handleLogin} status="primary">
            Iniciar sesión
          </Button>
        </View>
        <View style={styles.inputContent}>
          <Button status="control" appearance='outline'>Registrate</Button>
        </View>
        <View style={styles.inputContent}>
          <Text category="c2" status='primary'>¿Has olvidado tu contraseña?</Text>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default Login;
