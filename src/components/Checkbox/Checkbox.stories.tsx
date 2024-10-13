import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { FormEvent } from 'react';
import { WiredCheckbox } from 'wired-elements';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: [ 'autodocs' ],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true,
    onChange: (event: FormEvent<WiredCheckbox>) => {
      console.log(event.currentTarget.checked);
    }
  }
};

export const UnChecked: Story = {
  args: {
    checked: false,
    onChange: (event: FormEvent<WiredCheckbox>) => {
      console.log(event.currentTarget.checked);
    }
  }
};