import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
  Avatar,
  Divider,
} from "@mui/material";
import "./Home.css";
import SkillListItem from "../Components/SkillListItem";
import IconItem from "../Components/IconItem";
import WorkStepper from "../Components/WorkStepper";
import ProjectCard from "../Components/ProjectCard";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  const skill = [
    {
      item: "Programming",
      subItem: [
        "Java",
        "Python",
        "C",
        "HTML5",
        "CSS",
        "JavaScript",
        "JQuery",
        "Bootstrap",
        "PHP",
      ],
    },
    {
      item: "IDE",
      subItem: ["Eclipse", "Android Studio", "Visual Studio 2019", "Dev-C++"],
    },
    { item: "Database", subItem: ["MySQL"] },
    { item: "Frameworks", subItem: ["Laravel", "React"] },
  ];
  const InforIcon = [
    { icon: <EmailIcon />, label: "jane99168@gmail.com" },
    { icon: <PhoneAndroidIcon />, label: "0937029528" },
    { icon: <GitHubIcon />, label: "https://github.com/Jane0731" },
  ];
  const works = [
    {
      label: "教學助理",
      description: `主要負責協助老師指導學生程式設計能力，並且輔導學生考取CPE`,
      time: "2021/10-在職中",
    },
    {
      label: "創科資訊實習生",
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
      time: "2022/02-在職中",
    },
  ];
  return (
    <Box component="div" sx={{ px: 15, py: 5 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar
            alt="Jane"
            src="Jane.jpg"
            variant="square"
            sx={{ width:144, height: 144}}
          />
        </Grid>
        <Grid item>
          <Typography variant="h4" component="div">
            廖翊臻
          </Typography>
          <IconItem data={InforIcon} />
        </Grid>
      </Grid>
      <Divider sx={{ mb: 2 }} textAlign="left">
        <Typography variant="h5">簡歷</Typography>
      </Divider>
      <Typography variant="body1" component="div">
        目前就讀台中科大資管系資訊應用菁英班，性格外向，會主動與人溝通，勇於嘗試各項事務，遇到不懂的會詢問，且管理能力較強
        技能方面
      </Typography>
      <Divider sx={{ mb: 2 }} textAlign="left">
        <Typography variant="h5">工作經驗</Typography>
      </Divider>
      <Grid container spacing={2}>
        <WorkStepper steps={works} />
      </Grid>
      <Divider sx={{ mb: 2 }} textAlign="left">
        <Typography variant="h5">技能</Typography>
      </Divider>

      <Grid container spacing={2}>
        {skill.map((data) => (
          <SkillListItem title={data.item} data={data.subItem} />
        ))}
      </Grid>
      <Divider sx={{ mb: 2 }} textAlign="left">
        <Typography variant="h5">專案與作品集</Typography>
      </Divider>
    </Box>
  );
}

export default Home;
