import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import {MenuItem, Typography, IconButton, LinkedInIcon, FacebookIcon, InstagramIcon} from '../mui'

type Anchor = 'top' | 'left' | 'bottom' | 'right';
const pages = ['Home','About Us', 'Services', 'Contact'];

export default function SwipeableTemporaryDrawer(props: any) {
  
    const {state, toggleDrawer} = props

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     
    </Box>
  );

  return (
    <div>

        <React.Fragment>

          <SwipeableDrawer
          disableBackdropTransition={true}
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
            onOpen={toggleDrawer('bottom', true)}
          >
               <Box
               style={{height: '87vh'}}
               bgcolor='primary.main'
      sx={{ width:  'auto' }}
      role="presentation"
      onClick={toggleDrawer('bottom', false)}
      onKeyDown={toggleDrawer('bottom', false)}
    >
        <Box >
     {/* <img src='/logos/logo.png' alt='l' width={100} height={100}/> */}
     {pages.map((page) => (
                <MenuItem  key={page} >
                  <Typography color='white' textAlign="center">{page}</Typography>
                </MenuItem>
              ))}

    </Box>
    <Box pt={10} pb={10} display='flex' justifyContent='center'   >
         
         <IconButton  >
          <LinkedInIcon style={{color: 'white'}}/>
         </IconButton>
         <IconButton  >
          <InstagramIcon fontSize="medium" style={{color: 'white'}}/>
         </IconButton>
         <IconButton  >
          <FacebookIcon  style={{color: 'white'}}/>
         </IconButton>
        
       </Box>
    </Box>
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
