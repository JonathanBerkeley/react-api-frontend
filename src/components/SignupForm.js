import { useState } from "react"
import axios from "axios"
import { BaseStyles, Box, Button, ButtonPrimary, Checkbox, Heading, Link, Text, TextInput } from "@primer/react"

import Config from "../config/index"
import * as s from "../styles/Styles"
import "../styles/Signup.css"

const SignupForm = props => {
    const [form, setForm] = useState({ email: "", password: "" })

    const handleForm = e => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const submitForm = () => {
        axios.post("", Config)
            .then(response => {
                console.log(response.data.token)
                props.onAuthenticated(true, response.data.token)
            })
            .catch(err => console.log(err))
    }

    return (
        <BaseStyles>
            <section className="content">
                <section className="formgr signupcard">
                    <Box m={5} className="formfriends">
                        <Box className="boxsize">
                            <Heading sx={s.subheader}> First name </Heading>
                            <TextInput className="inputfull" />
                        </Box>
                        <Box ml={3} className="boxsize">
                            <Heading sx={s.subheader}> Last name </Heading>
                            <TextInput className="inputfull" />
                        </Box>
                    </Box>
                    <Box m={5}>
                        <Heading sx={s.subheader}> Email </Heading>
                        <TextInput className="inputfull" />
                    </Box>
                    <Box m={5}>
                        <Heading sx={s.subheader}> Password </Heading>
                        <TextInput className="inputfull" />
                    </Box>
                    <Box m={5}>
                        <Heading sx={s.subheader}> Confirm password </Heading>
                        <TextInput className="inputfull" />
                    </Box>
                    <Box m={5}>
                        <Checkbox id="checkbox" />
                        <Text as="label" htmlFor="checkbox" sx={{ fontSize: 2, fontWeight: 'light', marginLeft: 1 }}>
                            I agree to the <Link 
                                href="https://www.termsandconditionsgenerator.com/live.php?token=AMu8YEOgcITfI91mXC3PAKwliGNYgw7n" 
                                target="_blank"
                                underline>
                                    terms and conditions
                            </Link>
                        </Text>
                    </Box>
                    <Box m={5} className="formfriends">
                        <ButtonPrimary className="submit"> Submit </ButtonPrimary>
                    </Box>

                </section>
            </section>
        </BaseStyles>
    )
}

export default SignupForm