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
            data: data.data,
            scpTVA: data.scpTVA,
            data_inceput_ScpTVA: data.data_inceput_ScpTVA,
            data_sfarsit_ScpTVA: data.data_sfarsit_ScpTVA,
            data_anul_imp_ScpTVA: data.data_anul_imp_ScpTVA,
            mesaj_ScpTVA: data.mesaj_ScpTVA,
            dataInceputTvaInc: data.dataInceputTvaInc,
            dataSfarsitTvaInc: data.dataSfarsitTvaInc,
            dataActualizareTvaInc: data.dataActualizareTvaInc,
            dataPublicareTvaInc: data.dataPublicareTvaInc,
            tipActTvaInc: data.tipActTvaInc,
            statusTvaIncasare: data.statusTvaIncasare,
            dataInactivare: data.dataInactivare,
            dataReactivare: data.dataReactivare,
            dataPublicare: data.dataPublicare,
            dataRadiere: data.dataRadiere,
            statusInactivi: data.statusInactivi,
            dataInceputSplitTVA: data.dataInceputSplitTVA,
            dataAnulareSplitTVA: data.dataAnulareSplitTVA,
            statusSplitTVA: data.statusSplitTVA,
            iban: data.iban,
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
        <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
          Database
        </button>
      </div>
    );
  }
}

export default App;
