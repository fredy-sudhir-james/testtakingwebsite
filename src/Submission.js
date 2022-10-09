import { Link } from "react-router-dom";
import { Container, Stack, Typography } from '@mui/material';

function Submission() {
	return (
		<Container maxWidth="md" sx={{ textAlign: "center" }}>
			<Stack spacing={4}>
				<Typography variant="h4" component="h1">Congratulations on completing the test.</Typography>
				<p style={{marginBottom: 0, fontSize: 22}}>Please click <Link to="/" >here</Link> to go back to the landing page.</p>
			</Stack>
		</Container>
	)
}

export default Submission;
