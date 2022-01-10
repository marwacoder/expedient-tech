import React from 'react';

import App_Bar from '../appbar';
import Carousel from '../carousel';
import Services from '../services';
import {Box } from '../mui';

const Landing: React.FC = () => {
  return (
    <Box>
      <Box mt={10}>
        <App_Bar />
      </Box>

      <Box>
        <Carousel />
      </Box>

      <Box mt={2} bgcolor={'#0D4F6A14'} height={'auto'} alignItems={'center'}>
        <Services />
      </Box>
    </Box>
  );
};

export default Landing;
