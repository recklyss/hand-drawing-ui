import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};