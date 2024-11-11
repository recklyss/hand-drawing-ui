import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { WiredCalendar } from 'wired-elements/lib/wired-calendar.js';
import { createComponent } from '@lit/react';

interface CalendarProps {
  /**
   * The selected date in 'MMM D, YYYY' format, like 'Nov 4, 2024'
   */
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
  const formattedSelected = selected ? selected.format('MMM D, YYYY') : undefined;
  const handleSelected = (e: CustomEvent) => {
    if (onSelected) {
      const selectedDate = dayjs(e.detail.selected);
      onSelected(selectedDate);
    }
  };

  return (
    <CalendarComponent
      initials
      selected={formattedSelected}
      onSelected={handleSelected as (e: Event) => void}
    />
  );
};
