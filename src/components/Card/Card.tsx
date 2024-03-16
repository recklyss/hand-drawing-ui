import { createComponent, ReactWebComponent } from '@lit-labs/react';
import { WiredCard as WiredCardType } from 'wired-elements/lib/wired-card';
import * as React from 'react';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

type CardProps = {
  /**
   * The elevation of the hand drawing level, by default is 1
   */
  elevation?: 1 | 2 | 3 | 4 | 5;

  width?: number;
  height?: number;
} & HTMLAttributes<WiredCardType>;

const WiredCard: ReactWebComponent<WiredCardType> = createComponent({
  react: React,
  tagName: 'wired-card',
  elementClass: WiredCardType
});


const StyledWiredCard = styled(WiredCard)<Pick<CardProps, 'width' | 'height'>>`
  // width or height need to be calculated by minus padding
  width: ${props => props.width ? `${props.width - 20}px` : 'auto'};
  height: ${props => props.height ? `${props.height - 20}px` : 'auto'};
  padding: 10px;
`;

/**
 * Wired element based Card
 */
export const Card = ({ elevation, width, height, children }: CardProps) => (
  <StyledWiredCard elevation={elevation} width={width} height={height}>
    {children}
  </StyledWiredCard>
);
