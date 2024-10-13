import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Dayjs } from 'dayjs';
import { Input } from '../Input/Input';
import { Calendar } from '../Calendar/Calendar';
import { FaCalendarAlt } from 'react-icons/fa';
import { WiredInput as _WiredInput } from 'wired-elements/lib/wired-input.js';

interface DatePickerProps {
  /**
   * The initial date value
   */
  defaultValue?: Dayjs;
  /**
   * Callback function when date changes
   */
  onChange?: (date: Dayjs) => void;
}

const DatePickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const CalendarIcon = styled(FaCalendarAlt)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const CalendarWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
`;

/**
 * Select a date
 */
export const DatePicker: React.FC<DatePickerProps> = ({ defaultValue, onChange }) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(defaultValue);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const inputRef = useRef<_WiredInput>(null);

  const handleInputClick = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleDateChange = (date: Dayjs) => {
    setSelectedDate(date);
    setIsCalendarVisible(false);
    if (onChange) {
      onChange(date);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsCalendarVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DatePickerContainer>
      <Input
        ref={inputRef}
        value={selectedDate ? selectedDate.format('YYYY-MM-DD') : ''}
        onClick={handleInputClick}
        readonly
      />
      <CalendarIcon />
      {isCalendarVisible && (
        <CalendarWrapper>
          <Calendar
            selected={selectedDate}
            onSelected={(date: Dayjs) => handleDateChange(date)}
          />
        </CalendarWrapper>
      )}
    </DatePickerContainer>
  );
};
