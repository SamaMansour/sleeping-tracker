import React, { useState } from 'react';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';

function TimePickerItem({onChange, value }) {
  const [time, onChangeTime] = useState(['10:00', '11:00']);

  return (
    <div>
      <TimeRangePicker className='form-control' onChange={onChangeTime} value={time} />
    </div>
  );
}

export default TimePickerItem;
