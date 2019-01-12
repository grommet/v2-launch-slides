import { Box, Heading, Layer } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const CodeSandbox = () => (
  <Slide background="url(CodeSandbox.png)">
    <Layer position="center" plain={true}>
      <Box pad="large" background={{ color: 'black', opacity: 'strong' }} round={true}>
        <Heading margin="none" size="large">CodeSandbox</Heading>
      </Box>
    </Layer>
  </Slide>
)

CodeSandbox.title = "CodeSandbox"

export default CodeSandbox
