import { BaseStyles, Box, Header, Heading, Pagination, Spinner, Text } from "@primer/react"
import axios from "axios"
import { useEffect, useState } from "react"

import Config from "../config/index"
import "../styles/App.css"

Config.headers = {
    "response": "embed"
}

const Leaderboard = () => {
    const [players, setPlayers] = useState(null)
    const [playerCount, setPlayerCount] = useState(null)
    const [lastPage, setPage] = useState(1)

    let firstPlayerXP
    let lastPlayerXP

    const axiosWrapper = (query) => {
        axios.get(`player/${query}`, Config)
            .then(response => {
                setPlayers(response.data)
            })
            .catch(console.error)
    }

    useEffect(() => {
        axiosWrapper("xp/99999")
        axios.get("player/count", Config)
            .then(response => {
                setPlayerCount(response.data)
            })
            .catch(console.error)
    }, [])

    if (!players) return (
        <section className="leaderboard">
            <Spinner className="center-spin" size="large" />
        </section>
    )

    let pageCount = ~~(playerCount.playerCount / 15) // Number of pages to show at bottom
    if (pageCount < 1) return null

    const playerList = players.result.map((player, index, row) => {
        // Positions of players aren't stored in database, made here instead
        const playerIndex = index + (lastPage * 15) - 14
        const winPercentage = ~~((player.wins / player.games) * 100)

        if (index === 0) firstPlayerXP = player.xp
        if (index + 1 === row.length) lastPlayerXP = player.xp

        return (
            <tr key={player._id}>
                <td><Text sx={push1}> {playerIndex} </Text></td>
                <td><Text sx={push5}> {player.username} </Text></td>
                <td><Text sx={push9}> {player.games} </Text></td>
                <td><Text sx={push7}> {player.wins} </Text></td>
                <td><Text sx={push7}> {winPercentage}% </Text></td>
                <td><Text sx={push8}> {player.xp} </Text></td>
                <td><Text sx={push8}> {player.damage_done} </Text></td>
                <td><Text sx={push13}> {player.clan ? player.clan.name : "No clan"} </Text></td>
            </tr>
        )
    })

    return (
        <BaseStyles>
            <section className="leaderboard">
                <table className="table">
                    <tbody>
                        <tr>
                            <th><Text sx={push1}> Position </Text></th>
                            <th><Text sx={push5}> Username </Text></th>
                            <th><Text sx={push9}> Games </Text></th>
                            <th><Text sx={push7}> Won </Text></th>
                            <th><Text sx={push7}> Win% </Text></th>
                            <th><Text sx={push8}> XP </Text></th>
                            <th><Text sx={push8}> Damage </Text></th>
                            <th><Text sx={push13}> Clan </Text></th>
                        </tr>
                        {playerList}
                    </tbody>
                </table>
            </section>
            <Pagination sx={{ marginTop: 7, marginBottom: 7 }} pageCount={pageCount} currentPage={lastPage} onPageChange={(e, page) => {
                e.preventDefault()
                setPage(page)

                // This is a workaround for the fact I don't have this functionality in my backend
                // It's very limited and will produce inconsistent results
                let seekXP
                if (page === 1) {
                    seekXP = "99999"
                }
                else if (page > lastPage) {
                    let pageDifference = page - lastPage
                    seekXP = lastPlayerXP - pageDifference
                }
                else {
                    let pageDifference = lastPage - page
                    seekXP = firstPlayerXP + pageDifference
                }

                

                axiosWrapper(`xp/${seekXP}`)
            }} hrefBuilder={newURL} />
        </BaseStyles>
    )
}

//#region Utility
const newURL = page => {
    return `${window.location.href}${page}`
}
//#endregion

//#region Styling
const subheader = {
    fontSize: [14, 14, 16, 18],
}

const push1 = {
    ...subheader,
    marginLeft: "1"
}

const push5 = {
    ...subheader,
    marginLeft: "5"
}

const push7 = {
    ...subheader,
    marginLeft: "7"
}

const push8 = {
    ...subheader,
    marginLeft: "8"
}

const push9 = {
    ...subheader,
    marginLeft: "9"
}

const push10 = {
    ...subheader,
    marginLeft: "10"
}

const push11 = {
    ...subheader,
    marginLeft: "11"
}

const push12 = {
    ...subheader,
    marginLeft: "12"
}

const push13 = {
    ...subheader,
    marginLeft: "6",
    marginRight: "6"
}

//#endregion

export default Leaderboard