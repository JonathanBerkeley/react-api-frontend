import { useNavigate } from 'react-router-dom'
import { Box, BaseStyles, Header, Text, TextInput } from '@primer/react'

import '../styles/App.css'
import Config from "../config/index"
import axios from 'axios'

const Navbar = props => {
    let button
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

    if (props.authenticated) {
        button = (
            <Header.Link onClick={logout} href="/">
                <Text fontSize={[14, 14, 14, 16]}> Log out </Text>
            </Header.Link>
        )
    }
    else {
        button = (
            <Header.Link href="/login">
                <Text fontSize={[14, 14, 14, 16]}> Log in </Text>
            </Header.Link>
        )
    }

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
                        <Header.Link href="/signup">
                            <Text fontSize={[14, 14, 14, 16]}> Sign up </Text>
                        </Header.Link>
                    </Box>
                </Header.Item>

                <Header.Item full border={1} borderStyle="solid">
                    {button}
                </Header.Item>

                <Header.Item className='rindentp'>
                    <TextInput contrast size="large" aria-label="Search" name="search" placeholder="Search..." />
                </Header.Item>
            </Header>
        </BaseStyles>
    )
}

export default Navbar

