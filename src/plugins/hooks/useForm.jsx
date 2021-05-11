import { useState } from 'react';

const useForm = keys => {
  const [form, setForm] = useState({
    values: Object.keys(keys).reduce((container, key) => {
      container[key] = '';
      return container;
    }, {}),
    errors: Object.keys(keys).reduce((container, key) => {
      container[key] = true;
      return container;
    }, {}),
    touched: Object.keys(keys).reduce((container, key) => {
      container[key] = false;
      return container;
    }, {})
  })
  return [{
    errors: form.errors,
    values: form.values,
    touched:  form.touched,
    handleReset: () => {
      setForm({
        values: Object.keys(keys).reduce((container, key) => {
          container[key] = '';
          return container;
        }, {}),
        errors: Object.keys(keys).reduce((container, key) => {
          container[key] = true;
          return container;
        }, {}),
        touched: Object.keys(keys).reduce((container, key) => {
          container[key] = false;
          return container;
        }, {})
      });
    },
    handleTouched: ({ target: { name }}) => {
      setForm(form => ({
        ...form,
        touched: {
          ...form.touched,
          [name]: true
        }
      }));
    },
    handleChange: ({ target: { name, value } }) => {
      setForm(form => ({
        ...form,
        values: {
          ...form.values,
          [name]: value
        },
        errors: {
          ...form.errors,
          [name]: (value || '').length === 0
        },
        touched: {
          ...form.touched,
          [name]: true
        }
      }));
    }
  }]
};

export default useForm;