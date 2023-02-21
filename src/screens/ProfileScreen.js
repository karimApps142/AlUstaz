import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BaseButton, BaseHeader, BaseInput, BaseView} from '../components';
import {COLORS, FONTS} from '../constants/theme';
import dummyImages from '../dummyData';

export const ProfileScreen = () => {
  return (
    <BaseView>
      <View style={{backgroundColor: COLORS.primary, flex: 1}}>
        <BaseHeader
          title={'حساب تعريفي'}
          textColor={COLORS.white}
          backIconColor={COLORS.white}
          otherStyles={{backgroundColor: 'transparent'}}
        />

        <View style={styles.profileDetail}>
          <View style={styles.imageMain}>
            <Image style={styles.profileImage} source={dummyImages.profile} />
          </View>
          <Text style={styles.name}>محمد احمد</Text>
          <Text style={styles.gmail}>example@gmail.com</Text>
        </View>
        <View style={styles.whiteCardMain}>
          <KeyboardAwareScrollView contentContainerStyle={{paddingBottom: 20}}>
            <Text style={[styles.text, {marginTop: 20}]}>
              حدد صورة الملف الشخصي
            </Text>
            <View style={styles.fileMain}>
              <View style={styles.file}>
                <Text style={styles.fileName}>حدد صورة الملف الشخصي</Text>
              </View>
              <BaseButton
                title={'يختار'}
                otherStyles={{width: '40%', marginTop: 0}}
              />
            </View>

            {/* Description */}
            <Text style={[styles.text]}>الاسم الكامل</Text>
            <BaseInput placeholder="الاسم الكامل" />

            <BaseButton title={'تحديث'} otherStyles={{marginTop: 30}} />
          </KeyboardAwareScrollView>
        </View>
      </View>
    </BaseView>
  );
};
const styles = StyleSheet.create({
  profileDetail: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
  },
  imageMain: {
    backgroundColor: COLORS.white,
    padding: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profileImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  name: {
    color: COLORS.white,
    ...FONTS.h2,
    marginTop: 10,
  },
  gmail: {
    color: COLORS.white,
    ...FONTS.body5,
  },
  whiteCardMain: {
    backgroundColor: COLORS.white,
    padding: 15,
    bottom: 0,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
    height: 120,
    padding: 10,
    backgroundColor: COLORS.lightGray,
  },
});
