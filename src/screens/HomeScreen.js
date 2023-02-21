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
import useRequestPermissions from '../hooks/useRequestPermissions';

export const HomeScreen = ({navigation}) => {
  // const [audioUri, setAudioUri] = useState();
  // useRequestPermissions();

  // const handleResult = result => {
  //   setAudioUri(result);
  // };

  const data = [
    {title: 'المحاضرة الأولى', time: '02:00 pm'},
    {title: 'المحاضرة الثانية', time: '03:32 am'},
    {title: 'المحاضرة الثالثة', time: '01:20 am'},
  ];

  return (
    <BaseView>
      <BaseHeader title={'محاضراتي'} isMenu />
      <View style={styles.container}>
        <BaseFlatList
          data={data}
          renderItem={({item}) => (
            <LecturesCard
              onPress={() => navigation.navigate('Lectures')}
              title={item.title}
              time={item.time}
              icon={icons.notebook}
            />
          )}
        />
        {/* <AudioPlayer audioUri={audioUri} />
      <AudioRecorder onResult={handleResult} /> */}

        <BaseAddButton onPress={() => {}} />
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
