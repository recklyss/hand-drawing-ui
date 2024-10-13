import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredListbox as _WiredListbox } from 'wired-elements/lib/wired-listbox.js';

export const ListBox = createComponent({
  react: React,
  tagName: 'wired-listbox',
  elementClass: _WiredListbox
});
