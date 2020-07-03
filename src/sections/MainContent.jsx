import React from 'react'
import { Box, useScreenSize } from 'motor-ui'

const MainContent = () => {

  const { screen } = useScreenSize()
  console.log(screen)
  
  let flexDirection = 'column'
  if (screen === 'desktop' || screen === 'largeDesktop') (
    flexDirection = 'row'
  )
  return (
    <Box padding='10px' width='100%' overflow='hidden'>
      <Box width='100%' direction={flexDirection}>
        <Box margin='5px' flex={true} height='180px' border='dashed' />
        <Box margin='5px' flex={true} height='180px' border='dashed' />
        <Box margin='5px' flex={true} height='180px' border='dashed' />
      </Box>

    </Box>
  )
}

export default MainContent