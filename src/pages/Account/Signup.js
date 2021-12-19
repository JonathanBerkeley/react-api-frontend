import { BaseStyles, Heading } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../../components/CustomSpinner"

import { HeaderStyle } from "../../styles/Styles"

// Lazy imports, if the loading takes a long time a spinner can be shown instead
const SignupForm = lazy(() => import("../../components/SignupForm"))

const Signup = props => {
    return (
        <BaseStyles>
            <Heading sx={HeaderStyle}> Sign up </Heading>
            <Suspense fallback={<CustomSpinner />}>
                <SignupForm onAuthenticated={props.onAuthenticated} />
            </Suspense>
        </BaseStyles>
    )
}

export default Signup