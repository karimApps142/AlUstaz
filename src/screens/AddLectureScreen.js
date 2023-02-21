import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  BaseButton,
  BaseHeader,
  BaseInput,
  BaseView,
  RoundButton,
} from '../components';
import icons from '../constants/icons';
import {COLORS, FONTS} from '../constants/theme';

export const AddLectureScreen = () => {
  return (
    <BaseView>
      <BaseHeader title={'تسجيلات جديدة'} />

      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.text]}>عنوان تسجيلات</Text>
        <BaseInput placeholder={'عنوان تسجيلات'} />

        {/* Description */}
        <Text style={[styles.text]}>ملاحظات</Text>
        <BaseInput
          underlineColorAndroid="transparent"
          placeholder="اكتب ملاحظات هنا"
          placeholderTextColor="grey"
          multiline={true}
          inputStyles={styles.textArea}
          otherStyles={[styles.textArea]}
          numberOfLines={6}
        />

        <View style={{marginVertical: 20}}>
          <RoundButton icon={icons.mic} onPress={() => alert('Record Audio')} />
        </View>

        <BaseButton title={'احفظها'} otherStyles={{marginTop: 30}} />
      </KeyboardAwareScrollView>
    </BaseView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15,
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
  AudioMain: {
    position: 'absolute',
    right: 10,
    backgroundColor: 'red',
  },
});
