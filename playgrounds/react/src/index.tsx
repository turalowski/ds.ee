import React from 'react';
import { createRoot } from 'react-dom/client';
import { Select } from '@ds.ee/react';

import '@ds.ee/scss/lib/Utilities.css';
import '@ds.ee/scss/lib/Text.css';
import '@ds.ee/scss/lib/Margin.css';
import '@ds.ee/scss/lib/Select.css';
import '@ds.ee/scss/lib/global.css';

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

const root = createRoot(document.querySelector('#root') as Element);
root.render(
  <div style={{ padding: '40px' }}>
    <Select
      options={options}
      label="Please select size"
      renderOption={({ option, getOptionRecommendedProps }) => (
        <p {...getOptionRecommendedProps()}>{option.label}</p>
      )}
    />
  </div>
);
// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
