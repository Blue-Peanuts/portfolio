import React from 'react';
import { useState } from 'react'
import { Button, createTheme, ThemeProvider, Drawer, Grid, Box } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import PaletteIcon from '@mui/icons-material/Palette'
import SidebarButton from './SidebarButton';

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const toggleSlider = () => {
        setOpen(!open);
    };
  return (
    <Drawer open={open} anchor="left" onClose={toggleSlider}>
      <Box
        sx={{
          backgroundColor: 'background.main',
          width: 200,
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
            <SportsEsportsIcon />
            <span>Games</span>
          </SidebarButton>
          <SidebarButton>
            <AudiotrackIcon />
            <span>Music</span>
          </SidebarButton>
          <SidebarButton>
            <PaletteIcon />
            <span>Drawings</span>
          </SidebarButton>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default Sidebar;