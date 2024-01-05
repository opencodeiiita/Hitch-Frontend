"use client";
import * as React from 'react';
import '@fontsource/poppins';
import '@fontsource-variable/inter';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Box, Button, ButtonBase, Divider, Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import '../../styles/globals.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default function Sidebar() {


    const items = [
        {
            text: 'File Manager',
            svg: <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_536_499" fill="white">
                    <path d="M0 5.5C0 2.73858 2.23858 0.5 5 0.5H10C12.7614 0.5 15 2.73858 15 5.5V13.5C15 14.0523 14.5523 14.5 14 14.5H5C2.23858 14.5 0 12.2614 0 9.5V5.5Z" />
                </mask>
                <path d="M0 5.5C0 2.73858 2.23858 0.5 5 0.5H10C12.7614 0.5 15 2.73858 15 5.5V13.5C15 14.0523 14.5523 14.5 14 14.5H5C2.23858 14.5 0 12.2614 0 9.5V5.5Z" stroke="black" stroke-opacity="0.6" stroke-width="3" mask="url(#path-1-inside-1_536_499)" />
                <rect width="7" height="1" rx="0.5" transform="matrix(1 0 0 -1 4 8.5)" fill="black" fill-opacity="0.6" />
            </svg>,
            svg2: <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.847656" width="15" height="15" rx="2" fill="#F8D9E6" />
                <path d="M4 5L6.7339 5.78111C7.23686 5.92482 7.7675 5.94222 8.2788 5.83179L9.66808 5.53173C10.9344 5.25823 12.13 6.22318 12.13 7.51868C12.13 8.82797 10.9103 9.7958 9.63529 9.49827L8.31859 9.19102C7.78251 9.06592 7.22281 9.08557 6.69681 9.24794L4 10.0804V5Z" fill="#ED7AA7" />
            </svg>


        },
        {
            text: 'Mention & Reaction',
            svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3318 7.36297C12.2525 7.3324 12.1719 7.30298 12.0903 7.2748C11.9481 5.16884 10.5165 3.96317 8.11286 3.95083C8.10197 3.95078 8.09114 3.95078 8.08025 3.95078C6.64253 3.95078 5.44681 4.4441 4.71084 5.34178L6.0328 6.07075C6.58259 5.40021 7.44544 5.25726 8.08088 5.25726C8.08822 5.25726 8.09559 5.25726 8.10285 5.25732C8.8943 5.26138 9.49153 5.44635 9.87807 5.80708C10.1594 6.06971 10.3475 6.43262 10.4407 6.89063C9.73896 6.79476 8.98007 6.76529 8.1688 6.80268C5.88349 6.9085 4.4143 7.97992 4.51297 9.46869C4.56305 10.2239 5.03106 10.8735 5.83075 11.2979C6.50687 11.6567 7.37768 11.8322 8.28271 11.7925C9.4779 11.7398 10.4155 11.3732 11.0696 10.703C11.5664 10.1939 11.8806 9.53432 12.0194 8.70317C12.5889 8.9795 13.0111 9.34313 13.2442 9.78026C13.6406 10.5233 13.6638 11.7444 12.4243 12.7399C11.3384 13.612 10.033 13.9893 8.06025 14.0009C5.87192 13.9879 4.21692 13.4237 3.14089 12.3241C2.13327 11.2945 1.61253 9.80726 1.5931 7.90373C1.61253 6.00018 2.13327 4.51294 3.14089 3.48329C4.21692 2.3837 5.8719 1.81956 8.06022 1.80649C10.2644 1.81966 11.9483 2.38652 13.0655 3.49141C13.6133 4.03324 14.0263 4.71463 14.2986 5.50911L15.8477 5.17686C15.5177 4.19895 14.9984 3.35627 14.2917 2.65742C12.8594 1.24089 10.7646 0.51505 8.06562 0.5H8.05482C5.36128 0.514998 3.28998 1.2436 1.89849 2.66554C0.660249 3.93089 0.0215289 5.69153 6.71576e-05 7.89852L0 7.90373L6.71576e-05 7.90893C0.0215289 10.1159 0.660249 11.8766 1.89849 13.1419C3.28998 14.5638 5.36128 15.2925 8.05482 15.3075H8.06562C10.4603 15.2941 12.1483 14.7901 13.5388 13.6733C15.3582 12.2122 15.3034 10.3808 14.7037 9.25653C14.2736 8.45029 13.4534 7.79546 12.3318 7.36297ZM8.19715 10.4879C7.19554 10.5332 6.15497 10.1718 6.10366 9.39774C6.06563 8.82379 6.61178 8.18337 8.25862 8.10708C8.44722 8.09834 8.63229 8.09406 8.8141 8.09406C9.41228 8.09406 9.9719 8.14078 10.4807 8.23018C10.2909 10.1353 9.1778 10.4446 8.19715 10.4879Z" fill="black" fill-opacity="0.6" />
            </svg>
        },
        {
            text: 'Drafts',
            svg: <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.13278 5H13L8.5 1L8.1405 3.87597C8.0659 4.47282 8.53128 5 9.13278 5Z" fill="black" fill-opacity="0.6" />
                <path d="M11.4211 16H2.57895C2.16018 16 1.75857 15.8589 1.46246 15.6077C1.16635 15.3566 1 15.0159 1 14.6607V2.33929C1 1.98409 1.16635 1.64343 1.46246 1.39227C1.75857 1.14111 2.16018 1 2.57895 1H8.37053C8.57802 0.999688 8.78354 1.03406 8.97536 1.10117C9.16718 1.16827 9.34152 1.26678 9.48842 1.39107L12.5389 3.97857C12.6855 4.10318 12.8016 4.25106 12.8807 4.41376C12.9598 4.57646 13.0004 4.75079 13 4.92679V14.6607C13 15.0159 12.8336 15.3566 12.5375 15.6077C12.2414 15.8589 11.8398 16 11.4211 16ZM2.57895 1.53572C2.32769 1.53572 2.08672 1.62038 1.90906 1.77108C1.73139 1.92178 1.63158 2.12617 1.63158 2.33929V14.6607C1.63158 14.8738 1.73139 15.0782 1.90906 15.2289C2.08672 15.3796 2.32769 15.4643 2.57895 15.4643H11.4211C11.6723 15.4643 11.9133 15.3796 12.0909 15.2289C12.2686 15.0782 12.3684 14.8738 12.3684 14.6607V4.92679C12.3682 4.71374 12.2682 4.50948 12.0905 4.35893L9.04 1.77143C8.8625 1.62069 8.6217 1.5359 8.37053 1.53572H2.57895Z" fill="black" fill-opacity="0.6" />
                <path d="M9.6176 1.23839L9.61779 1.23855L12.6683 3.82605L12.6685 3.82621C12.8348 3.96759 12.9686 4.13717 13.0606 4.3263C13.1526 4.51559 13.2004 4.7199 13.2 4.92721M9.6176 1.23839L13.2 4.92721M9.6176 1.23839C9.45101 1.09744 9.25499 0.987104 9.0414 0.912386C8.82786 0.837683 8.59993 0.799672 8.37039 0.800002M9.6176 1.23839L8.37039 0.800002M13.2 4.92721V14.6607C13.2 15.0806 13.0031 15.4751 12.6669 15.7603C12.3317 16.0446 11.8832 16.2 11.4211 16.2H2.57895C2.11681 16.2 1.66828 16.0446 1.33309 15.7603C0.996901 15.4751 0.8 15.0806 0.8 14.6607V2.33929C0.8 1.91942 0.996901 1.52491 1.33309 1.23975C1.66828 0.955432 2.11681 0.800002 2.57895 0.800002H8.37039M13.2 4.92721L8.37039 0.800002M8.37039 0.800002H8.37053V1L8.37022 0.800002C8.37028 0.800002 8.37033 0.800002 8.37039 0.800002ZM11.9612 4.51145L11.9612 4.51153C12.0989 4.62813 12.1683 4.77858 12.1684 4.92699V14.6607C12.1684 14.8092 12.0992 14.9597 11.9616 15.0764C11.823 15.194 11.6289 15.2643 11.4211 15.2643H2.57895C2.37107 15.2643 2.17701 15.194 2.03843 15.0764C1.90084 14.9597 1.83158 14.8092 1.83158 14.6607V2.33929C1.83158 2.19083 1.90084 2.0403 2.03843 1.9236C2.17701 1.80605 2.37107 1.73572 2.57895 1.73572L8.37038 1.73572C8.3704 1.73572 8.37043 1.73572 8.37045 1.73572C8.57824 1.73589 8.77211 1.80632 8.91053 1.92387L8.91063 1.92395L11.9612 4.51145Z" stroke="black" stroke-opacity="0.6" stroke-width="0.4" />
                <rect x="4" y="7" width="6" height="2" rx="1" fill="black" fill-opacity="0.6" />
                <rect x="4" y="10" width="6" height="2" rx="1" fill="black" fill-opacity="0.6" />
            </svg>
        },

    ];

    const channelsData = [
        {
            id: 1,
            name: 'General',
            subchannels: [
                { id: 11, name: 'general' },
                { id: 12, name: 'Programming' },
            ],
        },
        {
            id: 2,
            name: 'Designers',
            subchannels: [
                { id: 21, name: 'general' },
                { id: 22, name: 'Programming' },
            ],
        },
        {
            id: 3,
            name: 'Bug Tracking',
            subchannels: [
                { id: 31, name: 'general' },
                { id: 32, name: 'Programming' },
            ],
        },
        {
            id: 4,
            name: 'Marketing',
            subchannels: [
                { id: 41, name: 'general' },
                { id: 42, name: 'Programming' },
            ],
        },
        {
            id: 5,
            name: 'Sales-transaction',
            subchannels: [
                { id: 51, name: 'general' },
                { id: 52, name: 'Programming' },
            ],
        },


    ];
    const users = [
        { id: 1, name: 'John Doe', profileImage: './images/7.jpg' },
        { id: 2, name: 'Jane Smith', profileImage: './images/3.jpg' },
        { id: 3, name: 'Yo Ching Cho', profileImage: './images/2.jpg' },
        { id: 4, name: 'Mnonkey Singh', profileImage: './images/1.jpg' },

    ];
    const [activeChannel, setActiveChannel] = React.useState(null);
    const [activeSubchannel, setActiveSubchannel] = React.useState(null);



    const [open, setOpen] = React.useState(true);
    const [openDms, setOpenDms] = React.useState(true);
    const [openChannels, setOpenChannels] = React.useState({});



    const handleClick = () => {
        setOpen(!open);
    };
    const handleClickDms = () => {
        setOpenDms(!openDms);
    };
    const handleClickChannel = (channelId) => {
        setOpenChannels((prevOpenChannels) => ({
            ...prevOpenChannels,
            [channelId]: !prevOpenChannels[channelId],
        }));
        setActiveChannel(channelId);
        setActiveSubchannel(null);
      
    };
    const handleClickSubchannel = (subchannelId) => {
        setActiveChannel(null);
        setActiveSubchannel(subchannelId);
    };


    return (
        <>
            <Box component="div" sx={{
                width: '249px',
                borderRadius: '10px 10px 10px 10px ',
                height: '100%',
                bgcolor: 'background.paper',
                overflow: 'hidden',
            }} >



                {/* profile part*/}
                <List>
                    <ListItem
                        sx={{
                            paddingRight: 2,
                        }}
                        secondaryAction={
                            <IconButton sx={{ m: 0, mr: 2, mb: 2.5, p: 0 }} edge="end" aria-label="delete">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5.99991" cy="6.00004" r="2.02614" stroke="#424242" stroke-width="0.653595" />
                                    <path d="M5.2113 0.974823C5.40117 0.134263 6.59883 0.134263 6.7887 0.974822C7.01123 1.95994 8.14171 2.4282 8.99564 1.88896C9.72426 1.42886 10.5711 2.27574 10.111 3.00436C9.5718 3.85829 10.0401 4.98877 11.0252 5.2113C11.8657 5.40117 11.8657 6.59883 11.0252 6.7887C10.0401 7.01123 9.5718 8.14171 10.111 8.99564C10.5711 9.72426 9.72426 10.5711 8.99564 10.111C8.14171 9.5718 7.01123 10.0401 6.7887 11.0252C6.59883 11.8657 5.40117 11.8657 5.2113 11.0252C4.98877 10.0401 3.85829 9.5718 3.00436 10.111C2.27574 10.5711 1.42886 9.72426 1.88896 8.99564C2.4282 8.14171 1.95994 7.01123 0.974823 6.7887C0.134263 6.59883 0.134263 5.40117 0.974822 5.2113C1.95994 4.98877 2.4282 3.85829 1.88896 3.00436C1.42886 2.27574 2.27574 1.42886 3.00436 1.88896C3.85829 2.4282 4.98877 1.95994 5.2113 0.974823Z" stroke="#424242" stroke-width="0.653595" />
                                </svg>


                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
                                <Avatar sx={{ width: '38px', height: '38px' }}>
                                    <img src='./images/7.jpg' />
                                </Avatar>
                            </Badge>
                        </ListItemAvatar>
                        <ListItemText sx={{ ml: "-10px", mt: "-2px" }}
                            primary={<Typography style={{ letterSpacing: '-0.02em', color: 'black', fontSize: '14.4px', fontWeight: '700', fontFamily: 'Inter Variable, sans-serif', }}>Akshay Waghmare</Typography>}
                            secondary={<Typography style={{ letterSpacing: '-0.02em', color: '#7B686C', fontSize: '10px', fontWeight: '400', fontFamily: 'Inter Variable, sans-serif', }}>IIIT Allahabad Projects</Typography>}
                        />
                    </ListItem>
                </List>
                <div className='w-[219px] mx-[30px]'>
                    <svg width="178" height="1" viewBox="0 0 178 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="178" height="1" fill="#D9D9D9" />
                    </svg>
                </div>
                {/* main list*/}
                <List

                    sx={{
                        width: '249px',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                        px: '30px',

                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >

                    {/* top section utilities*/}
                    {items.map((item, index) => (
                        <ListItemButton key={index} sx={{ width: '100%', my: '2px', px: 1, py: 0, borderRadius: '8px', }}>
                            <ListItemIcon sx={{ mr: '-28px' }}>
                                {item.svg}
                            </ListItemIcon>
                            <ListItemText primary={
                                <Typography style={{ color: 'black', opacity: 0.8, fontSize: '13px', fontWeight: '600', fontFamily: 'Poppins, sans-serif' }}>
                                    {item.text}
                                </Typography>
                            } />
                            {item.svg2 ? (
                                <IconButton sx={{ p: 0, m: 0, mr: '2px' }}>
                                    {item.svg2}
                                </IconButton>
                            ) : (null)}
                        </ListItemButton>
                    ))}
                    <ListItemText sx={{ ml: '28px', mb: 'unset' }} primary={<Typography style={{ textDecoration: 'underline', color: 'black', opacity: 0.5, fontSize: '10px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', }}>Show more</Typography>} />

                    {/*divider 2 */}
                    <ListItemIcon sx={{ width: '100%', mt: 0, p: 0 }}>
                        <svg width="178" height="1" viewBox="0 0 178 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="178" height="1" fill="#D9D9D9" />
                        </svg>
                    </ListItemIcon>

                    {/* channel title*/}

                    <ListItemButton onClick={handleClick} sx={{
                        width: '100%', mt: '2px', mb: '4px', px: 1, py: 0, borderRadius: '8px',

                    }}>
                        <ListItemIcon sx={{ mr: '-28px' }}>
                            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.00231934" width="13" height="2" rx="1" fill="black" fill-opacity="0.6" />
                                <rect y="4.00232" width="13" height="2" rx="1" fill="black" fill-opacity="0.6" />
                                <rect y="8.00232" width="8" height="2" rx="1" fill="black" fill-opacity="0.6" />
                            </svg>
                        </ListItemIcon>
                        <ListItemText primary={<Typography style={{ color: 'black', opacity: 0.8, fontSize: '13px', fontWeight: '600', fontFamily: 'Poppins, sans-serif', }}>Channels</Typography>} />
                        <IconButton sx={{ p: 0, m: 0 }}>
                            <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.00231934" width="15" height="15" rx="2" fill="#D0EEDA" />
                                <path d="M11 7.00232H8V4.00232C8 3.86971 7.94732 3.74253 7.85355 3.64877C7.75979 3.555 7.63261 3.50232 7.5 3.50232C7.36739 3.50232 7.24021 3.555 7.14645 3.64877C7.05268 3.74253 7 3.86971 7 4.00232V7.00232H4C3.86739 7.00232 3.74021 7.055 3.64645 7.14877C3.55268 7.24253 3.5 7.36971 3.5 7.50232C3.5 7.63493 3.55268 7.7621 3.64645 7.85587C3.74021 7.94964 3.86739 8.00232 4 8.00232H7V11.0023C7 11.1349 7.05268 11.2621 7.14645 11.3559C7.24021 11.4496 7.36739 11.5023 7.5 11.5023C7.63261 11.5023 7.75979 11.4496 7.85355 11.3559C7.94732 11.2621 8 11.1349 8 11.0023V8.00232H11C11.1326 8.00232 11.2598 7.94964 11.3536 7.85587C11.4473 7.7621 11.5 7.63493 11.5 7.50232C11.5 7.36971 11.4473 7.24253 11.3536 7.14877C11.2598 7.055 11.1326 7.00232 11 7.00232Z" fill="#51B04C" />
                            </svg>
                        </IconButton>
                    </ListItemButton>

                    {/* channels subchannels*/}

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <div className='scrollbar w-full max-h-[200px]' id='style-4'>
                            {channelsData.map((channel) => (
                                <div key={channel.id}>
                                    <ListItemButton
                                        onClick={() => handleClickChannel(channel.id)}
                                        sx={{
                                            width: '90%', ml: 2, my: '2px', px: 1, py: 0, borderRadius: '8px',
                                            backgroundColor: activeChannel === channel.id ? '#E5E5E5' : 'transparent',
                                            '&:hover': {
                                                backgroundColor: '#E5E5E5',
                                            },
                                        }}
                                    >
                                        <ListItemIcon sx={{ mr: '-28px' }}>
                                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.005 2.8125L8.4325 0.645C8.4925 0.344999 8.245 -7.15256e-07 7.8775 -7.15256e-07C7.6 -7.15256e-07 7.375 0.2025 7.3225 0.479999L6.865 2.8125H5.0875L5.515 0.645C5.575 0.344999 5.3275 -7.15256e-07 4.96 -7.15256e-07C4.6825 -7.15256e-07 4.4575 0.2025 4.405 0.479999L3.9475 2.8125H2.26C1.9525 2.8125 1.6975 3.0675 1.6975 3.375C1.6975 3.6825 1.9525 3.9375 2.26 3.9375H3.73L3.2125 6.5625H1.525C1.2175 6.5625 0.9625 6.8175 0.9625 7.125C0.9625 7.4325 1.2175 7.6875 1.525 7.6875H2.995L2.5675 9.855C2.5075 10.155 2.755 10.5 3.1225 10.5C3.4 10.5 3.625 10.2975 3.6775 10.02L4.135 7.6875H5.9125L5.485 9.855C5.425 10.155 5.6725 10.5 6.04 10.5C6.3175 10.5 6.5425 10.2975 6.595 10.02L7.0525 7.6875H8.74C9.0475 7.6875 9.3025 7.4325 9.3025 7.125C9.3025 6.8175 9.0475 6.5625 8.74 6.5625H7.27L7.7875 3.9375H9.475C9.7825 3.9375 10.0375 3.6825 10.0375 3.375C10.0375 3.0675 9.7825 2.8125 9.475 2.8125H8.005ZM4.3525 6.5625L4.87 3.9375H6.6475L6.13 6.5625H4.3525Z" fill="black" fill-opacity="0.8" />
                                            </svg>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography style={{ color: 'black', opacity: 0.8, fontSize: '13px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', }}>
                                                    {channel.name}
                                                </Typography>
                                            }
                                        />

                                    </ListItemButton>

                                    <Collapse in={openChannels[channel.id]} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {channel.subchannels.map((subchannel) => (
                                                <ListItemButton
                                                    key={subchannel.id}
                                                    onClick={() => handleClickSubchannel(subchannel.id)}
                                                    sx={{
                                                        width: '76.8%', ml: 5, my: '2px', px: 1, py: 0, borderRadius: '8px',
                                                        backgroundColor: activeSubchannel === subchannel.id ? '#E5E5E5' : 'transparent',
                                                        '&:hover': {
                                                            backgroundColor: '#E5E5E5',
                                                        },
                                                    }}
                                                >
                                                    <ListItemIcon sx={{ mr: '-28px' }}>
                                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.005 2.8125L8.4325 0.645C8.4925 0.344999 8.245 -7.15256e-07 7.8775 -7.15256e-07C7.6 -7.15256e-07 7.375 0.2025 7.3225 0.479999L6.865 2.8125H5.0875L5.515 0.645C5.575 0.344999 5.3275 -7.15256e-07 4.96 -7.15256e-07C4.6825 -7.15256e-07 4.4575 0.2025 4.405 0.479999L3.9475 2.8125H2.26C1.9525 2.8125 1.6975 3.0675 1.6975 3.375C1.6975 3.6825 1.9525 3.9375 2.26 3.9375H3.73L3.2125 6.5625H1.525C1.2175 6.5625 0.9625 6.8175 0.9625 7.125C0.9625 7.4325 1.2175 7.6875 1.525 7.6875H2.995L2.5675 9.855C2.5075 10.155 2.755 10.5 3.1225 10.5C3.4 10.5 3.625 10.2975 3.6775 10.02L4.135 7.6875H5.9125L5.485 9.855C5.425 10.155 5.6725 10.5 6.04 10.5C6.3175 10.5 6.5425 10.2975 6.595 10.02L7.0525 7.6875H8.74C9.0475 7.6875 9.3025 7.4325 9.3025 7.125C9.3025 6.8175 9.0475 6.5625 8.74 6.5625H7.27L7.7875 3.9375H9.475C9.7825 3.9375 10.0375 3.6825 10.0375 3.375C10.0375 3.0675 9.7825 2.8125 9.475 2.8125H8.005ZM4.3525 6.5625L4.87 3.9375H6.6475L6.13 6.5625H4.3525Z" fill="black" fill-opacity="0.8" />
                                                        </svg>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={
                                                            <Typography style={{ color: 'black', opacity: 0.8, fontSize: '13px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', }}>
                                                                {subchannel.name}
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItemButton>
                                            ))}
                                            <ListItemButton sx={{
                                                width: '78.4%', ml: 5, my: '2px', px: 1, py: 0, borderRadius: '8px',

                                            }}>
                                                <ListItemIcon sx={{ mr: '-28px', }}>
                                                    <AddCircleIcon sx={{ width: "15px", color: "black", ml: 0, px: 0 }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Typography style={{ color: 'black', opacity: 0.8, fontSize: '13px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', }}>
                                                            Add New
                                                        </Typography>
                                                    }
                                                />
                                            </ListItemButton>


                                        </List>
                                    </Collapse>
                                </div>
                            ))}
                        </div>
                    </Collapse>


                    {/*divider 3 */}
                    <ListItemIcon sx={{ width: '100%', mt: 0, p: 0 }}>
                        <svg width="178" height="1" viewBox="0 0 178 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="178" height="1" fill="#D9D9D9" />
                        </svg>
                    </ListItemIcon>

                    {/*dms title*/}
                    <ListItemButton onClick={handleClickDms} sx={{ width: '100%', mt: '2px', mb: '4px', px: 1, py: 0, borderRadius: '8px', }}>
                        <ListItemIcon sx={{ mr: '-28px' }}>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.64 12.8C1.816 12.8 1.992 12.776 2.176 12.68L12.752 7.28C13.112 7.096 13.4 6.808 13.4 6.4C13.4 5.992 13.112 5.704 12.752 5.52L2.176 0.127999C1.992 0.0319996 1.808 -9.53674e-07 1.64 -9.53674e-07C1.064 -9.53674e-07 0.6 0.455999 0.6 1.136V4.68C0.6 5.088 0.904 5.376 1.304 5.384L7.2 5.8C7.528 5.808 7.8 6.072 7.8 6.4C7.8 6.728 7.528 6.992 7.2 7L1.304 7.416C0.904 7.424 0.6 7.712 0.6 8.12V11.672C0.6 12.352 1.064 12.8 1.64 12.8Z" fill="black" fill-opacity="0.6" />
                            </svg>
                        </ListItemIcon>
                        <ListItemText primary={<Typography style={{ color: 'black', opacity: 0.8, fontSize: '13px', fontWeight: '600', fontFamily: 'Poppins, sans-serif', }}>Direct Messages</Typography>} />
                        <IconButton sx={{ p: 0 }}>
                            <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.00231934" width="15" height="15" rx="2" fill="#D0EEDA" />
                                <path d="M11 7.00232H8V4.00232C8 3.86971 7.94732 3.74253 7.85355 3.64877C7.75979 3.555 7.63261 3.50232 7.5 3.50232C7.36739 3.50232 7.24021 3.555 7.14645 3.64877C7.05268 3.74253 7 3.86971 7 4.00232V7.00232H4C3.86739 7.00232 3.74021 7.055 3.64645 7.14877C3.55268 7.24253 3.5 7.36971 3.5 7.50232C3.5 7.63493 3.55268 7.7621 3.64645 7.85587C3.74021 7.94964 3.86739 8.00232 4 8.00232H7V11.0023C7 11.1349 7.05268 11.2621 7.14645 11.3559C7.24021 11.4496 7.36739 11.5023 7.5 11.5023C7.63261 11.5023 7.75979 11.4496 7.85355 11.3559C7.94732 11.2621 8 11.1349 8 11.0023V8.00232H11C11.1326 8.00232 11.2598 7.94964 11.3536 7.85587C11.4473 7.7621 11.5 7.63493 11.5 7.50232C11.5 7.36971 11.4473 7.24253 11.3536 7.14877C11.2598 7.055 11.1326 7.00232 11 7.00232Z" fill="#51B04C" />
                            </svg>
                        </IconButton>
                    </ListItemButton>
                    {/*users*/}
                    <Collapse in={openDms} timeout="auto" unmountOnExit>
                        <div className='scrollbar w-full max-h-[200px]' id='style-4'>
                            {users.map((user) => (
                                <ListItemButton sx={{ width: '80%', ml: '32px', my: '2px', px: 1, py: 0, borderRadius: '8px', }}
                                    key={user.id}>
                                    <ListItemIcon sx={{ mr: '-28px' }}>
                                        <img src={user.profileImage} className='w-[16px] rounded-full' />
                                    </ListItemIcon>
                                    <ListItemText primary={<Typography style={{ color: 'black', opacity: 0.8, fontSize: '12px', fontWeight: '400', fontFamily: 'Poppins, sans-serif', }}>{user.name}</Typography>} />
                                    <IconButton sx={{ p: 0 }}>
                                        <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="3.5" cy="4" r="3.5" fill="#279F54" />
                                        </svg>
                                    </IconButton>
                                </ListItemButton>
                            ))}
                        </div>
                    </Collapse>
                </List>

                    <button
                        className="absolute bottom-4 right-20 text-base bg-[#2F1B5A] font-inter font-semibold text-white rounded-[18px] px-8 py-2 hover:bg-purple-900"
                    >
                        Invite
                    </button>
            </Box >
        </>
    );
}