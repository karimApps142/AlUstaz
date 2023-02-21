import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BaseHeader, BaseView, SubscriptionCard} from '../components';
import {BaseFlatList} from '../components/SharedComponents/BaseFlateList';
import {COLORS} from '../constants/theme';

export const SubscriptionScreen = ({navigation}) => {
  const data = [
    {title: 'ابدأ بخطة مجانية', subTitle: 'ابدأ بخطة مجانية'},
    {title: 'خطة قياسية', subTitle: 'ثلاث خطة شهرية'},
    {title: 'خطة متميزة', subTitle: 'خطة سنوية واحدة'},
  ];

  return (
    <BaseView>
      <BaseHeader title={'اختر خطتك'} />
      <BaseFlatList
        data={data}
        renderItem={({item, index}) => (
          <SubscriptionCard
            onPress={() => navigation.navigate('SubscriptionDetails')}
            status={index === 0 ? true : false}
            // otherStyles={{backgroundColor: index===0 ? COLORS.primary : COLORS.white}}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
      />
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 15},
});
