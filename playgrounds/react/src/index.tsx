import React from 'react';
import { createRoot } from 'react-dom/client';
import { Text, Margin } from '@ds.e/react';

import '@ds.e/scss/lib/Utilities.css';
import '@ds.e/scss/lib/Text.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/global.css';

const root = createRoot(document.querySelector('#root') as Element);
root.render(
  <div>
    <Margin space="xl">
      <Text size="xl">this is some text</Text>
    </Margin>
  </div>
);
// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
