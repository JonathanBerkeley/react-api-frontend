import { BaseStyles, Heading } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../components/CustomSpinner"

import { HeaderStyle } from "../styles/Styles"

const SignupForm = lazy(() => import("../components/SignupForm"))

const Signup = () => {
    return (
        <BaseStyles>
            <Heading sx={HeaderStyle}> Sign up </Heading>
            <Suspense fallback={<CustomSpinner />}>
                <SignupForm />
            </Suspense>
        </BaseStyles>
    )
}

export default Signup