import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredVideo as _WiredVideo } from 'wired-elements/lib/wired-video.js';

export const Video = createComponent({
  react: React,
  tagName: 'wired-video',
  elementClass: _WiredVideo
});
