import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index.tsx';

const meta = {
  title: 'Components/Button',
  component:
  Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'primary',
    width: '48px',
    maxWidth: 'max-content',
    padding: '0',
    fontSize: '16px',
    onClick: () => alert('Button clicked')
  },
  argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleButton: Story = {};


