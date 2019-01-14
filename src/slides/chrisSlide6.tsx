import { Heading } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const MindBlown = () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="center"
    justify="center"
    background={{
      dark: true,
      image: "url(blown.gif)",
    }}
    >
    {`

      # i can do anything

    `}
  </Slide>
)

MindBlown.title = "Mind Blown"

export default MindBlown
