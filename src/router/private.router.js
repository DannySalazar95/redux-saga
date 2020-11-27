import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PrivateLayout from '../layouts/private.layout'

export const PrivateRoute = ({component, ...rest}) => {
    let isAuth = localStorage.getItem('access_token') !== null

    return isAuth ? (
        <PrivateLayout>
            <Route {...rest} component={component} />
        </PrivateLayout>
    ) : (<Redirect to="/login" />)
}


export default PrivateRoute
