import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export let getDateComponent = ""

const DatePickComponent = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => {
                setStartDate(date);
                getDateComponent = date
            }
            }
            showTimeSelect
            minDate={new Date()}
            timeFormat="p"
            timeIntervals={5}
            dateFormat="Pp"
        />
    );
};

export default DatePickComponent