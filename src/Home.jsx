import React from 'react';
import styled from 'styled-components';
import piggy from './assets/piggy.jpeg';
import { Chip } from '@mui/material';
const Wrapper = styled.div`
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const ImgWrapper = styled.img`
  width: 150px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const GuestList = styled.div`
  width: 450px;
  height: 800px;

  div {
    margin: 5px;
  }
`;
const guestList = [
  '1. Angel Song',
  '2. Qianru',
  '3. Jac',
  '4. 徐+×',
  '5. Jasmine',
  '6. Alex',
  '7. Vincent',
  '8. 阿曼达',
  '9. Bill',
  '10. 查莉莉',
  '11. 爱丽丝',
  '12. Kathy',
];
export default () => (
  <Wrapper>
    <h1> Welcome to 200 Spencer St New Year Party </h1>
    <ImgWrapper src={piggy} alt='piggy.jpg' />
    <h2> Guest List</h2>
    <GuestList>
      {guestList.map((name) => (
        <Chip key={name} label={name} variant='outlined' />
      ))}
    </GuestList>
  </Wrapper>
);
