import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from '@material-ui/core/Button';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    navLink: {
        textDecoration: "none",
        color: "white"
    }
}));

const PublicLayout = (props) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink to="/" className={classes.navLink}>
                            MyApp
                        </NavLink>
                    </Typography>
                    <Button color="inherit">
                        <NavLink to="/login" className={classes.navLink}>
                            Login
                        </NavLink>
                    </Button>
                </Toolbar>
            </AppBar>
            <Container>
                {props.children}
            </Container>
        </>
    )
}

export default PublicLayout
