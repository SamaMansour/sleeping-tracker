import {
  CREATE_ENTRY,
  RETRIEVE_ENTRIES,
  UPDATE_ENTRY,
  DELETE_ENTRY
} from "../actions/types";

const initialState = [];

const entryReducer = (entries = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ENTRY:
      return [...entries, payload];

    case RETRIEVE_ENTRIES:
      return payload;

    case UPDATE_ENTRY:
      return entries.map((entry) => {
        if (entry.id === payload.id) {
          return {
            ...entry,
            ...payload,
          };
        } else {
          return entry;
        }
      });

    case DELETE_ENTRY:
      return entries.filter(({ id }) => id !== payload.id);


    default:
      return entries;
  }
};

export default entryReducer;