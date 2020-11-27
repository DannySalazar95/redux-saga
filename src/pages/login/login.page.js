import React from 'react';

import { withFormik } from 'formik';
import * as yup from 'yup';

import {connect} from 'react-redux'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { environment } from '../../enviroments/enviroment'
import { requestAuthAction } from "./redux/login.actions";

import './login.styles.css'


const LoginPage = formikAsProps => {
    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            spacing={0}
            style={{height: '90vh'}}
        >
            <Grid item xs={10} lg={4}>
                <form onSubmit={formikAsProps.handleSubmit}>
                    <TextField
                        fullWidth
                        required
                        type="text"
                        margin="dense"
                        variant="outlined"
                        id="email"
                        name="username"
                        label="Usuario"
                        value={formikAsProps.values.username}
                        onChange={formikAsProps.handleChange}
                        error={formikAsProps.touched.username && Boolean(formikAsProps.errors.username)}
                        helperText={formikAsProps.touched.username && formikAsProps.errors.username}
                    />
                    <TextField
                        fullWidth
                        required
                        type="password"
                        margin="dense"
                        variant="outlined"
                        id="password"
                        name="password"
                        label="Contraseña"
                        value={formikAsProps.values.password}
                        onChange={formikAsProps.handleChange}
                        error={formikAsProps.touched.password && Boolean(formikAsProps.errors.password)}
                        helperText={formikAsProps.touched.password && formikAsProps.errors.password}
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                        disabled={formikAsProps.isSubmitting}
                    >
                        Ingresar
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}

const validationSchema = yup.object({
    username: yup
        .string('Ingresa tu usuario')
        .required('El usuario es requerido'),
    password: yup
        .string('Ingresa tu contraseña')
        .min(8, 'Mínimo 8 caracteres')
        .required('La contraseña es requerida')
})

const mapPropsToValues = () => ({
    username: '',
    password: ''
})

const handleSubmit = (values, { props, setSubmitting }) => {
    props.requestAuthAction({
        url: '/oauth/token',
        body: {
            ...values,
            grant_type: environment.passport_grant_type,
            client_id: environment.passport_client_id,
            client_secret: environment.passport_client_secret,
            scope: ''
        }
    })
}

const LoginForm = withFormik({
    mapPropsToValues,
    validationSchema,
    handleSubmit
})(LoginPage)

//mapStateToProps
const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

//mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        requestAuthAction: (request) => dispatch(requestAuthAction(request))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
