import React from "react";
import { Button, createTheme, ThemeProvider, Drawer, Grid, Box, accordionActionsClasses } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import PaletteIcon from '@mui/icons-material/Palette'
import TableRowsIcon from '@mui/icons-material/TableRows';
import { accentColor } from "../App";

function Topbar({toggleSlider}) {
  return (
    <Box sx={{
        position: 'fixed',
        width: '100vw',
        borderBottom: '2px solid',
        borderBottomColor: 'background.accent',
        backgroundColor: 'background.main',
        display: 'flex',
        alignItems: 'center',
    }}>
        <Button sx={{
            height: '50px',
        }}
            onClick={toggleSlider}
        >
            <TableRowsIcon />
        </Button>
        <span style={{
            marginTop: '4px',
        }}>
            Blue Peanuts
        </span>
    </Box>
  );
}

export default Topbar;