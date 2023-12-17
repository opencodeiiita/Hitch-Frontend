"use client";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/system/Box";
import { Container, Grid } from "@mui/material";
import { Button } from "@mui/material";
import "./indexMob.css";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
export default function WorkspaceMobile(){
    return (
      <Container
      className="mobile-card"
        fixed
        component="section"
        sx={{
          display: "flex",
          width: 350,
          height: 140,
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 2,
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div className="up">
          <div className="box">
            <div className="upper"></div>
            <div className="lower">
              <div className="box2"></div>
              <div className="box3"></div>
            </div>
          </div>
          <div className="text">
            <Typography className="main-head">
              The Palisadoes
              <br /> Foundation
            </Typography>

            <Typography
              sx={{ paddingTop: 1, paddingLeft: 1.5, color: "#929191" }}
              className="num-mem"
            >
              1,423 Members
            </Typography>
          </div>
        </div>
        <div>
          <div className="button-div">
            <Button className="but" sx={{ height: 35 }}>
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
        </div>
      </Container>
    );
}