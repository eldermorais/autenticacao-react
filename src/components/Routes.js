import { Switch } from 'react-router-dom'

import { Home } from '../pages/home'
import { Login } from '../pages/login/index'
import { NotFound } from '../pages/NotFound'
import { Register } from '../pages/register/index'
import PrivateRoute from "../components/PrivateRoute";
import { useAuth } from '../contexts/auth'

export const Routes = () => {

    const {signed} = useAuth()

    return (
            <Switch>
                <PrivateRoute exact path="/login" component={Login} isPrivate={false} signed={signed} />
                <PrivateRoute exact path="/register" component={Register} isPrivate signed={signed} />
                <PrivateRoute  exact path="/" component={Home} isPrivate signed={signed} />
                <PrivateRoute component={NotFound} />
            </Switch>
    )
}
