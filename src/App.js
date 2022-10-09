import React from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider, Container, Box, Button, Grid, Typography } from '@mui/material';
import { grey, teal } from '@mui/material/colors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Home from './Home';
import Test from './Test';
import Data from './Data';
import Submission from './Submission';

const theme = createTheme();

function App() {
	const [testMode, setTestMode] = React.useState(''); // For selecting the test
	const [counter, setCounter] = React.useState(0); // Counter to get the next question
	const [end, setEnd] = React.useState(false); // Used to set the end of the questions
	const [testData, setTestData] = React.useState([]); // The test "data"
	const history = useNavigate();

	// Triggered when the corresponding test is selected
	const handleTestMode = ( e ) => {
		setTestMode(e.target.id)
		setCounter(0)
		setTestData( Data[e.target.id][0] )
	}

	// Reset the states to initial values
	const setInitialStates = () => {
		setTestMode('')
		setCounter(0)
		setEnd(false)
		setTestData([])
	}

	// Triggered when the next button is clicked
	const nextQuestion = () => {
		if ( ! end ) {
			setCounter( (prevState) => {
				return prevState + 1
			})
		} else {
			// If the questions are complete, proceed to the submission page and reset states.
			history( '/submission' )
			setInitialStates()
		}
	}

	// Update the data set when the counter is updated.
	React.useEffect(() => {
		if ( testMode && ! end ) {
			setTestData( Data[testMode][counter] )
			if( counter + 1 === Data[testMode].length ) {
				setEnd(true);
			}
		}
	}, [counter]);

	return (
		<ThemeProvider theme={theme}>
			<header className="app-header">
				<Container maxWidth="lg" sx={{py: 3}}>
					<Grid container direction="row" justifyContent="space-between" alignItems="center">
						<Link to="/" className='app-logo' style={{ textDecoration: 'none', color: teal[400] }} onClick={setInitialStates}>
							<Typography variant="h4" component="h1">TTW</Typography>
						</Link>
						{ testData && testMode &&
							<Button variant="contained" size="large" endIcon={<ArrowForwardIcon />} sx={{ bgcolor: teal[400], ":hover": {bgcolor: teal[700] } }}  onClick={nextQuestion}>{ end ? 'Submit' : 'Next' }</Button>
						}
					</Grid>
				</Container>
			</header>
			<Box sx={{ py: 10, bgcolor: grey[200] }}>
				<Container maxWidth="lg" sx={{ px: { xs: 5, md: 8}, py: {xs: 4, md: 8}, bgcolor: 'white', borderRadius: 2 }}>
					<Routes>
						<Route path="/" element={<Home handleMode={handleTestMode}/>}/>
						<Route path="/test" element={<Test data={testData}/>}/>
						<Route path="/submission" element={<Submission/>}/>
					</Routes>
				</Container>
			</Box>
		</ThemeProvider>
	);
}

export default App;
