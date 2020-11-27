import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { Container } from "@material-ui/core";

const PrivateLayout = (props) => {
    return (
        <>
            <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    MyApp
                </Typography>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
            <Container>
                {props.children}
            </Container>
        </>
    )
}

export default PrivateLayout
