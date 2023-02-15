import http from "../../http-common";

const getAll = () => {
  return http.get("/entries");
};

const get = id => {
  return http.get(`/entries/${id}`);
};

const create = data => {
  return http.post("/new", data);
};

const update = (id, data) => {
  return http.put(`/entries/${id}/edit`, data);
};

const remove = id => {
  return http.delete(`/entries/${id}/delete`);
};

const findById = id => {
  return http.get(`/entries/${id}`);
};

const EntryService = {
  getAll,
  get,
  create,
  update,
  remove,
  findById
};

export default EntryService;