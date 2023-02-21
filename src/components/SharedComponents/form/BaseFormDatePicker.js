import {useFormikContext} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {BaseDatePicker} from '../BaseDatePicker';
import {ErrorMessage} from './ErrorMessage';

export const BaseFormDatePicker = ({name, ...otherProps}) => {
  const {values, errors, touched, setFieldValue, setFieldTouched} =
    useFormikContext();

  return (
    <View>
      <BaseDatePicker
        {...otherProps}
        setDate={val => setFieldValue(name, val)}
        onBlur={() => setFieldTouched(name)}
        date={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};
