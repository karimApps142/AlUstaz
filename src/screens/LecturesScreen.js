import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BaseAddButton, BaseHeader, BaseView, LecturesCard} from '../components';
import {BaseFlatList} from '../components/SharedComponents/BaseFlateList';
import icons from '../constants/icons';

export const LecturesScreen = ({navigation}) => {
  const data = [
    {title: 'المحاضرة الأولى', time: '02:00 pm'},
    {title: 'المحاضرة الثانية', time: '03:32 am'},
    {title: 'المحاضرة الثالثة', time: '01:20 am'},
  ];

  return (
    <BaseView>
      <BaseHeader
        title={'التسجيلات'}
        rightIcon={icons.deleteIcon}
        onPressRight={() => {}}
        onPressSecondRight={() => {}}
        secondRightIcon={icons.edit}
        titleStyles={{marginRight: 0, marginLeft: 5}}
      />
      <View style={styles.container}>
        <BaseFlatList
          data={data}
          renderItem={({item}) => (
            <LecturesCard
              onPress={() => navigation.navigate('LectureDetails')}
              title={item.title}
              time={item.time}
              icon={icons.play}
            />
          )}
        />
        <BaseAddButton onPress={() => navigation.navigate('AddLecture')} />
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
