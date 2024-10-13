import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredProgress as _WiredProgress } from 'wired-elements/lib/wired-progress.js';

export const Progress = createComponent({
  react: React,
  tagName: 'wired-progress',
  elementClass: _WiredProgress
});
