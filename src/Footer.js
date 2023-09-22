import { AppBar, Box, IconButton, Link, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
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
    <Box>
      <Grid container marginY={2}>
        <Grid xs={12} md={4} textAlign='center'>
          <Typography component='a' href={'/'} color={"inherit"} sx={{textDecoration: 'none'}}>© 2023 Taishi Isomura</Typography>
        </Grid>
        <Grid container xs={12} md={8}>
          <Grid xs={3}>
            <Box sx={{display: 'flex', justifyContent: 'center', "@media screen and (max-width:490px)": {fontSize: 12}}}>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li><Link underline="none" color="inherit" onClick={() => {handleClick(1)}}>Profile</Link></li>
                <li><Link underline="none" color="inherit" onClick={() => {handleClick(2)}}>Products</Link></li>
                <li><Link underline="none" color="inherit" onClick={() => {handleClick(3)}}>History</Link></li>
              </Box>
            </Box>
          </Grid>
          <Grid xs={5}>
            <Box sx={{display: 'flex', justifyContent: 'center', "@media screen and (max-width:490px)": {fontSize: 12}}}>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                {productsData.map((product, index) =>(
                  <li key={index}><Link underline="none" color="inherit" href={product.url} target="_blank">{product.name}</Link></li>
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
          justifyContent="right"
          alignItems="center"
          flexDirection={{ xs: 'column', md: 'row' }}
          sx={{ fontSize: '12px', marginRight: {"md": 2}}}
        >
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
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
      </Grid>
    </Box>
    </AppBar>
  );
};
