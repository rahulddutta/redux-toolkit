import React, { useState } from "react";

export default function CakeContainer() {
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = () => {
    alert("Raghu clicked a button");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setAllUsers(data));
  };

  
  return (
    <div>
      <h2>Users</h2>
      <button onClick={getAllUsers}>Get User</button>
      {/* {allUsers.map((user) => <div key={user.id}>{user.name}</div>)} */}
      {allUsers.map((user) =><div key={user.id}>Name : {user.name} :Id {user.id}</div>)}
    </div>
  );
}
