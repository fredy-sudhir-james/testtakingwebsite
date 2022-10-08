import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, teal } from '@mui/material/colors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Home from './Home';
import Test from './Test';

import './App.css';

const theme = createTheme({
	palette: {
		colors: {
			white: '#fff',
			main: teal[400],
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
					<Button variant="contained" size="large" endIcon={<ArrowForwardIcon />}>Next</Button>
				</Grid>
			</Container>
		</header>
		<div className="app-body" style={{ backgroundColor: grey[200] }} >
			<Container maxWidth="lg" sx={{ px: { xs: 5, md: 8}, py: {xs: 4, md: 6}, bgcolor: 'colors.white', borderRadius: 2 }}>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/test" element={<Test />}/>
				</Routes>
			</Container>
		</div>
	</ThemeProvider>
  );
}

export default App;
