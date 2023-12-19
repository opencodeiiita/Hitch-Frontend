import React from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const ChatNotification = ({
  username = "test",
  time = "12:30 PM",
  message = "d",
  userAvatar,
  timepassed = "30",
}) => {
  return (
    <Paper
      className="inter"
      style={{
        fontFamily: "Inter",
        padding: "10px",
        width: "100%",
        alignSelf: "flex-end",
        boxShadow: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div style={{ paddingTop: "5px" }}>
          <Avatar
            alt="User Avatar"
            src={userAvatar}
            style={{
              marginLeft: "15px",
              borderRadius: "10px",
              width: "40px",
              height: "40px",
            }}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="flex">
              <Typography
                variant="subtitle1"
                color="black"
                style={{ fontWeight: "bold", margin: "0 10px" }}
              >
                {username}
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                style={{ display: "flex", alignItems: "center" }}
              >
                {timepassed} min ago
              </Typography>
            </div>
            <Typography
              variant="caption"
              color="textSecondary"
              style={{ display: "flex", alignItems: "center" }}
            >
              {time}
            </Typography>
          </div>
          <Typography
            style={{
              wordBreak: "break-word",
              minHeight: "24px",
              marginLeft: "10px",
              width: "100%",
            }}
          >
            {message}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default ChatNotification;
