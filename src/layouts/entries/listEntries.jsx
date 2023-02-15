import React, { Fragment, useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveEntries,
  findEntriesById,
 
} from "../../redux/actions/entry";
import { Link } from "react-router-dom";


const ListEntries = () => {
  const [currentEntry, setCurrentEntry] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchId, setSearchId] = useState("");

  const [entries, setEntries] = useState([]);
  const dispatch = useDispatch();

  const getSleeps = async () => {
    try {
      
      const response = await fetch(`http://localhost:1337/api/v1/entries`);
      const jsonData = await response.json();

      setEntries(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  console.log(entries)
  useEffect(() => {
    getSleeps();
  }, []);

  const onChangeSearchId = e => {
    const searchId = e.target.value;
    setSearchId(searchId);
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
    dispatch(findEntriesById(searchId));
  };

  

  

  return (
    <Fragment>
      <table
        className="table mt-5 text-center table-hover text-light"
        id="tsleep"
      >
        <thead>
          <tr>
            <th>Hour</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr>
              <td>{entry.time}</td>
              <td>{new Date(entry.date).toDateString()}</td>
              <td>
                
              </td>
              <td>
                <button
                  className="btn btn-light"
                  
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        
      </div>
    </Fragment>
  );
};

export default ListEntries;
