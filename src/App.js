import React from "react";

import "./App.css";
import Users from "./components/user/users.component";
import SimpleTable from "./components/box/box.component";
import Data from "./components/database/db.table.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      submit: "",
      date: new Date(),
      cui: [],
      db: [],
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onSubmit = () => {
    this.setState({ submit: this.state.input });
    const url = "https://cui-api.herokuapp.com/submit";
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
  loadData = () => {
    fetch("https://cui-api.herokuapp.com/database")
      .then((respone) => respone.json())
      .then((data) => {
        this.setState({ db: data });
      });
  };
  render() {
    return (
      <div className="App">
        <Users onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <SimpleTable cui={this.state.cui} />
        <button
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          onClick={this.loadData}
        >
          Database
        </button>
        <Data db={this.state.db} />
      </div>
    );
  }
}

export default App;
