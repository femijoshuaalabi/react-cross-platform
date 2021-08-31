import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback="Loading...">
                <Switch>
                    <Route exact path="/" component={lazy(() => import(`../pages/LandingPage`))} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default Routes;
