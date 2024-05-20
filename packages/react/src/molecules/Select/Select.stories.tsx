import React from 'react';
import Select from './Select';

import '@ds.e/scss/lib/Select.css';

export default {
  title: 'Select',
};

const options = [
  {
    label: 'Strict Black',
    value: 'strict-black',
  },
  {
    label: 'Heavenly Green',
    value: 'heavenly-green',
  },
  {
    label: 'Sweet Pink',
    value: 'pink',
  },
];

export const Common = () => <Select options={options} />;

export const RenderOption = () => (
  <Select
    options={options}
    renderOption={({ getOptionRecommendedProps, option, isSelected }) => (
      <span {...getOptionRecommendedProps()}>
        {option.label} {isSelected ? 'SELECTED' : ''}
      </span>
    )}
  />
);

export const CustomLabel = () => (
  <Select label="Select a color" options={options} />
);
