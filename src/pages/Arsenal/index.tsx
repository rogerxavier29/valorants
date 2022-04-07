import React from "react";
import { Content, Guns } from "./styles";
import Alvo from "../../assets/Alvo.svg";
import Tabs from "@mui/material/Tabs";
import Arma01 from "../../assets/arma01.png";
import Arma02 from "../../assets/arma02.png";
import Arma03 from "../../assets/arma03.png";
import Arma04 from "../../assets/arma04.png";
import Arma05 from "../../assets/arma05.png";
import ArmaSec01 from "../../assets/arma-sec01.png";
import ArmaSec02 from "../../assets/arma-sec02.png";
import ArmaSec03 from "../../assets/arma-sec03.png";
import ArmaSec04 from "../../assets/arma-sec04.png";
import ArmaSec05 from "../../assets/arma-sec05.png";
import ArmaBran01 from "../../assets/arma-branca01.png";
import ArmaBran02 from "../../assets/arma-branca02.png";
import ArmaBran03 from "../../assets/arma-branca03.png";
import ArmaBran04 from "../../assets/arma-branca04.png";
import Cypher2 from "../../assets/Cypher2.png";

const Arsenal: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChange2 = (event: React.SyntheticEvent, newValue: number) => {
    setValue1(newValue);
  };

  return (
    <Content>
      <Guns id="armas">
        <div>
          <h1>Escolha sua arma</h1>
          <img src={Alvo} alt="" className="alvo" />
        </div>

        <h2>Arma primaria</h2>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          className="Tabs-images"
        >
          <img src={Arma01} alt="" />
          <img src={Arma02} alt="" />
          <img src={Arma03} alt="" />
          <img src={Arma04} alt="" />
          <img src={Arma05} alt="" />
        </Tabs>

        <h2>Arma secundaria</h2>
        <Tabs
          value={value1}
          onChange={handleChange2}
          variant="scrollable"
          scrollButtons="auto"
          className="Tabs-images"
        >
          <img src={ArmaSec01} alt="" />
          <img src={ArmaSec02} alt="" />
          <img src={ArmaSec03} alt="" />
          <img src={ArmaSec04} alt="" />
          <img src={ArmaSec05} alt="" />
        </Tabs>

        <h2>Arma branca</h2>
        <Tabs
          value={value1}
          onChange={handleChange2}
          variant="scrollable"
          scrollButtons="auto"
          className="Tabs-images"
        >
          <img src={ArmaBran01} alt="" />
          <img src={ArmaBran02} alt="" />
          <img src={ArmaBran03} alt="" />
          <img src={ArmaBran04} alt="" />
        </Tabs>
      </Guns>
      <img src={Cypher2} className="cypher2" alt="" />
    </Content>
  );
};

export default Arsenal;
