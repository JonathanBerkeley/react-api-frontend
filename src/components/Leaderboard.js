import { BaseStyles, Box, Header, Heading, Text } from "@primer/react"
import axios from "axios"

import "../styles/App.css"

const Leaderboard = props => {
    return (
        <BaseStyles>
            <Heading sx={header}> World Leaderboards </Heading>
            <Box className="lindent rindent" mt={7}>
                <Box backgroundColor="#0b0b0b" full className="center" padding={3} display="flex">
                    <Text sx={push1}> Position </Text>
                    <Text sx={push7}> Username </Text>
                    <Text sx={push12}> Games </Text>
                    <Text sx={push7}> Won </Text>
                    <Text sx={push7}> Win% </Text>
                    <Text sx={push9}> XP </Text>
                    <Text sx={push8}> Damage </Text>
                    <Text sx={push12}> Clan </Text>
                </Box>
            </Box>
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
    textAlign: "center"
}

const push1 = {
    ...subheader,
    marginLeft: "1"
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
    marginLeft: "12"
}

const push10 = {
    ...subheader,
    marginLeft: "10"
}

const push12 = {
    ...subheader,
    marginLeft: "12"
}
//#endregion

export default Leaderboard