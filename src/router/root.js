import React, { Suspense } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import PrivateRoute from './private.router'
import PublicRouter from "./public.router";

import store from "../redux/store";

const Root = () => (
    <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Switch>
                    <PublicRouter
                        path="/"
                        exact
                        component={React.lazy(() => import('../pages/index/index.page'))}
                    />
                    <PublicRouter
                        path="/login"
                        exact
                        component={React.lazy(() => import('../pages/login/login.page'))}
                    />
                    <PrivateRoute
                        path="/home"
                        exact
                        component={React.lazy(() => import('../pages/home/home.page'))}
                    />
                </Switch>
            </BrowserRouter>
        </Suspense>
    </Provider>
)

export default Root
