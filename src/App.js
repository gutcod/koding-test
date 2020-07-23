import React from "react";

import "./App.css";
import Users from "./components/user/users.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      user: "",
      date: new Date(),
      cui: [
        {
          nr: "",
          adresa: "",
          denumire: "",
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

        data: this.state.date,
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
      .then((data) => {
        this.setState(
          Object.assign(this.state.cui, {
            nr: data[0].cui,
            adresa: data[0].adresa,
            denumire: data[0].denumire,
          })
        );
        console.log(data);
      });
    console.log(this.state.cui);
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
