import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredToggle as _WiredToggle } from 'wired-elements/lib/wired-toggle.js';

export const Toggle = createComponent({
  react: React,
  tagName: 'wired-toggle',
  elementClass: _WiredToggle
});
