import { Box, Heading, Image, Paragraph } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const CustomizeCard = () => (
  <Slide background="neutral-4">
    <Box direction="row-responsive" gap="large" align="start" alignContent='start'>
      <Box flex={true} width='large' alignSelf='center'>
        <Paragraph alignSelf="start" size="large">grommet 1</Paragraph>
        <Heading size="large">How do I tweak the Card component to fit my needs?”</Heading>
      </Box>
      <Box flex={true}>
       <Box width="large" alignContent="stretch" background="white" round='medium' pad={{ horizontal: "large", vertical: "none" }} >
          <Image src="card.png" fit="contain" />
        </Box>
      </Box>
    </Box>
  </Slide>
)

CustomizeCard.title = "Customize Card"

export default CustomizeCard
