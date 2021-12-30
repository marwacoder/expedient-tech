import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
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
      {([ 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
               <Box
               
               bgcolor='primary.main'
      sx={{ width:  anchor === 'bottom' ? 'auto' : 250 , height: 'auto'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Box>
     {/* <img src='/logos/logo.png' alt='l' width={100} height={100}/> */}
     {pages.map((page) => (
                <MenuItem  key={page} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}

    </Box>
    <Box display='flex'borderRadius={46} justifyContent='center' width={131} height={50} >
         
         <IconButton  sx={{ p: 0 }}>
          <LinkedInIcon style={{color: 'white'}}/>
         </IconButton>
         <IconButton  sx={{ p: 0 }}>
          <InstagramIcon fontSize="medium" style={{color: 'white'}}/>
         </IconButton>
         <IconButton  sx={{ p: 0 }}>
          <FacebookIcon  style={{color: 'white'}}/>
         </IconButton>
        
       </Box>
    </Box>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
