import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredInput as _WiredInput } from 'wired-elements/lib/wired-input';

export const Input = createComponent({
  react: React,
  tagName: 'wired-input',
  elementClass: _WiredInput
});
