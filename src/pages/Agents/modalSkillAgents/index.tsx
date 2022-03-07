import React, { useState } from 'react';
import Modal from '@mui/material/Modal';

import { Content, Skills, Description } from './styles';
import Jett from '../../../assets/Agent.png';
import Agents from '..';

interface IProps {
  closeModal: () => void;
  open: boolean;
  agentSkill: any;
}

export default function ModalSkill({
  closeModal,
  open,
  agentSkill,
}: IProps): React.ReactElement {
  return (
    <div>
      <Modal className='agents-skill' open={open} onClose={closeModal}>
        <Content>
          <Description>
            <h1>FUNÇÃO</h1>

            <p>{agentSkill.function}</p>
            <section>{agentSkill.description}</section>

            <h2>Habilidades</h2>
            <Skills>
              <div>
                <li>Arma Branca</li>
                <li>Arma Primaria</li>
                <li>Arma Segundaria</li>
                <li>Especial</li>
              </div>
              <div>
                {agentSkill.skills.map((data) => (
                  <li>
                    <span>{data.damage} Dano</span>
                  </li>
                ))}
              </div>
            </Skills>
          </Description>

          <img src={Jett} alt='' />
        </Content>
      </Modal>
    </div>
  );
}
