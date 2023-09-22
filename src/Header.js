import * as React from 'react';
import { AppBar, Box, Toolbar, Container, Button, Menu, MenuItem, Typography } from '@mui/material';
import CatchingPokemonRoundedIcon from '@mui/icons-material/CatchingPokemonRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['PROFILE', 'PRODUCTS', 'HISTORY'];

function Header({setValue}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (i) => {
    setAnchorElNav(null);
    setValue(i+1);
  };

  return (
    <AppBar position="static" color='inherit'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CatchingPokemonRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/portfolio"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
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
                <MenuItem key={page} onClick={ () => handleClick(i) }>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <IconButton href='https://twitter.com/isotis_1216' target='_blank'>
                <TwitterIcon /><label><small>Twitter</small></label>
              </IconButton><br/>
              <IconButton href='https://www.instagram.com/taishi_isolation/' target='_blank'>
                <InstagramIcon /><label><small>Instagram</small></label>
              </IconButton><br/>
              <IconButton href='https://github.com/iso1216' target='_blank'>
                <GitHubIcon /><label><small>GitHub</small></label>
              </IconButton>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              fontFamily: 'monospace',
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
                onClick={ () => handleClick(i) }
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton href='https://twitter.com/isotis_1216' target='_blank'>
            <TwitterIcon />
          </IconButton>
          <IconButton href='https://www.instagram.com/taishi_isolation/' target='_blank'>
            <InstagramIcon />
          </IconButton>
          <IconButton href='https://github.com/iso1216' target='_blank'>
            <GitHubIcon />
          </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;