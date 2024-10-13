import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredDialog as _WiredDialog } from 'wired-elements/lib/wired-dialog.js';
import { styled } from 'styled-components';
import { useState } from 'react';
import Button from '../Button';

type DialogProps = {

  /**
   * The elevation of the hand drawing level, by default is 1
   */
  elevation?: 1 | 2 | 3 | 4 | 5
  /**
   * Handler for the close button
   */
  onClose?: () => void;
  /**
   * Handler for the confirm button, if not set, the confirm button will not be shown
   */
  onConfirm?: () => void;
} & React.HTMLAttributes<_WiredDialog>;

const WiredDialog = createComponent({
  react: React,
  tagName: 'wired-dialog',
  elementClass: _WiredDialog
});


const StyledDialog = styled(WiredDialog)`
    --wired-dialog-z-index: 999;
`;

const Content = styled.div`
    padding-bottom: 16px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`;

/**
 *
 */
export const Dialog = ({ elevation, children, onClose, onConfirm }: DialogProps) => {
  const [ isOpen, setIsOpen ] = useState(false);
  return (
    <div>
      <div>
        <Button id="openDialog" onClick={() => setIsOpen(true)}>Open Dialog</Button>
      </div>
      <StyledDialog elevation={elevation} open={isOpen}>
        <Content>
          {children}
        </Content>
        <ButtonGroup>
          <Button id="closeDialog" onClick={() => {
            setIsOpen(false);
            if (onClose) onClose();
          }}>Close</Button>
          {onConfirm && <Button id="confirm" onClick={() => {
            if (onConfirm) onConfirm();
            setIsOpen(false);
          }}>Confirm</Button>}
        </ButtonGroup>
      </StyledDialog>
    </div>
  );
};
