import React, { useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { Button } from '@mui/material';
import styled from 'styled-components';
import Shuffle from '@mui/icons-material/Shuffle';
import AutoRenew from '@mui/icons-material/Autorenew';
import Delete from '@mui/icons-material/Delete';

const WheelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonGroup = styled.div`
  width: 400px;
  margin: 20px;
  display: flex;
  justify-content: space-evenly;
`;

// Function to shuffle array
const shuffle = (orgArr) => {
  let arr = orgArr.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default ({ rouletteData, setRouletteData }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * rouletteData.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <WheelWrapper>
      <ButtonGroup>
        <Button
          variant='outlined'
          onClick={handleSpinClick}
          startIcon={<AutoRenew />}
        >
          Spin
        </Button>
        <Button
          variant='outlined'
          onClick={() => setRouletteData(shuffle(rouletteData))}
          endIcon={<Shuffle />}
        >
          Shuffle
        </Button>
        <Button
          color='error'
          variant='outlined'
          onClick={() =>
            setRouletteData([
              { option: 'Option 1', style: {} },
              { option: 'Option 2', style: {} },
              { option: 'Option 3', style: {} },
              { option: 'Option 4', style: {} },
            ])
          }
          endIcon={<Delete />}
        >
          Clear
        </Button>
      </ButtonGroup>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        onStopSpinning={() => setMustSpin(false)}
        data={rouletteData}
        textColors={['#30475e']}
        outerBorderColor='#30475e'
        radiusLineColor='#30475e'
        outerBorderWidth='4'
        radiusLineWidth='3'
        textDistance='70'
        fontSize='16'
      />
    </WheelWrapper>
  );
};
