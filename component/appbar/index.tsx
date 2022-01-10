import * as React from 'react';
import Image from 'next/image';

import {
  AppBar,
  Box,
  Toolbar,
  Hidden,
  IconButton,
  HomeIcon,
  Typography,
  Menu,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  Container,
  Avatar,
  Button,
  MenuItem,
} from '../mui';

import SwipeableTemporaryDrawer from '../drawer';

const pages = ['About Us', 'Services', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
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
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MenuItem sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
              <Image
                src="/logos/logo.png"
                width={'43.05px'}
                height={'42.78px'}
                alt="logo"
              />
              <Box ml={1}>
              <Image
                src="/logos/expedientTechs.png"
                width={'176px'}
                height={'33px'}
                alt="expedientTechs"
              />
              </Box>
            </MenuItem>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Image
                src="/logos/logo.png"
                width={30}
                height={30}
                alt="logo"
              />
              <Box ml={.5}>
              <Image
                src="/logos/expedientTechs.png"
                width={100}
                height={30}
                alt="expedientTechs"
              />
              </Box>
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              ml={5}
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            >
              <MenuItem onClick={handleOpenUserMenu}>
                <Image
                  src="/logos/home.png"
                  width={'25px'}
                  height={'19.44px'}
                />
              </MenuItem>
              {pages.map((page) => (
                <Box mr={5} key={page}>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <Typography fontWeight={500} fontSize="17px">
                      {page}
                    </Typography>
                  </MenuItem>
                </Box>
              ))}
            </Box>
            <Hidden mdDown>
              <Box
                display="flex"
                borderRadius={46}
                justifyContent="center"
                width={131}
                height={50}
                bgcolor="secondary.main"
              >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <LinkedInIcon style={{ color: 'white' }} />
                </IconButton>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <InstagramIcon fontSize="medium" style={{ color: 'white' }} />
                </IconButton>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <FacebookIcon style={{ color: 'white' }} />
                </IconButton>
              </Box>
            </Hidden>
            <Box sx={{ flexGrow: 0 }}>
              <Hidden mdUp>
                <IconButton onClick={toggleDrawer(true)} sx={{ p: 0 }}>
                  <Image
                    src="/logos/hamburger.png"
                    width={'28px'}
                    height={'16px'}
                  />
                </IconButton>

                <SwipeableTemporaryDrawer
                  state={state}
                  toggleDrawer={toggleDrawer}
                />
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
    </>
  );
};
export default ResponsiveAppBar;
