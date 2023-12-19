import React from 'react';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ChatNotification = ({ username, time, message, userAvatar, timepassed }) => {


  return (
    <Paper
      elevation={3}
      style={{
        padding: '10px',
        maxWidth: '600px',
        margin: '10px',
        borderRadius: '15px',
        alignSelf: 'flex-end', 
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center',flexDirection:'row'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt="User Avatar" src={userAvatar} style={{ marginLeft: "15px" ,borderRadius: '10px', width: '40px', height: '40px' }} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column' }}>
          <div style={{display: 'flex', flexDirection: 'row' }}>
            <Typography variant="subtitle1" color="black" style={{ fontWeight: 'bold', marginLeft: '10px' }}>
              {username}
            </Typography>
            <Typography variant="caption" color="textSecondary"  style={{marginLeft: '10px', marginTop: '5px'}}>
              {timepassed} min ago
            </Typography>
            <Typography variant="caption" color="textSecondary" style={{paddingLeft: "300px", marginTop: '5px'}}>
            {time}
          </Typography>
          </div>
          <Typography style={{marginLeft: '10px'}}>{message}</Typography>
        </div>
        </div>
    </Paper>
  );
};

export default ChatNotification;
