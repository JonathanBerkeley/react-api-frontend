import { useState } from "react"
import axios from "axios"

import Config from "../config/index"

const LoginForm = props => {
    const [form, setForm] = useState({email: "", password: ""})

    const handleForm = e => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
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
}