import { AppBar, Box, Container, Grid, IconButton, Link, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { productsData } from "./Data/productsData";

export default function Footer({setValue}) {
  const handleClick = (i) => {
    setValue(i);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <AppBar component="footer" position="static" color="inherit">
    <Container maxWidth='md'>
      <Grid container sx={{padding: 1}}>
        <Grid md={5} lg={4} sx={{display: {"xs": "none", "md": "flex"}}}>
          <Typography variant="caption" component={'a'} href={'/'} padding={1} color={"inherit"} sx={{textDecoration: 'none'}}>© 2023 Taishi Isomura</Typography>
        </Grid>
        <Grid container xs={12} md={7} lg={8}>
          <Grid xs={2} sm={3}>
            <Box component="ul" aria-labelledby="category-a" fontSize={14}>
              <li><Link underline="none" color="inherit" onClick={() => {handleClick(1)}}>Profile</Link></li>
              <li><Link underline="none" color="inherit" onClick={() => {handleClick(2)}}>Products</Link></li>
              <li><Link underline="none" color="inherit" onClick={() => {handleClick(3)}}>History</Link></li>
            </Box>
          </Grid>
          <Grid xs={6} sm={5}>
            <Box component="ul" aria-labelledby="category-b" fontSize={14}>
              {productsData.map((product, index) =>(
                <li><Link underline="none" color="inherit" href={product.url} target="_blank" key={index}>{product.name}</Link></li>
              ))}
            </Box>
          </Grid>
          <Grid xs={4} sm={4}>
            <Box component="ul" aria-labelledby="category-c" fontSize={14}>
              <li>Link 3.1</li>
              <li>Link 3.2</li>
              <li>Link 3.3</li>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{display: {"xs": "none", "md": "flex"}}} justifyContent="right">
          <Grid>
            <IconButton href='https://twitter.com/isotis_1216' target='_blank'>
              <TwitterIcon />
            </IconButton><br/>
          </Grid>
          <Grid>
            <IconButton href='https://www.instagram.com/taishi_isolation/' target='_blank'>
              <InstagramIcon />
            </IconButton><br/>
          </Grid>
          <Grid>
            <IconButton href='https://github.com/iso1216' target='_blank'>
              <GitHubIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    </AppBar>
  );
};
