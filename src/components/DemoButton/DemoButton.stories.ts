import type { Meta, StoryObj } from '@storybook/react';
import { DemoButton } from './index.tsx';

const meta = {
  title: 'Components/DemoButton',
  component: DemoButton,
  tags: ['autodocs'],
  args: {
    text: 'Button'
  },
  argTypes: {}
} satisfies Meta<typeof DemoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const SecondDemo: Story = {
  args: {
    text: "Second Button"
  }
}

