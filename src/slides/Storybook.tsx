import { Box, Heading, Layer } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide background={{ dark: false, image: "url(Storybook.png)" }}>
    <Layer position="center" plain={true}>
      <Box pad="large" background={{ color: 'black', opacity: 'medium' }} round={true}>
        <Heading margin="none" size="large">Storybook</Heading>
      </Box>
    </Layer>
  </Slide>
);
