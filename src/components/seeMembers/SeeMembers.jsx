"use client";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import '@fontsource/lato';
import '../../styles/globals.css';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Rectangle } from '@mui/icons-material';
import Members from './files/Members';

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Table() {
  
  const noOfMembers = 426;
  const [value, setValue] = React.useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '650px', height: '100%', backgroundColor: 'white', borderRadius: '10px' }} >
        <Box sx={{ width: '100%', px: '28px', py: '20px' }} >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'center' }}>
            <Typography fontFamily='Lato, sans-serif' fontSize="32px" fontWeight="900">#02-Community</Typography>
            <IconButton
              sx={{ color: 'black' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Button variant="contained" sx={{ mr: 2,pl:1.5 }} style={{ color: 'white', backgroundColor: 'black', textTransform: 'none', }}><NotificationsNoneIcon style={{width:'18px',mr:1}} /><Rectangle  sx={{width:'5px'}} style={{color:'black'}} /> Enable Notifications</Button>
          <Button variant="contained" style={{ color: 'black', backgroundColor: '#DDDDDD', textTransform: 'none', }}
            startIcon={
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_721_55)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7214 9V10.1789C14.1479 9.6468 13.3798 9.32145 12.5357 9.32145H12.2885C11.7149 9.32145 11.25 9.78638 11.25 10.3599V14.7115C11.25 15.2851 11.7149 15.75 12.2885 15.75H12.5357C14.3109 15.75 15.75 14.3109 15.75 12.5357V9C15.75 5.27208 12.728 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9V12.5357C2.25 14.3109 3.68908 15.75 5.46428 15.75H5.71153C6.28507 15.75 6.75 15.2851 6.75 14.7115V10.3599C6.75 9.78638 6.28507 9.32145 5.71153 9.32145H5.46428C4.62019 9.32145 3.8521 9.6468 3.27857 10.1789V9C3.27857 5.84015 5.84015 3.27857 9 3.27857C12.1598 3.27857 14.7214 5.84015 14.7214 9ZM5.72141 10.6072C5.72141 10.4651 5.60627 10.35 5.46426 10.35C4.25712 10.35 3.27854 11.3286 3.27854 12.5357C3.27854 13.7429 4.25712 14.7214 5.46426 14.7214C5.60627 14.7214 5.72141 14.6063 5.72141 14.4643V10.6072ZM12.2786 10.6072C12.2786 10.4651 12.3937 10.35 12.5356 10.35C13.7428 10.35 14.7214 11.3286 14.7214 12.5357C14.7214 13.7429 13.7428 14.7214 12.5356 14.7214C12.3937 14.7214 12.2786 14.6063 12.2786 14.4643V10.6072Z" fill="#1D1C1D" />
                </g>
                <defs>
                  <clipPath id="clip0_721_55">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          >Huddle</Button>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="black"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="About" sx={{ textTransform: 'none' }} style={{ fontFamily: 'Lato, sans-serif', fontWeight: '700' }} />
            <Tab value="two" label={`Members ${noOfMembers}`} sx={{ textTransform: 'none' }} style={{ fontFamily: 'Lato, sans-serif', fontWeight: '700' }} />
            <Tab value="three" label="Integrations" sx={{ textTransform: 'none' }} style={{ fontFamily: 'Lato, sans-serif', fontWeight: '700' }} />
            <Tab value="four" label="Settings" sx={{ textTransform: 'none' }} style={{ fontFamily: 'Lato, sans-serif', fontWeight: '700' }} />
          </Tabs>
        </Box>

        <Box sx={{height:'500px'}}>
        <div className='scrollbar w-full h-[500px]' id='style-3'>
        <TabPanel value={value} index="one">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TabPanel>
        <TabPanel value={value} index="two">
         <Members/>
        </TabPanel>
        <TabPanel value={value} index="three">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TabPanel>
        <TabPanel value={value} index="four">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TabPanel>
        </div>
        </Box>
      </Box>
    </>
  );
}
