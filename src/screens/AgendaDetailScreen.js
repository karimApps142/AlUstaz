import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import {
  AudioPlayer,
  BaseBottomSheet,
  BaseButton,
  BaseForm,
  BaseFormDatePicker,
  BaseHeader,
  BaseInput,
  BaseView,
} from '../components';
import {BaseFlatList} from '../components/SharedComponents/BaseFlateList';
import icons from '../constants/icons';
import {COLORS, FONTS} from '../constants/theme';
import dummyImages from '../dummyData';

export const AgendaDetailsScreen = ({navigation}) => {
  const MetingRef = useRef(null);
  const [dateModal, setDateModal] = useState(false);
  const [timeModal, setTimeModal] = useState(false);

  const data = [{}, {}, {}, {}, {}];
  return (
    <BaseView>
      <BaseHeader
        title={'جدول أعمال'}
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
        <Text style={styles.text}>مواعيد الأعمال</Text>
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

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // width: '100%',
          }}>
          <BaseFlatList
            contentContainerStyle={{padding: 10}}
            horizontal={true}
            data={data}
            renderItem={() => (
              <View style={styles.imageMain}>
                <Image source={dummyImages.profile} style={styles.image} />
              </View>
            )}
          />
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.body3,
            }}>
            19 شخصا +
          </Text>
        </View>
      </View>
      <View style={styles.whiteCard}>
        <BaseButton
          onPress={() => navigation.navigate('chat')}
          title={'ابدأ الدردشة'}
        />
        <BaseButton
          onPress={() => {
            MetingRef.current?.open();
          }}
          title={'جدولة اجتماع'}
          textStyles={{color: COLORS.primary}}
          otherStyles={{backgroundColor: COLORS.lightGray}}
        />
      </View>

      <BaseBottomSheet height={420} customRef={MetingRef}>
        <View style={styles.bottomSheet}>
          <BaseForm initialValues={{data: ''}}>
            <Text style={[styles.text, {textAlign: 'center'}]}>
              جدولة اجتماع
            </Text>
            <Text style={[styles.title]}>عنوان الاجتماعات</Text>
            <BaseInput placeholder={'عنوان الاجتماعات'} />

            <Text style={[styles.title]}>حدد تاريخ</Text>
            <BaseFormDatePicker
              placeholder="حدد تاريخ"
              open={dateModal}
              minimumDate={new Date()}
              setOpen={value => setDateModal(value)}
              mode="date"
              name="date"
            />
            <Text style={[styles.title]}>حدد الوقت</Text>
            <BaseFormDatePicker
              icon={icons.clock}
              placeholder="حدد الوقت"
              open={timeModal}
              minimumDate={new Date()}
              setOpen={value => setTimeModal(value)}
              mode="time"
              name="time"
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <BaseButton title={'احفظها'} otherStyles={styles.button} />
              <BaseButton
                title={'إلغاء'}
                textStyles={{color: COLORS.primary}}
                otherStyles={[
                  styles.button,
                  {backgroundColor: COLORS.lightGray},
                ]}
              />
            </View>
          </BaseForm>
        </View>
      </BaseBottomSheet>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 15, flex: 1},
  text: {
    color: COLORS.black,
    ...FONTS.h2,
  },
  title: {
    color: COLORS.black,
    ...FONTS.h3,
    marginBottom: 5,
    marginTop: 10,
  },
  detail: {
    color: COLORS.gray,
    ...FONTS.body5,
    marginTop: 20,
  },
  whiteCard: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    position: 'absolute',
    bottom: 10,
    width: '90%',
    alignSelf: 'center',
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
  bottomSheet: {
    padding: 15,
  },
  button: {
    width: '47%',
  },
  imageMain: {
    height: 35,
    width: 35,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    marginLeft: -10,
    padding: 2,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
