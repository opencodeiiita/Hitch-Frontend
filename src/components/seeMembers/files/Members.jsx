"use client";
import Box from '@mui/material/Box';
import '@fontsource/lato';
import '../../../styles/globals.css';
import Typography from '@mui/material/Typography';
import { Avatar, Button, Grid, Input, InputBase, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, TextField } from '@mui/material';
import SearchBar from './search';
import VerticalDropdownMenu from './vertical';




import React from 'react'

const Members = () => {
   

    const peopleData = [
      {
        name: "Add People",
        profileImg: "./images/s.jpg", // Replace with the actual image link or SVG for John Doe
      },
      {
        name: "John Doe",
        job: "Software Engineer",
        alias: "Johny",
        profileImg: "./images/1.jpg", // Replace with the actual image link or SVG for John Doe
      },
      {
        name: "Jane Smith",
        job: "Graphic Designer",
        alias: "Janey",
        profileImg: "./images/2.jpg", // Replace with the actual image link or SVG for Jane Smith
      },
      {
        name: "Bob Johnson",
        job: "Marketing Specialist",
        alias: "Bobby",
        profileImg: "./images/3.jpg", // Replace with the actual image link or SVG for Bob Johnson
      },
      {
        name: "Emily White",
        job: "Data Scientist",
        alias: "Emmy",
        profileImg: "./images/4.jpg", // Replace with the actual image link or SVG for Emily White
      },
      {
        name: "Alex Turner",
        job: "UI/UX Designer",
        alias: "Alexy",
        profileImg: "./images/5.jpg", // Replace with the actual image link or SVG for Alex Turner
      },
      {
        name: "Sara Miller",
        job: "Project Manager",
        alias: "Sary",
        profileImg: "./images/6.jpg", // Replace with the actual image link or SVG for Sara Miller
      },
      {
        name: "Chris Williams",
        job: "Content Writer",
        alias: "Chrisy",
        profileImg: "./images/7.jpg", // Replace with the actual image link or SVG for Chris Williams
      },
    ];

    return (
        <div>
            <Box display="flex" sx={{ mb: 1 }} alignItems="center">
                <SearchBar />
                <VerticalDropdownMenu />
            </Box>
            <List sx={{ width: '50%', pb: 'unset', pl: 1 }}>
                {peopleData.map((person, index) => (
                    <>
                        <ListItemButton sx={{ pl: 'unset' }}>
                            <ListItemAvatar>
                                <Avatar sx={{ width: '40px', height: '40px', borderRadius: '6px' }}>
                                    <img src={person.profileImg} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText sx={{ mt: '2px' }}
                                primary={
                                    <Box display="flex" alignItems="center" gap="10px">
                                        <Typography style={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Lato, sans-serif', }}>
                                            {person.name}
                                        </Typography>
                                        {index !== 0 ? (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_622_611)">
                                                    <path d="M12.2079 2.48606C12.2359 2.40588 12.25 2.32409 12.25 2.24071V1.75H8.60866V2.65924H10.9254L8.62272 5.78146C8.57279 5.84879 8.53534 5.92095 8.51037 5.99795C8.4854 6.07174 8.47292 6.13585 8.47292 6.19039V6.68588H12.1798V5.77184H9.81622L12.0955 2.6833C12.1424 2.63198 12.1798 2.56623 12.2079 2.48606Z" fill="#616061" />
                                                    <path d="M5.3408 5.11992C5.94335 5.0059 6.56559 5.09041 7.11807 5.36114C7.42274 5.51045 7.7875 5.3776 7.93281 5.06442C8.07806 4.75124 7.94879 4.37633 7.64412 4.22703C6.85901 3.84229 5.97514 3.72236 5.11949 3.88428C4.2638 4.04619 3.47989 4.48174 2.88058 5.12878C2.28123 5.77587 1.89738 6.60118 1.78463 7.48621C1.67188 8.37124 1.8361 9.26998 2.25347 10.0532C2.67082 10.8364 3.31967 11.4634 4.10639 11.8448C4.89309 12.2261 5.77742 12.3422 6.63239 12.1766C7.48744 12.0109 8.26951 11.572 8.86614 10.9223C9.46284 10.2727 9.84328 9.44568 9.95237 8.56018C9.99478 8.21602 9.75765 7.90166 9.42282 7.85803C9.08793 7.81445 8.78209 8.05817 8.73968 8.40233C8.6632 9.02312 8.39644 9.60348 7.97732 10.0599C7.55814 10.5163 7.00805 10.8253 6.40605 10.9419C5.80397 11.0585 5.18135 10.9767 4.62776 10.7084C4.07419 10.44 3.61842 9.99921 3.32553 9.44959C3.03265 8.90003 2.91759 8.26974 2.99663 7.64931C3.07568 7.02888 3.34484 6.44968 3.76588 5.99509C4.18695 5.54051 4.73828 5.23394 5.3408 5.11992Z" fill="#616061" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_622_611">
                                                        <rect width="14" height="14" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        ) : (null)}
                                        <Typography style={{ color: 'black', fontSize: '16px', fontWeight: '400', fontFamily: 'Lato, sans-serif', }}>
                                            {person.alias}
                                        </Typography>
                                    </Box>}
                                secondary={<Typography style={{ color: '#616061', fontSize: '12px', fontWeight: '400', fontFamily: 'Lato, sans-serif', }}>{person.job}</Typography>}
                            />
                        </ListItemButton>
                    </>
                ))}
            </List>
        </div>
    )
}

export default Members
