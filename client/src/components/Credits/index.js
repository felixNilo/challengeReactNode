import React from "react";
import {
  ContainerCredits,
  CreditTitle,
  CreditP,
  CreditsTable,
  TableHeader,
  TableData
} from "./CreditsElement";

const Credits = () => {
  return (
    <ContainerCredits>
      <CreditTitle>Créditos</CreditTitle>
      <CreditP>La tabla a continuación muestra los desarrolladores que han participado en la confeccion de esta aplicación</CreditP>
      <CreditsTable>
        <thead>
          <tr>
            <TableHeader>#</TableHeader>
            <TableHeader>Nombre</TableHeader>
            <TableHeader>Teléfono</TableHeader>
            <TableHeader>Linkedin</TableHeader>
            <TableHeader>Github</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>1</TableData>
            <TableData>Felix</TableData>
            <TableData>+56976664107</TableData>
            <TableData><a href="https://www.linkedin.com/in/felix-nilo">linkedin.com/in/felix-nilo</a></TableData>
            <TableData><a href="https://github.com/felixNilo">@felixNilo</a></TableData>
          </tr>
          <tr>
            <TableData>2</TableData>
            <TableData>Atanu Jana</TableData>
            <TableData> -</TableData>
            <TableData><a href="https://www.linkedin.com/in/atanu20">linkedin.com/in/atanu20</a></TableData>
            <TableData><a href="https://github.com/atanu20">@atanu20</a></TableData>
          </tr>
        </tbody>
      </CreditsTable>
    </ContainerCredits>
  );
};

export default Credits;
