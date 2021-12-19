import { BaseStyles, Heading } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../components/CustomSpinner"

import "../styles/App.css"
import { HeaderStyle } from "../styles/Styles"

const Leaderboard = lazy(() => import("../components/Leaderboard"))

const Home = () => {
    return (
        <BaseStyles>
            <Heading sx={HeaderStyle}> World Leaderboards </Heading>
            <Suspense fallback={<CustomSpinner />}>
                <Leaderboard />
            </Suspense>
        </BaseStyles>
    )
}

export default Home