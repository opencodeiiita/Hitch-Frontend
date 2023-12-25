import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import ReactionIcon from "./ReactionIcon";

const ChatNotification = ({
  loading = true,
  username = "test",
  time = "12:30 PM",
  message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  userAvatar,
  timepassed = "30",
  reactions = [
    { type: "like", count: 5, selected: false },
    { type: "happy", count: 3, selected: false },
    { type: "sad", count: 1, selected: false },
    { type: "emote4", count: 115, selected: false },
    { type: "emote5", count: 15, selected: false },
  ],
}) => {
  const [newReactions, setNewReactions] = useState(reactions);
  const selectReaction = (reactionIndex) => {
    let arr = [...newReactions];

    if (arr[reactionIndex].selected === true) {
      arr[reactionIndex].count -= 1;
      arr[reactionIndex].selected = false;
    } else {
      arr[reactionIndex].selected = true;
      arr[reactionIndex].count += 1;
    }
    setNewReactions(arr);
  };
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
            <>
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
              <div className="flex">
                <div
                  className="ml-[10px] mt-[4px] cursor-pointer flex rounded-[16px] gap justify-center 
                items-center h-[24px] py-[3px] bg-[#F0E4FF]
              gap-[4px] px-[10px] hover:bg-[#e8d9fa] font-[500] w-[fit-content]"
                >
                  <svg
                    className="h-full w-auto"
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.375 5.58129C10.375 5.8524 10.5947 6.07222 10.8659 6.07222C11.137 6.07222 11.3568 5.8524 11.3568 5.58129V3.92447H13.0136C13.2848 3.92447 13.5045 3.70468 13.5045 3.43356C13.5045 3.16244 13.2848 2.94265 13.0136 2.94265H11.3568V1.28583C11.3568 1.01471 11.137 0.794922 10.8659 0.794922C10.5948 0.794922 10.375 1.01471 10.375 1.28583V2.94265H8.71818C8.44705 2.94265 8.2273 3.16244 8.2273 3.43356C8.2273 3.70468 8.44705 3.92447 8.71818 3.92447H10.375V5.58129Z"
                      fill="#1D1C1D"
                    />
                    <path
                      d="M6.07953 2.63583C6.26493 2.63583 6.4483 2.64448 6.6292 2.66141C6.84355 2.68146 7 2.86657 7 3.08184C7 3.35607 6.7504 3.56166 6.47703 3.5399C6.34593 3.52946 6.21333 3.52414 6.07953 3.52414C3.35057 3.52414 1.13832 5.73641 1.13832 8.4654C1.13832 11.1943 3.35057 13.4066 6.07953 13.4066C8.80855 13.4066 11.0208 11.1943 11.0208 8.4654C11.0208 8.3316 11.0154 8.199 11.005 8.0679C10.9832 7.79452 11.1888 7.54492 11.4631 7.54492C11.6783 7.54492 11.8635 7.70137 11.8836 7.91565C11.9004 8.09662 11.9091 8.28 11.9091 8.4654C11.9091 11.6849 9.29913 14.2949 6.07953 14.2949C2.85998 14.2949 0.25 11.6849 0.25 8.4654C0.25 5.2458 2.85998 2.63583 6.07953 2.63583Z"
                      fill="#1D1C1D"
                    />
                    <path
                      d="M4.23864 7.85175C4.66227 7.85175 5.00568 7.50832 5.00568 7.08472C5.00568 6.66105 4.66227 6.31762 4.23864 6.31762C3.81501 6.31762 3.47159 6.66105 3.47159 7.08472C3.47159 7.50832 3.81501 7.85175 4.23864 7.85175Z"
                      fill="#1D1C1D"
                    />
                    <path
                      d="M7.92047 7.85175C8.34407 7.85175 8.6875 7.50832 8.6875 7.08472C8.6875 6.66105 8.34407 6.31762 7.92047 6.31762C7.4968 6.31762 7.15338 6.66105 7.15338 7.08472C7.15338 7.50832 7.4968 7.85175 7.92047 7.85175Z"
                      fill="#1D1C1D"
                    />
                    <path
                      d="M3.73995 10.2294C3.54617 9.8418 3.82799 9.3858 4.26129 9.3858H7.89782C8.3311 9.3858 8.61295 9.8418 8.41915 10.2294L8.29967 10.4683C7.87922 11.3092 7.01973 11.8404 6.07953 11.8404C5.13936 11.8404 4.27986 11.3092 3.85939 10.4683L3.73995 10.2294Z"
                      fill="#1D1C1D"
                    />
                  </svg>
                  {newReactions.reduce((count, reaction) => {
                    return count + reaction.count;
                  }, 0)}
                </div>
                {newReactions.map((reaction, i) => (
                  <div
                    onClick={() => selectReaction(i)}
                    key={reaction.type}
                    className={`border-[1px] select-none ${
                      reaction.selected
                        ? "border-[#7D5584] bg-[#e3cffa]"
                        : "border-transparent"
                    } ml-[10px] mt-[4px] cursor-pointer flex rounded-[16px] gap justify-center 
                items-center h-[24px] py-[3px] bg-[#F0E4FF]
              gap-[4px] px-[10px] hover:bg-[#e3cffa] font-[500] w-[fit-content]`}
                  >
                    <ReactionIcon emote={reaction.type} />
                    {reaction.count}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Paper>
  );
};

export default ChatNotification;
