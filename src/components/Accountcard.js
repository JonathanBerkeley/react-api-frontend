import { BaseStyles, Box, ButtonDanger, Heading, Text } from "@primer/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import CustomSpinner from "../components/CustomSpinner"
import Config from "../config/index"
import * as s from "../styles/Styles"
import "../styles/App.css"
import "../styles/Clan.css"

// Displays formatted details and information about an account
// Authenticated users only
const Accountcard = props => {
    const [account, setAccount] = useState(null)
    let navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token) return null

        // Gets the API to figure out what account this token belongs to
        axios({
            method: "get",
            url: `${Config.baseURL}/account/token`,
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(response => {
                setAccount((response.data) ? response.data.acc : null)
            })
            .catch(console.error)
    })

    if (!account) return <CustomSpinner />

    const deleteAccount = () => {
        // eslint-disable-next-line no-restricted-globals
        let password = prompt("Enter account password to delete")
        if (password) {
            axios({
                method: "delete",
                url: `${Config.baseURL}/account/delete`,
                data: {
                    password: password
                },
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            .then(navigate("/", { replace: true }))
            .catch(console.error)
        }
    }

    return (
        <BaseStyles>
            <section className="content">
                <section className="clancard">
                    <Box m={5} className="underlinefull">
                        <Text sx={s.HeaderStyle}> Name: <span className="rightalign">{account.name}</span> </Text>
                    </Box>
                    <Box m={5} className="underlinefull">
                        <Text sx={s.HeaderStyle}> Email: <span className="rightalign">{account.email}</span> </Text>
                    </Box>

                    <Box mb={7} className="content">
                        <ButtonDanger type="submit" className="submit" onClick={deleteAccount}> Delete account </ButtonDanger>
                    </Box>
                </section>
            </section>
        </BaseStyles>
    )
}

export default Accountcard