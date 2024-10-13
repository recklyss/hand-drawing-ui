import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredCombo as _WiredCombo } from 'wired-elements/lib/wired-combo.js';
import Item from '../Item';

interface ComboProps extends React.HTMLAttributes<_WiredCombo> {
  selected?: string;
  options?: Array<{ value: string; content: string }>;
}

const WiredComboComponent = createComponent({
  react: React,
  tagName: 'wired-combo',
  elementClass: _WiredCombo,
});

export const Combo: React.FC<ComboProps> = ({ selected, options, ...props }) => {
  return (
    <WiredComboComponent selected={selected} {...props}>
      {options?.map((option) => (
        <Item key={option.value}>{option.content}</Item>
      ))}
    </WiredComboComponent>
  );
};
