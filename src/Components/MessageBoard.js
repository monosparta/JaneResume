import * as React from "react";
import {
  Avatar,
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
import { grey } from "@mui/material/colors";
function MessageBoard(props) {
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
          alert(error.response.data["detail"]);
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
          alert(error.response.data["detail"]);
        }
        alert("更新失敗");
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
        <Avatar>{props.avatar}</Avatar>
        <Box sx={{ px: 4 }}>
          <Grid sx={{ display: "flex" }}>
            <Typography variant="h6">{props.userName}</Typography>
            <Typography sx={{ px: 2,color:grey }} variant="body2">
              {props.createdAt}
            </Typography>
          </Grid>
          <Input
            type="text"
            readOnly={writeState}
            disableUnderline={writeState}
            defaultValue={description}
            id={props.id}
            onChange={handleMessageChange}
            sx={{fontSize:"20px"}}
          />
        </Box>
        <Button
          style={{ display: writeState ? "none" : "flex" }}
          onClick={() => updateMessage(props.id)}
        >
          更改
        </Button>
      </Grid>
      <Grid
        sx={{ pr: 8 }}
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
