import React, {useContext} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {BaseIcon} from '../components';
import {COLORS, FONTS} from '../constants/theme';
import icons from '../constants/icons';
import helper from '../constants/helper';
import dummyImages from '../dummyData';
import AuthContext from '../context/AuthContext';
// import useAuth from '../../../auth/hooks/useAuth';

export const DrawerContent = props => {
  const {trigger, activeRoute} = useContext(AuthContext);
  // const {loading, switchUser} = useAuth();
  // const {signout} = trigger;

  const renderAccountinfo = () => {
    return (
      <View
        style={{
          height: 160,
          paddingTop: Platform.select({ios: 15, android: 5}),
          marginBottom: 30,
          backgroundColor: COLORS.primary,
          paddingBottom: 30,
          padding: 15,
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          borderBottomColor: COLORS.white,
          borderBottomWidth: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: COLORS.white,
              padding: 2,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
              overflow: 'hidden',
              marginRight: 10,
            }}>
            <Image
              // source={{uri: helper.getImage(user?.dp)}}
              source={dummyImages.profile}
              style={{height: '100%', width: '100%', resizeMode: 'cover'}}
            />
          </View>

          <View>
            <Text style={{color: COLORS.white, ...FONTS.h2}}>محمد احمد</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderMenuItem = props => {
    return helper.drawer_menu.map(menu => (
      <Pressable
        android_ripple={{color: COLORS.primary}}
        onPress={() => {
          if (menu.route === 'logout') {
            return trigger.signout();
          }
          props.navigation.navigate(menu.route);
          trigger.setRoute(menu.route);
        }}
        key={menu.title}
        style={({pressed}) => [
          {
            opacity: pressed ? (Platform.OS === 'ios' ? 0.7 : 1) : 1,
          },
          {
            padding: 10,
            paddingLeft: 20,
            borderRadius: 10,
            overflow: 'hidden',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
            backgroundColor:
              activeRoute === menu.route ? COLORS.white : COLORS.primary,
          },
        ]}>
        <BaseIcon
          icon={icons[menu.icon]}
          color={activeRoute === menu.route ? COLORS.primary : COLORS.white}
        />

        <Text
          style={{
            flex: 1,
            marginLeft: 15,
            ...FONTS.h3,
            color: activeRoute === menu.route ? COLORS.primary : COLORS.white,
          }}>
          {menu.title}
        </Text>
      </Pressable>
    ));
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      {renderAccountinfo()}

      <DrawerContentScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 15}}
        {...props}>
        {renderMenuItem(props)}

        <View
          style={{
            height: 90,
            borderTopColor: COLORS.white,
            borderTopWidth: 2,
            marginTop: 50,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.white,
              height: 40,
              width: '60%',
              borderRadius: 30,
            }}>
            <BaseIcon icon={icons.logout} color={COLORS.primary} />
            <Text style={{color: COLORS.primary, marginLeft: 10, ...FONTS.h3}}>
              تسجيل خروج
            </Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
