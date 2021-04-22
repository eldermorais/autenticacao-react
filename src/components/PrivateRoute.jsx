import { Route,Redirect} from 'react-router-dom'
import { useAuth } from '../contexts/auth'

const PrivateRoute = ({isPrivate, signed, ...rest}) => {
    const {loading} = useAuth()
    
    if (loading) {
        return <h1>CARREGANDO</h1>
    }
    
    if (isPrivate && !signed) {
        return <Redirect to="/login" />
    }
    return <Route {...rest}/>
}

export default PrivateRoute
