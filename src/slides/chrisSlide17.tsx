import { Heading } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const Transform = () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="center"
    justify="center"
    background={{
      dark: true,
      image: "url(autobots.gif)",
    }}
    >
    {`

      # transform!

    `}
  </Slide>
)

Transform.title = "Transform"

export default Transform
