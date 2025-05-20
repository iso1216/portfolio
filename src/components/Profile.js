import { ImageList, ImageListItem, Table, TableBody, TableCell, TableContainer, TableRow, Typography, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import { itemData } from "../Data/itemData";
import { SkilData } from "../Data/SkilData";
import { useEffect, useState } from "react";

export default function Profile(){
  const [keyHistoryList, setKeyHistoryList] = useState([]);
  const [rotateImage, setRotateImage] = useState(false);

  useEffect(() => {
    // キー入力履歴を10個まで保存する
    const handleKeyDown = (event) => {
      const { key } = event;
      setKeyHistoryList((prev) => [...prev, key].slice(-10));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  // キー入力履歴を監視して、コマンドを入力したらロゴを回転させる
  useEffect(() => {
    const code = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
    if (keyHistoryList.join("") === code) {
      const logo = document.querySelector(".image-rotate");
      if (logo) {
        if (rotateImage)logo.children[0].classList.remove("rotate");
        else logo.children[0].classList.add("rotate");
        setRotateImage(!rotateImage);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyHistoryList]);
  

  return(
    <Container maxWidth='lg'>
      <h1>プロフィール</h1>
      <Box sx={{"@media screen and (min-width:700px)": {display: 'flex'}}}>
        <Box sx={{"@media screen and (min-width:700px)": {width: '45%'}, "@media screen and (max-width:400px)": {width: '72px', display: 'flex'}, "@media screen and (max-width:699px) and (min-width:401px)": {width: '200px', display: 'flex'}}}>
          <Box sx={{display: 'flex' , justifyContent: 'center'}} className="image-rotate">
            <img src="https://github.com/iso1216/portfolio/blob/main/public/img/myImage.jpg?raw=true" alt="江の島での自画像(コナミコマンド対応)" className="myImage" />
          </Box>
          {useMediaQuery("(min-width:700px)") ? <label><small>※江の島での写真</small></label>:""}
        </Box>
        <Box fontFamily={"initial"} sx={{"@media screen and (min-width:700px)": {width: '55%'}}}>
          <Box sx={{display: 'flex', alignItems: "end", "@media screen and (min-width:700px)": {justifyContent: 'center'}}}>
          <h2>磯村泰志</h2>
          <label className="name">Isomura Taishi</label>
          </Box>
          <h3>生年月日&emsp;&emsp;：平成14年(2002年)12月16日</h3>
          <h3>住所&emsp;&emsp;&emsp;&emsp;：愛知県瀬戸市</h3>
          <h3>血液型&emsp;&emsp;&emsp;：A型</h3>
          <h3>趣味・日課&emsp;：音ゲー、ポケモンスリープ</h3>
          <h3>Mail&emsp;&emsp;&emsp;&emsp;：taishi2002i@gmail.com</h3>
        </Box>
      </Box>
      <Container sx={{"@media screen and (min-width:700px)": {width: '85%'}}}>
        <Typography fontSize={{"xs": 12,"sm": 15}} marginY={2}>&emsp;現在はIT企業でエンジニアとして働きながら、業務で使用する技術の習得や自己啓発に励んでいます。空いた時間を使って個人開発を行い、技術力の向上に取り組んでいます。趣味として音ゲーやポケモンスリープを楽しんでおり、特にポケモンスリープは日課として継続的にプレイしています。</Typography>
      </Container>
      <Typography variant="h5" sx={{display: {"xs": "none", "sm": "flex"}}} marginLeft={2}>プログラミングスキル</Typography>
      <Typography variant="h6" sx={{display: {"xs": "flex", "sm": "none"}}}>プログラミングスキル</Typography>
      <TableContainer sx={{display: 'flex', justifyContent: 'center'}}>
        <Table sx={{ width: '80%' }} size="small" >
          <TableBody>
            {SkilData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.skil}</TableCell>
                <TableCell align="right">{item.since}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <ImageList sx={{display: 'flex', marginTop: 5, width: '85%'}} >
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{width: 100/itemData.length+'%', padding: {"sx": '', "sm": 1}}}>
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
      </Box>
    </Container>
  );
}