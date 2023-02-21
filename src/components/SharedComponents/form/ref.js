import React from 'react';

export const formRef = React.createRef();

const resetForm = () => formRef.current?.resetForm();

export default {
  resetForm,
};
