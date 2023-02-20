import React from 'react';
import { Box, Fade, Slide, Grow, Avatar } from '@mui/material';

const Profile = () => {
  return (
    <Box sx={{
        marginTop: '50px',
        display: 'flex',
        flexdirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }}>
      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
          marginTop: '-30px',
      }}>
        <Fade timeout={2000} in={true}>
          <Box sx={{
              fontSize: '120px',
              textAlign: 'left',
          }}>NITANON</Box>
        </Fade>
        <Fade in={true} timeout={600}>
          <div>
            <Slide direction='right' in={true} timeout={600}>
              <Box sx={{
                  width: '105%',
                  marginLeft: '-20px',
                  backgroundColor: 'primary.main',
                  height: '4px',
                  marginTop: '-30px',
              }} />
            </Slide>
          </div>
        </Fade>
        <Fade timeout={1500} in={true}>
          <Box sx={{
              fontSize: '50px',
              textAlign: 'left',
              marginTop: '-30px',
          }}>RACHAPRADIT</Box>
        </Fade>
      </Box>
      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '60px',
          marginTop: '30px',
      }}>
        <Fade in={true} timeout={2000}>
          <Box sx={{
              backgroundColor: 'primary.main',
              borderRadius: '50%',
              border: '4px solid',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
          }}>
            <Grow in={true} timeout={1200}>
              <Avatar sx={{
                  width: '200px',
                  height: '200px',
                  border: '20px solid',
                  borderColor: 'background.main',
              }}
                alt="Nitanon Rachapradit" src="./src/assets/profile.jpg" />
            </Grow>
          </Box>
        </Fade>
        <Box sx={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '16px',
            color: 'primary.main',
        }}>
          <Fade in={true} timeout={2000}>
            <div>
              Also known as "Blue Peanuts"
            </div>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
