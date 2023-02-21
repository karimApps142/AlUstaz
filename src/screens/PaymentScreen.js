import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BaseButton, BaseHeader, BaseInput, BaseView} from '../components';
import {COLORS, FONTS} from '../constants/theme';
import {CommonActions} from '@react-navigation/native';

export const PaymentScreen = ({navigation}) => {
  return (
    <BaseView>
      <BaseHeader title={'قسط'} />

      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.whiteCard}>
          <Text style={styles.text}>
            هنا سيرى المستخدم تفاصيل بنك المسؤول المضافة من لوحة التحكم.
          </Text>
        </View>

        <Text style={[styles.text, {marginTop: 20}]}>أرفق ملف</Text>
        <View style={styles.fileMain}>
          <View style={styles.file}>
            <Text style={styles.fileName}>أرفق ملف</Text>
          </View>
          <BaseButton
            title={'يربط'}
            otherStyles={{width: '40%', marginTop: 0}}
          />
        </View>

        {/* Description */}
        <Text style={[styles.text]}>رسالة</Text>
        <BaseInput
          underlineColorAndroid="transparent"
          placeholder="رسالة"
          placeholderTextColor="grey"
          multiline={true}
          inputStyles={styles.textArea}
          otherStyles={[styles.textArea]}
          numberOfLines={6}
        />

        <BaseButton
          onPress={() => navigation.navigate('login')}
          title={'ادفع الآن'}
          otherStyles={{marginTop: 30}}
        />
      </KeyboardAwareScrollView>
    </BaseView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  whiteCard: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    color: COLORS.black,
    ...FONTS.h3,
    marginBottom: 5,
    marginTop: 10,
  },
  fileMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  file: {
    borderRadius: 15,
    height: 45,
    backgroundColor: COLORS.lightGray,
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
    marginRight: 10,
  },
  fileName: {
    color: COLORS.gray,
    ...FONTS.body5,
  },
  textArea: {
    textAlignVertical: 'top',
    marginTop: 5,
    color: COLORS.black,
    height: 150,
    padding: 10,
    backgroundColor: COLORS.lightGray,
  },
});
