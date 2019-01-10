import { Box, Chart, Heading, Stack } from 'grommet';
import * as React from 'react';
import Code from '../Code';
import Slide from '../Slide';

export default () => (
  <Slide background="dark-1">
    <Box direction="row" gap="large" align="center">
      <Stack guidingChild="last">
        <Box fill={true} justify="between">
          <Box border={true} />
          <Box border={true} />
          <Box border={true} />
        </Box>
        <Chart values={[10, 20, 40, 90, 70, 80]} round={true} />
      </Stack>
      <Code>
        {`<Stack>
  <Box fill={true} justify="between">
    <Box border={true} />
    <Box border={true} />
    <Box border={true} />
  </Box>
  <Chart values={[10, 20, 40, 90, 70, 80]} />
</Stack>`}
      </Code>
    </Box>
    <Heading alignSelf="start" size="large">Stack</Heading>
  </Slide>
);
