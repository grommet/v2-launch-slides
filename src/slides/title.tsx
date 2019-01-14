import { Heading } from 'grommet'
import * as React from 'react'
import Slide from '../Slide'

const Title = () => (
  <Slide
    animation="fadeIn"
    components={{ h1: { props: { size: 'xlarge' }}, h2: { props: { size: 'large' }}, p: { props: { size: 'xlarge' }}, li: { component: Heading, props: { level: 2, size: 'large' }} }}
    align="start"
    justify="center"
    background='white'
    >
    {`

![alt text](grommet-logo.png "logo")

# grommet 2

    `}
  </Slide>
)

Title.title = "grommet 2"

export default Title
