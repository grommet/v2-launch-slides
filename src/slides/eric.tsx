import { Heading } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const Eric = () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="start"
    justify="center"
    background="neutral-2"
    >
    {`
      ![alt text](grommet-peep-eric.png "avatar")

      # eric soderberg
      ## grommet founder, head of grommet dev at hpe
      @ericsoderberg

    `}
  </Slide>
)

Eric.title = "Eric Soderberg"

export default Eric
