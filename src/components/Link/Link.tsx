import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredLink as _WiredLink } from 'wired-elements/lib/wired-link.js';

interface Props extends React.HTMLAttributes<_WiredLink> {
  elevation?: number;
  href?: string;
  target?: string;
  children: React.ReactNode;
}

const LinkComponent = createComponent({
  react: React,
  tagName: 'wired-link',
  elementClass: _WiredLink
});

export const Link = ({ children, elevation, href, target, ...props }: Props) => (
  <LinkComponent {...props} href={href} target={target} elevation={elevation}>
    {children}
  </LinkComponent>
);
