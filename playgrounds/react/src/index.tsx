import React from 'react';
import { createRoot } from 'react-dom/client';
import { Color } from '@ds.e/react';

import '@ds.e/scss/lib/Utilities.css';

const root = createRoot(document.querySelector('#root') as Element);
root.render(<Color hexCode="#000" />);
// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
