import { Heading } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const SecondMountain = () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="end"
    justify="end"
    background={{
      dark: true,
      image: "url(next.jpg)",
    }}
    >
    {`

    Photo by [Christopher Burns](https://unsplash.com/photos/-jbsw_GUK74).

    `}
  </Slide>
)

SecondMountain.title = "Second Mountain"

export default SecondMountain
