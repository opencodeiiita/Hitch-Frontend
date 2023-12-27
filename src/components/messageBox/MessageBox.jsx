import React from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

const ChatNotification = ({
  loading = true,
  username = "test",
  time = "12:30 PM",
  message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          {loading ? (
            <Skeleton
              width={40}
              height={40}
              style={{
                marginLeft: "15px",
                borderRadius: "10px",
              }}
              variant="rounded"
            />
          ) : (
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
          )}
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
              {loading ? (
                <>
                  <Skeleton
                    width={60}
                    style={{ fontWeight: "bold", margin: "0 10px" }}
                  ></Skeleton>
                  <Skeleton width={40}></Skeleton>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
            {loading ? (
              <Skeleton
                width={60}
                style={{ fontWeight: "bold", margin: "0 10px" }}
              />
            ) : (
              <Typography
                variant="caption"
                color="textSecondary"
                style={{ display: "flex", alignItems: "center" }}
              >
                {time}
              </Typography>
            )}
          </div>
          {loading ? (
            <Skeleton
              height={96}
              style={{
                wordBreak: "break-word",
                margin: "0 10px",
                width: "100%",
              }}
            />
          ) : (
            <Typography
              style={{
                wordBreak: "break-word",
                minHeight: "24px",
                padding: "0 10px",
                width: "100%",
              }}
            >
              {message}
            </Typography>
          )}
        </div>
      </div>
    </Paper>
  );
};

export default ChatNotification;
