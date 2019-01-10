import { Box, Chart, Heading, Stack } from 'grommet';
import * as React from 'react';
import Code from '../Code';
import Slide from '../Slide';

export default () => (
  <Slide background="dark-1">
    <Box direction="row" gap="large" align="center">
      <Stack guidingChild="last">
        <Chart values={[10, 20, 40, 90, 70, 80]} />
      </Stack>
      <Code>
        {`<Stack>
  <Chart values={[10, 20, 40, 90, 70, 80]} />
</Stack>`}
      </Code>
    </Box>
    <Heading alignSelf="start" size="large">Stack</Heading>
  </Slide>
);
