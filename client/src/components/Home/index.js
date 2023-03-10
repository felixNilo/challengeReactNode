import React from 'react'
import { ContainerHome, HeroHomeH2, HeroHomeP, ContainerHomeB } from './HomeElement'
const Hero = () => {
  return (
    <>
      <ContainerHome>
        <HeroHomeH2>Bienvenid@</HeroHomeH2>
        <HeroHomeP>Esta aplicacion web ha sido creada utilizando Reactjs y Nodejs</HeroHomeP>
      </ContainerHome>
      <ContainerHomeB>
        <HeroHomeP>El objetivo de esta herramienta es generar un analisis de moda a partir de un archivo csv de registros. Dirigase a <a href="/files"> archivos</a>, suba un archivo csv o cargue el archivo de proveniente de la base de datos para comenzar.</HeroHomeP>
      </ContainerHomeB>
    </>
  )
}
export default Hero