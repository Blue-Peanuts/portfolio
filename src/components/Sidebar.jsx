import React from 'react';
import { useState } from 'react'
import { Button, createTheme, ThemeProvider, Drawer, Grid, Box } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import PaletteIcon from '@mui/icons-material/Palette'
import SidebarButton from './SidebarButton';

const Sidebar = (props) => {
    const [open, setOpen] = useState(true);
    const toggleSlider = () => {
        setOpen(!open);
    };
  return (
    <Drawer open={open} anchor="left" onClose={toggleSlider}>
      <Box
        sx={{
          backgroundColor: 'background.main',
          width: 175,
          height: '100vh'
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="text"
          alignItems="stretch"
        >
          <SidebarButton>
            <SportsEsportsIcon sx={{
                paddingRight: 1.5,
            }}/>
            <span>Games</span>
          </SidebarButton>
          <SidebarButton>
            <AudiotrackIcon sx={{
                paddingRight: 1.5,
            }}/>
            <span>Music</span>
          </SidebarButton>
          <SidebarButton>
            <PaletteIcon sx={{
                paddingRight: 1.5,
            }}/>
            <span>Drawings</span>
          </SidebarButton>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default Sidebar;