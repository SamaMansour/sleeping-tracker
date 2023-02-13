import http from "../../http-common.js";


  const getAll = ()=> {
    return http.get("/entries");
  }

  const get = (id) => {
    return http.get(`/entries/${id}`);
  }

  const create = (data) => {
    return http.post("/new", data);
  }

  const update = (id, data) => {
    return http.put(`/entries/${id}`, data);
  }

  const deleteItem = (id) => {
    return http.delete(`/entries/${id}`);
  }

 
  const findById = (id) => {
    return http.get(`/entries?id=${id}`);
  }


export default {
  getAll,
  get,
  create,
  update,
  deleteItem,
  findById
} ;