"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import '@fontsource/lato';
import { Typography } from 'antd';

export default function RightSideDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 300,overflowX:'hidden' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            
        >
            <List>
                <ListItem>
                    <ListItemText primary={<Typography style={{ color: 'black', fontSize: '18px', fontWeight: '900', fontFamily: 'Lato, sans-serif', }}>Profile</Typography>} />
                    <ListItemIcon sx={{ mr: -4 }} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_854_593)">
                                <path d="M17.4691 5.26265C17.8193 4.91245 18.3871 4.91245 18.7373 5.26265C19.0876 5.61286 19.0876 6.18066 18.7373 6.53086L6.53086 18.7373C6.18066 19.0876 5.61286 19.0876 5.26266 18.7373C4.91245 18.3871 4.91245 17.8193 5.26265 17.4691L17.4691 5.26265Z" fill="#616061" />
                                <path d="M18.7373 17.4691C19.0875 17.8193 19.0875 18.3871 18.7373 18.7373C18.3871 19.0876 17.8193 19.0876 17.4691 18.7373L5.26265 6.53086C4.91245 6.18065 4.91245 5.61286 5.26265 5.26265C5.61286 4.91245 6.18065 4.91245 6.53086 5.26265L18.7373 17.4691Z" fill="#616061" />
                            </g>
                            <defs>
                                <clipPath id="clip0_854_593">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </ListItemIcon>
                </ListItem>
                <Divider />
                <ListItem>
                    <img className="w-[300px] rounded-xl mt-5" src="./images/1.jpg" />
                </ListItem>
                <ListItem sx={{ pb: 0, mb: 0 }}>
                    <ListItemText primary={<Typography style={{ color: 'black', fontSize: '22px', fontWeight: '900', fontFamily: 'Lato, sans-serif', }}>Mary Heer</Typography>} />
                </ListItem>
                <ListItem sx={{ py: 0, my: 0 }}>
                    <ListItemText primary={<Typography style={{ color: 'black', fontSize: '18px', fontWeight: '400', fontFamily: 'Lato, sans-serif', }}>Product Designer</Typography>}
                        secondary={<Typography style={{ color: 'black', fontSize: '12px', fontWeight: '400', fontFamily: 'Lato, sans-serif', }}>she/her/hers</Typography>} />
                </ListItem>
                <ListItem sx={{ py: 0, my: 0 }} style={{ alignItems: 'center' }} >
                    <ListItemIcon sx={{ mr: -3 }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_622_449)">
                                <path d="M17.4398 3.55151C17.4799 3.43697 17.5 3.32013 17.5 3.20101V2.5H12.2981V3.79892H15.6078L12.3182 8.25923C12.2468 8.35542 12.1933 8.4585 12.1577 8.5685C12.122 8.67392 12.1042 8.7655 12.1042 8.84342V9.55125H17.3997V8.24549H14.0232L17.2793 3.83328C17.3463 3.75997 17.3997 3.66605 17.4398 3.55151Z" fill="#616061" />
                                <path d="M7.62971 7.31417C8.4905 7.15129 9.37942 7.27202 10.1687 7.65877C10.6039 7.87207 11.125 7.68229 11.3326 7.23489C11.5401 6.78749 11.3554 6.2519 10.9202 6.03861C9.79859 5.48899 8.53592 5.31765 7.31355 5.54897C6.09114 5.78027 4.97128 6.40248 4.11511 7.32683C3.2589 8.25124 2.71054 9.43025 2.54947 10.6946C2.38839 11.9589 2.623 13.2428 3.21924 14.3617C3.81546 15.4805 4.74239 16.3763 5.86628 16.9211C6.99013 17.4658 8.25345 17.6317 9.47484 17.3951C10.6963 17.1584 11.8136 16.5314 12.6659 15.6033C13.5183 14.6753 14.0618 13.4938 14.2177 12.2288C14.2783 11.7372 13.9395 11.2881 13.4612 11.2257C12.9828 11.1635 12.5458 11.5117 12.4853 12.0033C12.376 12.8902 11.9949 13.7192 11.3962 14.3712C10.7973 15.0232 10.0115 15.4647 9.1515 15.6312C8.29139 15.7978 7.40194 15.681 6.61109 15.2977C5.82028 14.9143 5.16917 14.2846 4.75075 13.4994C4.33236 12.7143 4.16799 11.8139 4.2809 10.9276C4.39383 10.0412 4.77834 9.21383 5.37983 8.56442C5.98136 7.91501 6.76897 7.47705 7.62971 7.31417Z" fill="#616061" />
                            </g>
                            <defs>
                                <clipPath id="clip0_622_449">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </ListItemIcon >
                    <ListItemText primary={<Typography style={{ color: 'black', fontSize: '15px', fontWeight: '400', fontFamily: 'Lato, sans-serif', }}>Away, Notifications Snoozed</Typography>} />
                </ListItem>
                <ListItem sx={{ py: 0, my: 0 }} style={{ alignItems: 'center' }}>
                    <ListItemIcon sx={{ mr: -3 }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_622_452)">
                                <path d="M10.5714 5.35714C10.5714 5.04155 10.3156 4.78572 10 4.78572C9.68442 4.78572 9.42858 5.04155 9.42858 5.35714V10.5714H14.6428C14.9584 10.5714 15.2142 10.3156 15.2142 10C15.2142 9.68442 14.9584 9.42858 14.6428 9.42858H10.5714V5.35714Z" fill="#616061" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 10C17.5 14.1422 14.1422 17.5 10 17.5C5.85787 17.5 2.5 14.1422 2.5 10C2.5 5.85787 5.85787 2.5 10 2.5C14.1422 2.5 17.5 5.85787 17.5 10ZM16.3572 10C16.3572 13.5109 13.5109 16.3572 10 16.3572C6.48905 16.3572 3.64286 13.5109 3.64286 10C3.64286 6.48905 6.48905 3.64286 10 3.64286C13.5109 3.64286 16.3572 6.48905 16.3572 10Z" fill="#616061" />
                            </g>
                            <defs>
                                <clipPath id="clip0_622_452">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </ListItemIcon>
                    <ListItemText primary={<Typography style={{ color: 'black', fontSize: '15px', fontWeight: '400', fontFamily: 'Lato, sans-serif', }}>6:20 AM local time</Typography>} />
                </ListItem>
                <ListItem sx={{ gap: 1 }}>
                    <Button sx={{ width: '120px', gap: '5px' }} style={{ borderColor: '#BBBBBB', color: "#000000" }} variant="outlined">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2763 9.21708C12.5627 8.5366 12.7214 7.78817 12.7214 7C12.7214 3.84015 10.1598 1.27857 7 1.27857C3.84015 1.27857 1.27857 3.84015 1.27857 7C1.27857 10.1598 3.84015 12.7214 7 12.7214C7.7881 12.7214 8.53653 12.5627 9.21708 12.2763C9.63693 12.0996 10.1363 12.0149 10.6515 12.1179L12.4845 12.4845L12.1179 10.6515C12.0149 10.1363 12.0996 9.63693 12.2763 9.21708ZM13.2244 9.616C13.1134 9.87962 13.0704 10.1692 13.1265 10.4498L13.6066 12.8501C13.6965 13.2999 13.2999 13.6965 12.8501 13.6066L10.4497 13.1265C10.1692 13.0704 9.87962 13.1134 9.616 13.2244C8.81148 13.5629 7.9276 13.75 7 13.75C3.27208 13.75 0.25 10.728 0.25 7C0.25 3.27208 3.27208 0.25 7 0.25C10.728 0.25 13.75 3.27208 13.75 7C13.75 7.9276 13.5629 8.81148 13.2244 9.616Z" fill="#1D1C1D" />
                            <path d="M3.46428 5.26428C3.46428 4.98026 3.69454 4.75 3.97857 4.75H9.37855C9.66257 4.75 9.89282 4.98026 9.89282 5.26428C9.89282 5.5483 9.66257 5.77855 9.37855 5.77855H3.97857C3.69454 5.77855 3.46428 5.5483 3.46428 5.26428Z" fill="#1D1C1D" />
                            <path d="M3.46428 7.83572C3.46428 7.5517 3.69454 7.32145 3.97857 7.32145H6.80717C7.0912 7.32145 7.32145 7.5517 7.32145 7.83572C7.32145 8.11975 7.0912 8.35 6.80717 8.35H3.97857C3.69454 8.35 3.46428 8.11975 3.46428 7.83572Z" fill="#1D1C1D" />
                        </svg>
                        Message
                    </Button>
                    <Button sx={{ width: '120px', px: 0 }} style={{ borderColor: '#BBBBBB', color: "#000000" }} variant="outlined">
                        <svg className='mx-2' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_854_350)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7214 9V10.1789C14.1479 9.6468 13.3798 9.32145 12.5357 9.32145H12.2885C11.7149 9.32145 11.25 9.78638 11.25 10.3599V14.7115C11.25 15.2851 11.7149 15.75 12.2885 15.75H12.5357C14.3109 15.75 15.75 14.3109 15.75 12.5357V9C15.75 5.27208 12.728 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9V12.5357C2.25 14.3109 3.68908 15.75 5.46428 15.75H5.71153C6.28507 15.75 6.75 15.2851 6.75 14.7115V10.3599C6.75 9.78638 6.28507 9.32145 5.71153 9.32145H5.46428C4.62019 9.32145 3.8521 9.6468 3.27857 10.1789V9C3.27857 5.84015 5.84015 3.27857 9 3.27857C12.1598 3.27857 14.7214 5.84015 14.7214 9ZM5.72141 10.6072C5.72141 10.4651 5.60627 10.35 5.46426 10.35C4.25712 10.35 3.27854 11.3286 3.27854 12.5357C3.27854 13.7429 4.25712 14.7214 5.46426 14.7214C5.60627 14.7214 5.72141 14.6063 5.72141 14.4643V10.6072ZM12.2786 10.6072C12.2786 10.4651 12.3937 10.35 12.5356 10.35C13.7428 10.35 14.7214 11.3286 14.7214 12.5357C14.7214 13.7429 13.7428 14.7214 12.5356 14.7214C12.3937 14.7214 12.2786 14.6063 12.2786 14.4643V10.6072Z" fill="#1D1C1D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_854_350">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        fdgfd
                        <svg className='ml-2' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_854_354)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.68179 6.94172C4.92419 6.68609 5.31719 6.68609 5.55959 6.94172L9 10.5698L12.4404 6.94172C12.6828 6.68609 13.0758 6.68609 13.3182 6.94172C13.5606 7.19733 13.5606 7.61175 13.3182 7.86735L9.4389 11.9583C9.1965 12.2139 8.8035 12.2139 8.5611 11.9583L4.68179 7.86735C4.4394 7.61175 4.4394 7.19733 4.68179 6.94172Z" fill="#1D1C1D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_854_354">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Button>
                    <Button variant="outlined" sx={{ py:'10px',px: 'unset' }} style={{ borderColor: '#BBBBBB', color: "#000000" }}>
                        <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 1.79286C3.5 2.64496 2.8284 3.33571 2 3.33571C1.1716 3.33571 0.5 2.64496 0.5 1.79286C0.5 0.940758 1.1716 0.25 2 0.25C2.8284 0.25 3.5 0.940758 3.5 1.79286Z" fill="#1D1C1D" />
                            <path d="M3.5 7C3.5 7.85207 2.8284 8.54286 2 8.54286C1.1716 8.54286 0.5 7.85207 0.5 7C0.5 6.14793 1.1716 5.45714 2 5.45714C2.8284 5.45714 3.5 6.14793 3.5 7Z" fill="#1D1C1D" />
                            <path d="M3.5 12.2071C3.5 13.0592 2.8284 13.75 2 13.75C1.1716 13.75 0.5 13.0592 0.5 12.2071C0.5 11.3551 1.1716 10.6643 2 10.6643C2.8284 10.6643 3.5 11.3551 3.5 12.2071Z" fill="#1D1C1D" />
                        </svg>
                    </Button>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary={<Typography style={{ color: 'black', fontSize: '15px', fontWeight: '900', fontFamily: 'Lato, sans-serif', }}>About me</Typography>} />
                </ListItem>
                <ListItem sx={{ py: 0, my: 0 }}>
                    <ListItemText primary={<Typography style={{ color: '#616061', fontSize: '12px', fontWeight: '700', fontFamily: 'Lato, sans-serif', }}>Start Date</Typography>}
                        secondary={<Typography style={{ color: '#1364A3', fontSize: '13px', fontWeight: '400', fontFamily: 'Lato, sans-serif', }}>Dec 6, 2022 (7 months ago)</Typography>} />
                </ListItem>
                <ListItem sx={{ py: 0, my: 0 }}>
                    <ListItemText primary={<Typography style={{ color: '#616061', fontSize: '12px', fontWeight: '700', fontFamily: 'Lato, sans-serif', }}>LinkedIn</Typography>}
                        secondary={<Typography style={{ color: '#1364A3', fontSize: '13px', fontWeight: '400', fontFamily: 'Lato, sans-serif', }}>My LinkedIn Profile</Typography>} />
                </ListItem>

            </List>


        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
