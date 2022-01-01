import * as React from 'react';
import Image from 'next/image';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


import {
  MenuItem,
  Box,
  Typography,
  Divider,
  CloseIcon,
  IconButton,
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
} from '../mui';

const pages = ['Home', 'About Us', 'Services', 'Contact'];

export default function SwipeableTemporaryDrawer(props: any) {
  const { state, toggleDrawer } = props;

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          onClose={toggleDrawer()}
          disableBackdropTransition={true}
          anchor={'bottom'}
          open={state}
          onOpen={toggleDrawer(true)}
        >
          <div className="background-mobile"></div>
          <Box
            style={{ height: '100vh' }}
            bgcolor="primary.main"
            sx={{ width: 'auto' }}
            role="presentation"
          >
            <Box>
              {/* <img src='/logos/logo.png' alt='l' width={100} height={100}/> */}
              <Box
                mx={2}
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Image src='/logos/logobig.png' width={'26.06px'} height={'25.89px'} alt="logo" />
                  <Image src='/logos/expedientTechs.png' width={'106.53px'} height={'19.97px'} alt="expedientTechs" />
                </Box>

                <Box>
                  <IconButton onClick={toggleDrawer(false)}>
                    {' '}
                    <CloseIcon
                      sx={{ fontSize: 30 }}
                      style={{ color: 'white' }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Divider style={{ backgroundColor: 'white' }} />
              <Box ml={3} mt={3}>
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <Typography fontWeight={500} fontSize={20} textAlign='center' color="white" >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Box>
            <Box pt={'40%'} display="flex" justifyContent="center">
              <IconButton>
                <LinkedInIcon
                  sx={{ fontSize: 35 }}
                  style={{ color: 'white' }}
                />
              </IconButton>
              <IconButton>
                <InstagramIcon
                  sx={{ fontSize: 35 }}
                  style={{ color: 'white' }}
                />
              </IconButton>
              <IconButton>
                <FacebookIcon
                  sx={{ fontSize: 35 }}
                  style={{ color: 'white' }}
                />
              </IconButton>
            </Box>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
