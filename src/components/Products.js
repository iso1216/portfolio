import { Box, Container, Link, Typography } from "@mui/material";
import { productsData } from "../Data/productsData";

export default function Products(){
  return(
    <Container maxWidth='lg'>
      <h1>製作物</h1>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box width={'50%'}>
        {productsData.map((product, index) => (
          <Box key={index} marginBottom={3}>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="body1">{product.detail}</Typography>
            <Link href={product.url} target="_blank" underline="none">{product.url}</Link><br/>
            {product.url2 ? <><Link href={product.url2} target="_blank" underline="none">{product.url2}</Link><br/></> : ''}
            {product.img ? <img src={product.img} alt={product.name} className="productImage"/> : ''}
          </Box>
        ))}
        </Box>
      </Box>
    </Container>
  );
}