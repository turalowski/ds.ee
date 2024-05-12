import React from 'react';
import { createRoot } from 'react-dom/client';
import { Select } from '@ds.e/react';

import '@ds.e/scss/lib/Utilities.css';
import '@ds.e/scss/lib/Text.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/Select.css';
import '@ds.e/scss/lib/global.css';

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
  <div>
    <Select options={options} label="Please select size" />
  </div>
);
// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
