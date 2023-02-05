import { useState } from 'react'
import './App.css'
import { Button, createTheme, ThemeProvider, Drawer, Grid, Box } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import PaletteIcon from '@mui/icons-material/Palette'
import SidebarButton from './components/SidebarButton'
import Sidebar from './components/Sidebar'

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        background: {
            main: "#131e2a"
        }
    }
});

function App() {
    return (

        <ThemeProvider theme={theme}>

            <Sidebar/>
        </ThemeProvider>
    )
}

export default App
