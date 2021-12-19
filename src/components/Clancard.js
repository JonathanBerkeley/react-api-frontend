import { Avatar, BaseStyles, Box, Heading, Text } from "@primer/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link as ReactLink } from "react-router-dom"

import CustomSpinner from "../components/CustomSpinner"
import Config from "../config/index"
import "../styles/App.css"
import "../styles/Clan.css"
import * as s from "../styles/Styles"

// Displays formatted details and information about a clan
const Clancard = () => {
    let { id } = useParams()
    const [clan, setClan] = useState(null)

    useEffect(() => {
        axios.get(`/clan/id/${id}`, Config)
            .then(response => {
                setClan((response.data) ? response.data.result : null)
            })
            .catch(console.error)
    }, [id])

    if (!clan) return <CustomSpinner />

    let dateStruct = ParseDate(clan.created_date)

    // For every player in the database, load their image at the bottom with a link to their profile
    const playerList = clan.players.map(player => {
        return (
            <ReactLink to={`/player/${player}`}>
                <Avatar key={player} className="avatar" 
                    src={`https://avatars.dicebear.com/api/bottts/${player}.svg`} alt="Avatar" size="150" />
            </ReactLink>
        )
    })

    return (
        <BaseStyles>
            <Heading sx={s.HeaderStyle}> {clan.name} </Heading>
            
            <section className="content">
                <section className="clancard">
                    <Box m={5} className="underlinefull">
                        <Text sx={s.HeaderStyle}> XP: <span className="rightalign">{clan.xp.toLocaleString()}</span></Text>
                    </Box>
                    <Box m={5} className="underlinefull">
                        <Text sx={s.HeaderStyle}> Members: <span className="rightalign">{clan.players.length}/4</span></Text>
                    </Box>
                    <Box m={5} className="underlinefull">
                        <Text sx={s.HeaderStyle}> Created: <span className="rightalign">{
                            dateStruct.day + "/" + dateStruct.month + "/" + dateStruct.year
                        }</span></Text>
                    </Box>
                    <Box m={5} mt={10} className="content">
                        {playerList}
                    </Box>
                </section>
            </section>
            
        </BaseStyles>
    )
}

// Format the date out of that ugly ISO date it's stored as
function ParseDate(str) {
    return ({
        "year": str.slice(0, 4),
        "month": str.slice(5, 7),
        "day": str.slice(8, 10)
    })
}

export default Clancard