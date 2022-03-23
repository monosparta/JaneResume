import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import "./Home.css";
import SkillListItem from "../Components/SkillListItem";
import IconItem from "../Components/IconItem";
import WorkStepper from "../Components/WorkStepper";
import ProjectCard from "../Components/ProjectCard";
import LanguageListItem from "../Components/LanguageListItem";
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
  const project = [
    {
      label: "留住浪浪",
      description:"作為第一個實作的應用系統，可以說是從零開始進行的專案。開發期間，不僅包含系統規劃、功能發想、畫面設計還有團隊之間的溝通與合作等等，以及尋找合作的流浪狗家園，近四個月的製作時間。在這個系統我使用Laravel架構來做後端開發，並且成功的串接第三方支付，寫出一個購物車系統，以及使用了第三方登入的功能。在這個過程中我不僅學會了技術，同時也培養出自我探索與解決問題的能力。",
      image: "DOG.png",
    },
    {
      label: "Mono-Luck",
      description: `這是自己第一次接觸前端，並且利用了React來開發，`,
      image: "Mono.png",
    },
  ];
  const language = [
    {
      type: "中文",
      level:"母語",
    },
    {
      type: "英文",
      level:"初學",
    },
    {
      type: "台語",
      level:"精通",
    }
  ];
  return (
    <Box component="div" sx={{ mx: 3, my: 5 ,p:2}}  className="Box">
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar
            alt="Jane"
            src="Jane.jpg"
            variant="square"
            sx={{ width: 144, height: 144 }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" component="div">
            廖翊臻
          </Typography>
          <IconItem data={InforIcon} />
        </Grid>
      </Grid>
      <Divider sx={{ mb: 2 }} textAlign="left">
        <Typography variant="h6">簡歷</Typography>
      </Divider>
      <Typography variant="body1" component="div" sx={{pl:3}}>
        目前就讀台中科大資管系資訊應用菁英班，性格外向，會主動與人溝通，勇於嘗試各項事務，遇到不懂的會詢問，且管理能力較強
        技能方面
      </Typography>
      <Divider sx={{ mb: 2 }} textAlign="left">
        <Typography variant="h6">工作經驗</Typography>
      </Divider>
      <Grid container spacing={2} sx={{pl:3}}>
        <WorkStepper steps={works} />
      </Grid>
      <Divider sx={{ mb: 2 }} textAlign="left">
        <Typography variant="h6">技能</Typography>
      </Divider>
      <Grid container spacing={2} sx={{pl:3}}>
        {skill.map((data) => (
          <SkillListItem title={data.item} data={data.subItem} />
        ))}
      </Grid>
      <Divider sx={{ mb: 2 }} textAlign="left">
        <Typography variant="h6">專案與作品集</Typography>
      </Divider>
      {project.map((data) => (
      <ProjectCard label={data.label} description={data.description} image={data.image}/>
      ))}
       <Divider sx={{ mb: 2 }} textAlign="left">
        <Typography variant="h6">語言能力</Typography>
      </Divider>
      {language.map((data) => (
      <LanguageListItem type={data.type} level={data.level}/>
      ))}
    </Box>
  );
}

export default Home;
