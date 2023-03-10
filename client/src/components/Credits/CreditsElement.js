import styled from "styled-components";

export const ContainerCredits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CreditsTable = styled.table`
  width: 70%;
  margin: 0 auto;
  border-collapse: collapse;
  
`;

export const CreditTitle = styled.h2`
font-size: 36px;
font-weight: 400;
text-align: center;
margin-bottom: 10px;
color: #202020;
`;

export const CreditP = styled.p`
width: auto;
font-size: 21px;
align-items: center;
text-align: center;
font-weight: 400;
height: 100%;
color: #000;
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
`;

export const TableData = styled.td`
  
  padding: 10px;
  text-align: left;
  font-size: 18px;
`;