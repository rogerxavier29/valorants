import styled from "styled-components";

export const Content = styled.div`
  display: flex;

  img.cypher2 {
    display: flex;
    justify-content: end;
    margin-top: 240px;
    width: 500px;
    height: 900px;
  }
`;

export const Guns = styled.div`
  width: 500px;
  height: auto;
  margin-top: 40px;
  margin-left: 30px;
  display: grid;
  justify-content: center;

  div {
    display: flex;
    h1 {
      font-style: italic;
      font-size: 40px;
      margin-bottom: 34px;
      color: #fff;
    }

    img.alvo {
      width: 58px;
      height: 58px;
    }
  }
  h2 {
    color: #fff;
  }

  img {
    /* width: 58px;
    height: 58px; */
    margin-top: 25px;
    margin: 30px;
  }
  div.MuiTabs-root.Tabs-images.css-1ujnqem-MuiTabs-root {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    margin: 10px;
    border: 1px solid #ffffff;
    width: 325px;
    margin-left: 30px;

    div.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall.css-ptiqhd-MuiSvgIcon-root {
      color: #fff;
    }
  }
`;
