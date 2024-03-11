import { ButtonHTMLAttributes, ReactElement } from 'react';
import { WiredButton } from 'wired-elements';

import 'wired-elements';
import styled from 'styled-components';

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
} & ButtonHTMLAttributes<WiredButton>;

export const Button = ({
                         onClick,
                         children,
                         icon,
                         elevation = 1,
                       }: ButtonProps) =>
  <Container>
    <wired-button onClick={onClick} elevation={elevation}>
      <ButtonContent>
        {icon}
        {children}
      </ButtonContent>
    </wired-button>
  </Container>
