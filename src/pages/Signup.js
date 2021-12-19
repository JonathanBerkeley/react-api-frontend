import { BaseStyles, Heading } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../components/CustomSpinner"

import "../styles/App.css"
import { HeaderStyle } from "../styles/Styles"

const LoginForm = lazy(() => import("../components/LoginForm"))

const Signup = () => {
    return (
        <BaseStyles>
            <Heading sx={HeaderStyle}> World Leaderboards </Heading>
            <Suspense fallback={<CustomSpinner />}>
                <LoginForm />
            </Suspense>
        </BaseStyles>
    )
}

export default Signup