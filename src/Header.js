import * as React from 'react';
import { AppBar, Box, Toolbar, Container, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { AccountData } from './Data/account';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const pages = ['PROFILE', 'PRODUCTS', 'HISTORY'];
const pageLinks = ['/profile', '/products', '/history'];

function Header({ darkMode, setDarkMode }) {
  // ハンバーガーメニュー用
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color='inherit'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to={"/"} // デスクトップ表示用のタイトルリンク (これは元々正しかった)
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            PORTFOLIO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {pages.map((page, i) => (
                <MenuItem key={page} >
                  <Typography
                  textAlign="center"
                  component={RouterLink}
                  to={pageLinks[i]}
                  sx={{ color: darkMode ? 'white' : 'black', display: 'block' }}
                    >{page}
                  </Typography>
                </MenuItem>
              ))}
              {AccountData.map((account, index) => (
                <Box key={index}>
                  <IconButton href={account.href} target='_blank'>
                    {account.Icon}<label><small>{account.detail}</small></label>
                  </IconButton>
                </Box>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to={"/"} // モバイル表示用のタイトルリンク (修正箇所)
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PORTFOLIO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, i) => (
              <Button
                key={page}
                component={RouterLink}
                to={pageLinks[i]}
                sx={{ my: 2, color: darkMode ? 'white' : 'black', display: 'block', letterSpacing: 2 }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {AccountData.map((account, index) => (
              <IconButton href={account.href} target='_blank' key={index}>
                {account.Icon}
              </IconButton>
            ))}
          </Box>
          <IconButton
            sx={{ ml: 'auto' }}
            onClick={() => setDarkMode(!darkMode)}
            color="inherit"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
