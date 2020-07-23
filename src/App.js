import React from "react";

import "./App.css";
import Users from "./components/user/users.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      cui: "",
    };
  }

  componentDidMount() {
    const url = "https://webservicesp.anaf.ro/PlatitorTvaRest/api/v4/ws/tva";
    const body = [
      {
        cui: 1234,

        data: "2015-02-14",
      },

      {
        cui: 5678,

        data: "2015-02-14",
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
  }
  onInputChange = (input) => {
    this.setState({ input: input.target.value });
  };
  onSubmit = () => {
    this.setState({ cui: this.state.input });
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
