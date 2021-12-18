import { useNavigate } from 'react-router-dom'
import { Box, BaseStyles, Header, Text , Dropdown, FilteredSearch, TextInput } from '@primer/react'

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
            <Header>
                <Header.Item className='lindent'>
                    <Box borderWidth={2} borderRadius={7} borderStyle="solid" pt={1} pb={1} pl={4} pr={4}>
                        <Header.Link to="#">
                            <Text fontSize={[14, 14, 14, 16]}> Sign up </Text>
                        </Header.Link>
                    </Box>
                </Header.Item>

                <Header.Item full border={1} borderStyle="solid">
                    <Header.Link to="#">
                        <Text fontSize={[14, 14, 14, 16]}> Log in </Text>
                    </Header.Link>
                </Header.Item>

                <Header.Item className='rindent'>
                    <TextInput contrast size="large" aria-label="Search" name="search" placeholder="Search..." />
                </Header.Item>
            </Header>
        </BaseStyles>
    )
}

export default Navbar

