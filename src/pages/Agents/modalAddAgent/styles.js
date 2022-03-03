import styled from 'styled-components';

export const Content = styled.div`
  min-width: 1050px;
  height: 580px;
  background: #fff;
  display: grid
  justify-content: center;
  align-items:center;
`;

export const BtnClose = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 25px;
  p {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  padding: 0px 10px 0px 40px;
  p {
    font-size: 30px;
    font-weight: bold;
  }
`;

export const SkillForm = styled.div`
  width: auto;
  margin-left: 40px;
  height: 350px;
  display: flex;
`;

export const ColumnOne = styled.div`
  display: grid;
  gap: 15px;
`;

export const ColumnTwo = styled.div`
  display: grid;
  gap: 15px;
  margin-left: 24px;
`;

export const AddPhoto = styled.div`
  width: 302px;
  height: 340px;
  border: 1px solid #e13157;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 23px;
    height: 23px;
  }
  p {
    color: #e13157;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
  }
`;

export const BtnsForm = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  margin-top: 10px;
  margin-right: 40px;

  button.btn-cancelar {
    min-width: 110px;
    height: 30px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #133052;
    border-radius: 5px;
    color: #133052;
    font-weight: bold;
    cursor: pointer;
  }

  button.btn-salvar {
    min-width: 110px;
    height: 30px;
    background: #e13157 0% 0% no-repeat padding-box;
    border-radius: 5px;
    border-color: #e13157;
    color: #ffffff;
    font-weight: normal;
    cursor: pointer;
  }
`;
