import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component:
  Button,
  tags: ['autodocs'],
  args: {
    children: 'My Button',
  },
  argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleButton: Story = {
  args: {
    children: 'My Button is a button',
    onClick: () => {
      console.log('clicked');
    }
  }
};


