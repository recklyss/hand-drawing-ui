import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredFab as _WiredFab } from 'wired-elements/lib/wired-fab.js';

const FabComponent = createComponent({
  react: React,
  tagName: 'wired-fab',
  elementClass: _WiredFab
});

export const Fab = (props: React.HTMLAttributes<_WiredFab>) => (
  <FabComponent {...props} />
);
