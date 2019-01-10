import { Box, Chart, Heading, Stack } from 'grommet';
import * as React from 'react';
import Code from '../Code';
import Slide from '../Slide';

export default () => (
  <Slide background="dark-1">
    <Box direction="row" gap="large" align="center">
      <Stack guidingChild={1}>
        <Box fill={true} justify="between">
          <Box border="top" />
          <Box border="top" />
          <Box border="top" />
        </Box>
        <Chart values={[10, 20, 40, 90, 70, 80]} round={true} />
        <Chart
          type="line"
          thickness="xsmall"
          color="accent-2"
          round={true}
          values={[0, 100]}
        />
      </Stack>
      <Code>
        {`<Stack guidingChild={1}>
  <Box fill={true} justify="between">
    <Box border="top" />
    <Box border="top" />
    <Box border="top" />
  </Box>
  <Chart values={[10, 20, 40, 90, 70, 80]} />
  <Chart
    type="line"
    thickness="xsmall"
    color="accent-2"
    values={[0, 100]}
  />
</Stack>`}
      </Code>
    </Box>
    <Heading alignSelf="start" size="large">Stack</Heading>
  </Slide>
);
