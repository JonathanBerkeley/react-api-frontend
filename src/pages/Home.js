import { BaseStyles, Heading } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../components/CustomSpinner"

import { HeaderStyle } from "../styles/Styles"

// Lazy imports, if the loading takes a long time a spinner can be shown instead
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