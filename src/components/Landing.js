import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useStyles from '../styles';
import Header from './Header'
const API_KEY = process.env.GIF_API_KEY


const Landing = () => {
	const classes = useStyles();
	const [gif, setGif] = useState('');

	useEffect(()=>{
		const fetchGif = async() => {
			const url = `https://api.giphy.com/v1/gifs/random?api_key=JwKmGF1E5G8AApgll2w8OyPX4x9xENg6`
			const { data } = await axios.get(url);
			const imageSrc = data.data.images.downsized_large.url
			setGif(imageSrc)
		}
		fetchGif()
	},[])
    return(
        <div> 
			<Header />
            <Container>
				<Row>
					<Col/>
					<Col md="6">
						<div className="welcome-box">
							<Typography className={classes.heading} variant="h4" align="center">
								Share your best photos!
							</Typography>
							<Typography variant="h5" >
								Memorias lets you upload posts of your most precious memories throughout your life.
							</Typography>
							<h1></h1>
							<Link to="/posts"> <Button variant="outlined"> Get Started </Button></Link>
							<div>
								<h1>  </h1>
								<img  width="500"  height="300" src={"https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/03/cities-travel.gif"} alt="random gif" />
							</div>
						</div>
					</Col>
					<Col/>
				</Row>
			</Container>
        </div>
    )
}

export default Landing