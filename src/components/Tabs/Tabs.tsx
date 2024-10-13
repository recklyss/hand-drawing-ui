import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredTabs as _WiredTabs } from 'wired-elements/lib/wired-tabs.js';

export const Tabs = createComponent({
  react: React,
  tagName: 'wired-tabs',
  elementClass: _WiredTabs
});
