import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta = {
  title: 'Components/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};