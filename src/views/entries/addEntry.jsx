import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEntry } from "../../redux/actions/entry";
import { SingleDatepicker} from "chakra-dayzed-datepicker";
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';


const AddEntry = () => {
  const initialEntryState = {
    id: null,
    date: "",
    time: "",
    duration: ""
  };
  const [entry, setEntry] = useState(initialEntryState);
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(['10:00', '11:00']);
  var duration = ((parseInt(time[1].split(':'))-parseInt(time[0].split(':'))).toString());

  const dispatch = useDispatch();

  // const handleInputChange = event => {
  //   setEntry({ ...entry });
  // };

  const saveEntry = () => {
   

    dispatch(createEntry(date, time[1], duration))
      .then(data => {
        setEntry({
          id: data.id,
          date: data.date,
          time: data.time,
          duration: data.duration
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newEntry = () => {
    setEntry(initialEntryState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEntry}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Date</label>
            <SingleDatepicker
              name="date-input"
              date={date}
              onDateChange={setDate}
            />

          </div>

          <div className="form-group">
            <label htmlFor="description">Time</label>
            <TimeRangePicker className='form-control' onChange={ setTime} value={time} />
          </div>

          <button onClick={saveEntry} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddEntry;