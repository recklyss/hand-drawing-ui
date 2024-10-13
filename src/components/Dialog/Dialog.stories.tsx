import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import Card from '../Card';
import Calendar from '../Calendar';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: [ 'autodocs' ],
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    elevation: 1,
    children: <Card><p>Dialog Content</p><br/><Calendar /></Card>,
    onClose: () => console.log('onClose'),
    onConfirm: () => console.log('onConfirm'),
  }
};