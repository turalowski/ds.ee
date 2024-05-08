import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from '@ds.e/react';

import '@ds.e/scss/lib/Button.css';

const root = createRoot(document.querySelector('#root') as Element);
root.render(<Button label="Test" />);
// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
