import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  justify-content: center;
  background: #0d161f;
  width: 1314px;
  img.background {
    width: 1314px;
  }
  div.linha {
    width: 600px;
    border: 0.5px solid #e13157;
    margin-top: 200px;
  }
`;

export const Imgtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-left: 270px;
  margin-top: 600px;
  z-index: 100;
`;

export const Maps = styled.div`
  margin-top: 40px;
  color: #fff;
  display: grid;
  padding-left: 113px;
  p {
    font-style: italic;
    font-size: 40px;
    margin-bottom: 34px;
  }
`;
