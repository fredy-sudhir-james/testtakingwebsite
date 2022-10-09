import React from 'react';
import { Link } from "react-router-dom";
import { Container, Typography, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Stack } from '@mui/material';
import { grey, teal } from '@mui/material/colors';

function Test( props ) {
	const len = props.data.length === 0 ? false : true;
	return (
		<div>
		{ len &&
			<Grid container columnSpacing={3} rowSpacing={{ xs: 5, sm: 0}}>
				<Grid item xs={12} sm={6}>
					<p style={{textDecoration: "underline"}}>QUESTION:</p>
					<Typography variant="subtitle1" fontSize={22}>
						{props.data.question}
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6}>
					<div>
						<FormControl sx={{ width: "100%" }}>
						 	<FormLabel id="demo-controlled-radio-buttons-group" sx={{ fontSize: 18, textTransform: "uppercase" }}>Select one</FormLabel>
						 	<RadioGroup sx={{ mt: 2 }} aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group">
								<Stack spacing={2}>
									{ 
										props.data.choices.map((items,index) => {
											return(
												<FormControlLabel key={`question-radio-${index}`} value={items} sx={{ width: "100%", display: "block", margin: 0, border: 2, borderRadius: 2, py: 1, borderColor: grey[300], ":hover": { borderColor: teal[400] } }} control={<Radio name={`question-radio-${index}`} sx={{ color: grey[300], '& .MuiSvgIcon-root': { fontSize: 38 }, ":hover": {color: teal[400] }, '&.Mui-checked': {
													color: teal[600],
												  } }}/>} label={items} />
											)
										})
									}
								</Stack>
						 	</RadioGroup >
						</FormControl>
					</div>
				</Grid>
			</Grid>
		}
		{ ! len &&
			<Container maxWidth="sm" sx={{ textAlign: "center" }}>
				<h2>Oops! Looks like you you refreshed the page in between the test</h2>
				<p>Please click <Link to="/" >here</Link> to go back to the homepage and restart the text.</p>
			</Container>
		}
		</div>
	)
}

export default Test;
