import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredImage as _WiredImage } from 'wired-elements/lib/wired-image.js';

export const Image = createComponent({
  react: React,
  tagName: 'wired-image',
  elementClass: _WiredImage
});
