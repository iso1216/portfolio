import { ImageList, ImageListItem, Table, TableBody, TableCell, TableContainer, TableRow, Typography, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import { itemData } from "../Data/itemData";
import { SkilData } from "../Data/SkilData";

export default function Profile(){
  return(
    <Container maxWidth='lg'>
      <h1>プロフィール</h1>
      <Box sx={{"@media screen and (min-width:700px)": {display: 'flex'}}}>
        <Box sx={{"@media screen and (min-width:700px)": {width: '45%'}, "@media screen and (max-width:699px)": {width: '20%', display: 'flex'}}}>
          <Box sx={{display: 'flex' , justifyContent: 'center'}}>
            <img src="#/img/myImage.jpg" alt="自画像" className="myImage" />
          </Box>
          {useMediaQuery("(min-width:700px)") ? <label><small>※志摩スペイン村での写真</small></label>:""}
        </Box>
        <Box fontFamily={"initial"} sx={{"@media screen and (min-width:700px)": {width: '55%'}}}>
          <Box sx={{display: 'flex', alignItems: "end", "@media screen and (min-width:700px)": {justifyContent: 'center'}}}>
          <h2>磯村泰志</h2>
          <label className="name">Isomura Taishi</label>
          </Box>
          <h3>生年月日&emsp;&emsp;：平成14年(2002年)12月16日</h3>
          <h3>住所&emsp;&emsp;&emsp;&emsp;：愛知県瀬戸市</h3>
          <h3>血液型&emsp;&emsp;&emsp;：A型</h3>
          <h3>趣味・日課&emsp;：パワプロ、ポケモンスリープ</h3>
          <h3>Mail&emsp;&emsp;&emsp;&emsp;：taishi2002i@gmail.com</h3>
        </Box>
      </Box>
      <Container sx={{"@media screen and (min-width:700px)": {width: '85%'}}}>
        <Typography fontSize={{"xs": 12,"sm": 15}} marginY={2}>&emsp;専門学校に通いプログラミングや資格取得に向けた勉強を行いながら、空いた時間を使って簡単な個人開発を行っています。ゲームが好きでパワプロやポケモンをよくプレイします。また、最近ポケモンスリープにはまっており、毎日の睡眠の糧になっています。</Typography>
      </Container>
      <Typography variant="h5" sx={{display: {"xs": "none", "sm": "flex"}}}>プログラミングスキル</Typography>
      <Typography variant="h6" sx={{display: {"xs": "flex", "sm": "none"}}}>プログラミングスキル</Typography>
      <TableContainer sx={{display: 'flex', justifyContent: 'center'}}>
        <Table sx={{ width: '80%' }} size="small" >
          <TableBody>
            {SkilData.map((item) => (
              <TableRow>
                <TableCell>{item.skil}</TableCell>
                <TableCell>{item.since}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ImageList sx={{display: 'flex'}} >
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{width: 100/itemData.length+'%'}}>
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