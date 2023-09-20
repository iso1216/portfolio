import { Box, Container, Link, Typography } from "@mui/material";
import { productsData } from "../Data/productsData";

export default function Products(){
  return(
    <Container maxWidth='lg'>
      <h1>製作物</h1>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box width={'70%'}>
        {productsData.map((product, index) => (
          <Box key={index} marginBottom={3}>
            <Typography variant="h4" paddingBottom={1}>{product.name}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{width: '80%'}}>
            <Typography variant="body1" paddingBottom={1}>{product.detail}</Typography>
            github：<Link href={product.url} target="_blank" underline="none">{product.url}</Link><br/>
            {product.url2 ? <>アプリ：<Link href={product.url2} target="_blank" underline="none">{product.url2}</Link><br/></> : ''}
            {product.img ? <img src={product.img} alt={product.name} className="productImage"/> : ''}
            </Box>
            </Box>
          </Box>
        ))}
        </Box>
      </Box>
    </Container>
  );
}