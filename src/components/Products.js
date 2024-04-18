import { Box, Container, Link, Typography, useMediaQuery } from "@mui/material";
import { productsData } from "../Data/productsData";

export default function Products(){
  const matches = useMediaQuery('(min-width:400px)');
  return(
    <Container maxWidth='lg'>
      <h1>製作物</h1>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box width={'70%'}>
        {productsData.map((product, index) => (
          <Box key={index} marginBottom={3} sx={{borderColor: "gray", border: 2, borderRadius: 2, p: 3}}>
          { matches ? 
            <><Typography variant="h4" paddingBottom={1}>{product.name}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '90%' }}>
                  <Typography variant="h6" paddingBottom={1}>{product.explanation}</Typography>
                  <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }} paddingBottom={1}>{product.detail}</Typography>
                  github：<Link href={product.url} target="_blank" underline="none" sx={{ "@media screen and (max-width:400px)": { fontSize: 12 }, wordBreak: 'break-all' }}>{product.url}</Link><br />
                  {product.url2 ? <>アプリ：<Link href={product.url2} target="_blank" underline="none" sx={{ "@media screen and (max-width:400px)": { fontSize: 12 }, wordBreak: 'break-all' }}>{product.url2}</Link><br /></> : ''}
                  {product.img ? <img src={product.img} alt={product.name} className="productImage" /> : ''}
                </Box>
              </Box></>
            : <><Typography variant="h6" paddingBottom={1}>{product.name}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '80%' }}>
                  <Typography variant="body1" paddingBottom={1}>{product.explanation}</Typography>
                  <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>{product.detail}</Typography>
                  github：<Link href={product.url} target="_blank" underline="none" sx={{ "@media screen and (max-width:400px)": { fontSize: 12 }, wordBreak: 'break-all' }}>{product.url}</Link><br />
                  {product.url2 ? <>アプリ：<Link href={product.url2} target="_blank" underline="none" sx={{ "@media screen and (max-width:400px)": { fontSize: 12 }, wordBreak: 'break-all' }}>{product.url2}</Link><br /></> : ''}
                  {product.img ? <img src={product.img} alt={product.name} className="productImage" /> : ''}
                </Box>
              </Box></>

          }
          </Box>
        ))}
        </Box>
      </Box>
    </Container>
  );
}