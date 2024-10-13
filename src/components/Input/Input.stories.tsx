import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { FormEvent } from 'react';
import { WiredInput } from 'wired-elements';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    minlength: 5,
    maxlength: 100,
    onBlur: (event: FormEvent<WiredInput>) => {
      console.log(event.currentTarget.value);
    }
  }
};