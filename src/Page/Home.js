import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Divider,
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import "./Home.css";
import SkillListItem from "../Components/SkillListItem";
import IconItem from "../Components/IconItem";
import WorkStepper from "../Components/WorkStepper";
import ProjectCard from "../Components/ProjectCard";
import LanguageListItem from "../Components/LanguageListItem";
import License from "../Components/License";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GitHubIcon from "@mui/icons-material/GitHub";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
function Home() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const skill = [
    {
      item: "Programming",
      subItem: ["Python", "HTML5", "CSS", "JavaScript", "JQuery", "PHP"],
    },
    {
      item: "IDE",
      subItem: ["Eclipse", "Android Studio", "Visual Studio 2019", "Dev-C++"],
    },
    { item: "Database", subItem: ["MySQL"] },
    { item: "Frameworks", subItem: ["Laravel", "React.js", "Node.js"] },
  ];
  const InforIcon = [
    { icon: <EmailIcon />, label: "jane99168@gmail.com" },
    { icon: <PhoneAndroidIcon />, label: "0937029528" },
    { icon: <GitHubIcon />, label: "https://github.com/Jane0731" },
  ];
  const license = [
    {
      label: "IPAS 行動裝置程式設計師(Android)-初級",
      time: "2021",
    },
    {
      label: "MTA: Introduction to Programming using HTML and CSS",
      time: "2019",
    },
    {
      label: "丙級技術士電腦軟體設計",
      time: "2018",
    },
    {
      label: "TQC：PowerPoint2016 專業級",
      time: "2018",
    },
  ];
  const works = [
    {
      label: "創科資訊實習生",
      description: `主要以學習為主，使未來能夠順利接軌工程師一職`,
      time: "2022/02-在職中",
    },
    {
      label: "教學助理",
      description: `協助老師指導學生程式設計能力，並且輔導學生考取CPE`,
      time: "2021/10-在職中",
    },
  ];
  const experiences = [
    {
      label: "創科資訊實習生",
      description: `主要以學習為主，使未來能夠順利接軌工程師一職`,
      time: "2022/02-在職中",
    },
    {
      label: "教學助理",
      description: `協助老師指導學生程式設計能力，並且輔導學生考取CPE`,
      time: "2021/10-在職中",
    },
  ];
  const project = [
    {
      label: "留住浪浪",
      description:
        "此系統是幫助浪花之家(流浪狗狗園)設計一個助養網站。在此專案中主要負責後端設計以及資料庫，使用Laravel作為整個專案的框架",
      image: "DOG.png",
    },
    {
      label: "Mono-Luck",
      description: `此系統是協助Monospace設計會員登記鎖櫃號碼以及提供會員查詢目前登記的狀況。在此專案中主要負責前端設計，利用React來做開發`,
      image: "Mono.png",
    },
  ];
  const language = [
    {
      type: "中文",
      level: "母語",
    },
    {
      type: "英文",
      level: "初學",
    },
    {
      type: "台語",
      level: "精通",
    },
  ];
  return (
    <Box>
      <Box component="div" sx={{ mx: 5, my: 7, p: 2 }} className="Box">
        <Grid container spacing={2} alignItems="center" sx={{ pl: 3 }}>
          <Grid item>
            <Avatar
              alt="Jane"
              src="Jane.jpg"
              variant="circle"
              sx={{ width: 144, height: 144 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div">
              廖翊臻
            </Typography>
            <IconItem data={InforIcon} />
          </Grid>
          <Grid item>
            <Typography variant="body1" component="div">
              你好，我叫廖翊臻，目前就讀台中科大資管系，在校成績表現優異，平均排名保持在前三。
            </Typography>
            <Typography variant="body1" component="div">
              我的性格外向，會與人主動溝通，勇於嘗試各項新事物，在學習上如果有遇到任何的問題，會先自行上網查資料，
              若無法解決便會向他人求助，而在團隊合作上，經常扮演領導者的身分，保持組內的關係融洽，有任何需要討論的問題，都會提出來一起討論，結合大家的想法來得出結論。
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} textAlign="left">
          <Typography variant="h6">工作經驗</Typography>
        </Divider>
        <Grid container spacing={2} sx={{ pl: 3 }}>
          <WorkStepper steps={works} />
        </Grid>
        <Divider sx={{ my: 2 }} textAlign="left">
          <Typography variant="h6">在學經歷</Typography>
        </Divider>
        <Grid container spacing={2} sx={{ pl: 3 }}>
          <WorkStepper steps={works} />
        </Grid>
        <Divider textAlign="left">
          <Typography variant="h6">技能</Typography>
        </Divider>
        <Grid container spacing={2} sx={{ pl: 3 }}>
          {skill.map((data) => (
            <SkillListItem title={data.item} data={data.subItem} />
          ))}
        </Grid>
        <Divider sx={{ mb: 2 }} textAlign="left">
          <Typography variant="h6">專案與作品集</Typography>
        </Divider>
        {project.map((data) => (
          <ProjectCard
            label={data.label}
            description={data.description}
            image={data.image}
          />
        ))}
        <Divider sx={{ mb: 2 }} textAlign="left">
          <Typography variant="h6">證照一覽</Typography>
        </Divider>
        <Grid container spacing={2} sx={{ pl: 3 }}>
          {license.map((data) => (
            <License label={data.label} time={data.time} />
          ))}
        </Grid>
        <Divider sx={{ my: 2 }} textAlign="left">
          <Typography variant="h6">語言能力</Typography>
        </Divider>
        {language.map((data) => (
          <LanguageListItem type={data.type} level={data.level} />
        ))}
      </Box>
      <Box component="div" sx={{ mx: 5, my: 7 }}>
        <Typography variant="h4">歡迎留下您的想法或意見</Typography>
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{ marginY: 3, pl: 3 }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="search"
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{ marginY: 3, pl: 3 }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              width: 400,
            }}
          >
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="留言"
              name="message"
              autoComplete="message"
              autoFocus
              rows={4}
              multiline
            />
            <Typography variant="h6">發表留言的身分：</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">留言身分</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="留言身分"
                onChange={handleChange}
                size="small"
              >
                <MenuItem value={10}>匿名留言</MenuItem>
                <MenuItem value={20}>一般留言</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" sx={{ marginY: 2 }}>
                發布
              </Button>
            </Box>
          </Paper>
          
        </Grid>
        {/* <Grid container spacing={2} alignItems="center" sx={{ pl: 3 }}></Grid> */}
      </Box>
    </Box>
  );
}

export default Home;
