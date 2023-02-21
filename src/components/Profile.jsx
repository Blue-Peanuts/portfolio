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
            <Box>
                <Box sx={{
                    fontSize: '11vw',
                    textAlign: 'left',
                    backgroundColor: 'primary.main',
                    color: 'background.main',
                    display: 'flex',
                    justifyContent: 'left',
                    verticalAlign: 'middle',
                    alignItems: 'center',
                    width: '70vw',
                    height: '12vw',
                    paddingLeft: '1vw',
                }}>NITANON</Box>
                <Box sx={{
                    fontSize: '7vw',
                    textAlign: 'left',
                    color: 'primary.main',
                    display: 'flex',
                    justifyContent: 'left',
                    verticalAlign: 'middle',
                    alignItems: 'center',
                }}>RACHAPRADIT</Box>
            </Box>
            <Box sx={{
                width: '30vw',
                height: '30vw',
                backgroundColor: 'primary.main',
                backgroundImage: './src/assets/profile.jpg',
            }}></Box>
        </Box>
    );
};

export default Profile;
