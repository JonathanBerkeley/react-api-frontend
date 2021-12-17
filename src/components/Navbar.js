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
                    <Box m="1">
                        <Header.Item>
                            <Header.Link href="#">Sign up</Header.Link>
                        </Header.Item>
                    </Box>

                    <Header.Item>
                        <Header.Link href="#">Log in</Header.Link>
                    </Header.Item>
                </Header>
            </BaseStyles>
        </>
    )
}

export default Navbar