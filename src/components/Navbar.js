import { useNavigate } from 'react-router-dom'
import { Box, BaseStyles, Header, Text, TextInput } from '@primer/react'

import '../styles/App.css'
import Config from "../config/index"
import axios from 'axios'

// Navigation bar at the top of the screen on all pages
const Navbar = props => {
    let logButton
    let signButton
    let navigate = useNavigate()

    const logout = () => {
        props.onAuthenticated(false)

        if (localStorage.getItem("token")) {
            axios({
                method: "post",
                url: `${Config.baseURL}/account/logout`,
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            .then(navigate("/", { replace: true }))
            .catch(console.error)
        }
    }

    // Buttons in Navbar depend on authentication status
    if (props.authenticated) {
        logButton = (
            <Header.Link onClick={logout} href="/">
                <Text fontSize={[14, 14, 14, 16]}> Log out </Text>
            </Header.Link>
        )
        signButton = (
            <Header.Link href="/account">
                <Text fontSize={[14, 14, 14, 16]}> My account </Text>
            </Header.Link>
        )
    }
    else {
        logButton = (
            <Header.Link href="/login">
                <Text fontSize={[14, 14, 14, 16]}> Log in </Text>
            </Header.Link>
        )
        signButton = (
            <Header.Link href="/signup">
                <Text fontSize={[14, 14, 14, 16]}> Sign up </Text>
            </Header.Link>
        )
    }

    return (
        <BaseStyles>
            <Header sx={{ width: "100" }}>

                <Header.Item className='lindent' sx={{ paddingRight: 2 }}>
                    <Header.Link href="/">
                        <img src="/rocket.png" alt="HomelogButton" height="40" />
                    </Header.Link>
                </Header.Item>

                <Header.Item>
                    <Box borderWidth={2} borderRadius={7} borderStyle="solid" pt={1} pb={1} pl={4} pr={4}>
                        {signButton}
                    </Box>
                </Header.Item>

                <Header.Item full border={1} borderStyle="solid">
                    {logButton}
                </Header.Item>

                <Header.Item className='rindentp'>
                    <TextInput contrast size="large" aria-label="Search" name="search" placeholder="Search..." />
                </Header.Item>
            </Header>
        </BaseStyles>
    )
}

export default Navbar

