import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredButton as _WiredButton } from 'wired-elements/lib/wired-button.js';

interface Props extends React.HTMLAttributes<_WiredButton> {

}

const WiredButtonComponent = createComponent({
  react: React,
  tagName: 'wired-button',
  elementClass: _WiredButton
});

export const Button = (props: Props) => (
  <WiredButtonComponent {...props} />
);
