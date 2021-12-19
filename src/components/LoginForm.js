import { useState } from "react"
import axios from "axios"
import { BaseStyles, Box, ButtonPrimary, Heading, TextInput } from "@primer/react"

import Config from "../config/index"
import * as s from "../styles/Styles"
import "../styles/Signup.css"
import { useNavigate } from "react-router-dom"

// Login form to become authenticated with valid details
const LoginForm = props => {
    const [form, setForm] = useState({ email: "", password: "" })
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
            "email": form.email,
            "password": form.password
        }

        axios.post(`${Config.baseURL}/account/login`, formInfo)
            .then(response => {
                props.onAuthenticated(true, response.data.auth_token)
                navigate("/")
            })
            .catch(err => {
                console.error(err)
                alert("Incorrect information")
            })
    }

    return (
        <BaseStyles>
            <section className="content">
                <form className="signupcard">
                    <Box m={5}>
                        <Heading sx={s.subheader}> Email </Heading>
                        <TextInput type="email" className="inputfull" name="email" onChange={handleForm} required />
                    </Box>
                    <Box m={5}>
                        <Heading sx={s.subheader}> Password </Heading>
                        <TextInput type="password" className="inputfull" name="password" onChange={handleForm} required />
                    </Box>
                    <Box mb={7} className="formfriends">
                        <ButtonPrimary type="submit" className="submit" onClick={submitForm}> Submit </ButtonPrimary>
                    </Box>
                </form>
            </section>
        </BaseStyles>
    )
}

export default LoginForm