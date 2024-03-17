"use client";

import { useEffect, useState } from "react";

interface userDatatype {
  _id: string;
  name: string;
  __v: number;
}

export default function Home() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    let data = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });
    let result = await data.json();
    console.log(result);
  };

  const fetchData = async () => {
    let data = await fetch("http://localhost:3000/api/user", {
      cache: "no-cache",
    });
    let result = await data.json();
    setData(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div>
      <h1>users</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter your name"
      />
      <button onClick={handleSubmit}>submit</button>
      <p>done</p>
      <p>done</p>
      <p>done</p>
      <p>done</p>
      <hr />
      <div>
        <button onClick={handleRefresh}>refresh</button>
        {data.map((item: userDatatype) => {
          return (
            <span key={item._id}>
              <p>{item.name}</p>
              <button>update</button>
              <button>delete</button>
            </span>
          );
        })}
      </div>
    </div>
  );
}
