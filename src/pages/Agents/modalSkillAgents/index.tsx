import React, { useState } from 'react';
import Modal from '@mui/material/Modal';

import { Content } from './styles';

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
          <p>FUNÇÃO</p>
          <h1>{agentSkill.function}</h1>
          <div>{agentSkill.description}</div>
        </Content>
      </Modal>
    </div>
  );
}
