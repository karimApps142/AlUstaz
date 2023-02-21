// import {useFormikContext} from 'formik';
// import React from 'react';
// import {View} from 'react-native';
// import {BaseCheckBox} from '../base/BaseCheckBox';
// import {ErrorMessage} from './ErrorMessage';

// export const BaseFormCheckBox = ({name, ...otherProps}) => {
//   const {values, errors, touched, setFieldValue, setFieldTouched} =
//     useFormikContext();

//   return (
//     <View>
//       <BaseCheckBox
//         {...otherProps}
//         setIsChecked={val => setFieldValue(name, val)}
//         onBlur={() => setFieldTouched(name)}
//         isChecked={values[name]}
//       />
//       <ErrorMessage error={errors[name]} visible={touched[name]} />
//     </View>
//   );
// };
