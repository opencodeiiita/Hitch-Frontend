"use client"
import React from 'react';
import { TextField, InputAdornment, ListItem, IconButton, ListItemAvatar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/lato';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// Create a theme with Lato font
const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
});

const SearchBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="outlined-search"
        placeholder='Search field'
        type="search"
        variant="outlined"
        sx={{
          width: '60%',
          "& input": {
            paddingY: 1,
            color: '#616061'
          },
          pl:'7px',
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_721_460)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5855 11.9121C14.5674 9.56738 14.4139 6.05134 12.1733 3.89088C9.84143 1.64229 6.13178 1.7136 3.88763 4.05014C1.64349 6.38669 1.71466 10.1037 4.04659 12.3523C6.20195 14.4306 9.5343 14.5271 11.7986 12.6848L14.8175 15.5958C15.0329 15.8035 15.3742 15.8011 15.5867 15.5905C15.8066 15.3724 15.8042 15.0157 15.5812 14.8006L12.5855 11.9121ZM11.3921 4.70436C13.2756 6.52059 13.3331 9.5229 11.5205 11.4101C9.70778 13.2974 6.71144 13.355 4.82789 11.5388C2.94435 9.72255 2.88687 6.72028 4.69951 4.833C6.51215 2.94572 9.5085 2.88813 11.3921 4.70436Z" fill="#616061" />
                </g>
                <defs>
                  <clipPath id="clip0_721_460">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </InputAdornment>
          ),
        }}
      />

    </ThemeProvider>
  );
};

export default SearchBar;
