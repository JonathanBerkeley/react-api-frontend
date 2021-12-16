import { Link, useNavigate } from 'react-router-dom'
import { ThemeProvider, Box, BaseStyles, Heading, Header } from '@primer/react'

const Navbar = props => {
    let logoutButton
    // let navigate = useNavigate()

    // const logout = () => {
    //     props.onAuthenticate(false)
    //     navigate('/', { replace: true })
    // }

    // if (props.authenticated) {
    //     logoutButton = (
    //         <button onClick={logout}>Logout</button>
    //     )
    // }

    return (
        <>
            <BaseStyles>
                <Header>
                    <Header.Item>
                        <Header.Link href="#">About</Header.Link>
                    </Header.Item>
                    <Header.Item>
                        <Header.Link href="#">Releases</Header.Link>
                    </Header.Item>
                    <Header.Item>
                        <Header.Link href="#">Team</Header.Link>
                    </Header.Item>
                </Header>
            </BaseStyles>
        </>
    )
}

export default Navbar