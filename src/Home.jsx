import React, { useState } from 'react';
import styled from 'styled-components';
import piggy from './assets/piggy.jpeg';
import { Chip, Button, IconButton } from '@mui/material';
import CardGiftcard from '@mui/icons-material/CardGiftcard';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

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
  padding: 20px;
  overflow: auto;
`;

const ImgWrapper = styled.img`
  width: 150px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const GuestList = styled.div`
  div {
    margin: 2px;
  }
`;

const GameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SecretSanta = styled.div`
  width: 100%;
  margin-top: 20px;
  div {
    margin: 2px;
  }
`;

const ButtonGroup = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

const guestList = [
  'Angel Song',
  'Qianru',
  'Jac',
  '徐+×',
  'Jasmine',
  'Alex',
  'Vincent',
  '阿曼达',
  'Bill',
  '查莉莉',
  '爱丽丝',
  'Kathy',
  'Kerwin',
  'Heidi',
];

export default () => {
  const [pairs, setPairs] = useState([]);

  const pair = (arr) => {
    const randomNames = shuffle(arr);
    // Match each person with the next one, folding over at the end
    const matches = randomNames.map((name, index) => {
      return {
        sender: name,
        receiver: randomNames[index + 1] || randomNames[0],
      };
    });
    setPairs(shuffle(matches));
  };
  // Function to shuffle array
  const shuffle = (orgArr) => {
    let arr = orgArr.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  return (
    <Wrapper>
      <h1> Welcome to 200 Spencer St New Year Party </h1>
      <ImgWrapper src={piggy} alt='piggy.jpg' />
      <h2> Guest List</h2>
      <GuestList>
        {guestList.map((name, index) => (
          <Chip key={name} label={`${index + 1}. ${name}`} variant='outlined' />
        ))}
      </GuestList>
      <GameSection>
        <ButtonGroup>
          <Button
            variant='outlined'
            onClick={() => pair(guestList)}
            startIcon={<CardGiftcard />}
          >
            Swap Gift
          </Button>
          <IconButton
            color='primary'
            aria-label='delete list'
            onClick={() => setPairs([])}
          >
            <DeleteIcon />
          </IconButton>
        </ButtonGroup>
        <SecretSanta>
          {pairs.map((obj) => (
            <Chip
              key={obj.sender + '_' + obj.receiver}
              label={`${obj.sender} -> ${obj.receiver}`}
            />
          ))}
        </SecretSanta>
      </GameSection>
    </Wrapper>
  );
};
