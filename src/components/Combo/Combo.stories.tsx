import type { Meta, StoryObj } from '@storybook/react';
import { Combo } from './Combo';

const meta = {
  title: 'Components/Combo',
  component: Combo,
  tags: [ 'autodocs' ],
  argTypes: {},
} satisfies Meta<typeof Combo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: 'two',
    options: [
      { value: 'one', content: 'Option 1' },
      { value: 'two', content: 'Option 2' },
      { value: 'three', content: 'Option 3' }
    ]
  }
};