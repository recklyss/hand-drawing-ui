import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredDivider as _WiredDivider } from 'wired-elements/lib/wired-divider.js';

export const Divider = createComponent({
  react: React,
  tagName: 'wired-divider',
  elementClass: _WiredDivider
});
  