import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function View() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setData(res.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <div>
        <div
          className="card"
          style={{
            width: "30rem",
            height: "40rem",
            marginRight: 50,
            alignItems: "center",
            borderBlockColor: "5px solid red ",
          }}
        >
          <div className="card-body">
            <h3>Name</h3>
            <h5 className="card-title">{data.name}</h5>
            <h3>User name</h3>
            <h5 className="card-title">{data.username}</h5>
            <h3>Eamil</h3>
            <h5 className="card-title">{data.email}</h5>
            <h3>Phone</h3>
            <h5 className="card-title">{data.phone}</h5>
            <h3>Website</h3>
            <h5 className="card-title">{data.website}</h5>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
