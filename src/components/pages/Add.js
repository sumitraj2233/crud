import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Add() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  var a = { name, username, email };

  const handleClick = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users/", a);
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
          ></input>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
