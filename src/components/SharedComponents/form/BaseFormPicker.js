// import {useFormikContext} from 'formik';
// import React from 'react';
// import {View} from 'react-native';
// import {BasePicker} from '../base/BasePicker';
// import {ErrorMessage} from './ErrorMessage';

// export const BaseFormPicker = ({name, ...otherProps}) => {
//   const {values, errors, touched, setFieldValue, setFieldTouched} =
//     useFormikContext();

//   return (
//     <View>
//       <BasePicker
//         {...otherProps}
//         setSelected={val => setFieldValue(name, val)}
//         onBlur={() => setFieldTouched(name)}
//         selected={values[name]}
//       />
//       <ErrorMessage error={errors[name]} visible={touched[name]} />
//     </View>
//   );
// };
