import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredIconButton as _WiredIconButton } from 'wired-elements/lib/wired-icon-button.js';

export const IconButton = createComponent({
  react: React,
  tagName: 'wired-icon-button',
  elementClass: _WiredIconButton
});
