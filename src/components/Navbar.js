import { useNavigate } from 'react-router-dom'
import { Box, BaseStyles, Header, Text, TextInput } from '@primer/react'

import '../styles/App.css'

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
        <BaseStyles>
            <Header sx={{ width: "100" }}>

                <Header.Item className='lindent' sx={{ paddingRight: 2 }}>
                    <Header.Link href="/">
                        <img src="/rocket.png" alt="HomeButton" height="40" />
                    </Header.Link>
                </Header.Item>

                <Header.Item>
                    <Box borderWidth={2} borderRadius={7} borderStyle="solid" pt={1} pb={1} pl={4} pr={4}>
                        <Header.Link href="#">
                            <Text fontSize={[14, 14, 14, 16]}> Sign up </Text>
                        </Header.Link>
                    </Box>
                </Header.Item>

                <Header.Item full border={1} borderStyle="solid">
                    <Header.Link href="#">
                        <Text fontSize={[14, 14, 14, 16]}> Log in </Text>
                    </Header.Link>
                </Header.Item>

                <Header.Item className='rindentp'>
                    <TextInput contrast size="large" aria-label="Search" name="search" placeholder="Search..." />
                </Header.Item>
            </Header>
        </BaseStyles>
    )
}

export default Navbar

