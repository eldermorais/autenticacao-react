import {createContext, useState, useEffect, useContext} from 'react'
import history from '../history';
import api from '../services/api';


const initialState = {
    signed: false,
    loading: true,
    user: {
        name:''
    },
    token: null

}

const AuthContext = createContext(initialState)

function AuthProvider({children}) {

    const [signed, setSigned] = useState(initialState.signed)
    const [token, setToken] = useState(initialState.token)
    const [user, setUser] = useState(initialState.user)
    const [loading, setLoading] = useState(initialState.loading)

    useEffect(() => {
       const storedToken = localStorage.getItem('@auth-react:TOKEN')
       const storedUser = localStorage.getItem('@auth-react:USER')
        

        if (storedToken && storedUser){
            setUser(JSON.parse(storedUser))
            setSigned(true)
            api.defaults.headers.Authorization = `Bearer ${storedToken}`
        }

        setLoading(false)

    }, [])


    async function signIn(values) {

            try {
                setLoading(true)
                const {data} = await api.post('/auth/local', values)

                const apiUser = {
                    name: data.user.username
                }

                api.defaults.headers.Authorization = `Bearer ${data.jwt}`
                localStorage.setItem('@auth-react:TOKEN', data.jwt)
                localStorage.setItem('@auth-react:USER', JSON.stringify(apiUser))

                setToken(data.jwt)
                setUser(apiUser)
                setSigned(true)
                setLoading(false)
                history.push('/')

            } catch (error) {
                
            }
    }
    
    return (
        <AuthContext.Provider value={{ signed: signed, signIn, loading, user, token}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }