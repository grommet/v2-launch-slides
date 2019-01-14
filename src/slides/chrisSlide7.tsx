import { Heading } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const But = () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="center"
    justify="center"
    background={{
      dark: true,
      image: "url(scott.gif)",
    }}
    >
    {`

      # but i'm a designer

    `}
  </Slide>
)

But.title = "But"

export default But
