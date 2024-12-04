import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';

import GifExpertApp from './GifExpertApp';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme>
      <GifExpertApp />
    </Theme>
  </StrictMode>,
)
