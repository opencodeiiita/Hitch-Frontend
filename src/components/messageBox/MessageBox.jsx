import React from 'react';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ChatNotification = ({ username, time, message, userAvatar }) => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: '10px',
        maxWidth: '1000px',
        display: 'flex',
        flexDirection: 'column', // Changed to column layout
        alignItems: 'flex-start', // Adjusted alignment
        margin: '10px',
        borderRaddius : '50px',
      }}
    >
      <Typography variant="subtitle1" color="black">
        {username}
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Avatar alt="User Avatar" src={userAvatar} />
        <div style={{ marginLeft: '10px', flexGrow: 1 }}>
          <Typography>{message}</Typography>
        </div>
        <div style={{ marginLeft: '80px', marginBottom: '50px'}}>
        <Typography variant="caption" color="textSecondary">
          {time}
        </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default ChatNotification;
