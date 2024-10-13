import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { Dayjs } from 'dayjs';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: (date: Dayjs) => {
      alert(date.format('YYYY-MM-DD'));
    }
  }
};