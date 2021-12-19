import { BaseStyles, Link, Pagination, Text } from "@primer/react"
import axios from "axios"
import { useEffect, useState } from "react"

import Config from "../config/index"
import CustomSpinner from "./CustomSpinner"
import "../styles/App.css"
import * as s from "../styles/Styles"

// Requests embedded data from api
Config.headers = {
    "response": "embed"
}

// Displays leaderboard of players sorted by XP
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

    // Show spinner while players load
    if (!players) return <CustomSpinner />

    if (playerCount != null) {
        // Number of pages to show at bottom
        var pageCount = ~~(playerCount.playerCount / 15)
        if (pageCount < 1) return null
    }
    else {
        return null
    }

    const playerList = players.result.map((player, index, row) => {
        // Positions of players aren't stored in database, made here instead
        const playerIndex = index + (lastPage * 15) - 14
        const winPercentage = ~~((player.wins / player.games) * 100)

        const playerClan = player.clan ? player.clan.name : "No clan"
        const playerClanID = player.clan ? player.clan._id : ""

        // Only generate link if player is in a clan
        const clanElement = (
            player.clan ?
                <td><Link href={`/clan/${playerClanID}`}><Text sx={s.push13}> {playerClan} </Text></Link></td> :
                <td><Text sx={s.push13}> {playerClan} </Text></td>
        )

        if (index === 0) firstPlayerXP = player.xp
        if (index + 1 === row.length) lastPlayerXP = player.xp

        return (
            <tr key={player._id}>
                <td><Text sx={s.push1}> {playerIndex} </Text></td>
                <td><Link href={`/player/${player._id}`}><Text sx={s.push5}> {player.username} </Text></Link></td>
                <td><Text sx={s.push9}> {player.games} </Text></td>
                <td><Text sx={s.push7}> {player.wins} </Text></td>
                <td><Text sx={s.push7}> {winPercentage}% </Text></td>
                <td><Text sx={s.push8}> {player.xp} </Text></td>
                <td><Text sx={s.push8}> {player.damage_done} </Text></td>
                {clanElement}
            </tr>
        )
    })

    return (
        <BaseStyles>
            <section className="content">
                <table className="table">
                    <tbody>
                        <tr>
                            <th><Text sx={s.push1}> Position </Text></th>
                            <th><Text sx={s.push5}> Username </Text></th>
                            <th><Text sx={s.push9}> Games </Text></th>
                            <th><Text sx={s.push7}> Won </Text></th>
                            <th><Text sx={s.push7}> Win% </Text></th>
                            <th><Text sx={s.push8}> XP </Text></th>
                            <th><Text sx={s.push8}> Damage </Text></th>
                            <th><Text sx={s.push13}> Clan </Text></th>
                        </tr>
                        {playerList}
                    </tbody>
                </table>
            </section>
            <Pagination sx={{ marginTop: 7, marginBottom: 7 }} pageCount={pageCount} currentPage={lastPage} onPageChange={(e, page) => {
                e.preventDefault()
                setPage(page)
                setPlayers(null)

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

export default Leaderboard