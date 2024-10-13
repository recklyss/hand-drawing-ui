import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredSearchInput as _WiredSearchInput } from 'wired-elements/lib/wired-search-input.js';

export const SearchInput = createComponent({
  react: React,
  tagName: 'wired-search-input',
  elementClass: _WiredSearchInput
});
