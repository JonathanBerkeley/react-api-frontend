import { BaseStyles, Box, Header, Heading, Text } from "@primer/react"
import axios from "axios"

import "../styles/App.css"

const Leaderboard = props => {
    return (
        <BaseStyles>
            <Heading sx={header}> World Leaderboards </Heading>
            <section className="leaderboard">
                <table className="table">
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
                    <tr>
                        <td><Text sx={push1}> 1 </Text></td>
                        <td><Text sx={push5}> Alejandra90 </Text></td>
                        <td><Text sx={push9}> 92 </Text></td>
                        <td><Text sx={push7}> 51 </Text></td>
                        <td><Text sx={push7}> 55.4% </Text></td>
                        <td><Text sx={push8}> 77,845 </Text></td>
                        <td><Text sx={push8}> 672,823 </Text></td>
                        <td><Text sx={push13}> BrandOptimizeMaximize </Text></td>
                    </tr>
                    <tr>
                        <td><Text sx={push1}> 1 </Text></td>
                        <td><Text sx={push5}> Alejandra90 </Text></td>
                        <td><Text sx={push9}> 92 </Text></td>
                        <td><Text sx={push7}> 51 </Text></td>
                        <td><Text sx={push7}> 55.4% </Text></td>
                        <td><Text sx={push8}> 77,845 </Text></td>
                        <td><Text sx={push8}> 672,823 </Text></td>
                        <td><Text sx={push13}> BrandOptimizeMaximize </Text></td>
                    </tr>
                    <tr>
                        <td><Text sx={push1}> 1 </Text></td>
                        <td><Text sx={push5}> Alejandra90 </Text></td>
                        <td><Text sx={push9}> 92 </Text></td>
                        <td><Text sx={push7}> 51 </Text></td>
                        <td><Text sx={push7}> 55.4% </Text></td>
                        <td><Text sx={push8}> 77,845 </Text></td>
                        <td><Text sx={push8}> 672,823 </Text></td>
                        <td><Text sx={push13}> BrandOptimizeMaximize </Text></td>
                    </tr>
                </table>
            </section>
        </BaseStyles>
    )
}

//#region Styling
const header = {
    fontSize: [28, 32, 36, 38],
    fontWeight: "light",
    marginTop: 7,
    textAlign: "center"
}

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