import React from "react";

import "./App.css";
import Users from "./components/user/users.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      user: "",
      cui: [
        {
          cui: "",
        },
      ],
    };
  }

  onInputChange = (input) => {
    this.setState({ input: input.target.value });
  };
  onSubmit = () => {
    this.setState({ user: this.state.input });
    const url = "http://localhost:3300/submit";
    const body = [
      {
        cui: this.state.input,

        data: "2020-02-14",
      },
    ];
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  render() {
    return (
      <div className="App">
        <Users onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
