import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string; //obrigatório
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Edicarla Silva" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandes" isBot />
      <UserRow nickname="Maria Paixão" />
      <UserRow nickname="Eduardo Júnior" />
      <UserRow nickname="José Barbosa" />
      <UserRow nickname="Juan Carlos" />
      <UserRow nickname="Carla Fagundes " />
      <UserRow nickname="Lorena Santana" />
    </Container>
  );
};

export default UserList;
