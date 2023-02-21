import React, {useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  BaseBottomSheet,
  BaseButton,
  BaseHeader,
  BaseInput,
  BaseView,
  RoundButton,
  TagPeopleCard,
} from '../components';
import {BaseFlatList} from '../components/SharedComponents/BaseFlateList';
import icons from '../constants/icons';
import {COLORS, FONTS} from '../constants/theme';
import dummyImages from '../dummyData';

export const CreateAgendaScreen = () => {
  const tagFriendsRef = useRef(null);
  const data = [{}, {}, {}];
  return (
    <BaseView>
      <BaseHeader title={'إنشاء الأجندة'} />

      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.text]}>عنوان جدول الأعمال</Text>
        <BaseInput placeholder={'عنوان جدول الأعمال'} />

        {/* Description */}
        <Text style={[styles.text]}>وصف جدول الأعمال</Text>
        <BaseInput
          underlineColorAndroid="transparent"
          placeholder="وصف جدول الأعمال"
          placeholderTextColor="grey"
          multiline={true}
          inputStyles={styles.textArea}
          otherStyles={[styles.textArea]}
          numberOfLines={6}
        />

        <BaseFlatList
          contentContainerStyle={{width: '100%', padding: 10}}
          horizontal={true}
          data={data}
          renderItem={() => (
            <View style={styles.imageMain}>
              <Image source={dummyImages.profile} style={styles.image} />
            </View>
          )}
        />
        <View>
          <RoundButton
            icon={icons.plus}
            onPress={() => {
              tagFriendsRef.current?.open();
            }}
          />
        </View>

        <BaseButton title={'يخلق'} otherStyles={{marginTop: 30}} />
      </KeyboardAwareScrollView>
      <BaseBottomSheet height={420} customRef={tagFriendsRef}>
        <View style={styles.bottomSheet}>
          <Text style={[styles.text, {textAlign: 'center', ...FONTS.h2}]}>
            جدولة اجتماع
          </Text>

          <BaseFlatList data={data} renderItem={() => <TagPeopleCard />} />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <BaseButton title={'يضيف'} otherStyles={styles.button} />
            <BaseButton
              title={'يلغي'}
              textStyles={{color: COLORS.primary}}
              otherStyles={[styles.button, {backgroundColor: COLORS.lightGray}]}
            />
          </View>
        </View>
      </BaseBottomSheet>
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
  bottomSheet: {
    padding: 15,
  },
  button: {
    width: '47%',
  },
});
