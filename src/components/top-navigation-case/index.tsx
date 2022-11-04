import React, {FC} from 'react';
import {
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import IconSVG from '@icons/index';
import {ITopNavigationCase} from './interfaces';
import {useNavigation} from '@react-navigation/native';
import { LoginActionKind } from '@ctx/reducers/login';
import useLoginContext from '@hooks/useLoginContext';

export const TopNavigationCase: FC<ITopNavigationCase> = ({
  alignment,
  title,
  subtitle,
  isShowBack,
}) => {

  const loginContext = useLoginContext();

  const set_login = loginContext.dispatch;

  const navigation = useNavigation();

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigationBack = () => navigation.goBack();

  const renderMenuAction = () => (
    <TopNavigationAction
      icon={styles => IconSVG(styles, 'more-vertical')}
      onPress={toggleMenu}
    />
  );

  const handleLogout = () => {
    set_login({type: LoginActionKind.LOGIN, payload: false});
  };

  const renderRightActions = () => (
    <>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem
          accessoryLeft={styles => IconSVG(styles, 'info')}
          title="About"
        />
        <MenuItem
          onPress={handleLogout}
          accessoryLeft={styles => IconSVG(styles, 'log-out')}
          title="Logout"
        />
      </OverflowMenu>
    </>
  );

  const renderBackAction = () => (
    <TopNavigationAction
      icon={styles => IconSVG(styles, 'arrow-ios-back-outline')}
      onPress={navigationBack}
    />
  );

  return (
    <Layout style={styles.container} level="1">
      <TopNavigation
        alignment={alignment}
        title={title}
        subtitle={subtitle}
        accessoryLeft={isShowBack ? renderBackAction : undefined}
        accessoryRight={renderRightActions}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
  },
});
