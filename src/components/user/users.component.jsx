import React from "react";
const Users = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="bg-light-purple white pa2 w-30 br3 center f1 georgia">
        {"Put #Cui Number"}
      </p>
      <div className="container center ph7">
        <input
          className="f4 pa2 w-70 center"
          type="text"
          placeholder="cui"
          onChange={onInputChange}
        />
        <button
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          onClick={onSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};
export default Users;
