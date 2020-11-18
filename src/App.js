import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form'
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { fetchUser, getPosts} from './actions/posts';
import { connect } from 'react-redux' 
import Header from './components/Header'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'

const App = () => {
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
            <BrowserRouter>
            
            <Route exact path="/" component={Landing} />
            <Route exact path="/posts" component={Dashboard} />
            </BrowserRouter>
           
           
            
        </Container>
    )
}

export default connect(null, fetchUser)(App);