import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

export const BaseBottomSheet = ({
  customRef,
  children,
  height,
  ...otherProps
}) => (
  <RBSheet
    ref={customRef}
    animationType="none"
    height={height}
    minClosingHeight={0}
    openDuration={300}
    closeDuration={200}
    closeOnDragDown={false}
    dragFromTopOnly={true}
    closeOnPressMask={true}
    closeOnPressBack={true}
    customStyles={{
      wrapper: {},
      container: {
        padding: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
      },
      draggableIcon: {},
    }}
    {...otherProps}>
    {children}
  </RBSheet>
);
