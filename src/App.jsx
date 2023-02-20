import { useState } from 'react'
import './App.css'
import { Slide, Grow, Fade, Avatar, Button, createTheme, ThemeProvider, Drawer, Grid, Box, Collapse } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import PaletteIcon from '@mui/icons-material/Palette'
import SidebarButton from './components/SidebarButton'
import Sidebar from './components/Sidebar'
import TableRowsIcon from '@mui/icons-material/TableRows';
import Topbar from './components/Topbar'
import Profile from './components/Profile'

const bgColor = '#0B0C10';
const averageColor = '#2F3944';
export const accentColor = '#1F2833';
const textColor = '#ffffff';

// make textColor a bit closer to accentColor




// pick the average color between accentColor and white
// const averageColor = '#1F2833';



const theme = createTheme({
    palette: {
        primary: {
            main: textColor,
            accent: averageColor
        },
        background: {
            main: bgColor,
            accent: accentColor
        }
    }
});

function App() {
    const [open, setOpen] = useState(false);
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
                backgroundColor: 'black'
            }}>
                <Topbar toggleSlider={toggleSlider} />
                {/*This is the main content*/}
                <Box sx={{
                    margin: 'auto',
                    marginTop: '50px',
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'background.main',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Profile/>
                </Box>

                <Sidebar open={open} toggleSlider={toggleSlider} />
            </div>
        </ThemeProvider>
    )
}

export default App
