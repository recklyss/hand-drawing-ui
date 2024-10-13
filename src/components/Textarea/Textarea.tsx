import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredTextarea as _WiredTextarea } from 'wired-elements/lib/wired-textarea.js';

export const Textarea = createComponent({
  react: React,
  tagName: 'wired-textarea',
  elementClass: _WiredTextarea
});
  