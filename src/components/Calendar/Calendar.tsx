import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { WiredCalendar } from 'wired-elements/lib/wired-calendar.js';
import { createComponent } from '@lit/react';

interface CalendarProps {
  selected?: Dayjs;
  onSelected?: (date: Dayjs) => void;
}

const CalendarComponent = createComponent({
  react: React,
  tagName: 'wired-calendar',
  elementClass: WiredCalendar,
  events: {
    onSelected: 'selected'
  }
});

export const Calendar: React.FC<CalendarProps> = ({ selected, onSelected }) => {
  const handleSelected = (e: CustomEvent) => {
    if (onSelected) {
      const selectedDate = dayjs(e.detail.selected);
      onSelected(selectedDate);
    }
  };

  return (
    <CalendarComponent
      selected={selected ? dayjs(selected).format('YYYY-MM-DD') : undefined}
      onSelected={handleSelected as (e: Event) => void}
    />
  );
};
