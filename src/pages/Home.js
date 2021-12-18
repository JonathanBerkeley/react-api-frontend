import { BaseStyles, Heading, Spinner } from "@primer/react"
import { lazy, Suspense } from "react"

import "../styles/App.css"

const Leaderboard = lazy(() => import("../components/Leaderboard"))

const Home = props => {
    return (
        <BaseStyles>
            <Heading sx={header}> World Leaderboards </Heading>
            <Suspense fallback={fallback}>
                <Leaderboard />
            </Suspense>
        </BaseStyles>

    )
}

const header = {
    fontSize: [28, 32, 36, 38],
    fontWeight: "light",
    marginTop: 7,
    textAlign: "center"
}

const fallback = (
    <section className="leaderboard">
        <Spinner className="center-spin" size="large" />
    </section>
)

export default Home