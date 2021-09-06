import React, { Suspense } from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router';
import Loading from './component/Loading';

const Navigation: React.FC = () => {
    const Result = Loadable({
        loader: () => import('./pages/Result'),
        loading: Loading
    });

    const CreateResult = Loadable({
        loader: () => import('./pages/CreateResult'),
        loading: Loading
    });
    return (
        <Suspense fallback={Loading}>
            <Switch>
                <Route path="/" component={CreateResult} />
            </Switch>
        </Suspense>
    )
}

export default Navigation
