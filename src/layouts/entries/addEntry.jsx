import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEntry } from "../../redux/actions/entry";
import { SingleDatepicker} from "chakra-dayzed-datepicker"

const AddEntry = () => {
  const initialEntryState = {
    id: null,
    date: "",
    time: "",
    duration: ""
  };
  const [entry, setEntry] = useState(initialEntryState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    setEntry({ ...entry });
  };

  const saveEntry = () => {
    const { date, time, duration } = entry;

    dispatch(createEntry("2023-02-09", "10 pm", "7"))
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
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={entry.date}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Time</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={entry.time}
              onChange={handleInputChange}
              name="description"
            />
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