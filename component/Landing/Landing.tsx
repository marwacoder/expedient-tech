import * as React from 'react';


import {AppBar, Box, Toolbar, Hidden, IconButton,HomeIcon,
  Typography, Menu, InstagramIcon, FacebookIcon, LinkedInIcon, Container,Avatar, Button, MenuItem
} from '../mui'

import SwipeableTemporaryDrawer from '../drawer';

type Anchor =  'bottom';

const pages = ['About Us', 'Services', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [state, setState] = React.useState(false);

  const toggleDrawer =( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img width={45} height={40} src='/logos/logobig.png' alt='logoa'/>
              <img width={200} style={{marginLeft: 5}} height={35} src='/logos/expedientTechs.png' alt='expedientTechs'/>
              
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
              <img width={35} height={30} src='/logos/logobig.png' alt='logob'/>
              <img width={150} style={{marginLeft: 5}} height={25} src='/logos/expedientTechs.png' alt='expedientTechs'/>
              
           
           
            <Menu
             
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem  key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            
          </Box>
         
          <Box ml={5} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
             <IconButton onClick={handleOpenUserMenu}>
               <HomeIcon style={{color: 'white'}}/>
              </IconButton>
            {pages.map((page) => (
              <Box mr={5}>
              <Button
              
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
              </Box>
            ))}
          </Box>
          <Hidden mdDown>

          <Box display='flex' borderRadius={46} justifyContent='center' width={131} height={50} bgcolor='secondary.main'>
         
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               <LinkedInIcon style={{color: 'white'}}/>
              </IconButton>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               <InstagramIcon fontSize="medium" style={{color: 'white'}}/>
              </IconButton>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               <FacebookIcon  style={{color: 'white'}}/>
              </IconButton>
             
            </Box>
          </Hidden>
          <Box sx={{ flexGrow: 0 }}>
          <Hidden mdUp>
            <IconButton onClick={toggleDrawer( true)} sx={{ p: 0 }}>
                <img alt="Remy Sharp" src="/logos/hamburger.png" />
              </IconButton>

            <SwipeableTemporaryDrawer state={state} toggleDrawer={toggleDrawer}/>
          </Hidden>
          
             
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;