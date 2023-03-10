import React, { useState, useContext } from "react";
import AuthContext from "../AuthContext";

import Papa from "papaparse";
import {
  ContainerFile,
  HeroFileH2,
  HeroFileH3,
  HeroFileP,
  ContainerFileB,
} from "./FileElement";
import { HeroHomeH2 } from "../Home/HomeElement";

const File = () => {
  // get the isLoggedIn state and login function from the AuthContext
  const authContext = useContext(AuthContext);
  const { isLoggedIn, login } = authContext;
  const [sample, setSample] = useState([]);
  const [mostAssistanceInstitucion, setMostAssistanceInstitucionData] =
    useState([]);
  const [mostAssistanceCargo, setMostAssistanceCargoData] = useState([]);
  const [mostAssistancePais, setMostAssistancePaisData] = useState([]);
  const [mostAssistanceRol, setMostAssistanceRolData] = useState([]);
  const [mostAssistanceTopicos, setMostAssistanceTopicosData] = useState([]);
  const [mostAssistanceOtros, setMostAssistanceOtrosData] = useState([]);

  const parseCsv = (file, options, callback) => {
    Papa.parse(file, {
      ...options,
      complete: callback,
    });
  };

  // Define the options for the Papa.parse function
  const options = {
    header: true,
    skipEmptyLines: true,
  };

  // Define a function to process the parsed results
  const processData = (results) => {
    console.log(results)
    const institucionArray = [];
    const institucionCounter = [];
    const cargoArray = [];
    const cargoCounter = [];
    const paisArray = [];
    const paisCounter = [];
    const rolArray = [];
    const rolCounter = [];
    const topicosSesion1Array = [];
    const topicosSesion1Counter = [];
    const otrosSesion1Array = [];
    const otrosSesion1Counter = [];

    results.data.map((d) => {
      addToArrayIfNotExists(
        d.institucion,
        institucionArray,
        institucionCounter
      );
      addToArrayIfNotExists(d.cargo, cargoArray, cargoCounter);
      addToArrayIfNotExists(d.pais, paisArray, paisCounter);
      addToArrayIfNotExists(d.rol, rolArray, rolCounter);
      addToArrayIfNotExists(
        d.topicos_sesion1,
        topicosSesion1Array,
        topicosSesion1Counter
      );
      addToArrayIfNotExists(
        d.otros_sesion1,
        otrosSesion1Array,
        otrosSesion1Counter
      );
    });

    setSample(results.data);

    sort(institucionArray, institucionCounter);
    setMostAssistanceInstitucionData([
      institucionArray[0],
      institucionCounter[0],
    ]);

    sort(cargoArray, cargoCounter);
    setMostAssistanceCargoData([cargoArray[0], cargoCounter[0]]);

    sort(paisArray, paisCounter);
    setMostAssistancePaisData([paisArray[0], paisCounter[0]]);

    sort(rolArray, rolCounter);
    setMostAssistanceRolData([rolArray[0], rolCounter[0]]);

    sort(topicosSesion1Array, topicosSesion1Counter);
    setMostAssistanceTopicosData([
      topicosSesion1Array[0],
      topicosSesion1Counter[0],
    ]);

    sort(otrosSesion1Array, otrosSesion1Counter);
    setMostAssistanceOtrosData([otrosSesion1Array[0], otrosSesion1Counter[0]]);
  };

  // Define the changeHandler function to use parseCsv and processData
  const changeHandler = (event) => {
    console.log(event.target.files[0]);

    // Call the parseCsv function with the file, options, and processData callback
    parseCsv(event.target.files[0], options, processData);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      // redirect to the login page or show a message
      alert("Please log in to access server files");
      window.location.replace("/login");
      return;
    }
    fetch("http://localhost:8000/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        //console.log(response);
        return response.text();
      })
      .then((data) => {
        //console.log('data', data);
        processData({data: Papa.parse(data, options).data}); // call processData with the parsed data
      })
      .catch((error) => console.error(error));
  };

  const addToArrayIfNotExists = (value, array, counter) => {
    if (array.indexOf(value) === -1) {
      array.push(value);
      counter[array.length - 1] = 1;
    } else {
      counter[array.indexOf(value)]++;
    }
  };

  const sort = (array, counter) => {
    const len = counter.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (counter[j] < counter[j + 1]) {
          const tmp = counter[j];
          const tmpB = array[j];
          counter[j] = counter[j + 1];
          counter[j + 1] = tmp;
          array[j] = array[j + 1];
          array[j + 1] = tmpB;
        }
      }
    }
  };

  return (
    <>
      <ContainerFile>
        <HeroFileH2>Análisis de csv</HeroFileH2>
        <HeroFileP>Sube el archivo csv y obtenga los valores que mas aparecen en el dataset.</HeroFileP>
      </ContainerFile>
      <ContainerFileB>
        {sample.length > 0 && (
          <table style={{ margin: "0 auto" }}>
            <tbody>
              <tr>
                <td>Sample length:</td>
                <td>{sample.length}</td>
              </tr>
              <tr>
                <td>The institution with the highest attendance:</td>
                <td>
                  {mostAssistanceInstitucion[0]} with{" "}
                  {mostAssistanceInstitucion[1]}
                </td>
              </tr>
              <tr>
                <td>The cargo with the highest attendance:</td>
                <td>
                  {mostAssistanceCargo[0]} with {mostAssistanceCargo[1]}
                </td>
              </tr>
              <tr>
                <td>The country with the highest attendance:</td>
                <td>
                  {mostAssistancePais[0]} with {mostAssistancePais[1]}
                </td>
              </tr>
              <tr>
                <td>The role with the highest attendance:</td>
                <td>
                  {mostAssistanceRol[0]} with {mostAssistanceRol[1]}
                </td>
              </tr>
              <tr>
                <td>The most talked about topic:</td>
                <td>
                  {mostAssistanceTopicos[0]} with {mostAssistanceTopicos[1]}
                </td>
              </tr>
              <tr>
                <td>The most repeated modality:</td>
                <td>
                  {mostAssistanceOtros[0]} with {mostAssistanceOtros[1]}
                </td>
              </tr>
            </tbody>
          </table>
        )}
        {sample.length === 0 && (
          <>
          <HeroFileH3>
            Suba su archivo
          </HeroFileH3>
          <HeroFileP>Asegurese de que el archivo contenga las columnas institucion, cargo, pais, topicos_sesion1 y otros_sesion1</HeroFileP>
          </>
          
        )}

        <form>
          <input
            type="file"
            name="file"
            onChange={changeHandler}
            accept=".csv"
            style={{ display: "block", margin: "10px auto" }}
          />
          <a style={{ margin: "50x"}} href="#" onClick={handleClick}>
              Cargar archivo de base de datos
            </a> 
        </form>
      </ContainerFileB>
    </>
  );
};
export default File;
