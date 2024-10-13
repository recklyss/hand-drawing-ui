import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredCheckbox as _WiredCheckbox } from 'wired-elements/lib/wired-checkbox.js';

export const Checkbox = createComponent({
  react: React,
  tagName: 'wired-checkbox',
  elementClass: _WiredCheckbox
});
