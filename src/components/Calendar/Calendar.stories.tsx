import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
import { Dayjs } from 'dayjs';
const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSelected: (date: Dayjs) => {
      alert(date.format('YYYY-MM-DD'));
    }
  }
};
