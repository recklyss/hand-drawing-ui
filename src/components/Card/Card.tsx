import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredCard as _WiredCard } from 'wired-elements/lib/wired-card.js';

export const Card = createComponent({
  react: React,
  tagName: 'wired-card',
  elementClass: _WiredCard
});
