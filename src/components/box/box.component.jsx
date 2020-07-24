import React from "react";
import "./bos.style.css";

const Form = ({ cui }) => {
  return (
    <div>
      <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 bg-light-purple">
        <h1 className="f4 bg-near-white br3 br black-60 mv0 pv2 ph3">
          {cui.nr}
        </h1>
        <div className="pa3 bt b--black-10">
          <ul className="textright f5 f5-ns lh-copy measure">
            <li>
              <strong>Denumire:</strong>
              {cui.denumire}
            </li>
            <li>
              <strong>Adresa:</strong>
              {cui.adresa}
            </li>
            <li>
              <strong>Data:</strong>
              {cui.data}
            </li>
            <li>
              <strong>Scop TVA:</strong>
              {`${cui.scpTVA}`}
            </li>
            <li>
              <strong>data_inceput_ScpTVA:</strong>
              {cui.data}
            </li>
            <li>
              <strong>data_sfarsit_ScpTVA:</strong>
              {cui.data_sfarsit_ScpTVA}
            </li>
            <li>
              <strong>data_anul_imp_ScpTVA:</strong>
              {cui.data_anul_imp_ScpTVA}
            </li>
            <li>
              <strong>mesaj_ScpTVA:</strong>
              {cui.mesaj_ScpTVA}
            </li>
            <li>
              <strong>dataInceputTvaInc:</strong>
              {cui.dataInceputTvaInc}
            </li>
            <li>
              <strong>dataSfarsitTvaInc:</strong>
              {cui.dataSfarsitTvaInc}
            </li>
            <li>
              <strong>dataActualizareTvaInc:</strong>
              {cui.dataActualizareTvaInc}
            </li>
            <li>
              <strong>dataPublicareTvaInc:</strong>
              {cui.dataPublicareTvaInc}
            </li>
            <li>
              <strong>tipActTvaInc:</strong>
              {cui.tipActTvaInc}
            </li>
            <li>
              <strong>statusTvaIncasare:</strong>
              {`${cui.statusTvaIncasare}`}
            </li>
            <li>
              <strong>dataInactivare:</strong>
              {cui.dataInactivare}
            </li>
            <li>
              <strong>dataReactivare:</strong>
              {cui.dataReactivare}
            </li>
            <li>
              <strong>dataPublicare:</strong>
              {cui.dataPublicare}
            </li>
            <li>
              <strong>dataRadiere:</strong>
              {cui.dataRadiere}
            </li>
            <li>
              <strong>statusInactivi:</strong>
              {`${cui.statusInactivi}`}
            </li>
            <li>
              <strong>dataInceputSplitTVA:</strong>
              {cui.dataInceputSplitTVA}
            </li>
            <li>
              <strong>dataAnulareSplitTVA:</strong>
              {cui.dataAnulareSplitTVA}
            </li>
            <li>
              <strong>statusSplitTVA:</strong>
              {`${cui.dataAnulareSplitTVA}`}
            </li>

            <li>
              <strong>dataAnulareSplitTVA:</strong>
              {cui.iban}
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};
export default Form;
