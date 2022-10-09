import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Box, Stack, Button, Grid, Typography } from '@mui/material';
import { indigo, grey, cyan } from '@mui/material/colors';

function Home( props ) {
	return (
		<Fragment>
			<Container maxWidth="md" sx={{ textAlign: "center" }}>
				<Stack spacing={4}>
					<Typography variant="h4" component="h1">Landing page</Typography>
					<p style={{marginBottom: 0, fontSize: 22}}>This is the test taking website for Technical assesment for Frontend Developer role</p>
					<p style={{marginBottom: 0, fontSize: 18}}>Once you start, complete the test.</p>
				</Stack>
			</Container>

			<Grid container justifyContent="center" spacing={0} sx={{ gap: 5, mt: 8}} className="app-body__cards">
				<Grid container sx={{ maxWidth: 350, bgcolor: 'grey.100', borderRadius: 1.5}} className="app-body__card" style={{ overflow: "hidden"}} display="flex" direction="column">
					<Typography variant="h2" className="app-body__card__title" sx={{ bgcolor: indigo[900], py: 2, px: 4, fontSize: 20, color: 'white' }}>English</Typography>
					<Box sx={{px: 4, pt: 3, pb: 5}} display="flex" flex="1">
						<Grid container direction="column" sx={{ gap: 5 }} justifyContent="space-between" className='app-body__card__body' >
							<Grid item>
								<p style={{margin: 0, fontSize: 18}}>This test contains 10 multiple choice question on English Grammer. Click the details button to start the test.</p>
							</Grid>
							<Grid item>
								<Link to="/test" style={{display: 'inline-block', textDecoration: 'none'}}>
									<Button variant="outlined" size="large" sx={{ borderColor: grey[500], color: grey[500], ":hover": {borderColor: cyan[700], color: cyan[700] } }} onClick={props.handleMode} id="english">Details</Button>
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Grid>
				<Grid container sx={{ maxWidth: 350, bgcolor: 'grey.100', borderRadius: 1.5}} className="app-body__card" style={{ overflow: "hidden"}} display="flex" direction="column">
					<Typography variant="h2" className="app-body__card__title" sx={{ bgcolor: indigo[900], py: 2, px: 4, fontSize: 20, color: 'white' }}>Mathematics</Typography>
					<Box sx={{px: 4, pt: 3, pb: 5}} display="flex" flex="1">
						<Grid container direction="column" sx={{ gap: 5 }} justifyContent="space-between" className='app-body__card__body' >
							<Grid item>
								<p style={{margin: 0, fontSize: 18}}>This test contains 10 multiple choice question in Maths. Click the details button to start the test. <br/><br/><i>NOTE: Refreshing the page in between the test will reset the test</i></p>
							</Grid>
							<Grid item>
								<Link to="/test" style={{display: 'inline-block', textDecoration: 'none'}}>
									<Button variant="outlined" size="large" sx={{ borderColor: grey[500], color: grey[500], ":hover": {borderColor: cyan[700], color: cyan[700] } }} onClick={props.handleMode} id="math">Details</Button>
								</Link>
							</Grid>
						</Grid>
					</Box>
					
				</Grid>
			</Grid>
		</Fragment>
	)
}

export default Home;
