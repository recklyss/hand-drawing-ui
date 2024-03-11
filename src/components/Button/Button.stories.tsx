import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index.tsx';
import ReactIcon from '../../assets/icons/react-icon.tsx';

const meta = {
  title: 'Components/Button',
  component:
  Button,
  tags: ['autodocs'],
  args: {
    children: 'My Button',
    onClick: () => alert('Button clicked'),
  },
  argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleButton: Story = {
  args: {
    icon: <ReactIcon/>,
  }
};


