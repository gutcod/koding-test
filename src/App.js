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
