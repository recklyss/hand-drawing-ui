import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredRadio as _WiredRadio } from 'wired-elements/lib/wired-radio.js';

const RadioComponent = createComponent({
  react: React,
  tagName: 'wired-radio',
  elementClass: _WiredRadio
});

export const Radio = (props: React.HTMLAttributes<_WiredRadio>) => (
  <RadioComponent {...props} >
    {props.children}
  </RadioComponent>
);