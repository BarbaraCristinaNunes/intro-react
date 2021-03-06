import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';


export default function NavBar() {
  return (
    // <div className="App">
    <ThemeProvider theme={myTheme}>
      <Box className="navBar" color="primary" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My first React Project
          </Typography>
          <Button color="inherit">
            <Avatar alt="Remy Sharp" src="public/logo192.png" />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
    // </div>
  );
}

const myTheme = createTheme({
  palette: {
    primary: {
      main: '#c2185b',
    },
  },
});
