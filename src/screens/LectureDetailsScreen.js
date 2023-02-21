import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {AudioPlayer, BaseHeader, BaseView} from '../components';
import icons from '../constants/icons';
import {COLORS, FONTS} from '../constants/theme';

export const LectureDetailsScreen = ({}) => {
  return (
    <BaseView>
      <BaseHeader
        title={'التسجيلات'}
        rightIcon={icons.deleteIcon}
        onPressRight={() =>
          Alert.alert('Delete Item', 'Work in progress', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
        }
        onPressSecondRight={() =>
          Alert.alert('Edit Item', 'Work in progress', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
        }
        secondRightIcon={icons.edit}
        titleStyles={{marginRight: 0, marginLeft: 5}}
      />
      <View style={styles.container}>
        <Text style={styles.text}>المحاضرة الأولى</Text>
        <Text style={styles.detail}>
          لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور
          طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير
          على سبيل المثال ... او نماذج مواقع انترنت ... وعند موافقه العميل
          المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص
          النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم
          قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم
          الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً،
          بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من
          كتاب "حول أقاصي الخير والشر"
        </Text>

        <AudioPlayer />
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 15, flex: 1},
  text: {
    color: COLORS.black,
    ...FONTS.h2,
  },
  detail: {
    color: COLORS.gray,
    ...FONTS.body5,
    marginTop: 20,
  },
});
