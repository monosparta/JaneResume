import * as React from "react";
import {
  Grid,
  Typography,
  Box,
  IconButton,
  Input,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "../Axios.config";
import { useState, useEffect } from "react";
import SnackbarStyle from "../Components/SnackbarStyle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";

function MessageBoard(props) {

  let history = useNavigate();
  const [writeState, setWriteState] = useState(true);
  const [description, setDescription] = useState(props.description);
  const [updateMseeage, setUpdateMessage] = useState(description);
  const deleteMessage = (message_id) => {
    axios
      .delete(`/api/auth/message/${message_id}`)
      .then((response) => {
        alert("刪除成功");
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.data["detail"] == "登入過期，請重新登入") {
          localStorage.clear();

          alert(error.response.data["detail"]);
          history("/signin");
        }
        alert("刪除失敗");
        console.log(error.response.data["detail"]);
      });
  };
  const handleMessageChange = (e) => {
    setUpdateMessage(e.target.value);
  };
  const reload = () => {
    window.location.reload();
  };
  const clickUpdate = () => {
    setWriteState(!writeState);
  };
  const updateMessage = (message_id) => {
    const json = JSON.stringify({
      description: updateMseeage,
      message_id: message_id,
    });
    axios
      .put("/api/auth/message", JSON.parse(json))
      .then((response) => {
        alert("更新成功");
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.data["detail"] == "登入過期，請重新登入") {
          localStorage.clear();

          alert(error.response.data["detail"]);
          history("/signin");
        }
        console.log(error.response.data["detail"]);
      });
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ my: 3 }}
    >
      <Grid sx={{ display: "flex" }}>
        <Box sx={{ px: 4 }}>
          <Grid sx={{ display: "flex" }}>
            <Typography variant="h6">{props.userName}</Typography>
            <Typography sx={{ px: 2, alignSelf: "center" }} variant="body2">
              {props.createdAt}
            </Typography>
          </Grid>
          {writeState ? (
            <Grid sx={{ display: "flex" }}>
              <Input
                type="text"
                disableUnderline={true}
                readOnly
                value={props.description}
                id={props.id}
                sx={{ fontSize: "20px" }}
              />
            </Grid>
          ) : (
            <Grid sx={{ display: "flex" }}>
              <Input
                type="text"
                defaultValue={props.description}
                id={props.id}
                onChange={handleMessageChange}
                sx={{ fontSize: "20px" }}
              />
              <Button
                onClick={() => updateMessage(props.id)}
                size="medium"
                variant="contained"
                sx={{ mx: 3 }}
              >
                更改
              </Button>
            </Grid>
          )}
        </Box>
      </Grid>
      <Grid
        sx={{ mr: 8 }}
        style={{ display: props.actionState ? "flex" : "none" }}
      >
        <IconButton onClick={() => deleteMessage(props.id)}>
          <DeleteIcon />
        </IconButton>{" "}
        <IconButton onClick={clickUpdate}>
          {writeState ? <EditIcon /> : <HighlightOffIcon onClick={reload} />}
        </IconButton>
      </Grid>
    </Grid>
  );
}
export default MessageBoard;
