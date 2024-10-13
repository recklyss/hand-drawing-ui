import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredSpinner as _WiredSpinner } from 'wired-elements/lib/wired-spinner.js';

export const Spinner = createComponent({
  react: React,
  tagName: 'wired-spinner',
  elementClass: _WiredSpinner
});
