import { useState } from "react"
import axios from "axios"
import { BaseStyles, Box, ButtonPrimary, Checkbox, Heading, Link, Text, TextInput } from "@primer/react"

import Config from "../config/index"
import * as s from "../styles/Styles"
import "../styles/Signup.css"
import { useNavigate } from "react-router-dom"

// Signup form - functionality and design to receive user input and register an account
const SignupForm = props => {
    const [form, setForm] = useState({ fname: "", lname: "", email: "", password: "" })
    let navigate = useNavigate()

    // Appends information to form
    const handleForm = e => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    // Submit form information to API
    const submitForm = e => {
        e.preventDefault()
        let formInfo = {
            "name": form.fname + " " + form.lname,
            "email": form.email,
            "password": form.password
        }

        axios.post(`${Config.baseURL}/account/register`, formInfo)
            .then(response => {
                props.onAuthenticated(true, response.data.auth_token)
                navigate("/")
            })
            .catch(err => {
                console.error(err)
                alert("Invalid registration details")
            })
    }

    return (
        <BaseStyles>
            <section className="content">
                <form className="signupcard">
                    <Box m={5} className="formfriends">
                        <Box className="boxsize">
                            <Heading sx={s.subheader}> First name </Heading>
                            <TextInput className="inputfull" name="fname" onChange={handleForm} required />
                        </Box>
                        <Box ml={3} className="boxsize">
                            <Heading sx={s.subheader}> Last name </Heading>
                            <TextInput className="inputfull" name="lname" onChange={handleForm} required />
                        </Box>
                    </Box>
                    <Box m={5}>
                        <Heading sx={s.subheader}> Email </Heading>
                        <TextInput type="email" className="inputfull" name="email" onChange={handleForm} required />
                    </Box>
                    <Box m={5}>
                        <Heading sx={s.subheader}> Password </Heading>
                        <TextInput type="password" className="inputfull" name="password" onChange={handleForm} required />
                    </Box>
                    <Box m={5}>
                        <Checkbox id="checkbox" required />
                        <Text as="label" htmlFor="checkbox" sx={{ fontSize: 2, fontWeight: 'light', marginLeft: 1 }}>
                            I agree to the <Link
                                href="https://www.termsandconditionsgenerator.com/live.php?token=AMu8YEOgcITfI91mXC3PAKwliGNYgw7n"
                                target="_blank"
                                underline>
                                terms and conditions
                            </Link>
                        </Text>
                    </Box>
                    <Box mb={7} className="formfriends">
                        <ButtonPrimary type="submit" className="submit" onClick={submitForm}> Submit </ButtonPrimary>
                    </Box>
                </form>
            </section>
        </BaseStyles>
    )
}

export default SignupForm