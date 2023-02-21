import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  AudioPlayer,
  AudioRecorder,
  BaseAddButton,
  BaseHeader,
  BaseView,
  LecturesCard,
} from '../components';
import {BaseFlatList} from '../components/SharedComponents/BaseFlateList';
import icons from '../constants/icons';

export const AgendaScreen = ({navigation}) => {
  const data = [
    {title: 'مواعيد الأعمال', time: '02:00 pm'},
    {title: 'تخطيط المؤتمر', time: '03:32 am'},
    {title: 'المحاضرة الثالثة', time: '01:20 am'},
  ];

  return (
    <BaseView>
      <BaseHeader title={'جدول أعمال'} isMenu />
      <View style={styles.container}>
        <BaseFlatList
          data={data}
          renderItem={({item}) => (
            <LecturesCard
              onPress={() => navigation.navigate('agendaDetail')}
              title={item.title}
              time={item.time}
              icon={icons.notebook}
            />
          )}
        />

        <BaseAddButton onPress={() => navigation.navigate('createAgenda')} />
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
