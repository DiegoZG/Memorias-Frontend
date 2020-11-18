import React, { useState, useEffect } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid, Toolbar } from '@material-ui/core'
import Posts from './Posts/Posts';
import Form from './Form/Form'
import useStyles from '../styles';
import { useDispatch } from 'react-redux';
import memories from '../images/memorias.png'
import { fetchUser, getPosts} from '../actions/posts';
import { connect } from 'react-redux' 
import Header from './Header'


const Dashboard = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(( ) => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    useEffect(() => {
        fetchUser();
    },[])

    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} postition="static" color="inherit">   
            <Toolbar> 
            <Typography className={classes.heading} variant="h2" align="center"> Memorias  </Typography>
            <img className={classes.image} src={memories} alt="icon" height="60"/>
            </Toolbar>
            </AppBar>
        
            <Grow in>
                <Container>
                    <Grid style={{position:'relative', display: 'flex', marginTop: '150px'}}className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />    
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default Dashboard;