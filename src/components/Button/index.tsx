import 'wired-elements';
import classes from './Button.module.scss';
import { ReactElement, ReactNode } from 'react';

export type ButtonProps = {
  /**
   * Variant for the button
   */
  variant?: 'primary' | 'secondary' | 'link';
  /**
   * Icon to be displayed at the front of the text
   */
  icon?: ReactElement;

  /**
   * Custom width for the button. Can be in form of any css unit of measurement (%, px, rem, etc)
   */
  width?: string;

  /**
   * Custom maxWidth for the button. Can be in form of any css unit of measurement (%, px, rem, etc)
   */
  maxWidth?: string;

  /**
   * Custom padding for the button. Can be in form of any css padding format
   */
  padding?: string;

  /**
   * Font size for the button. Can be in form of any css unit of measurement (%, px, rem, etc)
   */
  fontSize?: string;

  /**
   * Test id value to help with any form of automated testing
   */
  dataTestId?: string;

  /**
   * React children element
   */
  children?: ReactNode;

  /**
   * Button click function
   */
  onClick?: () => void;
};

export const Button = ({
                         icon,
                         width,
                         maxWidth,
                         padding = '0 12px',
                         dataTestId,
                         onClick,
                         fontSize = '14px',
                         children
                       }: ButtonProps) =>
  <wired-button className={classes.wiredButton}
                data-testid={dataTestId}
                onClick={onClick}
                style={{ width, maxWidth, padding, fontSize }}
  >
    <div className={classes.buttonContent}>
      {icon}
      {children}
    </div>
  </wired-button>
