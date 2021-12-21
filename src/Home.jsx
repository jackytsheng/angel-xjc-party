import React, { useState } from 'react';
import styled from 'styled-components';
import piggy from './assets/piggy.jpeg';
import { Chip, Button, IconButton, TextField } from '@mui/material';
import Shuffle from '@mui/icons-material/Shuffle';
import Cancel from '@mui/icons-material/Cancel';
import AutoRenew from '@mui/icons-material/Autorenew';
import Send from '@mui/icons-material/Send';
import Roulette from './Roulette';
import { CirclePicker } from 'react-color';

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
  overflow-y: auto;
  overflow-x: hidden;
`;

const ImgWrapper = styled.img`
  width: 150px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const LabelLists = styled.div`
  div {
    margin: 2px;
  }
`;

const GameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonGroup = styled.div`
  width: 300px;
  margin: 20px;
  display: flex;
  justify-content: space-evenly;
`;

const InputGroup = styled.div`
  margin: 20px;
  display: flex;
`;

const rouletteData = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '喝酒',
  '喝酒',
  '喝酒',
  '指定一个人',
  '喝酒',
  '喝酒',
  '喝酒',
  '指定一个人',
  '喝酒',
  '喝酒',
  '喝酒',
  '指定一个人',
  '喝酒',
  '喝酒',
  '喝酒',
  '指定一个人',
  '喝酒',
  '喝酒',
  '喝酒',
  '指定一个人',
];

const defaultColors = ['#F05454', '#7CD1B8', '#6998AB'];

const pickColor = (text) => {
  console.log(typeof text);
  if (text === '喝酒') {
    return defaultColors[1];
  } else if (text === '指定一个人') {
    return defaultColors[0];
  } else {
    return defaultColors[2];
  }
};

const generateOption = (option, backgroundColor) => ({
  option,
  style: {
    backgroundColor,
    textColor: '#30475e',
  },
});

export default () => {
  const [data, setData] = useState(
    rouletteData.map((o) => generateOption(o, pickColor(o)))
  );
  const [spinNow, setSpinNow] = useState(false);
  const [labelValue, setLabelValue] = useState('');
  const [pickedColor, setPickedColor] = useState('#7CD1B8');

  const deleteLabel = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const confirmLabelValue = () => {
    if (labelValue.trim()) {
      setData([...data, generateOption(labelValue.trim(), pickedColor)]);
      setLabelValue('');
      setPickedColor(defaultColors[1]);
    }
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
      <h2> Welcome to 200 Spencer St New Year Party </h2>
      <ImgWrapper src={piggy} alt='piggy.jpg' />

      <GameSection>
        <ButtonGroup>
          <Button
            variant='outlined'
            onClick={() => setSpinNow(true)}
            startIcon={<AutoRenew />}
          >
            Spin
          </Button>
          <Button
            variant='outlined'
            onClick={() => setData(shuffle(data))}
            endIcon={<Shuffle />}
          >
            Shuffle
          </Button>
        </ButtonGroup>
        <Roulette
          rouletteData={data}
          spinNow={spinNow}
          setSpinBack={() => setSpinNow(false)}
        />
      </GameSection>

      <InputGroup>
        <CirclePicker
          colors={defaultColors}
          defaultColors={pickedColor}
          onChange={(e) => setPickedColor(e.hex)}
          onC
        />
        <TextField
          label='Enter Label'
          id='outlined-size-small'
          variant='outlined'
          color='primary'
          size='small'
          value={labelValue}
          onChange={(e) => setLabelValue(e.target.value)}
        />

        <IconButton
          color='primary'
          aria-label='confirm label'
          onClick={confirmLabelValue}
          component='span'
        >
          <Send />
        </IconButton>
      </InputGroup>
      <LabelLists>
        {data.map((obj, index) => (
          <Chip
            sx={{ color: obj.style.backgroundColor }}
            label='small'
            key={`${index}+${obj.option}`}
            label={`${obj.option}`}
            deleteIcon={<Cancel />}
            variant='outlined'
            onDelete={() => deleteLabel(index)}
          />
        ))}
      </LabelLists>
    </Wrapper>
  );
};
