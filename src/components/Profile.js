import { ImageList, ImageListItem } from "@mui/material";
import { Box, Container } from "@mui/system";
import { itemData } from "./itemData";

export default function Profile(){
  return(
    <Container maxWidth='md'>
      <h1>プロフィール</h1>
      <Box sx={{display: 'flex'}}>
        <Box sx={{width: '50%'}}>
          <img src="#/img/1679990903804.jpg" alt="自画像" className="myImage" />
        </Box>
        <Box fontFamily={"initial"}>
          <h2>磯村泰志</h2>
          <h3>平成14年(2002年)12月16日生まれ</h3>
          <h3>愛知県瀬戸市在住</h3>
        </Box>
      </Box>
      <ImageList sx={{display: 'flex'}} >
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            className="imgList"
          />
        </ImageListItem>
      ))}
      </ImageList>
    </Container>
  );
}