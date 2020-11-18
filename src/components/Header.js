import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import { Button, AppBar, Typography, Toolbar, Grid } from '@material-ui/core'
import { connect, useSelector } from 'react-redux'
import memories from '../images/memorias.png'
import useStyles from '../styles';

const Header = () => {
    const classes = useStyles();
    const user = useSelector( state =>  state.auth)
    console.log(user)
    const renderContent = () => {
        switch(user) {
            case null:
                return ;
            case false:
                return <Button href="/auth/google"variant="outlined" > Login </Button>
            default:
                return <Button href="/api/logout"variant="outlined" > Logout </Button>
        }
    }
    

    return (

        
            <AppBar className={classes.appBar} postition="static" color="inherit">   
            <Toolbar> 
            <Typography className={classes.heading} variant="h2" align="center"> Memorias  </Typography>
            <img className={classes.image} src={memories} alt="icon" height="60"/>
            </Toolbar>
            </AppBar>
            
    
    )
}

export default Header