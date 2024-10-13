import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredSlider as _WiredSlider } from 'wired-elements/lib/wired-slider.js';

export const Slider = createComponent({
  react: React,
  tagName: 'wired-slider',
  elementClass: _WiredSlider
});
