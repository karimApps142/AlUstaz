import moment from 'moment';
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import icons from '../../constants/icons';
import {COLORS} from '../../constants/theme';
import {BaseIcon} from './BaseIcon';

export const BaseDatePicker = ({
  icon = icons.calendar,
  placeholder = 'Select Date',
  open = false,
  date,
  fakeDate = new Date(),
  setOpen = () => {},
  setDate = () => {},
  mode = 'date',
  ...otherProps
}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.btnDateTime}
        activeOpacity={0.7}
        onPress={() => setOpen(true)}>
        <Text style={styles.txtDateTime}>
          {date
            ? mode === 'time'
              ? moment(date).format('hh:mm a')
              : moment(date).format('D-M-Y')
            : placeholder}
        </Text>
        <BaseIcon color={COLORS.gray} icon={icon} />
      </TouchableOpacity>

      <DatePicker
        modal
        open={open}
        date={date ? moment(date).toDate() : fakeDate}
        mode={mode}
        onConfirm={date => {
          setOpen(false);
          setDate(moment(date).format('YYYY-MM-DD HH:mm:ss'));
        }}
        onCancel={() => {
          setOpen(false);
        }}
        {...otherProps}
      />
    </>
  );
};

const styles = StyleSheet.create({
  btnDateTime: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 5,
  },
  txtDateTime: {color: COLORS.gray},
});
