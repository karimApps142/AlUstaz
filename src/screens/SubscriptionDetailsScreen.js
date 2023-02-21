import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BaseButton, BaseHeader, BaseIcon, BaseView} from '../components';
import icons from '../constants/icons';
import {COLORS, FONTS} from '../constants/theme';

export const SubscriptionDetailsScreen = ({navigation}) => {
  return (
    <BaseView>
      <BaseHeader title={'ابدأ بخطة مجانية'} />
      <View style={styles.container}>
        <View style={styles.whiteCard}>
          <Text style={styles.title}>ابدأ بخطة مجانية</Text>
          <Text style={styles.planText}>ابدأ بخطة مجانية</Text>
          <Text style={styles.price}>د.إ 0</Text>

          <View style={styles.bottomMain}>
            <BaseIcon icon={icons.checked} color={COLORS.primary} />
            <Text style={styles.text}>تستخدم مع الإعلانات</Text>
          </View>
          <View style={styles.bottomMain}>
            <BaseIcon icon={icons.checked} color={COLORS.primary} />
            <Text style={styles.text}>تسجيلات محدودة</Text>
          </View>

          <BaseButton
            onPress={() => navigation.navigate('payment')}
            title={'البدء'}
            otherStyles={{marginTop: 30}}
          />
        </View>
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 15},
  whiteCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    color: COLORS.black,
    ...FONTS.h2,
  },
  planText: {
    color: COLORS.gray,
    ...FONTS.h3,
  },
  price: {
    color: COLORS.primary,
    ...FONTS.h1,
    marginVertical: 10,
  },
  bottomMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    color: COLORS.black,
    ...FONTS.h3,
    marginLeft: 10,
  },
});
