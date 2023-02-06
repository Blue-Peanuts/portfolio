import { useState } from 'react'
import './App.css'
import { Avatar, Button, createTheme, ThemeProvider, Drawer, Grid, Box } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import PaletteIcon from '@mui/icons-material/Palette'
import SidebarButton from './components/SidebarButton'
import Sidebar from './components/Sidebar'
import TableRowsIcon from '@mui/icons-material/TableRows';
import Topbar from './components/Topbar'

const bgColor = '#0B0C10';
export const accentColor = '#1F2833';
const textColor = '#ffffff';


const theme = createTheme({
    palette: {
        primary: {
            main: textColor
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
                <Box sx={{
                    margin: 'auto',
                    marginTop: '50px',
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'background.main',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <Avatar sx={{
                        marginTop: '50px',
                        width: '500px',
                        height: '500px',
                    }}
                     alt="Nitanon Rachapradit" src="./src/assets/profile.jpg" />
                </Box>
                <Sidebar open={open} toggleSlider={toggleSlider} />
            </div>
        </ThemeProvider>
    )
}

export default App
