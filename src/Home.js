import { Fragment } from "react";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { indigo, grey, teal, cyan } from '@mui/material/colors';

function Home() {
	return (
		<Fragment>
			<Container maxWidth="md" sx={{ textAlign: "center" }}>
				<Stack spacing={4}>
					<Typography variant="h4" component="h1">Landing page</Typography>
					<p style={{marginBottom: 0, fontSize: 22}}>This is the test taking website for Technical assesment on Frontend Developer role</p>
				</Stack>
				
			</Container>

			<Grid container justifyContent="center" spacing={0} sx={{ gap: 5, mt: 8}} className="app-body__cards">
				<Grid item sx={{ maxWidth: 350, bgcolor: 'grey.100', borderRadius: 1.5}} className="app-body__card" style={{ overflow: "hidden"}}>
					<Typography variant="h2" className="app-body__card__title" sx={{ bgcolor: indigo[900], py: 2, px: 4, fontSize: 20, color: 'white' }}>English</Typography>
					<Stack className='app-body__card__body' sx={{px: 4, pt: 3, pb: 5}} spacing={4}>
						<p style={{margin: 0, fontSize: 18}}>This test contains 10 dummy question related to English language. Click the details button to start the test.</p>
						<Link to="/test" style={{display: 'inline-block', textDecoration: 'none'}}>
							<Button variant="outlined" size="large" sx={{ borderColor: grey[500], color: grey[500], ":hover": {borderColor: cyan[700], color: cyan[700] } }} id="english">Details</Button>
						</Link>
					</Stack>
				</Grid>
				<Grid item sx={{ maxWidth: 350, bgcolor: 'grey.100', borderRadius: 1.5}} className="app-body__card" style={{ overflow: "hidden"}}>
					<Typography variant="h2" className="app-body__card__title" sx={{ bgcolor: indigo[900], py: 2, px: 4, fontSize: 20, color: 'white' }}>Mathematics</Typography>
					<Stack className='app-body__card__body' sx={{px: 4, pt: 3, pb: 5}} spacing={4}>
						<p style={{margin: 0, fontSize: 18}}>This test contains 10 dummy question related to Maths. Click the details button to start the test.</p>
						<Link to="/test" style={{display: 'inline-block', textDecoration: 'none'}}>
							<Button variant="outlined" size="large" sx={{ borderColor: grey[500], color: grey[500], ":hover": {borderColor: cyan[700], color: cyan[700] } }} id="math">Details</Button>
						</Link>
					</Stack>
				</Grid>
			</Grid>
		</Fragment>
	)
}

export default Home;
