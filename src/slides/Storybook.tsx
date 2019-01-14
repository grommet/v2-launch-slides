import { Box, Heading, Layer } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const Storybook = () => (
  <Slide background={{ dark: false, image: "url(Storybook.png)" }}>
    <Layer position="center" plain={true}>
      <Box pad="large" background={{ color: 'black', opacity: 'medium' }} round={true}>
        <Heading margin="none" size="large">Storybook</Heading>
      </Box>
    </Layer>
  </Slide>
)

Storybook.title = "Storybook"

export default Storybook
