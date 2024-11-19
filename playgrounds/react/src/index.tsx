import React from 'react';
import { createRoot } from 'react-dom/client';

import '@ds.ee/scss/lib/Utilities.css';
import '@ds.ee/scss/lib/Text.css';
import '@ds.ee/scss/lib/Margin.css';
import '@ds.ee/scss/lib/Select.css';
import '@ds.ee/scss/lib/global.css';
import '@ds.ee/scss/lib/Typography.css';
import '@ds.ee/scss/lib/Input.css';
import '@ds.ee/scss/lib/Button.css';
import '@ds.ee/scss/lib/Margin.css';

import App from './App';


const root = createRoot(document.querySelector('#root') as Element);
root.render(<App />);
