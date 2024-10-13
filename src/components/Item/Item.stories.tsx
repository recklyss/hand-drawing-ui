import type { Meta, StoryObj } from '@storybook/react';
import { Item } from './Item';

const meta = {
  title: 'Components/Item',
  component: Item,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: true,
    children: <div style={{ padding: '10px' }}>This is content</div>
  }
};