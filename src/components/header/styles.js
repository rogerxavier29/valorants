import styled from 'styled-components';

export const Content = styled.header`
  width: 100%;
  height: 73px;
  background: #0d161f;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export const Imglogo = styled.div`
  margin-left: 40px;
  padding: 5px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  list-style-type: none;
  padding: 25px;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const Btnjogue = styled.div`
  margin-right: 40px;
  padding: 20px;
  color: #ffffff;
  button {
    width: 131px;
    height: 36px;
    background: #e13157;
    color: #ffffff;
    border-radius: 5px;
    border-color: #e13157;
  }
`;
