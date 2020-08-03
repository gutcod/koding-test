import React from "react";
import Card from "./db.card.component";

const Data = ({ db }) => {
  return (
    <div className="pa4 tabeflex">
      <div className="overflow-auto">
        <table className="f6 w-100 mw8 center " cellSpacing="0">
          <thead>
            <tr>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Cui</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Adresa</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                Denumire
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Data</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">scpTVA</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                data_inceput_ScpTVA
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                data_sfarsit_ScpTVA
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                data_anul_imp_ScpTVA
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                mesaj_ScpTVA
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                dataInceputTvaInc
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                dataSfarsitTvaInc
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                dataActualizareTvaInc
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                dataPublicareTvaInc
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                tipActTvaInc
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                statusTvaIncasare
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                dataInactivare
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                dataReactivare
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                dataPublicare
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                dataRadiere
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                statusInactivi
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                dataInceputSplitTVA
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                dataAnulareSplitTVA
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                statusSplitTVA
              </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">iban</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            {db.map((el, i) => {
              return (
                <Card
                  key={i}
                  cui={el.cui}
                  adresa={el.adresa}
                  denumire={el.denumire}
                  data={el.data}
                  scpTVA={el.scptva}
                  data_inceput_ScpTVA={el.data_inceput_scptva}
                  data_sfarsit_ScpTVA={el.data_sfarsit_scptva}
                  data_anul_imp_ScpTVA={el.data_anul_imp_scptva}
                  mesaj_ScpTVA={el.mesaj_scptva}
                  dataInceputTvaInc={el.datainceputtvainc}
                  dataSfarsitTvaInc={el.datasfarsittvainc}
                  dataActualizareTvaInc={el.dataactualizaretvainc}
                  dataPublicareTvaInc={el.datapublicaretvainc}
                  tipActTvaInc={el.tipacttvainc}
                  statusTvaIncasare={el.statustvaincasare}
                  dataInactivare={el.datainactivare}
                  dataReactivare={el.datareactivare}
                  dataPublicare={el.datapublicare}
                  dataRadiere={el.dataradiere}
                  statusInactivi={el.statusinactivi}
                  dataInceputSplitTVA={el.datainceputsplittva}
                  dataAnulareSplitTVA={el.dataanularesplittva}
                  statusSplitTVA={el.statussplittva}
                  iban={el.iban}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data;
