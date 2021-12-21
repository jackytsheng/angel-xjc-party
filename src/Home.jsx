import React, { useState } from 'react';
import styled from 'styled-components';
import piggy from './assets/piggy.jpeg';
import { Chip, IconButton, TextField } from '@mui/material';
import Cancel from '@mui/icons-material/Cancel';
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

const InputGroup = styled.div`
  margin: 20px;
  display: flex;
  width: 400px;
  justify-content: space-evenly;
  align-items: center;
`;

const rouletteData = [
  '1. 喝酒',
  '1',
  '1. 指定一个人',
  '2',
  '2. 喝酒',
  '3',
  '3. 喝酒',
  '4',
  '2. 指定一个人',
  '5',
  '4. 喝酒',
  '6',
  '5. 喝酒',
  '7',
  '6. 喝酒',
  '3. 指定一个人',
  '8',
  '7. 喝酒',
  '9',
  '8. 喝酒',
  '10',
  '9. 喝酒',
  '11',
  '10. 喝酒',
  '4. 指定一个人',
  '11. 喝酒',
  '12',
  '12. 喝酒',
  '13',
  '13. 喝酒',
  '14',
  '14. 喝酒',
  '5. 指定一个人',
  '15. 喝酒',
  '15',
];

const defaultColors = ['#F05454', '#7CD1B8', '#6998AB'];

const pickColor = (text) => {
  switch (text.split(' ')[1]) {
    case '指定一个人':
      return defaultColors[1];
    case '喝酒':
      return defaultColors[0];
    default:
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

  return (
    <Wrapper>
      <h2> Welcome to 200 Spencer St New Year Party </h2>
      <ImgWrapper src={piggy} alt='piggy.jpg' />

      <GameSection>
        <Roulette rouletteData={data} setRouletteData={setData} />
      </GameSection>

      <InputGroup>
        <CirclePicker
          width='150px'
          colors={defaultColors}
          defaultColors={pickedColor}
          onChange={(e) => setPickedColor(e.hex)}
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
