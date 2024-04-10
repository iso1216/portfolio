import { AppBar, Box, IconButton, Link, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { productsData } from "./Data/productsData";
import { Link as RouterLink } from 'react-router-dom';
import { AccountData } from "./Data/account";

export default function Footer() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <AppBar component="footer" position="static" color="inherit">
    <Box>
      <Grid container marginY={2}>
        <Grid xs={12} md={4} textAlign='center' paddingTop={1} sx={{display: {xs: "none", md: "block"}}}>
          <Typography fontSize={12} component={RouterLink} to={'/portfolio'} color={"inherit"} sx={{textDecoration: 'none'}}>© 2023 Taishi Isomura</Typography>
        </Grid>
        <Grid container xs={12} md={8}>
          <Grid xs={3}>
            <Box sx={{display: 'flex', justifyContent: 'center', "@media screen and (max-width:490px)": {fontSize: 12}}}>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li><Link component={RouterLink} to={"/profile"} underline="none" color="inherit" onClick={() => {handleClick()}}>Profile</Link></li>
                <li><Link component={RouterLink} to={"/products"} underline="none" color="inherit" onClick={() => {handleClick()}}>Products</Link></li>
                <li><Link component={RouterLink} to={"/history"} underline="none" color="inherit" onClick={() => {handleClick()}}>History</Link></li>
              </Box>
            </Box>
          </Grid>
          <Grid xs={5}>
            <Box sx={{display: 'flex', justifyContent: 'center', "@media screen and (max-width:490px)": {fontSize: 12}}}>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                {productsData.map((product, index) =>(
                  <li key={index}><Link component={RouterLink} to={product.url} underline="none" color="inherit" target="_blank">{product.name}</Link></li>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box sx={{display: 'flex', justifyContent: 'center', "@media screen and (max-width:490px)": {fontSize: 12}}}>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                <li><Link underline="none" color="inherit" href='https://highschl.educa.nagoya-u.ac.jp/' target="_blank">高校HP</Link></li>
                <li><Link underline="none" color="inherit" href='https://www.denpa.ac.jp/' target="_blank">専門学校HP</Link></li>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent={{xs: "space-between", md: "right"}}
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px', marginRight: {"md": 2},}}
          marginX={2}
        >
          <Grid sx={{order: { xs: 2, sm: 1 }, display: {xs: "block", md: "none"}}}>
            <Typography fontSize={12} component={RouterLink} to={'/portfolio'} color={"inherit"} sx={{textDecoration: 'none'}}>© 2023 Taishi Isomura</Typography>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
          {AccountData.map((account, index) => (
            <Grid key={index}>
              <IconButton href={account.href} target='_blank'>
                {account.Icon}
              </IconButton>
            </Grid>
          ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </AppBar>
  );
};
