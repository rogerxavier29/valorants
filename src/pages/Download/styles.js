import styled from "styled-components";

export const Content = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  width: 900px;
`;

export const Info = styled.div`
  display: grid;
  color: #fff;
  margin-left: 50px;
  li {
    display: flex;
    margin-left: 40px;
    gap: 20px;
    p {
      font: normal normal 300 17px Poppins;
    }
  }
  img.icons {
    width: 34px;
    height: 25px;
    margin-top: 10px;
  }
  h1 {
    font-style: italic;
    font-size: 25px;
    margin-bottom: 60px;
  }
`;

export const Image = styled.div`
  margin-top: 60px;
  img {
    width: 350px;
    height: 350px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 183px;
  height: 36px;
  border: 1px solid #e13157;
  background: #e13157;
  border-radius: 5px;
  margin-left: 50px;
  color: #fff;
  cursor: pointer;
  img {
    margin-top: 8px;
  }
  p {
    margin-left: 10px;
  }
`;
