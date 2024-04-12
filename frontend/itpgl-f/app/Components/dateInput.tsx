
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


interface DateInputProps {
  onDateChange: (date: Date) => void;
}

const DateInput: React.FC<DateInputProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange(date as Date);
  };

  return (
    
    <div className="flex relative items-center my-2 space-x-2 ">
    
      <div className='  -mr-10 -ml-2 '>
       <div className="absolute z-50 w-screen ">
        <DatePicker
          id="datePicker"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy/MM/dd"
          autoComplete="off"
          placeholderText=' Дата на събитието'
          className="border-b-2 py-2 ml-2 w-50 border-green-500 bg-white text-black dark:bg-[#3B3B3B] rounded-sm relative select-none dark:text-white"
        />
       </div>
     </div>
    </div>
  );
};

export default DateInput;
 