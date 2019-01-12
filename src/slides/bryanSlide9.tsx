import { Box, Image } from 'grommet';
import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide background="neutral-1">
    <Box direction="column" gap="medium" align="center" alignContent='center'>
        <Box width="large" alignContent="stretch" background="white" round='medium' pad={{ horizontal: "medium", vertical: "none" }} >
          <Image src="tweet1.png" fit="contain" />
        </Box>
        <Box width="large" alignContent="stretch" background="white" round='medium' pad={{ horizontal: "medium", vertical: "none" }} >
          <Image src="tweet2.png" fit="contain" />
        </Box>
      <Box width="large" alignContent="stretch" background="white" round='medium' pad={{ horizontal: "medium", vertical: "none" }} >
        <Image src="tweet3.png" fit="contain" />
      </Box>
    </Box>
  </Slide>
);
