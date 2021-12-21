import React from 'react';
import { Wheel } from 'react-custom-roulette';
import styled from 'styled-components';

const WheelWrapper = styled.div``;

export default ({ rouletteData, spinNow, setSpinBack }) => {
  return (
    <WheelWrapper>
      <Wheel
        mustStartSpinning={spinNow}
        prizeNumber={rouletteData.length}
        onStopSpinning={setSpinBack}
        data={rouletteData}
        textColors={['#30475e']}
        outerBorderColor='#30475e'
        radiusLineColor='#30475e'
        outerBorderWidth='4'
        radiusLineWidth='3'
        fontSize='16'
      />
    </WheelWrapper>
  );
};
