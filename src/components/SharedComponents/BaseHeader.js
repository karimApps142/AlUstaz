import React from 'react';
import {
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import icons from '../../constants/icons';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {BaseIcon} from './BaseIcon';
import {RoundButton} from './RoundButton';
import {SharedElement} from 'react-navigation-shared-element';

export const BaseHeader = ({
  title,
  titleStyles,
  onPressAdd,
  rightTitle,
  isMenu,
  logo,
  onPressRight,
  rightIcon,
  iconTitle,
  subtitle,
  isBack = true,
  showFillter = false,
  iconSize = 15,
  onPressBack,
  backIconColor = COLORS.black,
  textColor = COLORS.black,
  image,
  height = 90,
  rightIconSize = 18,
  iconColor = COLORS.black,
  shadow = false,
  loading = false,
  isProfile = false,
  otherStyles,
  notify,
  children,
  onPressSecondRight,
  SecondRightIconSize,
  secondIconColor,
  secondRightIcon,
}) => {
  //   const {unread} = useSelector(state => state.friends);
  const navigation = useNavigation();

  return (
    <SharedElement id={'header'} style={otherStyles}>
      <View
        style={[
          {
            height,
            paddingTop:
              Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 40,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.base,
            // paddingBottom: 2,
            // borderBottomColor: '#EAEAEA',
            // borderBottomWidth: 1,
            zIndex: 2,
            position: 'relative',
            backgroundColor: COLORS.white,
          },
          shadow ? styles.shadow : null,
          otherStyles,
        ]}>
        <View style={{marginLeft: 5, marginRight: image ? 5 : 10}}>
          {!isMenu ? (
            <>
              {isBack ? (
                <TouchableOpacity
                  style={styles.btnStyle}
                  activeOpacity={0.7}
                  onPress={() => {
                    Keyboard.dismiss();
                    onPressBack
                      ? onPressBack()
                      : navigation.canGoBack()
                      ? navigation.goBack()
                      : null;
                  }}>
                  <BaseIcon
                    icon={icons.right_arrow}
                    color={backIconColor}
                    size={18}
                  />
                </TouchableOpacity>
              ) : null}
            </>
          ) : (
            <TouchableOpacity
              style={styles.btnStyle}
              // style={{padding: 10}}
              activeOpacity={0.7}
              onPress={() => {
                Keyboard.dismiss();
                navigation?.toggleDrawer();
              }}>
              <BaseIcon icon={icons.menu} orgColor size={22} />
            </TouchableOpacity>
          )}
        </View>

        {children}
        {logo && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              width: '100%',
              height: 50,
              marginLeft: 10,
              bottom: 1,
              zIndex: -1,
            }}>
            <Image source={logo} style={{width: 90, height: 30}} />
          </View>
        )}
        {image && (
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: COLORS.lightGray,
              marginRight: 10,
            }}>
            <Image
              source={image}
              style={{height: 40, width: 40, borderRadius: 20}}
            />
          </View>
        )}

        <View style={{flex: 1}}>
          <Text
            numberOfLines={1}
            style={[
              {
                ...FONTS.h2,
                fontSize: 18,
                lineHeight: 25,
                color: textColor,
                fontWeight: '600',
                marginRight: [
                  showFillter,
                  isProfile,
                  onPressRight,
                  iconTitle,
                  rightIcon,
                  onPressAdd,
                ]
                  ? 40
                  : 0,
                textAlign: 'center',
              },
              titleStyles,
            ]}>
            {title}
          </Text>
        </View>

        <View
          style={{
            marginLeft: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {showFillter && (
            <>
              {loading ? (
                <ActivityIndicator
                  size={'small'}
                  animating={loading}
                  color="white"
                  style={{marginRight: 15}}
                />
              ) : (
                <TouchableOpacity
                  style={[styles.btnStyle, {marginRight: 10}]}
                  activeOpacity={1}
                  onPress={showFillter}>
                  <BaseIcon
                    icon={icons?.filter}
                    color={iconColor}
                    size={iconSize + 3}
                  />
                </TouchableOpacity>
              )}
            </>
          )}

          {isProfile ? (
            <TouchableOpacity
              style={[
                styles.btnStyle,
                {
                  paddingHorizontal: iconTitle ? 0 : 15,
                  backgroundColor: COLORS.gray,
                  overflow: 'hidden',
                },
              ]}
              activeOpacity={1}
              onPress={onPressRight}>
              <Image
                source={{uri: isProfile}}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </TouchableOpacity>
          ) : null}
          {onPressRight && (
            <>
              {loading ? (
                <ActivityIndicator
                  size={'small'}
                  animating={loading}
                  color="white"
                  style={{marginRight: 15}}
                />
              ) : (
                <TouchableOpacity
                  style={[
                    styles.btnStyle,
                    {
                      paddingHorizontal: iconTitle ? 0 : 15,
                    },
                  ]}
                  activeOpacity={1}
                  onPress={onPressRight}>
                  <BaseIcon
                    icon={rightIcon}
                    color={iconColor}
                    size={rightIconSize}
                  />
                  {notify && unread ? (
                    <View
                      style={{
                        backgroundColor: COLORS.error,
                        height: 17,
                        width: 17,
                        borderRadius: 17 / 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                      }}>
                      <Text
                        style={{
                          fontSize: 9,
                          fontStyle: 'italic',
                          color: COLORS.white,
                        }}>
                        {unread}
                      </Text>
                    </View>
                  ) : null}
                </TouchableOpacity>
              )}
            </>
          )}
          {onPressSecondRight && (
            <>
              {loading ? (
                <ActivityIndicator
                  size={'small'}
                  animating={loading}
                  color="white"
                  style={{marginRight: 15}}
                />
              ) : (
                <TouchableOpacity
                  style={[
                    styles.btnStyle,
                    {
                      paddingHorizontal: iconTitle ? 0 : 15,
                      marginLeft: 10,
                    },
                  ]}
                  activeOpacity={1}
                  onPress={onPressSecondRight}>
                  <BaseIcon
                    icon={secondRightIcon}
                    color={secondIconColor}
                    size={SecondRightIconSize}
                  />
                </TouchableOpacity>
              )}
            </>
          )}
          {iconTitle && (
            <TouchableOpacity activeOpacity={1} onPress={onPressRight}>
              <Text
                style={{
                  ...FONTS.body4,
                  fontWeight: '600',
                  fontSize: 13,
                  color: iconColor,
                  marginLeft: 5,
                  marginRight: 10,
                }}>
                {iconTitle}
              </Text>
            </TouchableOpacity>
          )}
          {rightTitle && (
            <TouchableOpacity activeOpacity={1} onPress={onPressRight}>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.white,
                  fontWeight: '600',
                  fontSize: 15,
                  marginLeft: 5,
                  marginRight: 10,
                }}>
                {rightTitle}
              </Text>
            </TouchableOpacity>
          )}
          {onPressAdd && (
            <RoundButton icon={icons.add} size={40} onPress={onPressAdd} />
          )}
        </View>
      </View>
    </SharedElement>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 20,
    // backgroundColor: COLORS.white,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 3,
  },

  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cartBtn: {
    position: 'absolute',
    top: 2,
    left: 5,
    backgroundColor: 'rgba(3, 89, 49 , 0.9)',
    width: 21,
    height: 21,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  cartCount: {
    ...FONTS.body4,
    fontSize: 10,
    lineHeight: 14,
    textAlign: 'center',
    color: COLORS.white,
  },
});
