import React from "react";
import "./table.style.css";

const Card = ({
  cui,
  adresa,
  denumire,
  data,
  scpTVA,
  data_inceput_ScpTVA,
  data_sfarsit_ScpTVA,
  data_anul_imp_ScpTVA,
  mesaj_ScpTVA,
  dataInceputTvaInc,
  dataSfarsitTvaInc,
  dataActualizareTvaIn,
  dataPublicareTvaInc,
  tipActTvaInc,
  statusTvaIncasare,
  dataInactivare,
  dataReactivare,
  dataPublicare,
  dataRadiere,
  statusInactivi,
  dataInceputSplitTVA,
  dataAnulareSplitTVA,
  statusSplitTVA,
  iban,
}) => {
  return (
    <tr>
      <td className="pv2 pr2 bb b-black-20 f6 bg-washed-green">{cui}</td>
      <td className="pv2 pr2 bb b-black-20 f6">{adresa}</td>
      <td className="pv3 pr3 bb b-black-20 f6 bg-washed-green">{denumire}</td>
      <td className="pv3 pr3 bb b-black-20 f6">{data}</td>
      <td className="pv3 pr3 bb b-black-20 f6 bg-washed-green">{`${scpTVA}`}</td>
      <td className="pv3 pr3 bb b-black-20 f6">{data_inceput_ScpTVA}</td>
      <td className="pv3 pr3 bb b-black-20 f6 bg-washed-green">
        {data_sfarsit_ScpTVA}
      </td>
      <td className="pv3 pr3 bb b-black-20 f6">{mesaj_ScpTVA}</td>
      <td className="pv3 pr3 bb b-black-20 f6 bg-washed-green">
        {dataInceputTvaInc}
      </td>
      <td className="pv3 pr3 bb b-black-20 f6">{dataSfarsitTvaInc}</td>
      <td className="pv3 pr3 bb b-black-20 f6 bg-washed-green">
        {dataActualizareTvaIn}
      </td>
      <td className="pv3 pr3 bb b-black-20 f6">{dataPublicareTvaInc}</td>
      <td className="pv3 pr3 bb b-black-20 f6 bg-washed-green">
        {tipActTvaInc}
      </td>
      <td className="pv3 pr3 bb b-black-20 f6">{`${statusTvaIncasare}`}</td>
      <td className="pv3 pr3 bb b-black-20 f6 bg-washed-green">
        {dataInactivare}
      </td>
      <td className="pv3 pr3 bb b-black-20 f6">{dataReactivare}</td>
      <td className="pv3 pr3 bb b-black-20 f6 bg-washed-green">
        {dataPublicare}
      </td>
      <td className="pv3 pr3 bb b-black-20 f6">{dataRadiere}</td>
      <td className="pv3 pr3 bb b-black-20 f6 bg-washed-green">
        {`${statusInactivi}`}
      </td>
      <td className="pv3 pr3 bb b-black-20 f6">{dataInceputSplitTVA}</td>
      <td className="pv3 pr3 bb b-black-20 f6 bg-washed-green">
        {dataAnulareSplitTVA}
      </td>
      <td className="pv3 pr3 bb b-black-20 f6">{`${statusSplitTVA}`}</td>
      <td className="pv3 pr3 bb b-black-20 f6 bg-washed-green">{iban}</td>
    </tr>
  );
};

export default Card;
