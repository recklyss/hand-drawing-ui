import type { Meta, StoryObj } from '@storybook/react';
import { Video } from './Video';

const meta = {
  title: 'Components/Video',
  component: Video,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};