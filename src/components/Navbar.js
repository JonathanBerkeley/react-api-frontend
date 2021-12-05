import { Link, useNavigate } from 'react-router-dom'

const Navbar = props => {

    let logoutButton
    let navigate = useNavigate()

    const logout = () => {
        props.onAuthenticate(false)
        navigate('/', { replace: true })
    }

    if (props.authenticated) {
        logoutButton = (
            <button onClick={logout}>Logout</button>
        )
    }

    return (
        <>
            <Link to="/">Home</Link>
            <Link to=""></Link>
            {logoutButton}
        </>
    )
}

export default Navbar