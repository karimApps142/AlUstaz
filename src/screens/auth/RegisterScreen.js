import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  BaseForm,
  BaseFormInput,
  BaseHeader,
  BaseView,
  SubmitButton,
} from '../../components';
import icons from '../../constants/icons';
import {COLORS, FONTS} from '../../constants/theme';

export const RegisterScreen = ({navigation}) => {
  const [showPassword, isShowPassword] = useState(false);

  return (
    <BaseView>
      <BaseHeader />
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.bottomContainer}>
          <Text style={{color: COLORS.black, ...FONTS.body1}}>اشتراك </Text>
          <Text style={[styles.text, {marginBottom: 30}]}>إنشاء حساب </Text>

          <BaseForm initialValues={{email: '', password: ''}}>
            <Text style={[styles.text]}>الاسم الكامل</Text>
            <BaseFormInput
              placeholder="الاسم الكامل "
              name={'name'}
              leftIcon={icons.user}
            />

            <Text style={[styles.text]}>بريد إلكتروني</Text>
            <BaseFormInput
              placeholder="عنوان البريد الإلكتروني"
              name={'email'}
              leftIcon={icons.email}
            />

            <Text style={[styles.text]}>كلمة المرور</Text>
            <BaseFormInput
              placeholder="كلمة المرور"
              name={'password'}
              leftIcon={icons.lock}
              onPressIcon={() => isShowPassword(!showPassword)}
              icon={showPassword ? icons.eye : icons.hidden}
              isPassword={!showPassword}
            />
            <Text style={[styles.text]}>تأكيد كلمة المرور</Text>
            <BaseFormInput
              placeholder="تأكيد كلمة المرور"
              name={'password'}
              leftIcon={icons.lock}
              onPressIcon={() => isShowPassword(!showPassword)}
              icon={showPassword ? icons.eye : icons.hidden}
              isPassword={!showPassword}
            />

            <SubmitButton title={'اشتراك'} otherStyles={{marginTop: 50}} />
          </BaseForm>
        </View>
      </KeyboardAwareScrollView>
    </BaseView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  logoMain: {
    height: 80,
    width: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  logo: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  text: {
    color: COLORS.black,
    ...FONTS.body5,
    fontWeight: '600',
    marginTop: 5,
  },

  bottomContainer: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
  },
});
