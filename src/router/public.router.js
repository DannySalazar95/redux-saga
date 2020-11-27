import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PublicLayout from '../layouts/public.layout'

export const GuestRoute = ({component, ...rest}) => {
    let isAuth = localStorage.getItem('access_token') !== null

    return isAuth ? (<Redirect to="/home" />) : (
        <PublicLayout>
            <Route {...rest} component={component} />
        </PublicLayout>
    )
}

export default GuestRoute
