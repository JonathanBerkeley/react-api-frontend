import { useState } from "react"
import axios from "axios"

const LoginForm = props => {

    const [form, setForm] = useState({email: "", password: ""})

    const handleForm = e => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const submitForm = () => {
        console.log(form)

        axios.post("", {
            email: form.email,
            password: form.password
        })
            .then(response => {
                console.log(response.data.token)
                props.onAuthenticated(true, response.data.token)
            })
            .catch(err => console.log(err))
    }
}