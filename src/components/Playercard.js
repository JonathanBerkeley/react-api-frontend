import { Avatar, BaseStyles, Box, Heading, Link, Text } from "@primer/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import CustomSpinner from "../components/CustomSpinner"
import Config from "../config/index"
import "../styles/App.css"
import "../styles/Player.css"
import * as s from "../styles/Styles"

// Player card displays formatted details about a player
const Playercard = () => {
    let { id } = useParams()
    const [player, setPlayer] = useState(null)
    const [clan, setClan] = useState(null)

    useEffect(() => {
        axios.get(`/player/id/${id}`, Config)
            .then(response => {

                if (response.data && response.data.result.clan != null) {
                    axios.get(`/clan/id/${response.data.result.clan}`, Config)
                        .then(response => {
                            console.log(response.data)
                            setClan(response.data)
                        })
                        .catch(console.error)
                }

                setPlayer((response.data) ? response.data.result : null)
            })
            .catch(console.error)
    }, [id])

    if (!player) return <CustomSpinner />

    if (clan) {
        var clanSubheader = (
            <Link href={`/clan/${clan.result._id}`}>
                <Heading sx={s.SubHeaderStyle}> {clan.result.name} </Heading>
            </Link>
        )
    }

    return (
        <BaseStyles>
            <Heading sx={s.HeaderStyle}> {player.username} </Heading>
            {(clanSubheader) ? clanSubheader : ""}

            <section className="content">
                <section className="playercard">

                    <Avatar className="avatar" src={`https://avatars.dicebear.com/api/bottts/${player._id}.svg`} alt={player.username} size="175" />
                    <Box m={5} className="underline">
                        <Text sx={s.HeaderStyle}> XP: <span className="rightalign">{player.xp.toLocaleString()}</span> </Text>
                    </Box>
                    <Box m={5} className="underline">
                        <Text sx={s.HeaderStyle}> Level: <span className="rightalign">{player.level}</span> </Text>
                    </Box>
                    <Box m={5} className="underline">
                        <Text sx={s.HeaderStyle}> Games: <span className="rightalign">{player.games.toLocaleString()}</span> </Text>
                    </Box>
                    <Box m={5} className="underlinefull">
                        <Text sx={s.HeaderStyle}> Wins: <span className="rightalign">{player.wins}</span> </Text>
                    </Box>
                    <Box m={5} className="underlinefull">
                        <Text sx={s.HeaderStyle}> Win%: <span className="rightalign">{~~(player.wins / player.games * 100)}%</span> </Text>
                    </Box>
                    <Box m={5} className="underlinefull">
                        <Text sx={s.HeaderStyle}> Dmg: <span className="rightalign">{
                            (~~(player.damage_done)).toLocaleString()
                        }</span> </Text>
                    </Box>

                </section>
            </section>

        </BaseStyles>
    )
}

export default Playercard