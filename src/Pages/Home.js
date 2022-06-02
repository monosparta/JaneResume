import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Divider,
  InputBase,
  Button,
  IconButton,
  Paper,
  Fab,
  Pagination,
} from "@mui/material";
import { useState, useEffect } from "react";

import "./Home.css";
import usePagination from "../Components/MessagePagination";
import SkillListItem from "../Components/SkillListItem";
import IconItem from "../Components/IconItem";
import WorkStepper from "../Components/WorkStepper";
import ProjectCard from "../Components/ProjectCard";
import LanguageListItem from "../Components/LanguageListItem";
import License from "../Components/License";
import MessageBoard from "../Components/MessageBoard";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SearchIcon from "@mui/icons-material/Search";

import GitHubIcon from "@mui/icons-material/GitHub";
import SkillData from "../Jsons/Skill.json";
import LicenseData from "../Jsons/License.json";
import ExperienceData from "../Jsons/Experience.json";
import ProjectData from "../Jsons/Project.json";
import LanguageData from "../Jsons/Language.json";
import IntroductionData from "../Jsons/Introduction.json";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import {
  FormContainer,
  TextFieldElement,
  SelectElement,
} from "react-hook-form-mui";
import axios from "../Axios.config";

function Home() {
  const InforIcon = [
    { icon: <EmailIcon />, label: "jane99168@gmail.com" },
    { icon: <PhoneAndroidIcon />, label: "0937029528" },
    { icon: <GitHubIcon />, label: "https://github.com/Jane0731" },
  ];
  const [allMessages, setAllMessages] = useState([]);
  const [userId, setUserId] = useState("");
  const [state, setState] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [countMessage, setCountMessage] = useState(0);
  const [page, setPage] = useState(1);
  const [searchMessage, setSearchMessage] = useState("");

  const getMessages = () => {
    axios
      .get("api/message")
      .then((response) => {
        setState(true);
        setAllMessages(response.data["messages"]);
        setUserId(response.data["userid"]);
        setCountMessage(response.data["count"]);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    getMessages();
  }, state);
  const messageDataPagination = usePagination(allMessages, 2);
  const allMessage = messageDataPagination.currentData();
  const handlePageChange = (e, p) => {
    setPage(p);
    messageDataPagination.jump(p);
  };
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const clickMessage = () => {
    setShowEdit(!showEdit);
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const parseError = (error) => {
    return "此欄位必填";
  };
  const handleSearchMessageSubmit = () => {
    const json = JSON.stringify({
      message: searchMessage,
    });
    axios
      .post("api/searchmessage", JSON.parse(json))
      .then((response) => {
        setAllMessages(response.data["messages"]);
        setCountMessage(response.data["count"]);
        console.log(countMessage)
      })
      .catch((error) => {});
  };
  const handleSearchChange = (e) => {
    setSearchMessage(e.target.value);
  };
  const handleAddMessageSubmit = (e) => {
    const token = localStorage.getItem("token");
    const json = JSON.stringify({
      description: e.message,
      identity: e.identity,
    });
    console.log(e.identity == 1, !token);

    if (e.identity == 1 && !token) {
      alert("請先登入");
    } else {
      console.log(json);
      axios
        .post("api/message", JSON.parse(json))
        .then((response) => {
          alert("新增成功");

          setTimeout(() => window.location.reload(), 3000);
        })
        .catch((error) => {
          alert("新增失敗");
        });
    }
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <Box>
      <Box component="div" sx={{ mx: 5, my: 7, p: 2 }} className="Box">
        <ArrowCircleUpIcon
          className="scrollTop"
          onClick={scrollTop}
          style={{ display: showScroll ? "flex" : "none" }}
        />
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
          <Typography variant="h6">在學經歷</Typography>
        </Divider>
        <Grid container spacing={2} sx={{ pl: 3 }}>
          <WorkStepper steps={ExperienceData} />
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
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Fab
            variant="extended"
            size="medium"
            color="secondary"
            aria-label="add"
            onClick={clickMessage}
          >
            <ArrowCircleUpIcon sx={{ mr: 1 }} />
            我要留言
          </Fab>
          <Typography variant="h4">訪客留言版</Typography>
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
              placeholder="搜尋"
              inputProps={{ "aria-label": "搜尋" }}
              onChange={handleSearchChange}
            />
            <IconButton
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleSearchMessageSubmit}
            >
              <SearchIcon />
            </IconButton>
          </Paper>{" "}
        </Grid>
        <FormContainer onSuccess={handleAddMessageSubmit}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{ marginY: 3, pl: 3 }}
            style={{ display: showEdit ? "flex" : "none" }}
          >
            <TextFieldElement
              required
              parseError={parseError}
              fullWidth
              id="message"
              label="留言"
              name="message"
              rows={4}
              multiline
            />
            <SelectElement
              required
              parseError={parseError}
              fullWidth
              id="identity"
              label="留言身分"
              name="identity"
              options={[
                { id: "0", title: "匿名留言" },
                { id: "1", title: "一般留言" },
              ]}
              sx={{ my: 3 }}
            />
            <Box>
              <Button variant="contained" sx={{ marginY: 2 }} type="submit">
                發布
              </Button>
            </Box>
          </Grid>
        </FormContainer>
        <Grid spacing={2} sx={{ marginY: 3 }}>
          {(allMessage || []).map((message) => (
            <MessageBoard
              avatar={
                message.User != null
                  ? message.User.first_name[0] + message.User.second_name[0]
                  : "匿名"
              }
              userName={
                message.User != null
                  ? message.User.first_name + message.User.second_name
                  : "匿名"
              }
              createdAt={message.createdAt}
              description={message.description}
              id={message.id}
              actionState={message.user_id == userId ? true : false}
            />
          ))}
          <Pagination
            count={Math.ceil(countMessage / 2)}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
