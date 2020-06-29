import React, { useState, useEffect } from 'react'
import './App.css'
import { Grid, Box, SmartHeading, Sidebar, useScreenSize, useSidebar } from 'juno-ui/dist'
import { Menu } from '@styled-icons/feather'

function App() {

  //state for tablet and mobile viewing
  const [smallScreen, setSmallScreen] = useState(false)
  
  //get the screen type
  const { screen } = useScreenSize()
  //use the Siderbar hook
  const {isOpen, toggle} = useSidebar();

  useEffect(() => {
    if( screen === 'mobile' || screen === 'tablet' ) {
      setSmallScreen(true)
    } else { setSmallScreen(false) }
  })
  

  let cols
  let areas

  //change grid based on screen size
  if(smallScreen) {
    cols = ['auto'];
    areas = [
      ['header'],
      ['main'],
      ['footer']
    ]
  } else {
    cols = ['20%', 'auto']
    areas = [
      ['sidebar','header'],
      ['sidebar','main'],
      ['sidebar','footer']
    ]
  }

  //render sidebar
  const sidebar = () => {
    if(smallScreen) {
      return (
        <Sidebar 
          width='100%'
          collapsable
          padding='15px 20px'
          isOpen={isOpen}
          backgroundColor='brand'
          justifyContent='top'
        >

          <Menu onClick={toggle} size={25} style={{ padding: '0px 30px 0px 5px' }} /> 
          {/** Sidebar */}
          </Sidebar>
      )
     } else {
       return <Box gridArea='sidebar' backgroundColor='brand'></Box> 
     }      }


  return (
    <Grid
      rows={['60px', 'auto', '40px']}
      columns={cols}
      areas={areas}
    >
    <Box gridArea='header' border='bottom' direction='row' align='center' padding='20px' size='large'>
        { smallScreen && <Menu onClick={toggle} size={25} style={{ padding: '0px 30px 0px 5px' }} />}
      <div>Motor Starter Dashboard</div>
    </Box>
    {sidebar()}
    <Box gridArea='footer' border='top' align='center' justifyContent='center' direction='row' size='small'>
        made with ❤️ by motor
    </Box>
  </Grid>
  )
  
}

export default App;
