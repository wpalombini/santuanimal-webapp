import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PetsIcon from '@mui/icons-material/Pets';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Spinner from '../spinner';
import { login, logout } from 'lib/utils';
import { useGetAccountDetails } from 'containers/account';
import { useAuthenticationState } from 'lib/utils/firebase';

const pages = ['Products', 'Pricing'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [user, loading, error] = useAuthenticationState();
  const accountDetails = useGetAccountDetails();

  const hasErrors = () => !!error || !!accountDetails?.error;
  const isLoggedIn = () => !!user && !!accountDetails?.data;
  const isLoading = () => !hasErrors() && (loading || !!accountDetails?.isLoading);

  const navigate = useNavigate();

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

  const handleLogin = () => {
    if (isLoading()) return;

    login().catch(err => {
      console.error(err);
    });
  };

  const handleLogout = () => {
    logout().catch(err => {
      console.error(err);
    });

    handleCloseUserMenu();
  };

  const handleNavigateTo = (url: string) => {
    navigate(url?.toLowerCase());
    handleCloseNavMenu();
    handleCloseUserMenu();
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none', transition: 'none' }}>
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} color="primary" />

          <Typography
            variant="h6"
            noWrap
            component="button"
            onClick={() => handleNavigateTo('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'primary.main',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            SantuAnimal
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
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
              {pages.map(page => (
                <MenuItem key={page} onClick={() => handleNavigateTo(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} color="primary" />
          <Typography
            variant="h5"
            noWrap
            component="button"
            onClick={() => handleNavigateTo('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'primary.main',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            SantuAnimal
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button
                key={page}
                onClick={() => handleNavigateTo(page)}
                sx={{ my: 2, color: 'primary.main', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!isLoggedIn() && (
              <Button onClick={handleLogin} sx={{ my: 2, color: 'primary.main', display: 'block' }}>
                {isLoading() ? <Spinner /> : 'Login'}
              </Button>
            )}
            {isLoggedIn() && (
              <>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'primary.main' }}>
                  <AccountCircle />
                </IconButton>
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
                  <Typography textAlign="center">{accountDetails?.data?.sanctuaryName}</Typography>
                  <MenuItem onClick={() => handleNavigateTo('account')}>
                    <Typography textAlign="center">Account</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
