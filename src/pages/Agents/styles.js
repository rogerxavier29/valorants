import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 25px;
  background: #0d161f;
`;

export const FilterAgents = styled.div`
  display: grid;
  margin: 50px;
  h1 {
    color: #fff;
    font-size: 40px;
  }
`;

export const SectionFilters = styled.div`
  width: 1142px;
  height: 176px;
  margin: 50px;
  border: 1px solid #707070;
  border-radius: 5px;
  h2 {
    margin: 20px;
    color: #ffffff;
    font-size: 22px;
  }
`;

export const Filters = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
`;

export const BtnFilter = styled.div`
  button {
    width: 142px;
    height: 53px;
    background: #e13157;
    color: #ffffff;
    border-radius: 5px;
    border-color: #e13157;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Agent = styled.div`
  width: 1142px;
  height: auto;
  margin: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const AddAgent = styled.div`
  width: 260px;
  height: 310px;
  border: 1px solid #e13157;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  img {
    width: 20px;
    height: 20px;
    margin-bottom: 3px;
  }
  p {
    color: #e13157;
    margin-left: 10px;
  }
`;

export const Persona = styled.div`
  width: 260px;
  height: 310px;
  border: 1px solid #133052;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  img {
    width: 250px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 150ms linear;

    :hover {
      transform: scale(1.05);
      background: transparent
        linear-gradient(180deg, #e1315712 10%, #e1315775 80%, #e13157 100%) 0%
        0% no-repeat padding-box;
      border: 1px solid #133052;
    }
  }
  p {
    z-index: 100;
    color: #fff;
    font-size: 24px;
    position: absolute;
    bottom: 0;
  }
`;
