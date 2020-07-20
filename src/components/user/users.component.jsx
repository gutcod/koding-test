import React from "react";

const Users = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p>{"Put your data"}</p>
      <div className="center">
        <input type="text" placeholder="cui" onChange={onInputChange} />
        <button onClick={onSubmit}>Detect</button>
      </div>
    </div>
  );
};
export default Users;
