"use client";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/system/Box";
import { Container, Grid } from "@mui/material";
import { Button } from "@mui/material";
import "./indexDesk.css";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
export default function WorkspaceCard(){
    return (
      <Container
      className="desktop-card"
        fixed
        component="section"
        sx={{
          display: "flex",
          p: 2,
          border: "1px solid grey",
          width: 1002,
          height: 119,
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 2,
          justifyContent: "flex-start",
        }}
      >
        <div>
          <div className="box">
            <div className="upper"></div>
            <div className="lower">
              <div className="box2"></div>
              <div className="box3"></div>
            </div>
          </div>
        </div>
        <div className="ext-box">
          <div className="int-box">
            <Typography className="main-head">
              The Palisadoes Foundation
            </Typography>
            <div className="avatars-div">
              <AvatarGroup max={7}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pravatar.cc/201"
                  className="avatars"
                />
                <Avatar
                  alt="Travis Howard"
                  src="https://i.pravatar.cc/200"
                  className="avatars"
                />
                <Avatar
                  alt="Cindy Baker"
                  src="https://i.pravatar.cc/202"
                  className="avatars"
                />
                <Avatar
                  alt="Agnes Walker"
                  src="https://i.pravatar.cc/203"
                  className="avatars"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="https://i.pravatar.cc/204"
                  className="avatars"
                />
                <Avatar
                  alt="John Doe"
                  src="https://i.pravatar.cc/205"
                  className="avatars"
                />
                <Avatar
                  alt="Walter White"
                  src="https://i.pravatar.cc/206"
                  className="avatars"
                />
              </AvatarGroup>
              <Typography
                sx={{ paddingTop: 1, paddingLeft: 1.5, color: "#929191" }}
                className="num-mem"
              >
                1,423 Members
              </Typography>
            </div>
          </div>
        </div>
        <div className="button-div">
          <Button className="but" sx={{ width: 151, height: 51 }}>
            <Typography
              className="buttext"
              sx={{
                color: "white",
                fontSize: 14,
                fontWeight: 700,
                lineHeight: 20,
                textAlign: "center",
              }}
            >
              Launch Hitch
            </Typography>
          </Button>
        </div>
      </Container>
    );
}