import React from "react";
import { Content, Image, Info, Button } from "./styles";
import IconAmigos from "../../assets/icon-amigos.png";
import IconCarrinho from "../../assets/icon-carrinho.png";
import IconTaca from "../../assets/icon-taca.png";
import ImgDownload from "../../assets/img-download.png";
import IconPC from "../../assets/icon-pc.png";

const Download: React.FC = () => {
  return (
    <Content id="download">
      <Info>
        <h1>BAIXE O JOGO</h1>
        <li>
          {" "}
          <img src={IconAmigos} alt="" className="icons" />{" "}
          <p>Jogue com os seus amigos</p>
        </li>
        <li>
          <img src={IconCarrinho} alt="" className="icons" />{" "}
          <p>Compre itens digitais</p>
        </li>
        <li>
          <img src={IconTaca} alt="" className="icons" />{" "}
          <p>Torneios independentes</p>
        </li>
        <Button>
          {" "}
          <img src={IconPC} alt="" /> <p>DOWNLOAD</p>
        </Button>
      </Info>
      <Image>
        <img src={ImgDownload} alt="" />
      </Image>
    </Content>
  );
};

export default Download;
