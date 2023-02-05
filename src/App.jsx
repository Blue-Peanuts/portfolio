import { useState } from 'react'
import './App.css'
import { Button, createTheme, ThemeProvider, Drawer, Grid, Box } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import PaletteIcon from '@mui/icons-material/Palette'
import SidebarButton from './components/SidebarButton'
import Sidebar from './components/Sidebar'
import TableRowsIcon from '@mui/icons-material/TableRows';

const backgroundColor = '#131e2a';
const textColor = '#ffffff';


const theme = createTheme({
    palette: {
        primary: {
            main: textColor
        },
        background: {
            main: backgroundColor
        }
    }
});

function App() {
    const [open, setOpen] = useState(true);
    const toggleSlider = () => {
        setOpen(!open);
    };
    return (

        <ThemeProvider theme={theme}>
            <div className='App' style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'primary.main',
            }}>

                <Box sx={{
                    position: 'fixed',
                    width: '100vw',
                    borderBottom: '1px solid #ffffff',
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
                    <span>
                        Blue Peanuts
                    </span>
                </Box>
                <Sidebar open={open} toggleSlider={toggleSlider} />
            </div>
        </ThemeProvider>
    )
}

export default App
