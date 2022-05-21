import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Divider,
  TextField,
  Button,
  Paper,
  IconButton,
  InputBase,
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
import SearchIcon from "@mui/icons-material/Search";
import SkillData from "../Jsons/Skill.json";
import LicenseData from "../Jsons/License.json";
import WorkData from "../Jsons/Work.json";
import ProjectData from "../Jsons/Project.json";
import LanguageData from "../Jsons/Language.json";
import IntroductionData from "../Jsons/Introduction.json";
function Home() {
  const InforIcon = [
    { icon: <EmailIcon />, label: "jane99168@gmail.com" },
    { icon: <PhoneAndroidIcon />, label: "0937029528" },
    { icon: <GitHubIcon />, label: "https://github.com/Jane0731" },
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
              {IntroductionData[0].description}
            </Typography>
            <Typography variant="body1" component="div">
              {IntroductionData[1].description}
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} textAlign="left">
          <Typography variant="h6">工作經驗</Typography>
        </Divider>
        <Grid container spacing={2} sx={{ pl: 3 }}>
          <WorkStepper steps={WorkData} />
        </Grid>
        <Divider sx={{ my: 2 }} textAlign="left">
          <Typography variant="h6">在學經歷</Typography>
        </Divider>
        <Grid container spacing={2} sx={{ pl: 3 }}>
          <WorkStepper steps={WorkData} />
        </Grid>
        <Divider textAlign="left">
          <Typography variant="h6">技能</Typography>
        </Divider>
        <Grid container spacing={2} sx={{ pl: 3 }}>
          {SkillData.map((data) => (
            <SkillListItem title={data.item} data={data.subItem} />
          ))}
        </Grid>
        <Divider sx={{ mb: 2 }} textAlign="left">
          <Typography variant="h6">專案與作品集</Typography>
        </Divider>
        {ProjectData.map((data) => (
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
          {LicenseData.map((data) => (
            <License label={data.label} time={data.time} />
          ))}
        </Grid>
        <Divider sx={{ my: 2 }} textAlign="left">
          <Typography variant="h6">語言能力</Typography>
        </Divider>
        {LanguageData.map((data) => (
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
              rows={4}
              multiline
            />
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
