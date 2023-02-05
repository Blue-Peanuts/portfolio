import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, createTheme, ThemeProvider, Drawer } from '@mui/material'
const theme = createTheme({
    palette: {
        secondary: {
            main: '#ffffff'
        }
    }
});
function App() {
    const [count, setCount] = useState(0)

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Button variant="outlined" color="secondary">
                    I am a button Ia get turned on when u click.
                </Button>
                

            </div>
        </ThemeProvider>
    )
}

export default App
