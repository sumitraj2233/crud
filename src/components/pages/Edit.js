import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function Edit() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  var a = { name, username, email };
  const { id } = useParams();

  const loadUser = async () => {
    // const res = await axios.get(`http://localhost:3001/users/${id}`);
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    // console.log(res.data);
    setData(res.data);
    setName(res.data.name);
    setuserName(res.data.username);
    setEmail(res.data.email);
  };
  useEffect(() => {
    loadUser();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, a);
    history.push("/");
  };

  useEffect(() => {
    setData(...data, a);
  }, []);

  return (
    <div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            {console.log(name)}
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setuserName(e.target.value)}
            value={username}
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
