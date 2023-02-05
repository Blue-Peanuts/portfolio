import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, createTheme, ThemeProvider, Drawer, Grid, Box } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import PaletteIcon from '@mui/icons-material/Palette'

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
    const [count, setCount] = useState(0)
    const [open, setOpen] = useState(true);
    const toggleSlider = () => {
        setOpen(!open);
    };
    const iconPretextStyle = {
        margin: '0 4px 0 0',
    }
    //create a style const to align the object to the left
    const contentAlignLeft = { justifyContent: 'flex-start' }
    return (

        <ThemeProvider theme={theme}>

            <div className="roboto">
                <Drawer open={open} anchor="left" onClose={toggleSlider}>
                    <Box sx={{
                        backgroundColor: 'background.main',
                        width: 200,
                        height: '100vh'
                    }}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="text"
                            alignItems="stretch"
                        >
                            <Button variant="text" color="primary" style={{ justifyContent: "flex-start" }}>
                                <SportsEsportsIcon style={iconPretextStyle} />
                                <span>Games</span>
                            </Button>
                            <Button variant="text" color="primary">
                                <AudiotrackIcon style={iconPretextStyle} />
                                <span>Music</span>
                            </Button>
                            <Button variant="text" color="primary">
                                <PaletteIcon style={iconPretextStyle} />
                                <span>Drawings</span>
                            </Button>

                        </Grid>
                    </Box>
                </Drawer>
            </div>
        </ThemeProvider>
    )
}

export default App
