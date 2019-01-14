import { Heading } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const Mixed = () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'large' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="start"
    justify="end"
    background={{
      dark: false,
      image: "url(howls.gif)",
    }}
    >
    {`

    `}
  </Slide>
)

Mixed.title = "Mixed"

export default Mixed
