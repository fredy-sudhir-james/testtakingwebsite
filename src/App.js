import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, teal, cyan } from '@mui/material/colors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Home from './Home';
import Test from './Test';

import './App.css';

const theme = createTheme({
	palette: {
		primary: {
			main: teal[400],
		},
		secondary: {
			main: cyan[700],
		}
	}
});

function App() {
  return (
    <ThemeProvider theme={theme}>
		<header className="app-header">
			<Container maxWidth="lg" sx={{py: 3}}>
				<Grid container direction="row" justifyContent="space-between" alignItems="center">
					<Link to="/" className='app-logo' style={{ textDecoration: 'none', color: teal[400] }}><h1 style={{ "margin": 0 }}>TTW</h1></Link>
					<Button variant="contained" size="large" endIcon={<ArrowForwardIcon />} color="primary">Next</Button>
				</Grid>
			</Container>
		</header>
		<Box sx={{ py: 10, bgcolor: grey[200] }}>
			<Container maxWidth="lg" sx={{ px: { xs: 5, md: 8}, py: {xs: 4, md: 8}, bgcolor: 'white', borderRadius: 2 }}>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/test" element={<Test />}/>
				</Routes>
			</Container>
		</Box>
	</ThemeProvider>
  );
}

export default App;
