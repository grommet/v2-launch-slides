import { Heading } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const Bryan = () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="start"
    justify="center"
    background="neutral-2"
    >
    {`

      ![alt text](grommet-peep-bryan.png "avatar")

      # bryan jacquot
      ## VP and Chief Design Officer
      @bryanjacquot

    `}
  </Slide>
)

Bryan.title = "Bryan Jacquot"

export default Bryan
