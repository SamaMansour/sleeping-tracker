import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveEntries,
  findEntriesById,
} from "../../redux/actions/entry";
import { Link } from "react-router-dom";

const ListEntries = () => {
  const [currentEntry, setCurrentEntry] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const entries = useSelector(state => state.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveEntries())
      .then((data)=>{ console.log(data);})
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const refreshData = () => {
    setCurrentEntry(null);
    setCurrentIndex(-1);
  };

  const setActiveEntry = (entry, index) => {
    setCurrentEntry(entry);
    setCurrentIndex(index);
  };

  

  const findById = () => {
    refreshData();
    dispatch(findEntriesById(parseInt(searchTitle))).then((data)=>{ console.log(data);})
  };

  return (
    <div className="list row">
     
      <div className="col-md-6">
        <h4>Entries List</h4>

        <ul className="list-group">
          {entries && entries
            .map((entry, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveEntry(entry, index)}
                key={index}
              >
                {entry.date}
              </li>
            ))}
        </ul>

        
      </div>
      <div className="col-md-6">
        {currentEntry ? (
          <div>
            <h4>Entry</h4>
            <div>
              <label>
                <strong>Date:</strong>
              </label>{" "}
              {currentEntry.date}
            </div>
            <div>
              <label>
                <strong>Time:</strong>
              </label>{" "}
              {currentEntry.time}
            </div>
            <div>
              <label>
                <strong>Duration:</strong>
              </label>{" "}
              {currentEntry.duration}
            </div>
           

            <Link
              to={"/entries/" + currentEntry.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListEntries;