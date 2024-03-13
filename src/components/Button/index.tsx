import { ButtonHTMLAttributes, ReactElement } from 'react';
import { WiredButton as WiredButtonType } from 'wired-elements/lib/wired-button';
import styled from 'styled-components';
import { createComponent, ReactWebComponent } from '@lit-labs/react';
import * as React from 'react';

const Container = styled.div`
  width: max-content;
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export type ButtonProps = {

  /**
   * Icon which is shown on the button
   */
  icon?: ReactElement

  /**
   * The elevation of the hand drawing level, by default is 1
   */
  elevation?: number
} & ButtonHTMLAttributes<WiredButtonType>;

const WiredButton: ReactWebComponent<WiredButtonType> = createComponent({
  react: React,
  tagName: 'wired-button',
  elementClass: WiredButtonType
});

export const Button = ({
                         onClick,
                         children,
                         icon,
                         elevation = 1,
                       }: ButtonProps) =>
  <Container>
    <WiredButton onClick={onClick} elevation={elevation}>
      <ButtonContent>
        {icon}
        {children}
      </ButtonContent>
    </WiredButton>
  </Container>
