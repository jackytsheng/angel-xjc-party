import React, { useState } from 'react';
import styled from 'styled-components';
import piggy from './assets/piggy.jpeg';
import { Chip, IconButton, TextField } from '@mui/material';
import Cancel from '@mui/icons-material/Cancel';
import Send from '@mui/icons-material/Send';
import Roulette from './Roulette';
import { CirclePicker as Circle } from 'react-color';
import colors from './colors';

const Wrapper = styled.div`
  background-color: ${colors.BACK_GROUND};
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

  h2 {
    color: ${colors.BROWN};
    font-family: 'Pushster', cursive;
  }

  .MuiButton-outlinedPrimary,
  .MuiIconButton-colorPrimary {
    color: ${colors.BROWN};
    border-color: ${colors.BROWN + '80'};

    :hover {
      border-color: ${colors.BROWN};

      background-color: ${colors.BROWN + '0a'};
    }
  }
  .MuiButton-outlinedError {
    color: ${colors.BRIGHT_RED};
    border-color: ${colors.BRIGHT_RED + '80'};

    :hover {
      border-color: ${colors.BRIGHT_RED};
      background-color: ${colors.BRIGHT_RED + '0a'};
    }
  }
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
const CirclePicker = styled(Circle)`
  span:nth-child(${(props) => {
        console.log(props.selectedColorPosition);
        return props.selectedColorPosition;
      }})
    div
    span
    div {
    box-sizing: border-box;
    border: 3px ${colors.BROWN} solid;
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
  justify-content: space-evenly;
  align-items: center;
`;
const CopyRight = styled.p`
  margin-top: 2rem;
  font-size: 0.7rem;
  color: ${colors.BROWN};
  font-weight: 600;
`;

const rouletteData = [
  '1',
  '1. ??????',
  '1. ??????',
  '2',
  '2. ??????',
  '3',
  '3. ??????',
  '4',
  '2. ??????',
  '4. ??????',
  '5',
  '5. ??????',
  '6',
  '6. ??????',
  '7',
  '3. ??????',
  '7. ??????',
  '8',
  '8. ??????',
  '9',
  '9. ??????',
  '10',
  '4. ??????',
  '10. ??????',
  '11',
  '11. ??????',
  '12',
  '12. ??????',
  '13',
  '13. ??????',
  '5. ??????',
  '14',
  '14. ??????',
  '15',
  '15. ??????',
  '16',
  '16. ??????',
  '6. ??????',
  '17',
  '17. ??????',
  '18',
  '18. ??????',
  '19.',
  '19. ??????',
];

const defaultColors = [colors.RED, colors.GREEN, colors.YELLOW];

const pickColor = (text) => {
  switch (text.split(' ')[1]) {
    case '??????':
      return defaultColors[1];
    case '??????':
      return defaultColors[0];
    default:
      return defaultColors[2];
  }
};

const generateOption = (option, backgroundColor) => ({
  option,
  style: {
    backgroundColor,
  },
});

export default () => {
  const [data, setData] = useState(
    rouletteData.map((o) => generateOption(o, pickColor(o)))
  );
  const [labelValue, setLabelValue] = useState('');
  const [pickedColor, setPickedColor] = useState(colors.GREEN);

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
          selectedColorPosition={defaultColors.indexOf(pickedColor) + 1}
          width='150px'
          colors={defaultColors}
          defaultColors={pickedColor}
          onChange={(e) => setPickedColor(e.hex.toUpperCase())}
        />
        <TextField
          label='Enter Label'
          id='outlined-size-small'
          variant='outlined'
          color='primary'
          size='small'
          sx={{
            '& .Mui-focused': {
              color: colors.BROWN + ' !important',
              borderColor: colors.BROWN + ' !important',
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.BROWN + ' !important',
            },
          }}
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
            sx={{
              backgroundColor: obj.style.backgroundColor,
              color: colors.BROWN,
              fontWeight: 600,
            }}
            label='small'
            key={`${index}+${obj.option}`}
            label={`${obj.option}`}
            deleteIcon={<Cancel />}
            variant='outlined'
            onDelete={() => deleteLabel(index)}
          />
        ))}
      </LabelLists>

      <CopyRight>
        Copyright &copy; 2022 Jiajin Zheng. All rights reserved.
      </CopyRight>
    </Wrapper>
  );
};
