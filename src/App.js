import React from "react";

import "./App.css";
import Users from "./components/user/users.component";
import SimpleTable from "./components/box/box.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      submit: "",
      date: new Date(),
      cui: [],
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onSubmit = () => {
    this.setState({ submit: this.state.input });
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
            nr: data.cui,
            adresa: data.adresa,
            denumire: data.denumire,
          })
        );
      });
    console.log(this.state.cui);
  };
  render() {
    return (
      <div className="App">
        <Users onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <SimpleTable cui={this.state.cui} />
      </div>
    );
  }
}

export default App;
