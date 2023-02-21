import React, {useContext, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  BaseButton,
  BaseForm,
  BaseFormInput,
  BaseView,
  SubmitButton,
} from '../../components';
import icons from '../../constants/icons';
import {COLORS, FONTS} from '../../constants/theme';
import AuthContext from '../../context/AuthContext';
import * as Yup from 'yup';

export const LoginScreen = ({navigation}) => {
  const [showPassword, isShowPassword] = useState(false);
  const {trigger} = useContext(AuthContext);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().label('Password'),
  });

  return (
    <BaseView>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.bottomContainer}>
          <Text style={{color: COLORS.black, ...FONTS.body1}}>
            أهلا بكم من جديد
          </Text>
          <Text style={[styles.text, {marginBottom: 30}]}>
            تسجيل الدخول للمتابعة
          </Text>

          <BaseForm
            onSubmit={() => {
              trigger.updateUser('Fazal');
            }}
            validationSchema={validationSchema}
            initialValues={{email: '', password: ''}}>
            <Text style={[styles.text]}>بريد إلكتروني</Text>
            <BaseFormInput
              placeholder="أدخل بريدك الإلكتروني"
              name={'email'}
              leftIcon={icons.email}
            />

            <Text style={[styles.text]}>كلمة المرور</Text>
            <BaseFormInput
              placeholder="أدخل كلمة المرور الخاصة بك"
              name={'password'}
              leftIcon={icons.lock}
              onPressIcon={() => isShowPassword(!showPassword)}
              icon={showPassword ? icons.eye : icons.hidden}
              isPassword={!showPassword}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('forgotPassword')}
              style={styles.forgotButton}>
              <Text style={styles.forgotText}>نسيت كلمة المرور؟</Text>
            </TouchableOpacity>
            <SubmitButton
              title={'تسجيل الدخول'}
              otherStyles={{marginTop: 20}}
            />
          </BaseForm>
          <View style={styles.signUpMain}>
            <Text style={[styles.signUp]}>ليس لديك حساب</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('register')}>
              <Text
                style={{color: COLORS.primary, ...FONTS.h3, fontWeight: '700'}}>
                اشتراك
              </Text>
            </TouchableOpacity>

            <BaseButton
              title={'الاشتراكات'}
              onPress={() => navigation.navigate('sub')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </BaseView>
  );
};
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
    paddingTop: 0,
    width: '100%',
  },
  forgotText: {
    alignItems: 'center',
    color: COLORS.primary,
    ...FONTS.h4,
  },
  forgotButton: {
    paddingVertical: 10,
  },
  signUp: {
    color: COLORS.black,
    ...FONTS.h3,
    textAlign: 'center',
    marginTop: 10,
  },
  signUpMain: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    height: 40,
    width: '100%',
    backgroundColor: COLORS.lightGray,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
