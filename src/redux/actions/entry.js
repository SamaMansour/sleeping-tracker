import {
  CREATE_ENTRY,
  RETRIEVE_ENTRIES,
  UPDATE_ENTRY,
  DELETE_ENTRY,
} from "./types";

import EntryDataService from "../services/entry.service";

export const createEntry = (date, time, duration) => async (dispatch) => {
  try {
    const res = await EntryDataService.create({ date, time, duration });

    dispatch({
      type: CREATE_ENTRY,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveEntries = () => async (dispatch) => {
  try {
    const res = await EntryDataService.getAll();

    dispatch({
      type: RETRIEVE_ENTRIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateEntry = (id, data) => async (dispatch) => {
  try {
    const res = await EntryDataService.update(id, data);

    dispatch({
      type: UPDATE_ENTRY,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteEntry = (id) => async (dispatch) => {
  try {
    await EntryDataService.remove(id);

    dispatch({
      type: DELETE_ENTRY,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};



export const findEntriesById = (id) => async (dispatch) => {
  try {
    const res = await EntryDataService.findById(id);

    dispatch({
      type: RETRIEVE_ENTRIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};