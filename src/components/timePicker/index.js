import React, { useState } from 'react';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';

function TimePickerItem() {
  const [value, onChange] = useState(['10:00', '11:00']);

  return (
    <div>
      <TimeRangePicker className='form-control' onChange={onChange} value={value} />
    </div>
  );
}

export default TimePickerItem;
