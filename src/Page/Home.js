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
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "創科資訊實習生",
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
  ];
  return (
    <Box component="div" sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Avatar alt="Jane" src="Jane.jpg" sx={{ width: 56, height: 56 }} />
            <Typography variant="h4" component="div" gutterBottom>
              廖翊臻
            </Typography>
            <IconItem data={InforIcon} />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" component="div" gutterBottom>
              目前就讀台中科大資管系資訊應用菁英班，性格外向，會主動與人溝通，勇於嘗試各項事務，遇到不懂的會詢問，且管理能力較強
              技能方面
            </Typography>
          </Grid>
        </Grid>
      <Divider />
      <Typography variant="h5" component="div" gutterBottom>
        工作經驗
      </Typography>
      <Grid container spacing={2}>
        <WorkStepper steps={works} />
      </Grid>
      <Divider />
      <Typography variant="h5" component="div" gutterBottom>
        技能
      </Typography>
      <Grid container spacing={2}>
        {skill.map((data) => (
          <SkillListItem title={data.item} data={data.subItem} />
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
