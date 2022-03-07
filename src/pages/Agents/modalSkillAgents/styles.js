import styled from 'styled-components';

export const Content = styled.div`
  width: 990px;
  height: 500px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px 50px 20px;

  img {
    width: 286px;
    height: 543px;
    margin-left: 10px;
  }
`;

export const Description = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 24px;
    color: #e13157;
    height: 0px;
  }
  p {
    font-size: 38px;
    color: #133052;
    height: 0px;
    padding-bottom: 10px;
  }

  section {
    font-size: 18px;
    padding-top: 14px;
    width: 600px;
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
    color: #e13157;
    height: 0px;
    padding-bottom: 25px;
  }
`;

export const Skills = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  li {
    list-style: none;
    color: #133052;
    font-size: 16px;
    span {
      font-weight: bold;
    }
  }
`;
