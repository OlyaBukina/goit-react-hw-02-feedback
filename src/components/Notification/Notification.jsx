import styled from 'styled-components';

const NotiMes = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #9e0000;
`;

export const Notification = ({ message }) => {
  return <NotiMes>{message}</NotiMes>;
};
