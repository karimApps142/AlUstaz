import React from 'react';
import {FlatList} from 'react-native';

export const BaseFlatList = ({
  ListFooterComponent,
  ListFooterComponentStyle,
  ListHeaderComponentStyle,
  ListHeaderComponent,
  keyExtractor,
  data,
  contentContainerStyle,
  horizontal,
  renderItem,
  showsVerticalScrollIndicator = true,
  showsHorizontalScrollIndicator = false,
  numColumns,
}) => {
  return (
    <FlatList
      data={data}
      numColumns={numColumns}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      horizontal={horizontal}
      contentContainerStyle={contentContainerStyle}
      ListHeaderComponent={ListHeaderComponent}
      ListHeaderComponentStyle={ListHeaderComponentStyle}
      ListFooterComponent={ListFooterComponent}
      ListFooterComponentStyle={ListFooterComponentStyle}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
