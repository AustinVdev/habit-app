import React, {FC} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import {Button, Divider, Layout, ListItem, Text} from '@ui-kitten/components';
import styles from './styles';
import IconSVG from '@icons/index';
import useUserContext from '@hooks/useUserContext';
import useLoginContext from '@hooks/useLoginContext';
import { LoginActionKind } from '@ctx/reducers/login';

const Profile: FC = () => {
  const user = useUserContext();

  const loginContext = useLoginContext();

  const set_login = loginContext.dispatch;

  const handleLogout = () => {
    set_login({type: LoginActionKind.LOGIN, payload: false});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <Layout style={styles.layout}>
        <View>
          <Text category="h6">Info.</Text>
        </View>
        <View>
          <ListItem
            title={user.state.fullName}
            description={user.state.email}
            accessoryLeft={style => IconSVG(style, 'person')}
          />
        </View>
        <View>
          <Text category="h6">Opciones</Text>
        </View>
        <View>
          <ListItem
            title="Cerrar sesión"
            accessoryLeft={style => IconSVG(style, 'log-out')}
            accessoryRight={() => (
              <Button
                status="primary"
                appearance='ghost'
                onPress={handleLogout}
                accessoryLeft={style => IconSVG(style, 'log-out')}
              />
            )}
          />
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default Profile;
